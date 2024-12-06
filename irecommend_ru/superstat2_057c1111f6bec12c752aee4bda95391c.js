function superstat2_init(conf) {
    (function ($, window, document, global) {
        var superstat = {};
        superstat.url = global.url || null;
        superstat.url_cross = global.url_cross || "";
        superstat.timeout_max_escape = global.timeout_max_escape || null;
        superstat.timeout = global.timeout || null;
        superstat.global = global;
        superstat.tree = {};
        superstat.loger = false;
        superstat.activ = -1;
        superstat.activ_time = 5;
        superstat.ext = {};
        superstat.version = global.version || 1;

        if (superstat.url === null || superstat.timeout_max_escape === null || superstat.timeout === null) {
            return
        }

        superstat.clone = function (obj) {
            var copy;

            if (null == obj || "object" != typeof obj) return obj;

            if (obj instanceof Date) {
                copy = new Date();
                copy.setTime(obj.getTime());
                return copy;
            }

            if (obj instanceof Array) {
                copy = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    copy[i] = superstat.clone(obj[i]);
                }
                return copy;
            }

            if (obj instanceof Object) {
                copy = {};
                for (var attr in obj) {
                    if (obj.hasOwnProperty(attr)) copy[attr] = superstat.clone(obj[attr]);
                }
                return copy;
            }

            throw new Error("Unable to copy obj! Its type isn't supported.");
        };

        superstat.log = function () {
            if (superstat.loger && 'console' in window) {
                console.log.apply(console, arguments);
            }
        };

        superstat.init_activ = function () {
            superstat.activ = 0;
            superstat.add_event_activ(document, 'mousemove');
            superstat.add_event_activ(document, 'touchstart');
            superstat.add_event_activ(document, 'click');
            superstat.add_event_activ(window, 'scroll');

            setInterval(function () {
                superstat.activ++;
            }, 1000);
        };

        superstat.add_event_activ = function (elemenet, event) {
            if (elemenet.addEventListener) {
                elemenet.addEventListener(event, function () {
                    superstat.activ = 0;
                }, false);
            } else if (elemenet.attachEvent) {
                elemenet.attachEvent("on" + event, function () {
                    superstat.activ = 0;
                });
            }
        };

        superstat.is_activ = function () {
            if (superstat.activ === -1) {
                superstat.init_activ();
            }
            return superstat.activ < superstat.activ_time;
        };

        superstat.is_cors = function () {
            if (superstat.url_cross.length > 0) {
                return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
            }
            return false;
        };

        superstat.get_ids = function () {
            return superstat.global.ids[0][0];
        };

        superstat.module_prototype = {
            collect: null,
            extends: null,
            activ: 0,

            is_enabled: function () {
                return true;
            },
            init: function () {

            },
            run: function () {
            },
            stop: function () {
            },
            before_send: function () {
            },
            log: function () {
                superstat.log.apply(superstat, arguments);
            },
            is_activ: function () {
                return superstat.is_activ();
            }
        };

        superstat.collect_factory = (function () {
            var collect_factory = {};
            collect_factory.list = [];
            collect_factory.enable = true;
            collect_factory.activ = 0;
            collect_factory.log_timeout = null;
            collect_factory.last = 1;
            collect_factory.timeout_escape = [0, 1];
            collect_factory.query_data = null;

            collect_factory.collect = {
                ids: [],
                metric: [
                    [],
                    []
                ],

                new_collect: function () {
                    return collect_factory.create_collect([]);
                },

                clone_collect: function () {
                    return collect_factory.create_collect(this.ids);
                },

                addMetric: function (name, metric) {
                    this.metric[collect_factory.activ].push([name, metric]);
                },

                moduleOpen: function (name, metric) {
                    var collect = collect_factory.create_collect(this.ids);
                    collect.ids.push(collect_factory.last + "");
                    collect_factory.last++;
                    collect.metric[collect_factory.activ].push([name, metric, 1]);
                    return collect;
                },

                send_now: function () {
                    collect_factory.send_now();
                },

                set_ids: function (ids) {
                    for (var i = 0; i < ids.length; i++) {
                        this.ids.push(ids[i]);
                    }
                }
            };

            collect_factory.create_collect = function (ids) {
                var collect = superstat.clone(collect_factory.collect);
                collect.set_ids(ids);
                collect_factory.list.push(collect);
                return collect;
            };

            collect_factory.reload = function () {
                collect_factory.list = [];
                collect_factory.last = 1;
            };

            collect_factory.send_now = function () {
                collect_factory.send(true);
            };

            collect_factory.send = function (fast) {
                if (!collect_factory.enable) {
                    return;
                }
                var is_run = superstat.is_activ();
                if (!fast) {
                    if (is_run) {
                        collect_factory.timeout_escape = [0, 1];
                    } else {
                        collect_factory.timeout_escape[0]++;
                        if (collect_factory.timeout_escape[0] > collect_factory.timeout_escape[1]) {
                            is_run = true;
                            collect_factory.timeout_escape[0] = 0;
                            collect_factory.timeout_escape[1]++;
                            if (collect_factory.timeout_escape[1] > superstat.timeout_max_escape) {
                                collect_factory.timeout_escape[1] = superstat.timeout_max_escape;
                            }
                        }
                    }
                }

                if (is_run || fast) {
                    if (collect_factory.query_data === null) {
                        var activ = collect_factory.activ;
                        collect_factory.activ = Math.abs(activ - 1);
                        var n = 0;
                        var data = {};
                        var queue_ids = {};
                        if (typeof window.JSON === 'undefined') {
                            data.nojson = 1;
                        } else {
                            var queue = [];
                            if (!fast) {
                                for (var k in superstat.tree) {
                                    for (var k2 in superstat.tree[k].modules) {
                                        if (superstat.tree[k].modules[k2].activ === 1) {
                                            superstat.tree[k].modules[k2].before_send();
                                        }
                                    }
                                }
                            }

                            for (var i = 0; i < collect_factory.list.length; i++) {
                                if (collect_factory.list[i].metric[activ].length > 0) {
                                    queue.push([collect_factory.list[i].ids, collect_factory.list[i].metric[activ]]);
                                    for (var j = 0; j < collect_factory.list[i].ids.length; j++) {
                                        if (collect_factory.list[i].ids[j].length < 3) {
                                            if (typeof queue_ids[collect_factory.list[i].ids[j]] === 'undefined') {
                                                queue_ids[collect_factory.list[i].ids[j]] = [queue.length - 1, j, ""];
                                            }
                                        }
                                    }
                                    //queue_ids.push(i);
                                    n += collect_factory.list[i].metric[activ].length;
                                    collect_factory.list[i].metric[activ] = [];
                                }
                            }

                            data.q = JSON.stringify(queue);
                        }
                        if (n > 0) {
                            superstat.log(data.q);
                            collect_factory.query_data = {data: data, queue_ids: queue_ids};
                            collect_factory.send_ajax(superstat.is_cors());
                        }
                    }
                    if (fast !== true) {
                        collect_factory.log_timeout = setTimeout(collect_factory.send, superstat.timeout);
                    }
                } else {
                    collect_factory.log_timeout = setTimeout(collect_factory.send, superstat.timeout);
                }
            };

            collect_factory.send_ajax = function (cors) {
                var q = {
                    method: 'POST',
                    data: collect_factory.query_data.data,
                    dataType: 'json',
                    disableProgress: true
                };
                if (cors) {
                    q["url"] = superstat.url_cross;
                    q["crossDomain"] = true;
                } else {
                    q["url"] = superstat.url;
                }
                $.ajax(q).done(function (res) {
                    var ids = res.ids || [];
                    superstat.log("res", res);

                    if (res.reload === 1) {
                        superstat.reload(res.ids);
                        return;
                    }

                    if (res.err === 1) {
                        collect_factory.enable = false;
                    } else {
                        for (var key in collect_factory.query_data.queue_ids) {
                            var i = collect_factory.query_data.queue_ids[key][0];
                            var j = collect_factory.query_data.queue_ids[key][1];
                            if ((typeof ids[i] !== 'undefined') && (typeof ids[i][j] !== 'undefined')) {
                                collect_factory.query_data.queue_ids[key][2] = ids[i][j];
                            }
                        }
                        for (var i = 0; i < collect_factory.list.length; i++) {
                            for (var j = 0; j < collect_factory.list[i].ids.length; j++) {
                                if (collect_factory.list[i].ids[j].length < 3) {
                                    if (typeof collect_factory.query_data.queue_ids[collect_factory.list[i].ids[j]] !== 'undefined') {
                                        collect_factory.list[i].ids[j] = collect_factory.query_data.queue_ids[collect_factory.list[i].ids[j]][2];
                                    }
                                }
                            }
                        }
                    }

                    collect_factory.query_data = null;
                }).fail(function () {
                    if (cors) {
                        superstat.url_cross = "";
                        collect_factory.send_ajax(false);
                    } else {
                        collect_factory.log_timeout = setTimeout(function () {
                            collect_factory.send_ajax(false);
                        }, superstat.timeout);
                    }
                });
            };

            collect_factory.log_timeout = setTimeout(collect_factory.send, superstat.timeout);

            return collect_factory;
        })();

        superstat.reload = function (ids) {
            for (var key in superstat.tree) {
                if ((superstat.tree[key].proto !== null) && (superstat.tree[key].proto.parent.length == 0)) {
                    superstat.tree[key].stop();
                }
            }
            superstat.collect_factory.reload();
            superstat.global.ids = ids;
            for (var key in superstat.tree) {
                if ((superstat.tree[key].proto !== null) && (superstat.tree[key].proto.parent.length == 0)) {
                    superstat.tree[key].resume();
                }
            }
            superstat.collect_factory.log_timeout = setTimeout(superstat.collect_factory.send, superstat.timeout);
        };

        superstat.get_tree_elem = function (name) {
            if (typeof superstat.tree[name] === 'undefined') {
                superstat.tree[name] = {
                    proto: null,
                    childs: [],
                    modules: [],
                    is_run: false,

                    run: function (parent) {
                        var module = superstat.clone(this.proto);
                        superstat.log("clone", module.name, module.extends);

                        module.parent = parent;
                        this.modules.push(module);

                        if (parent === null) {
                            module.collect = superstat.collect_factory.create_collect([]);
                        } else {
                            module.collect = parent.collect;
                        }
                        module.init();
                        module.run();
                        module.activ = 1;
                        this.is_run = true;
                        for (var i = 0; i < this.childs.length; i++) {
                            this.run_child(this.childs[i]);
                        }
                    },

                    add_child: function (child) {
                        if (this.is_run) {
                            this.run_child(child);
                            this.childs.push(child);
                        } else {
                            this.childs.push(child);
                        }
                    },

                    run_child: function (child) {
                        superstat.log(child.proto.name);
                        for (var i = 0; i < this.modules.length; i++) {
                            superstat.log(child.proto.name, this.modules[i].name);
                            child.run(this.modules[i]);
                        }
                    },

                    stop: function () {
                        for (var i = 0; i < this.modules.length; i++) {
                            this.modules[i].activ = 0;
                            this.modules[i].stop();
                            this.modules[i].collect = null;
                        }
                        for (var i = 0; i < this.childs.length; i++) {
                            this.childs[i].stop();
                        }
                    },

                    resume: function () {
                        for (var i = 0; i < this.modules.length; i++) {
                            if (this.modules[i].parent === null) {
                                this.modules[i].collect = superstat.collect_factory.create_collect([]);
                            } else {
                                this.modules[i].collect = this.modules[i].parent.collect;
                            }
                            this.modules[i].run();
                            this.modules[i].activ = 1;
                        }
                        for (var i = 0; i < this.childs.length; i++) {
                            this.childs[i].resume();
                        }
                    }
                }
            }
            return superstat.tree[name];
        }

        superstat.init_extends = function (module) {
            if (typeof module.name === 'undefined') {
                superstat.log("module not have name property");
                return
            }
            if (typeof superstat.ext[module.name] === 'undefined') {
                superstat.ext[module.name] = [module];
            } else {
                for (var k in superstat.ext[module.name][1]) {
                    superstat.init_module(superstat.ext[module.name][1][k]);
                }
            }
        };

        superstat.init_module = function (module) {
            if (typeof module.name === 'undefined' || typeof module.parent === 'undefined') {
                superstat.log("module not have name or parent property");
                return
            }

            if (typeof module.ext === 'string') {
                if (typeof superstat.ext[module.ext] === 'undefined') {
                    superstat.ext[module.ext] = [null, [module]];
                    return
                }
                if (typeof superstat.ext[module.ext][0] === null) {
                    superstat.ext[module.ext][1].push(module);
                    return
                }
                var ext = superstat.ext[module.ext][0];
                for (var k in ext) {
                    if (typeof module[k] === 'undefined') {
                        module[k] = ext[k];
                    }
                }
            }

            for (var k in superstat.module_prototype) {
                if (typeof module[k] === 'undefined') {
                    module[k] = superstat.module_prototype[k];
                }
            }

            var ok = module.is_enabled();

            if (ok) {
                var elem = superstat.get_tree_elem(module.name);
                elem.proto = module;

                if (module.parent.length == 0) {
                    superstat.log("run");
                    elem.run(null);
                } else {
                    for (var p = 0; p < module.parent.length; p++) {
                        var elem2 = superstat.get_tree_elem(module.parent[p]);
                        elem2.add_child(elem);
                    }
                }
            }
        };

        (function(superstat, $, window, document) {
	var module = {
		name: 'activ',
		parent: ['page'],


		is_enabled: function() {
			return true;
		},

		init: function() {
			var my = this;

			this.func_blur = function () {
				my.countertotal_enabled = false;
			};

			this.func_focus = function () {
				my.countertotal_enabled = true;
				my.activeadd();
				//my.log("focus!!!!");
			};

			this.func_activeadd = function() {
				my.activeadd();
			};
		},

		run: function() {
			this.log("run activ", this.collect.ids);

			var my = this;

			this.countertotal_enabled = false;
			this.counteractivity = 0;
			this.countertotal = 0;
			this.starttime = new Date().getTime();
			this.activityflag = false;
			this.lasttime = 0;
			this.collectft = 0;
			this.ftlast = this.starttime;
			

			try {
				window.addEventListener("blur", this.func_blur);
				window.addEventListener("focus", this.func_focus)
			} catch (e) {

			}
			
			$(document).on('mousemove touchstart click', this.func_activeadd);
			$(window).on("scroll", this.func_activeadd);

			this.timer1 = setInterval(function() {
				my.timer();
			}, 150);

			this.timer2 = setInterval(function() {
				my.check_focus();
			}, 300);			
		},

		stop: function() {
			try {
				window.removeEventListener("blur", this.func_blur);
				window.removeEventListener("focus", this.func_focus)
			} catch (e) {

			}

			$(document).off('mousemove touchstart click', this.func_activeadd);
			$(window).off("scroll", this.func_activeadd);

			clearInterval(this.timer1);
			clearInterval(this.timer2);
		},

		before_send: function() {
			var conf = [];
			conf.push(this.counteractivity);
			conf.push(this.countertotal);

			if (this.collectft !== 0) {
				conf.push(Math.round(this.collectft / 1000));
			} else {
				conf.push(null);
			}

			this.collect.addMetric("activ", conf);

			//setTimeout(my.activ, actic_timeout);
			//actic_timeout = actic_timeout + 50;
		},

		check_focus: function() {			
			if (typeof window.document["hasFocus"] !== 'undefined') {
				if (window.document.hasFocus()) {					
					var now = Date.now();
					this.collectft += now - this.ftlast;
					this.ftlast = now;
				}
			}			
		},

		timer: function() {
			if (this.countertotal_enabled) {
				var time = Math.round(((new Date().getTime()) - this.starttime) / 1000);
				if (time > this.lasttime) {
					this.activityflag = false;
					this.lasttime = time;
					this.countertotal++;
				}
			}
		},

		activeadd: function() {			
			this.countertotal_enabled = true;
			if (this.activityflag) {
				return;
			}
			this.activityflag = true;
			this.counteractivity++;
		}
	};

	superstat.init_module(module);
}(superstat, $, window, document));(function(superstat, $, window, document) {
	var module = {
		name: 'brusok',
		parent: ['comment'],

		run: function() {
			this.log("run brusok", this.collect.ids);

			this.brusok();
		},

		brusok: function() {
			var my = this;
			if (typeof window['brocock'] !== 'undefined') {
				var a = window['brocock'];
				a.onDetected(function() {
					my.collect.addMetric("brusok", [1]);
					my.collect.send_now();
				});

				a.onNotDetected(function() {
					my.collect.addMetric("brusok", [0]);
					my.collect.send_now();
				});
			} else {
				my.collect.addMetric("brusok", [-1]);
			}
		}
	};

	superstat.init_module(module);
}(superstat, $, window, document));(function(superstat, $, window, document) {
    var module = {
        name: 'comment',
        parent: ['page'],

        is_enabled: function() {
            var ret = false;
            try {
				if (Drupal.settings.site.type === 'review'){
					ret = true;
				}
			} catch (e) {}            
            return ret;
        }
    };

    superstat.init_module(module);
}(superstat, $, window, document));(function(superstat, $, window, document) {
    var module = {
        name: 'counter',
        parent: ['comment'],

        is_enabled: function() {
            return !(typeof window['ss_nid'] === "undefined");
        },

        run: function() {
            
            //this.collect = this.collect.clone_collect();
            this.collect = this.collect.moduleOpen("counter", [window.ss_nid, Drupal.settings.site.author_uid * 1]);
            this.log("run counter", this.collect.ids);
        }
    };

    superstat.init_module(module);
}(superstat, $, window, document));(function(superstat, $, window, document) {
	var module = {
		name: 'page',
		parent: ['start'],

		run: function() {
			
			var ss_uid;
			try {
			  var arrayLength = Drupal.settings.stats.cookies.length;
			  for (var i = 0; i < arrayLength; i++) {
			    if (Drupal.settings.stats.cookies[i].name == 'ss_uid') {
			      ss_uid = Drupal.settings.stats.cookies[i].value;
			      break;
			    }
			  }


			} catch (e) {}

			if (typeof ss_uid ===  'undefined'){
			  ss_uid = this.gcookie('ss_uid');
			}

			var prod_id, ssid, uid, nid, vid, author, type, ab_var, mobile;
			
			try {
				if (typeof window.page_tag_info !== 'undefined'){
				  if (typeof window.page_tag_info.prod_id !== 'undefined'){
				  	prod_id = window.page_tag_info.prod_id * 1;
				  }
				}
			} catch (e) {}

			try {
				ssid = this.referrerSSID();
			} catch (e) {}

			try {
				uid = Drupal.settings.site.uid * 1;
			} catch (e) {}

			try {
				nid = Drupal.settings.site.nid * 1;
			} catch (e) {}

			try {
				vid = Drupal.settings.site.vid * 1;
			} catch (e) {}

			try {
				author = Drupal.settings.site.author_uid * 1;
			} catch (e) {}

			try {
				ab_var = window.ab_var;
			} catch (e) {
				ab_var = 0;
			}

			try {
				var list_type = {"product": 1, "review": 2, "category": 3, "front": 4, "user": 5, "subs": 6, "srch": 7};
				if (Drupal.settings.site.type in list_type) {
					type = list_type[Drupal.settings.site.type];
				}				
			} catch (e) {}

			mobile = 0;
			try {
				if (Adapt.AdaptEnabled) {
					mobile = 1;
				}				
			} catch (e) {}			

			var conf = [];
			conf.push(ss_uid);
			conf.push(encodeURIComponent(document.URL));
			conf.push(JSON.stringify(this.run_client()));
			conf.push(this.get_ref_s());
			conf.push(this.get_umodr_i());
			conf.push(prod_id);
			conf.push(ssid);
			conf.push(uid);
			conf.push(nid);
			conf.push(vid);
			conf.push(author);
			conf.push(type);
			conf.push(ab_var);
			conf.push(mobile);

			
			this.collect = this.collect.moduleOpen("page", conf);
			this.log("run page", this.collect.ids, ssid);
		},

		referrerSSID: function () {
			var nid = 0;
			var type;
			var state = null;

			try {
				nid = Drupal.settings.site.nid * 1;
				type = Drupal.settings.site.type;
				state = JSON.parse(localStorage.getItem('fullTeasersTracker_'+ superstat.version));
				this.log("referrerSSID", nid, type, state);

				if (state === null) {
					return null;
				}

				if (type === "review") {
					var l = state.length;
					for (var i = (l - 1); i >= 0; i--) {
						for (var key in state[i].list[0]) {
							if (state[i].list[0][key] === nid) {
								return state[i].ssid;
							}
						}
					}
				} 	

				if (type === "product") {
					var l = state.length;
					for (var i = (l - 1); i >= 0; i--) {
						for (var key in state[i].list[1]) {
							if (state[i].list[1][key] === nid) {
								return state[i].ssid;
							}
						}
					}
				}
			} catch (e) {}

			return null;
		},

		gcookie: function(cname) {
			try {
				var name = cname + "=";
				var ca = window.document.cookie.split(';');
				for (var i = 0; i < ca.length; i++) {
					var c = ca[i];
					while (c.charAt(0) == ' ')
						c = c.substring(1);
					if (c.indexOf(name) == 0)
						return c.substring(name.length, c.length);
				}
			} catch (e) {}
			return false;
		},

		run_client: function() {
			var d = {};
			d.clienttime = Date();
			d.referrer = window.document.referrer;

			try{
				d.webdriver_fake = !!Object.getOwnPropertyDescriptor(window.navigator, 'webdriver');
			}catch(e){};
			
			try{
				var protowd = Object.getOwnPropertyDescriptor(Navigator.prototype, 'webdriver');
				d.webdriver_proto_fake = (((typeof protowd) == "undefined") || !protowd.get || (protowd.get.toString().indexOf('webdriver')===-1) ); 
			}catch(e){};

			try {
				var _navigator = {};
				for (var i in window.navigator)
					if (!$.isFunction(_navigator[i])) {
						_navigator[i] = window.navigator[i];
					}
				delete _navigator.plugins;
				delete _navigator.mimeTypes;

				d.navigator = _navigator;

			} catch (e) {

			}

			try {
				var _screen = {};
				for (var i in window.screen)
					_screen[i] = window.screen[i];

				d.screen = _screen;

			} catch (e) {

			}
			return d;
		},

		get_ref_s: function() {
			var ret = "";
			try {
				ret = document.referrer;
			} catch (e) {};
			return ret;
		},

		get_umodr_i: function() {
			var ret = 0;
			try {
				ret = Drupal.settings.umodr.umodr_avg * 10;
			} catch (e) {}
			return ret;
		},
	};

	superstat.init_module(module);
}(superstat, $, window, document));(function(superstat, $, window, document) {
	var module = {
		name: 'radiation',
		parent: ['comment'],

		radiation_oldtime: null,
		radiation_send: null,
		total_length: 0,
		irradiated_length: 0,
		irradiated_old: 0,
		timer1: null,

		run: function() {
			this.log("run radiation", this.collect.ids);

			this.radiation_oldtime = Date.now();
			this.radiation_send = null;
			this.total_length = 0;
			this.irradiated_length = 0;
			this.irradiated_old = 0;
			
			var my = this;
			if ($('.reviewText .description').length !== 0) {
				try {					

					my.setup_volume();
					//var collect_old;

					//my.process();
					this.timer1 = setInterval(function() {
						my.process();
					}, 1000);
				} catch (e) {}
			}
		},

		stop: function() {
			if (this.timer1 !== null) {
				clearInterval(this.timer1);
				this.timer1 = null;
			}
		},

		before_send: function() {
			if (this.radiation_send !== null) {
				this.collect.addMetric("radiation", this.radiation_send);
				//this.log("radiation", this.radiation_send);
				this.radiation_send = null;
			}
		},

		setup_volume: function() {
			var my = this;

			$('.reviewText .description').contents().each(function() {
				if (this.nodeType == 3 || this.nodeType == 1) {
					if (typeof this.__volume === 'undefined') {
						if ($('img:not(.smiley-content)', this).length !== 0) {
							var volume = 20;
						} else {
							var txt = $(this).text();
							var volume = txt.length;
						}

						this.__volume = volume;
						my.total_length += volume;
					}
				}
			});
		},

		process: function() {
			var my = this;

			var rad_per_sec = 20;
			var now = Date.now();
			var radiation = Math.round(((now - my.radiation_oldtime) / 1000 * rad_per_sec));

			my.radiation_oldtime = now;

			$('.reviewText .description').contents().each(function() {

				if (typeof this.__volume === 'undefined') {
					return true;
				}

				if (this.nodeType == 3 || this.nodeType == 1) {

					if (this.nodeType === 1) {
						var start = $(this).offset().top;
						var end = start + $(this).height();
					}

					if (this.nodeType === 3) {
						var node = $(this).parent().get(0);
						var start = $(node).offset().top;
						var end = start + $(node).height();
					}

					// view port height
					var vh = $(window).height();

					// scroll pos
					var sp = $(window).scrollTop();

					//if in view port
					if ((start > sp && end < sp + vh) || (end > sp && start < sp) || (start < sp + vh && start > sp)) {

						//this.__volume -= 1;

						var delt = Math.min(radiation, this.__volume);

						radiation = radiation - delt;
						this.__volume = this.__volume - delt;

						my.irradiated_length += delt;
					}
					if (radiation <= 0) {
						return false;
					}
				}
			});

			if (my.irradiated_old !== my.irradiated_length) {
				my.radiation_send = [my.total_length, my.irradiated_length];				
				my.irradiated_old = my.irradiated_length;
			}
			// var radiation = {
			// 	total: my.total_length,
			// 	irradiated: my.irradiated_length
			// };

			//if ((typeof collect_old !== 'undefined') && collect_old.irradiated != radiation.irradiated) {
				//my.collect.addMetric("radiation", [radiation.total, radiation.irradiated]);
			//	my.radiation_send = radiation;
				
			//}

			//collect_old = radiation;
			//setTimeout(process, 1000);
		}
	};

	superstat.init_module(module);
}(superstat, $, window, document));(function(superstat, $, window, document) {
	var module = {
		name: 'scroll',

		item_prototype: {
			name: 0,
			elem: null,
			n: 0,
			height: 0,
			h: 0,
			wh: 0,
			data: []
		},

		items: [],		

		gaus: {
			a: 1, //дисперсия
			b: 2, //max
			c: 1, //min
			d: 6, //диаметр основания
			r: 1000
		},

		test: function() {
			var a = 1;
			var b = 1;
			var c = 0;
			var x, y;
			for (x = -3.5; x < 3.5; x += 0.2) {
				y = b * Math.exp(-(x * x) / (a)) + c;
				this.log(x, y);
			}
		},		

		before_send: function() {			
			if (this.is_activ()) {
				var w_height = $(window).height();
				var min = w_height / 5;
				var max = 2 * min;
				var rec;
				//this.log('scroll', w_height, max);
				for (var i = 0; i < this.items.length; i++) {
					rec = this.items[i].elem.getBoundingClientRect();
					//this.log('rec', i, rec);
					if (rec.height > 0) {
						//this.log('height', this.items[i].h, rec.height)
						if (this.items[i].h !== rec.height || this.items[i].wh !== w_height) {
							this.items[i].wh = w_height;
							this.items[i].h = rec.height;

							var h = rec.height;
							var n = 1;
							while (h > max) {
								h = h / 2;
								n = n * 2;
							}

							if (this.items[i].n != n) {
								if (this.items[i].n == 0) {
									for (var j = 0; j < n; j++) {
										this.items[i].data.push(0);
									}
								} else {
									var data = [];
									var y = [];
									if (this.items[i].n > n) {
										var x = this.items[i].n / n;
										for (var j = 0; j < n; j++) {
											var sum = 0;
											for (var q = 0; q < x; q++) {
												sum += this.items[i].data[j * x + q];
											}
											data.push(Math.round(sum / x));
										}
									} else {
										var x = n / this.items[i].n;
										for (var j = 0; j < this.items[i].n; j++) {
											for (var q = 0; q < x; q++) {
												data.push(this.items[i].data[j]);
											}
										}
									}
									this.items[i].data = data;
								}
								this.items[i].n = n;
								//this.log('n', i, n);
							}							
							this.items[i].height = h;							
							//this.log('h', i, h);
						}


						if ((rec.bottom > 0) && (rec.top < w_height)) {
							var f = 0;
							var t = this.items[i].data.length;
							if (rec.top < 0) {
								f = Math.floor((0 - rec.top) / this.items[i].height);
							}
							if (rec.bottom > w_height) {
								t -= Math.floor((rec.bottom - w_height) / this.items[i].height) + 1;
							}
							var h2 = this.items[i].height * f + rec.top + this.items[i].height / 2;
							for (var j = f; j < t; j++) {
								this.items[i].data[j] += this.math_coof(h2, w_height);
								h2 += this.items[i].height;
							}
							//this.log('data', i, this.items[i].data);
							//change
							this.collect.addMetric("scroll", [this.items[i].name, JSON.stringify(this.items[i].data)]);
						}
						
					}					
				}				
			}
		},

		math_coof: function(top, max) {
			var x = (top / max) * this.gaus.d - this.gaus.d / 2;
			var y = (this.gaus.b - this.gaus.c) * Math.exp(-(x * x) / (2 * this.gaus.a)) + this.gaus.c;
			//this.log(top, max, y);
			return Math.round(y*this.gaus.r);
		},

		add_elem: function(name, elem) {
			if (typeof elem === 'object') {
				var item = superstat.clone(this.item_prototype);
				item.name = name;
				item.elem = elem;
				this.items.push(item);				
			}
		},

		remote_elems: function() {			
			this.items = [];
		}
	};

	superstat.init_extends(module);
}(superstat, $, window, document));(function(superstat, $, window, document) {
	var module = {
		name: 'start',
		parent: [],

		is_enabled: function() {
			if ((typeof superstat.global.ids === 'object') && (superstat.global.ids instanceof Array) && (superstat.global.ids.length === 1)) {				
				return true;
			}			
			return false;
		},

		run: function() {
			this.collect.set_ids(superstat.global.ids[0]);
		},
	};

	superstat.init_module(module);	
}(superstat, $, window, document));(function (superstat, $, window, document) {
    var module = {
        name: 'teaser2',
        parent: ['page'],

        items1: {},
        items2: {},
        show_item: [[], []],
        mouseenter: false,

        init: function () {
            var me = this;
            Drupal.behaviors.teaser2 = function (context) {
                me.reload_list();
            };
            this.func_mouseenter = function () {
                me.mouseenter = true;
            };
            this.func_mouseleave = function () {
                me.mouseenter = false;
            };

            try {
                $(document).on('mouseenter', this.func_mouseenter);
                $(document).on('mouseleave', this.func_mouseleave);
            } catch (e) {

            }
        },

        is_enabled: function () {
            return true;
        },

        run: function () {
            var me = this;

            this.collect = this.collect.moduleOpen("teaser2", [null, null]);

            me.reload_list();

            this.timer1 = setInterval(function () {
                me.timer();
            }, 1000);
        },

        stop: function () {
            clearInterval(this.timer1);
        },

        reload_list: function () {
            var me = this;
            //$('#home-popular-reviews .teaser-item').addClass('teaser-item-top');
            $('.teaser-item').not('.teaser-item-top').each(function (idx, item) {
                if (('type' in item.dataset) && ('nid' in item.dataset)) {
                    if (item.dataset.type === '1') {
                        if (!(item.dataset.nid in me.items1)) {
                            me.items1[item.dataset.nid] = [this, false];
                        }
                    } else {
                        if (item.dataset.type === '2') {
                            if (!(item.dataset.nid in me.items2)) {
                                me.items2[item.dataset.nid] = [this, false];
                            }
                        }
                    }
                }
            });
        },

        timer: function () {
            var me = this;
            var mas1 = [], mas2 = [];

            for (var key in me.items1) {
                if (!me.items1[key][1]) {
                    if ($(me.items1[key][0]).hasClass("tsr-viewed")) {
                        me.items1[key][1] = true;
                        mas1.push(key * 1);
                        me.show_item[0].push(key * 1);
                    }
                }
            }

            for (var key in me.items2) {
                if (!me.items2[key][1]) {
                    if ($(me.items2[key][0]).hasClass("tsr-viewed")) {
                        me.items2[key][1] = true;
                        mas2.push(key * 1);
                        me.show_item[1].push(key * 1);
                    }
                }
            }

            var ret = [null, null];
            if (mas1.length > 0) {
                ret[0] = JSON.stringify(mas1);
            }
            if (mas2.length > 0) {
                ret[1] = JSON.stringify(mas2);
            }
            if (ret[0] !== null || ret[1] !== null) {
                this.collect.addMetric("teaser2d", ret);
                this.collect.send_now();
            }

            var activ = true;
            try {
                if (!window.document.hasFocus()) {
                    activ = false;
                }
            } catch (e) {
            }

            if (activ || this.mouseenter) {
                var ssid = superstat.get_ids();
                var time_now = Date.now();

                var state = this.readStorageState();
                var state2 = [];

                var ok = false;
                for (var key in state) {
                    if (state[key].ssid !== ssid) {
                        if (time_now - state[key].time < 10000) {
                            state2.push(state[key]);
                        }
                    }
                }

                state2.push({ssid: ssid, time: time_now, list: me.show_item});

                this.writeStorageState(state2);
            }
        },

        readStorageState: function () {
            var state = null;
            try {
                state = JSON.parse(localStorage.getItem('fullTeasersTracker_' + superstat.version));
            } catch (e) {

            }
            return state || [];
        },

        writeStorageState: function (state) {
            try {
                localStorage.setItem('fullTeasersTracker_' + superstat.version, JSON.stringify(state));
            } catch (e) {
            }
        }
    };

    superstat.init_module(module);

}(superstat, $, window, document));(function(superstat, $, window, document) {
	var module = {
		name: 'text_scroll',
		parent: ['comment'],
		ext: 'scroll',

		run: function() {
			var my = this;
			try {
				this.add_elem("text", $('.reviewBlock .description')[0]);
			} catch (e) {}							
		},

		stop: function() {
			this.remote_elems();
		}
	};

	superstat.init_module(module);
}(superstat, $, window, document));(function (superstat, $, window, document) {
    var module = {
        name: 'speed_mouse',
        parent: ['comment'],

        distance: 0,
        lastX: -1,
        lastY: -1,

        deltaN: 0,

        lastDistance: 0,
        lastDeltaN: 0,

        init: function () {
            var me = this;
            try {
                $(document).on('mousemove', function (e) {
                    me.func_mousemove(e);
                });
            } catch (e) {}
        },

        run: function () {
            var me = this;
            var vid;

            try {
                vid = Drupal.settings.site.vid * 1;
            } catch (e) {}

            this.collect = this.collect.moduleOpen("speed_mouse", [vid]);

            this.timerIn = setInterval(function () {
                me.timer();
            }, 60000);
        },

        stop: function () {
            clearInterval(this.timerIn);
            this.distance = 0;
            this.lastX = -1;
            this.lastY = -1;
            this.deltaN = 0;
            this.lastDistance = 0;
            this.lastDeltaN = 0;
        },

        before_send: function() {
            if (this.distance !== this.lastDistance || this.deltaN !== this.lastDeltaN) {
                this.collect.addMetric("speed_mouse_data", [this.deltaN, this.distance]);
            }
            this.lastDistance = this.distance;
            this.lastDeltaN = this.deltaN;
        },

        func_mousemove: function (e) {
            if (this.lastX !== -1 && this.lastY !== -1) {
                this.distance += Math.round(Math.sqrt(Math.pow(Math.abs(this.lastX - e.pageX),2) + Math.pow(Math.abs(this.lastY - e.pageY),2)));
            }
            this.lastX = e.pageX;
            this.lastY = e.pageY;
        },

        timer: function() {
            this.before_send();
            this.lastX = -1;
            this.lastY = -1;
            this.distance = 0;
            this.deltaN++;
        },
    };

    superstat.init_module(module);
}(superstat, $, window, document));(function (superstat, $, window, document) {
  window.sstevents = window.sstevents || [];
 
  window.sstevent = function (key, value) {
    window.sstevents.push([key, value]);
  };

  var module = {
    name: "common_metric",
    parent: ["page"],

    is_enabled: function () {
      return true;
    },

    run: function () {
      var self = this;
      for (var i = 0; i < window.sstevents.length; i++) {
        self.collect.addMetric("json", [JSON.stringify(window.sstevents[i])]);
        delete window.sstevents[i];
      }

      window.sstevent = function (key, value) {
        var payload = [key, value];
        self.collect.addMetric("json", [JSON.stringify(payload)]);
        self.collect.send_now();
      };
    },
  };

  superstat.init_module(module);
})(superstat, $, window, document);


    }($, window, document, conf || {}));
}
