! function(e) {
    e.fn.extend({
        autocomplete: function(t, n) {
            var a = "string" == typeof t;
            return n = e.extend({}, e.Autocompleter.defaults, {
                url: a ? t : null,
                data: a ? null : t,
                delay: a ? e.Autocompleter.defaults.delay : 10,
                max: n && !n.scroll ? 10 : 150
            }, n), n.highlight = n.highlight || function(e) {
                return e
            }, n.formatMatch = n.formatMatch || n.formatItem, this.each(function() {
                new e.Autocompleter(this, n)
            })
        },
        result: function(e) {
            return this.bind("result", e)
        },
        search: function(e) {
            return this.trigger("search", [e])
        },
        flushCache: function() {
            return this.trigger("flushCache")
        },
        setOptions: function(e) {
            return this.trigger("setOptions", [e])
        },
        unautocomplete: function() {
            return this.trigger("unautocomplete")
        }
    }), e.Autocompleter = function(t, n) {
        function a() {
            var a = x.selected();
            if (!a) return !1;
            var r = a.result;
            if (b = r, n.multiple) {
                var o = i(C.val());
                if (o.length > 1) {
                    var l, s = n.multipleSeparator.length,
                        c = e(t).selection().start,
                        f = 0;
                    e.each(o, function(e, t) {
                        return f += t.length, f >= c ? (l = e, !1) : void(f += s)
                    }), o[l] = r, r = o.join(n.multipleSeparator)
                }
                r += n.multipleSeparator
            }
            return r = r.replace(/123/i, ""), C.val(r), u(), C.trigger("result", [a.data, a.value]), !0
        }

        function r(e, t) {
            if (p == g.DEL) return void x.hide();
            var a = C.val();
            (t || a != b) && (b = a, a = o(a), a.length >= n.minChars ? (C.addClass(n.loadingClass), n.matchCase || (a = a.toLowerCase()), f(a, c, u)) : (d(), x.hide()))
        }

        function i(t) {
            return t ? n.multiple ? e.map(t.split(n.multipleSeparator), function(n) {
                return e.trim(t).length ? e.trim(n) : null
            }) : [e.trim(t)] : [""]
        }

        function o(a) {
            if (!n.multiple) return a;
            var r = i(a);
            if (1 == r.length) return r[0];
            var o = e(t).selection().start;
            return r = i(o == a.length ? a : a.replace(a.substring(o), "")), r[r.length - 1]
        }

        function l(a, r) {
            n.autoFill && o(C.val()).toLowerCase() == a.toLowerCase() && p != g.BACKSPACE && (C.val(C.val() + r.substring(o(b).length)), e(t).selection(b.length, b.length + r.length))
        }

        function s() {
            clearTimeout(m), m = setTimeout(u, 200)
        }

        function u() {
            x.visible();
            x.hide(), clearTimeout(m), d(), n.mustMatch && C.search(function(e) {
                if (!e)
                    if (n.multiple) {
                        var t = i(C.val()).slice(0, -1);
                        C.val(t.join(n.multipleSeparator) + (t.length ? n.multipleSeparator : ""))
                    } else C.val(""), C.trigger("result", null)
            })
        }

        function c(e, t) {
            t && t.length && T ? (d(), x.display(t, e), l(e, t[0].value), x.show()) : u()
        }

        function f(a, r, i) {
            n.matchCase || (a = a.toLowerCase());
            var l = w.load(a);
            if (l && l.length) r(a, l);
            else if ("string" == typeof n.url && n.url.length > 0) {
                var s = {
                    timestamp: +new Date
                };
                e.each(n.extraParams, function(e, t) {
                    s[e] = "function" == typeof t ? t() : t
                }), e.ajax({
                    mode: "abort",
                    port: "autocomplete" + t.name,
                    dataType: n.dataType,
                    url: n.url,
                    data: e.extend({
                        q: o(a),
                        limit: n.max
                    }, s),
                    success: function(e) {
                        var t = n.parse && n.parse(e) || h(e);
                        w.add(a, t), r(a, t)
                    }
                })
            } else x.emptyList(), i(a)
        }

        function h(t) {
            for (var a = [], r = t.split("\n"), i = 0; i < r.length; i++) {
                var o = e.trim(r[i]);
                o && (o = o.split("|"), a[a.length] = {
                    data: o,
                    value: o[0],
                    result: n.formatResult && n.formatResult(o, o[0]) || o[0]
                })
            }
            return a
        }

        function d() {
            C.removeClass(n.loadingClass)
        }
        var m, p, v, g = {
                UP: 38,
                DOWN: 40,
                DEL: 46,
                TAB: 9,
                RETURN: 13,
                ESC: 27,
                COMMA: 188,
                PAGEUP: 33,
                PAGEDOWN: 34,
                BACKSPACE: 8
            },
            C = e(t).attr("autocomplete", "off").addClass(n.inputClass),
            b = "",
            w = e.Autocompleter.Cache(n),
            T = 0,
            A = {
                mouseDownOnSelect: !1
            },
            x = e.Autocompleter.Select(n, t, a, A);
        e.browser.opera && e(t.form).bind("submit.autocomplete", function() {
            return v ? (v = !1, !1) : void 0
        }), C.bind((e.browser.opera ? "keypress" : "keydown") + ".autocomplete", function(t) {
            switch (T = 1, p = t.keyCode, t.keyCode) {
                case g.UP:
                    t.preventDefault(), x.visible() ? x.prev() : r(0, !0);
                    break;
                case g.DOWN:
                    t.preventDefault(), x.visible() ? x.next() : r(0, !0);
                    break;
                case g.PAGEUP:
                    t.preventDefault(), x.visible() ? x.pageUp() : r(0, !0);
                    break;
                case g.PAGEDOWN:
                    t.preventDefault(), x.visible() ? x.pageDown() : r(0, !0);
                    break;
                case n.multiple && "," == e.trim(n.multipleSeparator) && g.COMMA:
                case g.TAB:
                case g.RETURN:
                    if (a()) return t.preventDefault(), v = !0, !1;
                    break;
                case g.ESC:
                    x.hide();
                    break;
                default:
                    clearTimeout(m), m = setTimeout(r, n.delay)
            }
        }).focus(function() {
            T++
        }).blur(function() {
            T = 0, A.mouseDownOnSelect || s()
        }).click(function() {
            T++ > 1 && !x.visible() && r(0, !0)
        }).bind("search", function() {
            function t(e, t) {
                var a;
                if (t && t.length)
                    for (var r = 0; r < t.length; r++)
                        if (t[r].result.toLowerCase() == e.toLowerCase()) {
                            a = t[r];
                            break
                        }
                        "function" == typeof n ? n(a) : C.trigger("result", a && [a.data, a.value])
            }
            var n = arguments.length > 1 ? arguments[1] : null;
            e.each(i(C.val()), function(e, n) {
                f(n, t, t)
            })
        }).bind("flushCache", function() {
            w.flush()
        }).bind("setOptions", function() {
            e.extend(n, arguments[1]), "data" in arguments[1] && w.populate()
        }).bind("unautocomplete", function() {
            x.unbind(), C.unbind(), e(t.form).unbind(".autocomplete")
        })
    }, e.Autocompleter.defaults = {
        resultsClass: "ac_results",
        minChars: 1,
        delay: 400,
        matchCase: !1,
        matchSubset: !0,
        matchContains: !1,
        cacheLength: 10,
        max: 100,
        mustMatch: !1,
        extraParams: {},
        selectFirst: !0,
        formatItem: function(e) {
            return e[0]
        },
        formatMatch: null,
        autoFill: !1,
        width: 0,
        multiple: !1,
        multipleSeparator: ", ",
        highlight: function(e, t) {
            var n = e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + t.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "$1"),
                a = n.replace(/123/i, "");
            return a
        },
        scroll: !0,
        scrollHeight: 180
    }, e.Autocompleter.Cache = function(t) {
        function n(e, n) {
            t.matchCase || (e = e.toLowerCase());
            var a = e.indexOf(n);
            return "word" == t.matchContains && (a = e.toLowerCase().search("\\b" + n.toLowerCase())), -1 == a ? !1 : 0 == a || t.matchContains
        }

        function a(e, n) {
            l > t.cacheLength && i(), o[e] || l++, o[e] = n
        }

        function r() {
            if (!t.data) return !1;
            var n = {},
                r = 0;
            t.url || (t.cacheLength = 1), n[""] = [];
            for (var i = 0, o = t.data.length; o > i; i++) {
                var l = t.data[i];
                l = "string" == typeof l ? [l] : l;
                var s = t.formatMatch(l, i + 1, t.data.length);
                if (s !== !1) {
                    var u = s.charAt(0).toLowerCase();
                    n[u] || (n[u] = []);
                    var c = {
                        value: s,
                        data: l,
                        result: t.formatResult && t.formatResult(l) || s
                    };
                    n[u].push(c), r++ < t.max && n[""].push(c)
                }
            }
            e.each(n, function(e, n) {
                t.cacheLength++, a(e, n)
            })
        }

        function i() {
            o = {}, l = 0
        }
        var o = {},
            l = 0;
        return setTimeout(r, 25), {
            flush: i,
            add: a,
            populate: r,
            load: function(a) {
                if (!t.cacheLength || !l) return null;
                if (!t.url && t.matchContains) {
                    var r = [];
                    for (var i in o)
                        if (i.length > 0) {
                            var s = o[i];
                            e.each(s, function(e, t) {
                                n(t.value, a) && r.push(t)
                            })
                        }
                    return r
                }
                if (o[a]) return o[a];
                if (t.matchSubset)
                    for (var u = a.length - 1; u >= t.minChars; u--) {
                        var s = o[a.substr(0, u)];
                        if (s) {
                            var r = [];
                            return e.each(s, function(e, t) {
                                n(t.value, a) && (r[r.length] = t)
                            }), r
                        }
                    }
                return null
            }
        }
    }, e.Autocompleter.Select = function(t, n, a, r) {
        function i() {
            C && (d = e("<div/>").hide().addClass(t.resultsClass).css("position", "absolute").appendTo(document.body), m = e("<ul/>").appendTo(d).mouseover(function(t) {
                o(t).nodeName && "LI" == o(t).nodeName.toUpperCase() && (v = e("li", m).removeClass(p.ACTIVE).index(o(t)), e(o(t)).addClass(p.ACTIVE))
            }).click(function(t) {
                return e(o(t)).addClass(p.ACTIVE), a(), n.focus(), !1
            }).mousedown(function() {
                r.mouseDownOnSelect = !0
            }).mouseup(function() {
                r.mouseDownOnSelect = !1
            }), t.width > 0 && d.css("width", t.width), C = !1)
        }

        function o(e) {
            for (var t = e.target; t && "LI" != t.tagName;) t = t.parentNode;
            return t ? t : []
        }

        function l(e) {
            f.slice(v, v + 1).removeClass(p.ACTIVE), s(e);
            var n = f.slice(v, v + 1).addClass(p.ACTIVE);
            if (t.scroll) {
                var a = 0;
                f.slice(0, v).each(function() {
                    a += this.offsetHeight
                }), a + n[0].offsetHeight - m.scrollTop() > m[0].clientHeight ? m.scrollTop(a + n[0].offsetHeight - m.innerHeight()) : a < m.scrollTop() && m.scrollTop(a)
            }
        }

        function s(e) {
            v += e, 0 > v ? v = f.size() - 1 : v >= f.size() && (v = 0)
        }

        function u(e) {
            return t.max && t.max < e ? t.max : e
        }

        function c() {
            m.empty();
            for (var n = u(h.length), a = 0; n > a; a++)
                if (h[a]) {
                    var r = t.formatItem(h[a].data, a + 1, n, h[a].value, g);
                    if (r !== !1) {
                        var i = e("<li/>").html(t.highlight(r, g)).addClass(a % 2 == 0 ? "ac_even" : "ac_odd").appendTo(m)[0];
                        e.data(i, "ac_data", h[a])
                    }
                }
            f = m.find("li"), t.selectFirst && (f.slice(0, 1).addClass(p.ACTIVE), v = 0), e.fn.bgiframe && m.bgiframe()
        }
        var f, h, d, m, p = {
                ACTIVE: "ac_over"
            },
            v = -1,
            g = "",
            C = !0;
        return {
            display: function(e, t) {
                i(), h = e, g = t, c()
            },
            next: function() {
                l(1)
            },
            prev: function() {
                l(-1)
            },
            pageUp: function() {
                l(0 != v && 0 > v - 8 ? -v : -8)
            },
            pageDown: function() {
                l(v != f.size() - 1 && v + 8 > f.size() ? f.size() - 1 - v : 8)
            },
            hide: function() {
                d && d.hide(), f && f.removeClass(p.ACTIVE), v = -1
            },
            visible: function() {
                return d && d.is(":visible")
            },
            current: function() {
                return this.visible() && (f.filter("." + p.ACTIVE)[0] || t.selectFirst && f[0])
            },
            show: function() {
                var a = e(n).offset();
                if (d.css({
                        //width: "string" == typeof t.width || t.width > 0 ? t.width : e(n).width(),
                        top: a.top + n.offsetHeight,
                        left: a.left
                    }).show(), t.scroll && (m.scrollTop(0), m.css({
                        maxHeight: t.scrollHeight,
                        overflow: "hidden"
                    }), e.browser.msie && "undefined" == typeof document.body.style.maxHeight)) {
                    var r = 0;
                    f.each(function() {
                        r += this.offsetHeight
                    });
                    var i = r > t.scrollHeight;
                    m.css("height", i ? t.scrollHeight : r), i || f.width(m.width() - parseInt(f.css("padding-left")) - parseInt(f.css("padding-right")))
                }
            },
            selected: function() {
                var t = f && f.filter("." + p.ACTIVE).removeClass(p.ACTIVE);
                return t && t.length && e.data(t[0], "ac_data")
            },
            emptyList: function() {
                m && m.empty()
            },
            unbind: function() {
                d && d.remove()
            }
        }
    }, e.fn.selection = function(e, t) {
        if (void 0 !== e) return this.each(function() {
            if (this.createTextRange) {
                var n = this.createTextRange();
                void 0 === t || e == t ? (n.move("character", e), n.select()) : (n.collapse(!0), n.moveStart("character", e), n.moveEnd("character", t), n.select())
            } else this.setSelectionRange ? this.setSelectionRange(e, t) : this.selectionStart && (this.selectionStart = e, this.selectionEnd = t)
        });
        var n = this[0];
        if (n.createTextRange) {
            var a = document.selection.createRange(),
                r = n.value,
                i = "<->",
                o = a.text.length;
            a.text = i;
            var l = n.value.indexOf(i);
            return n.value = r, this.selection(l, l + o), {
                start: l,
                end: l + o
            }
        }
        return void 0 !== n.selectionStart ? {
            start: n.selectionStart,
            end: n.selectionEnd
        } : void 0
    }
}(jQuery);