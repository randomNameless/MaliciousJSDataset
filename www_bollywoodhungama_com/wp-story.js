! function(e) {
    var t = {};
	
    function n(a) {
        if (t[a]) return t[a].exports;
        var i = t[a] = {
            i: a,
            l: !1,
            exports: {}
		};
        return e[a].call(i.exports, i, i.exports, n), i.l = !0, i.exports
	}
    n.m = e, n.c = t, n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
		})
		}, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
			}), Object.defineProperty(e, "__esModule", {
            value: !0
		})
		}, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
			enumerable: !0,
			value: e
		}), 2 & t && "string" != typeof e)
		for (var i in e) n.d(a, i, function(t) {
			return e[t]
		}.bind(null, i));
        return a
		}, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
			} : function() {
            return e
		};
        return n.d(t, "a", t), t
		}, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
	}, n.p = "", n(n.s = 2)
	}([function(e, t) {
		e.exports = jQuery
		}, function(e, t, n) {
		e.exports = (n => {
			const a = function(e) {
                return document.querySelectorAll(e)[0]
			},
            i = function(e, t) {
                return e && e[t] || ""
			},
            s = function(e, t) {
                if (e) {
                    const n = e.length;
                    for (let a = 0; a < n; a++) t(a, e[a])
				}
			},
            o = function(e, t, n) {
                const a = [t.toLowerCase(), "webkit" + t, "MS" + t, "o" + t];
                s(a, (t, a) => {
                    e[a] = n
				})
			},
            r = function(e, t, n) {
                const a = [n.toLowerCase(), "webkit" + n, "MS" + n, "o" + n];
                s(a, (n, a) => {
                    e.addEventListener(a, t, !1)
				})
			},
            l = function(e, t) {
                r(e, t, "AnimationEnd")
			},
            c = function(e, t) {
                e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
			},
            d = function(e, t) {
                const d = this,
				u = function(e, n) {
					const a = function(e) {
						return void 0 !== e
					};
					return n ? a(t[e]) && a(t[e][n]) ? t[e][n] : y[e][n] : a(t[e]) ? t[e] : y[e]
				},
				m = function(e, t) {
					const n = "RequestFullScreen",
					a = "requestFullScreen";
					try {
						t ? (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) && (document.exitFullscreen ? document.exitFullscreen().catch(() => {}) : (document.mozCancelFullScreen || document.mozCancelFullScreen) && document.mozCancelFullScreen().catch(() => {})) : e[a] ? e[a]() : e["ms" + n] ? e["ms" + n]() : e["moz" + n] ? e["moz" + n]() : e["webkit" + n] && e["webkit" + n]()
                        } catch (e) {
						console.warn("[Zuck.js] Can't access fullscreen")
					}
				},
				v = function(e, t, n, i) {
					const s = t > 0 ? 1 : -1,
					r = Math.abs(t) / a("#zuck-modal").offsetWidth * 90 * s;
					if (u("cubeEffect")) {
						const e = 0 === r ? "scale(0.95)" : "scale(0.930,0.930)";
						if (o(a("#zuck-modal-content").style, "Transform", e), r < -90 || r > 90) return !1
					}
					const l = u("cubeEffect") ? `rotateY(${r}deg)` : `translate3d(${t}px, 0, 0)`;
					e && (o(e.style, "TransitionTimingFunction", i), o(e.style, "TransitionDuration", n + "ms"), o(e.style, "Transform", l))
				},
				p = function(e, t, n, a) {
					let i = 0,
					s = 0;
					if (e) {
						if (e.offsetParent)
						do {
							if (i += e.offsetLeft, s += e.offsetTop, e === a) break
						} while (e = e.offsetParent);
						t && (s -= t), n && (i -= n)
					}
					return [i, s]
				};
                "string" == typeof e && (e = document.getElementById(e)), e.id || e.setAttribute("id", "stories-" + Math.random().toString(36).substr(2, 9));
                const f = function(e) {
					e = 1e3 * Number(e);
					const t = new Date(e),
					n = t.getTime();
					let a = ((new Date).getTime() - n) / 1e3;
					const i = u("language", "time"),
					o = [
						[60, " " + i.seconds, 1],
						[120, "1 " + i.minute, ""],
						[3600, " " + i.minutes, 60],
						[7200, "1 " + i.hour, ""],
						[86400, " " + i.hours, 3600],
						[172800, " " + i.yesterday, ""],
						[604800, " " + i.days, 86400]
					];
					let r = 1;
					a < 0 && (a = Math.abs(a), r = 2);
					let l = !1;
					if (s(o, (e, t) => {
						a < t[0] && !l && ("string" == typeof t[2] ? l = t[r] : null !== t && (l = Math.floor(a / t[2]) + t[1]))
					}), l) return l;
					return `${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`
				},
				g = e.id,
				y = {
					rtl: !1,
					skin: "snapgram",
					avatars: !0,
					stories: [],
					backButton: !0,
					backNative: !1,
					paginationArrows: !1,
					previousTap: !0,
					autoFullScreen: !1,
					openEffect: !0,
					cubeEffect: !1,
					list: !1,
					localStorage: !0,
					callbacks: {
						onOpen: function(e, t) {
							t()
						},
						onView: function(e) {},
						onEnd: function(e, t) {
							t()
						},
						onClose: function(e, t) {
							t()
						},
						onNextItem: function(e, t, n) {
							n()
						},
						onNavigateItem: function(e, t, n) {
							n()
						}
					},
					template: {
						timelineItem: e => `\n            <div class="story ${!0===i(e,"seen")?"seen":""}">\n              <a class="item-link" href="${i(e,"link")}">\n                <span class="item-preview">\n                  <img lazy="eager" src="${u("avatars")||!i(e,"currentPreview")?i(e,"photo"):i(e,"currentPreview")}" />\n                </span>\n                <span class="info" itemProp="author" itemScope itemType="http://schema.org/Person">\n                  <strong class="name" itemProp="name">${i(e,"name")}</strong>\n                  <span class="time3">${i(e,"lastUpdatedAgo")}</span>\n                </span>\n              </a>\n              \n              <ul class="items"></ul>\n            </div>`,
						timelineStoryItem(e) {
							const t = ["id", "seen", "src", "link", "linkText", "time", "type", "length", "preview"];
							let n = `\n            href="${i(e,"src")}"\n            data-link="${i(e,"link")}"\n            data-linkText="${i(e,"linkText")}"\n            data-time="${i(e,"time")}"\n            data-type="${i(e,"type")}"\n            data-length="${i(e,"length")}"\n          `;
							for (const a in e) - 1 === t.indexOf(a) && (n += ` data-${a}="${e[a]}"`);
							return `<a ${n}>\n                    <img loading="auto" src="${i(e,"preview")}" />\n                  </a>`
						},
						viewerItem: (e, t) => '<div class="story-viewer">\n                    <div class="head">\n                      <div class="left">\n                        ${u("backButton")?`<a class="back">&lsaquo;</a>`:""}\n\n                        <span class="item-preview">\n                          <img lazy="eager" class="profilePhoto" src="${i(e,"photo")}" />\n                        </span>\n\n                        <div class="info">\n                          <strong class="name">${i(e,"name")}</strong>\n                          <span class="time4">${i(e,"timeAgo")}</span>\n                        </div>\n                      </div>\n\n                      <div class="right">\n                        <span class="time5">${i(t,"timeAgo")}</span>\n                        <span class="loading"></span>\n                        <a class="close" tabIndex="2">&times;</a>\n                      </div>\n                    </div>\n\n                    <div class="slides-pointers">\n                      <div class="wrap"></div>\n                    </div>\n\n                    ${u("paginationArrows")?`<div class="slides-pagination">\n                          <span class="previous">&lsaquo;</span>\n                          <span class="next">&rsaquo;</span>\n                        </div>`:""}\n                  </div>',
						viewerItemPointer: (e, t, n) => `<span \n                    class="${t===e?"active":""} ${!0===i(n,"seen")?"seen":""}"\n                    data-index="${e}" data-item-id="${i(n,"id")}">\n                      <b style="animation-duration:${""===i(n,"length")?"3":i(n,"length")}s"></b>\n                  </span>`,
						viewerItemBody: (e, t, n) => `<div \n                    class="item ${!0===i(n,"seen")?"seen":""} ${t===e?"active":""}"\n                    data-time="${i(n,"time")}" data-type="${i(n,"type")}" data-index="${e}" data-item-id="${i(n,"id")}">\n                    ${"video"===i(n,"type")?`<video class="media" muted webkit-playsinline playsinline preload="auto" src="${i(n,"src")}" ${i(n,"type")}></video>\n                        <b class="tip muted">${u("language","unmute")}</b>`:`<img loading="auto" class="media" src="${i(n,"src")}" ${i(n,"type")} />\n                    `}\n\n                    ${i(n,"link")?`<a class="tip link" href="${i(n,"link")}" rel="noopener" target="_blank">\n                            ${i(n,"linkText")&&""!==i(n,"linkText")?i(n,"linkText"):u("language","visitLink")}\n                          </a>`:""}\n                  </div>`
					},
					language: {
						unmute: "Touch to unmute",
						keyboardTip: "Press space to see next",
						visitLink: "Visit link",
						time: {
							ago: "ago",
							hour: "hour ago",
							hours: "hours ago",
							minute: "minute ago",
							minutes: "minutes ago",
							fromnow: "from now",
							seconds: "seconds ago",
							yesterday: "yesterday",
							tomorrow: "tomorrow",
							days: "days ago"
						}
					}
				},
				h = (() => {
					let e = a("#zuck-modal");
					var t, o;
					e || d.hasModal || (d.hasModal = !0, e = document.createElement("div"), e.id = "zuck-modal", u("cubeEffect") && (e.className = "with-cube"), e.innerHTML = '<div id="zuck-modal-content"></div>', e.style.display = "none", e.setAttribute("tabIndex", "1"), e.onkeyup = ({
						keyCode: e
					}) => {
					const t = e;
					27 === t ? h.close() : 13 !== t && 32 !== t || h.next()
					}, u("openEffect") && e.classList.add("with-effects"), u("rtl") && e.classList.add("rtl"), o = () => {
					e.classList.contains("closed") && (y.innerHTML = "", e.style.display = "none", e.classList.remove("closed"), e.classList.remove("animated"))
					}, (t = e).transitionEndEvent || (t.transitionEndEvent = !0, r(t, o, "TransitionEnd")), document.body.appendChild(e));
					const y = a("#zuck-modal-content"),
					b = function(e) {
						const t = a("#zuck-modal");
						let n = "",
						i = "",
						s = 0;
						const o = a("#zuck-modal-slider-" + g),
						r = {
							previous: a("#zuck-modal .story-viewer.previous"),
							next: a("#zuck-modal .story-viewer.next"),
							viewing: a("#zuck-modal .story-viewer.viewing")
						};
						if ((!r.previous && !e || !r.next && e) && !u("rtl")) return !1;
						e ? (n = "next", i = "previous") : (n = "previous", i = "next");
						u("cubeEffect") ? "previous" === n ? s = t.slideWidth : "next" === n && (s = -1 * t.slideWidth) : s = -1 * p(r[n])[0], v(o, s, 600, null), setTimeout(() => {
							if (u("rtl")) {
								const e = n;
								n = i, i = e
							}
							if ("" !== n && r[n] && "" !== i) {
								const e = r[n].getAttribute("data-story-id");
								d.internalData.currentStory = e;
								const t = a("#zuck-modal .story-viewer." + i);
								t && t.parentNode.removeChild(t), r.viewing && (r.viewing.classList.add("stopped"), r.viewing.classList.add(i), r.viewing.classList.remove("viewing")), r[n] && (r[n].classList.remove("stopped"), r[n].classList.remove(n), r[n].classList.add("viewing"));
								const s = w(n);
								s && I(s, n);
								const c = d.internalData.currentStory;
								let m = a(`#zuck-modal [data-story-id="${c}"]`);
								if (m) {
									m = m.querySelectorAll("[data-index].active");
									const e = m[0].firstElementChild;
									d.data[c].currentItem = parseInt(m[0].getAttribute("data-index"), 10), m[0].innerHTML = `<b style="${e.style.cssText}"></b>`, l(m[0].firstElementChild, () => {
										d.nextItem(!1)
									})
								}
								if (v(o, "0", 0, null), m) {
									const t = a(`#zuck-modal .story-viewer[data-story-id="${e}"]`);
									x(t, [m[0], m[1]], !0)
								}
								u("callbacks", "onView")(d.internalData.currentStory)
							}
						}, 650)
					},
					I = function(e, t, n) {
						const o = a("#zuck-modal-slider-" + g),
						r = i(e, "items");
						e.timeAgo = r && r[0] ? f(i(r[0], "time")) : "";
						let m = "",
						v = "";
						const p = i(e, "id"),
						y = document.createElement("div"),
						b = i(e, "currentItem") || 0;
						if (a(`#zuck-modal .story-viewer[data-story-id="${p}"]`)) return !1;
						y.className = "slides", s(r, (t, n) => {
							n.timeAgo = f(i(n, "time")), b > t && (e.items[t].timeAgo = n.timeAgo, e.items[t].seen = !0, n.seen = !0), v += u("template", "viewerItemPointer")(t, b, n), m += u("template", "viewerItemBody")(t, b, n)
						}), y.innerHTML = m;
						const w = y.querySelector("video"),
						k = function(e) {
							e.muted ? L.classList.add("muted") : L.classList.remove("muted")
						};
						w && (w.onwaiting = e => {
							w.paused && (L.classList.add("paused"), L.classList.add("loading"))
							}, w.onplay = () => {
							k(w), L.classList.remove("stopped"), L.classList.remove("paused"), L.classList.remove("loading")
							}, w.onload = w.onplaying = w.oncanplay = () => {
							k(w), L.classList.remove("loading")
							}, w.onvolumechange = () => {
							k(w)
						});
						const $ = document.createElement("div");
						$.innerHTML = u("template", "viewerItem")(e, b);
						const L = $.firstElementChild;
						L.className = `story-viewer muted ${t} ${n?"":"stopped"} ${u("backButton")?"with-back-button":""}`, L.setAttribute("data-story-id", p), L.querySelector(".slides-pointers .wrap").innerHTML = v, s(L.querySelectorAll(".close, .back"), (e, t) => {
							t.onclick = e => {
								e.preventDefault(), h.close()
							}
							}), L.appendChild(y), "viewing" === t && x(L, L.querySelectorAll(`[data-index="${b}"].active`), !1), s(L.querySelectorAll(".slides-pointers [data-index] > b"), (e, t) => {
							l(t, () => {
								d.nextItem(!1)
							})
						}), "previous" === t ? c(o, L) : o.appendChild(L)
					};
					return {
						show(e, t) {
							const i = a("#zuck-modal");
							u("callbacks", "onOpen")(e, (function() {
								y.innerHTML = `<div id="zuck-modal-slider-${g}" class="slider"></div>`;
								const t = d.data[e],
								s = t.currentItem || 0;
								! function(e) {
									const t = a("#zuck-modal"),
									i = e;
									let s = {},
									o = null,
									r = null,
									l = null,
									c = null,
									m = null;
									const f = function(e) {
										const n = a("#zuck-modal .viewing");
										if ("A" === e.target.nodeName) return;
										const d = e.touches ? e.touches[0] : e,
										u = p(a("#zuck-modal .story-viewer.viewing"));
										t.slideWidth = a("#zuck-modal .story-viewer").offsetWidth, t.slideHeight = a("#zuck-modal .story-viewer").offsetHeight, s = {
											x: u[0],
											y: u[1]
										};
										const v = d.clientX,
										f = d.clientY;
										o = {
											x: v,
											y: f,
											time: Date.now(),
											valid: !0
											}, f < 80 || f > t.slideHeight - 80 ? o.valid = !1 : (e.preventDefault(), r = void 0, l = {}, i.addEventListener("mousemove", g), i.addEventListener("mouseup", y), i.addEventListener("mouseleave", y), i.addEventListener("touchmove", g), i.addEventListener("touchend", y), n && n.classList.add("paused"), $(), c = setTimeout(() => {
												n.classList.add("longPress")
                                                }, 600), m = setTimeout(() => {
												clearInterval(m), m = !1
											}, 250))
									},
									g = function(e) {
										const t = e.touches ? e.touches[0] : e,
										n = t.clientX,
										a = t.clientY;
										o && o.valid && (l = {
											x: n - o.x,
											y: a - o.y
										}, void 0 === r && (r = !!(r || Math.abs(l.x) < Math.abs(l.y))), !r && o && (e.preventDefault(), v(i, s.x + l.x, 0, null)))
									},
									y = function(e) {
										const p = a("#zuck-modal .viewing"),
										f = o,
										h = o ? Date.now() - o.time : void 0,
										w = Number(h) < 300 && Math.abs(l.x) > 25 || Math.abs(l.x) > t.slideWidth / 3,
										k = l.x < 0,
										$ = a(k ? "#zuck-modal .story-viewer.next" : "#zuck-modal .story-viewer.previous"),
										S = k && !$ || !k && !$;
										if (o && !o.valid);
										else {
											l && (r || (w && !S ? b(k) : v(i, s.x, 300)), o = void 0, i.removeEventListener("mousemove", g), i.removeEventListener("mouseup", y), i.removeEventListener("mouseleave", y), i.removeEventListener("touchmove", g), i.removeEventListener("touchend", y));
											const t = d.internalData.currentVideoElement;
											if (c && clearInterval(c), p && (x(p, p.querySelectorAll(".active"), !1), p.classList.remove("longPress"), p.classList.remove("paused")), m) {
												clearInterval(m), m = !1;
												const i = function() {
													k || (f.x > n.screen.availWidth / 3 || !u("previousTap") ? u("rtl") ? d.navigateItem("previous", e) : d.navigateItem("next", e) : u("rtl") ? d.navigateItem("next", e) : d.navigateItem("previous", e))
												},
												s = a("#zuck-modal .viewing");
												if (!s || !t) return i(), !1;
												s.classList.contains("muted") ? L(t, s) : i()
											}
										}
									};
									i.addEventListener("touchstart", f), i.addEventListener("mousedown", f)
								}(a("#zuck-modal-slider-" + g)), d.internalData.currentStory = e, t.currentItem = s, u("backNative") && (n.location.hash = "#!" + g);
								const o = w("previous");
								o && I(o, "previous"), I(t, "viewing", !0);
								const r = w("next");
								r && I(r, "next"), u("autoFullScreen") && i.classList.add("fullscreen");
								const l = function() {
									i.classList.contains("fullscreen") && u("autoFullScreen") && n.screen.availWidth <= 1024 && m(i), i.focus()
								};
								if (u("openEffect")) {
									const t = a(`#${g} [data-id="${e}"] .item-preview`),
									n = p(t);
									i.style.marginLeft = n[0] + t.offsetWidth / 2 + "px", i.style.marginTop = n[1] + t.offsetHeight / 2 + "px", i.style.display = "block", i.slideWidth = a("#zuck-modal .story-viewer").offsetWidth, setTimeout(() => {
										i.classList.add("animated")
                                        }, 10), setTimeout(() => {
										l()
									}, 300)
								} else i.style.display = "block", i.slideWidth = a("#zuck-modal .story-viewer").offsetWidth, l();
								u("callbacks", "onView")(e)
							}))
						},
						next(e) {
							u("callbacks", "onEnd")(d.internalData.currentStory, (function() {
								const e = d.internalData.currentStory,
								t = a(`#${g} [data-id="${e}"]`);
								t && (t.classList.add("seen"), d.data[e].seen = !0, d.internalData.seenItems[e] = !0, S("seenItems", d.internalData.seenItems), k());
								a("#zuck-modal .story-viewer.next") ? u("rtl") ? b(!1) : b(!0) : h.close();
							}))
						},
						close() {
							const e = a("#zuck-modal");
							u("callbacks", "onClose")(d.internalData.currentStory, (function() {
								u("backNative") && (n.location.hash = ""), m(e, !0), u("openEffect") ? e.classList.add("closed") : (y.innerHTML = "", e.style.display = "none")
							}))
						}
					}
				})(),
				b = function(e, t) {
					const n = e.getAttribute("data-id");
					let a = !1;
					d.internalData.seenItems[n] && (a = !0);
					try {
						d.data[n] || (d.data[n] = {}), d.data[n].id = n, d.data[n].photo = e.getAttribute("data-photo"), d.data[n].name = e.querySelector(".name").innerText, d.data[n].link = e.querySelector(".item-link").getAttribute("href"), d.data[n].lastUpdated = e.getAttribute("data-last-updated"), d.data[n].seen = a, d.data[n].items || (d.data[n].items = [], d.data[n].noItems = !0)
                        } catch (e) {
						d.data[n] = {
							items: []
						}
					}
					e.onclick = e => {
						e.preventDefault(), h.show(n)
					};
					const i = u("callbacks", "onDataUpdate");
					i && i(d.data, () => {})
				},
				w = function(e) {
					const t = d.internalData.currentStory,
					n = e + "ElementSibling";
					if (t) {
						const e = a(`#${g} [data-id="${t}"]`)[n];
						if (e) {
							const t = e.getAttribute("data-id");
							return d.data[t] || !1
						}
					}
					return !1
				},
				k = function() {
					s(document.querySelectorAll(`#${g} .story.seen`), (e, t) => {
						const n = d.data[t.getAttribute("data-id")],
						a = t.parentNode;
						u("reactive") || a.removeChild(t), d.update(n, !0)
					})
				},
				x = function(e, t, n) {
					const a = t[1],
					i = t[0];
					if (!a || !i) return !1;
					const s = d.internalData.currentVideoElement;
					if (s && s.pause(), "video" === a.getAttribute("data-type")) {
						const t = a.getElementsByTagName("video")[0];
						if (!t) return d.internalData.currentVideoElement = !1, !1;
						const s = function() {
							t.duration && o(i.getElementsByTagName("b")[0].style, "AnimationDuration", t.duration + "s")
						};
						s(), t.addEventListener("loadedmetadata", s), d.internalData.currentVideoElement = t, t.play(), n && n.target && L(t, e)
					} else d.internalData.currentVideoElement = !1
				},
				$ = function() {
					const e = d.internalData.currentVideoElement;
					if (e) try {
						e.pause()
					} catch (e) {}
				},
				L = function(e, t) {
					e.muted = !1, e.volume = 1, e.removeAttribute("muted"), e.play(), e.paused && (e.muted = !0, e.play()), t && t.classList.remove("paused")
				},
				S = function(e, t) {
					try {
						if (u("localStorage")) {
							const a = `zuck-${g}-${e}`;
							n.localStorage[a] = JSON.stringify(t)
						}
					} catch (e) {}
				},
				I = function(e) {
					if (u("localStorage")) {
						const t = `zuck-${g}-${e}`;
						return !!n.localStorage[t] && JSON.parse(n.localStorage[t])
					}
					return !1
				};
                d.data = u("stories") || {}, d.internalData = {}, d.internalData.seenItems = I("seenItems") || {}, d.add = d.update = (t, n) => {
                    const o = i(t, "id"),
					r = a(`#${g} [data-id="${o}"]`),
					l = i(t, "items");
                    let m, v = !1;
                    if (l[0] && (v = l[0].preview || ""), !0 === d.internalData.seenItems[o] && (t.seen = !0), t.currentPreview = v, r) m = r;
                    else {
                        const e = document.createElement("div");
                        e.innerHTML = u("template", "timelineItem")(t), m = e.firstElementChild
						}!1 === t.seen && (d.internalData.seenItems[o] = !1, S("seenItems", d.internalData.seenItems)), m.setAttribute("data-id", o), m.setAttribute("data-photo", i(t, "photo")), m.setAttribute("data-last-updated", i(t, "lastUpdated")), b(m), r || u("reactive") || (n ? e.appendChild(m) : c(e, m)), s(l, (e, t) => {
							d.addItem(o, t, n)
						}), n || k()
						}, d.next = () => {
						h.next()
						}, d.remove = e => {
						const t = a(`#${g} > [data-id="${e}"]`);
						t.parentNode.removeChild(t)
						}, d.addItem = (e, t, n) => {
						const o = a(`#${g} > [data-id="${e}"]`);
						if (!u("reactive")) {
							const e = document.createElement("li"),
                            a = o.querySelectorAll(".items")[0];
							e.className = i(t, "seen") ? "seen" : "", e.setAttribute("data-id", i(t, "id")), e.innerHTML = u("template", "timelineStoryItem")(t), n ? a.appendChild(e) : c(a, e)
							}! function(e, t) {
							const n = e.getAttribute("data-id"),
                            a = document.querySelectorAll(`#${g} [data-id="${n}"] .items > li`),
                            i = [];
							if (!u("reactive") || t) {
								s(a, (e, {
									firstElementChild: t
								}) => {
                                const n = t,
								a = n.firstElementChild,
								s = {
									id: n.getAttribute("data-id"),
									src: n.getAttribute("href"),
									length: n.getAttribute("data-length"),
									type: n.getAttribute("data-type"),
									time: n.getAttribute("data-time"),
									link: n.getAttribute("data-link"),
									linkText: n.getAttribute("data-linkText"),
									preview: a.getAttribute("src")
								},
								o = n.attributes,
								r = ["data-id", "href", "data-length", "data-type", "data-time", "data-link", "data-linktext"];
                                for (let e = 0; e < o.length; e++) - 1 === r.indexOf(o[e].nodeName) && (s[o[e].nodeName.replace("data-", "")] = o[e].nodeValue);
                                i.push(s)
								}), d.data[n].items = i;
								const e = u("callbacks", "onDataUpdate");
								e && e(d.data, () => {})
							}
						}(o)
						}, d.removeItem = (t, n) => {
						const i = a(`#${g} > [data-id="${t}"] [data-id="${n}"]`);
						u("reactive") || e.parentNode.removeChild(i)
						}, d.navigateItem = d.nextItem = (e, t) => {
						const n = d.internalData.currentStory,
                        i = d.data[n].currentItem,
                        o = a(`#zuck-modal .story-viewer[data-story-id="${n}"]`),
                        r = "previous" === e ? -1 : 1;
						if (!o || 1 === o.touchMove) return !1;
						const l = o.querySelectorAll(`[data-index="${i}"]`),
                        c = l[0],
                        m = l[1],
                        v = i + r,
                        p = o.querySelectorAll(`[data-index="${v}"]`),
                        g = p[0],
                        y = p[1];
						if (o && g && y) {
							const a = function() {
								"previous" === e ? (c.classList.remove("seen"), m.classList.remove("seen")) : (c.classList.add("seen"), m.classList.add("seen")), c.classList.remove("active"), m.classList.remove("active"), g.classList.remove("seen"), g.classList.add("active"), y.classList.remove("seen"), y.classList.add("active"), s(o.querySelectorAll(".time"), (e, t) => {
									t.innerText = f(y.getAttribute("data-time"))
								}), d.data[n].currentItem = d.data[n].currentItem + r, x(o, p, t)
							};
							let i = u("callbacks", "onNavigateItem");
							i = u("callbacks", i ? "onNavigateItem" : "onNextItem"), i(n, y.getAttribute("data-story-id"), a)
						} else o && "previous" !== e && h.next(t)
				};
                return function() {
                    if (e && e.querySelector(".story") && s(e.querySelectorAll(".story"), (e, t) => {
						b(t)
                        }), u("backNative") && (n.location.hash === "#!" + g && (n.location.hash = ""), n.addEventListener("popstate", e => {
                            n.location.hash !== "#!" + g && (n.location.hash = "")
						}, !1)), !u("reactive")) {
                        const e = I("seenItems");
                        s(Object.keys(e), (t, n) => {
                            d.data[n] && (d.data[n].seen = e[n])
						})
					}
                    s(u("stories"), (e, t) => {
                        d.add(t, !0)
					}), k();
                    const t = u("avatars") ? "user-icon" : "story-preview",
					a = u("list") ? "list" : "carousel",
					i = u("rtl") ? "rtl" : "";
                    return e.className += ` stories ${t} ${a} ${(""+u("skin")).toLowerCase()} ${i}`, d
				}()
			};
			return d.buildTimelineItem = (e, t, n, a, i, o) => {
				const r = {
					id: e,
					photo: t,
					name: n,
					link: a,
					lastUpdated: i,
					items: []
				};
				return s(o, (e, t) => {
					r.items.push(d.buildStoryItem.apply(d, t))
				}), r
				}, d.buildItem = d.buildStoryItem = (e, t, n, a, i, s, o, r, l) => ({
					id: e,
					type: t,
					length: n,
					src: a,
					preview: i,
					link: s,
					linkText: o,
					seen: r,
					time: l
				}), e.exports && (t = e.exports = d), t.ZuckJS = d, d
		})(window || {})
		}, function(e, t, n) {
		"use strict";
		n.r(t);
		var a = n(0),
        i = n.n(a),
        s = n(1),
        o = n.n(s);
		n(3);
		i()(document).ready((function() {
			
			var e = i()("#stories");
			e.length && i()(window).width() > 1024 && e.niceScroll({
				cursorcolor: "#bdbdbd",
				cursorwidth: "5px",
				cursorborder: "none",
				emulatetouch: !0,
				cursordragontouch: !0,
				scrollbarid: "wp-story-scrollbar"
			});
			var t = i()("body");
			
			var staticPhotoSrc = "/wp-content/plugins/wp-story/dist/bh-webstory-logo.png";
			var sendwhiteSrc = "/wp-content/plugins/wp-story/dist/sendWhite.png";			
			e.length && fetch("".concat(wpStoryObject.homeUrl, "/wp-json/wp-story/v1/free")).then((function(e) {
				return e.json()
				})).then((function(e) {
				! function(e) {
					new o.a("stories", {
						backNative: !1,
						previousTap: !0,
						autoFullScreen: !0,
						skin: "snapgram",
						avatars: !0,
						list: !1,
						cubeEffect: !1,
						openEffect: !1,
						paginationArrows: !1,
						rtl: !1,
						localStorage: !0,
						stories: e,
						callbacks: {
							onOpen: function(e, n) {
								n(), t.addClass("wp-story")
							},
							onClose: function(e, n) {
								n(), t.removeClass("wp-story")
							},
							onNavigateItem: function(e, t, n) {
								n()
							}
						},
						template: {
							viewerItemBody: function(e, t, n) {
								console.log(JSON.stringify(n));
								return '<div\n' +
								'class="item ' + (n.link ? "linked-story " : "") + (n.seen === true ? "seen " : "") + (t === e ? "active" : "") + '"\n' +
								'data-time="' + n.time + '" data-type="' + n.type + '" data-index="' + e + '" data-item-id="' + n.id + '">\n <div class="slideblock">' +
								((n.type === "video") ?
									'<video class="media" muted webkit-playsinline playsinline preload="auto" src="' + n.src + '" ' + n.type + '></video>\n' +
									'<b class="muted">' + wpStoryObject.lang.unmute + '</b>' :
								'<img loading="auto" class="media" src="' + n.src + '" ' + n.type + ' />') + '\n' +
								(n.link ? '<a class="wp-story-premium-tip tip link" href="' + n.link + '" rel="noopener" target="' + n.new_tab + '">\n<span class="title">' +
									(n.linkText && n.linkText !== "" ? n.linkText : wpStoryObject.lang.visitLink) + '\n' +
									(n.descrip && n.descrip !== "" ? '</span><span class="descrip">' + n.descrip + '</span>' : "") + '\n' +
								'</a>' : '') + '</div> \n' +
								'</div>';
							},
							
							viewerItem: function(e) {		
								
								return '<div class="story-viewer">\n <span >'+e.id+'</span> \n <div class="overlayy" id="'+e.id+'" onclick="off(\''+e.id+'\')">\n <div id="text"><a href="whatsapp://send?text=https://www.bollywoodhungama.com/web-stories/'+e.id+'/" data-action="share/whatsapp/share" target="_blank" class="shareapp"></a> <a href="#" onclick="copyText(\''+e.id+'\')"  class="copytext"></a></div> \n </div> \n   <div class="head">\n                      <div class="left">\n                        <a class="back"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#ffffff" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></a>\n                        <span class="item-preview">\n                          <img lazy="eager" class="profilePhoto"\n                          src="'.concat(staticPhotoSrc, '" alt="Story Item"\n                          />\n                        </span>\n                        <div class="info">\n                          <strong class="name">').concat(e.name, '</strong>\n                          <span class="time">').concat(e.timeAgo, '</span>\n                        </div>\n                      </div>\n\n                      <div class="right">\n                        <span class="send" onclick="on(\''+e.id+'\')" >\n                       <a href="#"><img lazy="eager" class="profilePhoto"\n                          src="').concat(sendwhiteSrc, '" alt="Story Item"\n                          />\n                        </a></span>\n                        <span class="loading"></span>\n                        <a class="close" tabIndex="2"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#ffffff" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></a>\n                      </div>\n                    </div>\n\n                    <div class="slides-pointers">\n                      <div class="wrap"></div>\n                    </div>\n                  </div>')
							}							
						},						
					})
				}(e)
				})).catch((function(e) {
				throw e
			}))
		}))
	}, function(e, t, n) {}]);
	//# sourceMappingURL=wp-story.js.map	
	
	function on(id) {
		document.getElementById(id).style.display = "block";
	}
	
	function off(id) {		
		document.getElementById(id).style.display = "none";
	}
	function copyText(id) {
		var url = 'https://www.bollywoodhungama.com/web-stories/'+id+'/';
		console.log('copytext: ', url);
		navigator.clipboard.writeText(url);
	}
	
	
	
	window.onload = function() {
		console.log("Window loaded successfully!");
		var queryParams = window.location.href;
		var parsedUrl = new URL(queryParams);
		var pathname = parsedUrl.pathname; // "/web-stories/story-1596094/"
		var pathnameParts = pathname.split('/').filter(part => part !== ''); // ["web-stories", "story-1596094"]
		var lastPart = pathnameParts[pathnameParts.length - 1];
		console.log('storyparam:' + lastPart);
		var element = document.querySelector('[data-id="'+ lastPart +'"]');
		
		// Trigger a click event on the element
		if (element) {
			element.click();
		}		
	};
	
		