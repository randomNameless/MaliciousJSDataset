if (function (t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.Tether = e()
  }(this, function () {
    "use strict";

    function t(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function e(t) {
      var i = t.getBoundingClientRect(),
        n = {};
      for (var o in i) n[o] = i[o];
      if (t.ownerDocument !== document) {
        var r = t.ownerDocument.defaultView.frameElement;
        if (r) {
          var s = e(r);
          n.top += s.top, n.bottom += s.top, n.left += s.left, n.right += s.left
        }
      }
      return n
    }

    function i(t) {
      var e = getComputedStyle(t) || {},
        i = e.position,
        n = [];
      if ("fixed" === i) return [t];
      for (var o = t;
        (o = o.parentNode) && o && 1 === o.nodeType;) {
        var r = void 0;
        try {
          r = getComputedStyle(o)
        } catch (t) {}
        if (void 0 === r || null === r) return n.push(o), n;
        var s = r,
          a = s.overflow,
          l = s.overflowX;
        /(auto|scroll|overlay)/.test(a + s.overflowY + l) && ("absolute" !== i || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && n.push(o)
      }
      return n.push(t.ownerDocument.body), t.ownerDocument !== document && n.push(t.ownerDocument.defaultView), n
    }

    function n() {
      T && document.body.removeChild(T), T = null
    }

    function o(t) {
      var i = void 0;
      t === document ? (i = document, t = document.documentElement) : i = t.ownerDocument;
      var n = i.documentElement,
        o = e(t),
        r = O();
      return o.top -= r.top, o.left -= r.left, void 0 === o.width && (o.width = document.body.scrollWidth - o.left - o.right), void 0 === o.height && (o.height = document.body.scrollHeight - o.top - o.bottom), o.top = o.top - n.clientTop, o.left = o.left - n.clientLeft, o.right = i.body.clientWidth - o.width - o.left, o.bottom = i.body.clientHeight - o.height - o.top, o
    }

    function r(t) {
      return t.offsetParent || document.documentElement
    }

    function s() {
      if (I) return I;
      var t = document.createElement("div");
      t.style.width = "100%", t.style.height = "200px";
      var e = document.createElement("div");
      a(e.style, {
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        visibility: "hidden",
        width: "200px",
        height: "150px",
        overflow: "hidden"
      }), e.appendChild(t), document.body.appendChild(e);
      var i = t.offsetWidth;
      e.style.overflow = "scroll";
      var n = t.offsetWidth;
      i === n && (n = e.clientWidth), document.body.removeChild(e);
      var o = i - n;
      return I = {
        width: o,
        height: o
      }
    }

    function a() {
      var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = [];
      return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function (e) {
        if (e)
          for (var i in e)({}).hasOwnProperty.call(e, i) && (t[i] = e[i])
      }), t
    }

    function l(t, e) {
      if (void 0 !== t.classList) e.split(" ").forEach(function (e) {
        e.trim() && t.classList.remove(e)
      });
      else {
        var i = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
          n = f(t).replace(i, " ");
        d(t, n)
      }
    }

    function h(t, e) {
      if (void 0 !== t.classList) e.split(" ").forEach(function (e) {
        e.trim() && t.classList.add(e)
      });
      else {
        l(t, e);
        var i = f(t) + " " + e;
        d(t, i)
      }
    }

    function c(t, e) {
      if (void 0 !== t.classList) return t.classList.contains(e);
      var i = f(t);
      return new RegExp("(^| )" + e + "( |$)", "gi").test(i)
    }

    function f(t) {
      return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
    }

    function d(t, e) {
      t.setAttribute("class", e)
    }

    function u(t, e, i) {
      i.forEach(function (i) {
        -1 === e.indexOf(i) && c(t, i) && l(t, i)
      }), e.forEach(function (e) {
        c(t, e) || h(t, e)
      })
    }

    function t(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function p(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function g(t, e) {
      var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
      return t + i >= e && e >= t - i
    }

    function m() {
      return "object" == typeof performance && "function" == typeof performance.now ? performance.now() : +new Date
    }

    function _() {
      for (var t = {
          top: 0,
          left: 0
        }, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
      return i.forEach(function (e) {
        var i = e.top,
          n = e.left;
        "string" == typeof i && (i = parseFloat(i, 10)), "string" == typeof n && (n = parseFloat(n, 10)), t.top += i, t.left += n
      }), t
    }

    function v(t, e) {
      return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
    }

    function E(t, e) {
      return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), void 0 !== e.nodeType && function () {
        var t = e,
          i = o(e),
          n = i,
          r = getComputedStyle(e);
        if (e = [n.left, n.top, i.width + n.left, i.height + n.top], t.ownerDocument !== document) {
          var s = t.ownerDocument.defaultView;
          e[0] += s.pageXOffset, e[1] += s.pageYOffset, e[2] += s.pageXOffset, e[3] += s.pageYOffset
        }
        G.forEach(function (t, i) {
          t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[i] += parseFloat(r["border" + t + "Width"]) : e[i] -= parseFloat(r["border" + t + "Width"])
        })
      }(), e
    }
    var y = function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      b = void 0;
    void 0 === b && (b = {
      modules: []
    });
    var T = null,
      C = function () {
        var t = 0;
        return function () {
          return ++t
        }
      }(),
      A = {},
      O = function () {
        var t = T;
        t && document.body.contains(t) || (t = document.createElement("div"), t.setAttribute("data-tether-id", C()), a(t.style, {
          top: 0,
          left: 0,
          position: "absolute"
        }), document.body.appendChild(t), T = t);
        var i = t.getAttribute("data-tether-id");
        return void 0 === A[i] && (A[i] = e(t), w(function () {
          delete A[i]
        })), A[i]
      },
      I = null,
      S = [],
      w = function (t) {
        S.push(t)
      },
      D = function () {
        for (var t = void 0; t = S.pop();) t()
      },
      N = function () {
        function e() {
          t(this, e)
        }
        return y(e, [{
          key: "on",
          value: function (t, e, i) {
            var n = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
            void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
              handler: e,
              ctx: i,
              once: n
            })
          }
        }, {
          key: "once",
          value: function (t, e, i) {
            this.on(t, e, i, !0)
          }
        }, {
          key: "off",
          value: function (t, e) {
            if (void 0 !== this.bindings && void 0 !== this.bindings[t])
              if (void 0 === e) delete this.bindings[t];
              else
                for (var i = 0; i < this.bindings[t].length;) this.bindings[t][i].handler === e ? this.bindings[t].splice(i, 1) : ++i
          }
        }, {
          key: "trigger",
          value: function (t) {
            if (void 0 !== this.bindings && this.bindings[t]) {
              for (var e = 0, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) n[o - 1] = arguments[o];
              for (; e < this.bindings[t].length;) {
                var r = this.bindings[t][e],
                  s = r.handler,
                  a = r.ctx,
                  l = r.once,
                  h = a;
                void 0 === h && (h = this), s.apply(h, n), l ? this.bindings[t].splice(e, 1) : ++e
              }
            }
          }
        }]), e
      }();
    b.Utils = {
      getActualBoundingClientRect: e,
      getScrollParents: i,
      getBounds: o,
      getOffsetParent: r,
      extend: a,
      addClass: h,
      removeClass: l,
      hasClass: c,
      updateClasses: u,
      defer: w,
      flush: D,
      uniqueId: C,
      Evented: N,
      getScrollBarSize: s,
      removeUtilElements: n
    };
    var L = function () {
        function t(t, e) {
          var i = [],
            n = !0,
            o = !1,
            r = void 0;
          try {
            for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
          } catch (t) {
            o = !0, r = t
          } finally {
            try {
              !n && a.return && a.return()
            } finally {
              if (o) throw r
            }
          }
          return i
        }
        return function (e, i) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return t(e, i);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }(),
      y = function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e
        }
      }(),
      P = function (t, e, i) {
        for (var n = !0; n;) {
          var o = t,
            r = e,
            s = i;
          n = !1, null === o && (o = Function.prototype);
          var a = Object.getOwnPropertyDescriptor(o, r);
          if (void 0 !== a) {
            if ("value" in a) return a.value;
            var l = a.get;
            if (void 0 === l) return;
            return l.call(s)
          }
          var h = Object.getPrototypeOf(o);
          if (null === h) return;
          t = h, e = r, i = s, n = !0, a = h = void 0
        }
      };
    if (void 0 === b) throw new Error("You must include the utils.js file before tether.js");
    var H = b.Utils,
      i = H.getScrollParents,
      o = H.getBounds,
      r = H.getOffsetParent,
      a = H.extend,
      h = H.addClass,
      l = H.removeClass,
      u = H.updateClasses,
      w = H.defer,
      D = H.flush,
      s = H.getScrollBarSize,
      n = H.removeUtilElements,
      k = function () {
        if ("undefined" == typeof document) return "";
        for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], i = 0; i < e.length; ++i) {
          var n = e[i];
          if (void 0 !== t.style[n]) return n
        }
      }(),
      W = [],
      R = function () {
        W.forEach(function (t) {
          t.position(!1)
        }), D()
      };
    ! function () {
      var t = null,
        e = null,
        i = null,
        n = function n() {
          if (void 0 !== e && e > 16) return e = Math.min(e - 16, 250), void(i = setTimeout(n, 250));
          void 0 !== t && m() - t < 10 || (null != i && (clearTimeout(i), i = null), t = m(), R(), e = m() - t)
        };
      "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
        window.addEventListener(t, n)
      })
    }();
    var x = {
        center: "center",
        left: "right",
        right: "left"
      },
      M = {
        middle: "middle",
        top: "bottom",
        bottom: "top"
      },
      V = {
        top: 0,
        left: 0,
        middle: "50%",
        center: "50%",
        bottom: "100%",
        right: "100%"
      },
      j = function (t, e) {
        var i = t.left,
          n = t.top;
        return "auto" === i && (i = x[e.left]), "auto" === n && (n = M[e.top]), {
          left: i,
          top: n
        }
      },
      F = function (t) {
        var e = t.left,
          i = t.top;
        return void 0 !== V[t.left] && (e = V[t.left]), void 0 !== V[t.top] && (i = V[t.top]), {
          left: e,
          top: i
        }
      },
      U = function (t) {
        var e = t.split(" "),
          i = L(e, 2);
        return {
          top: i[0],
          left: i[1]
        }
      },
      B = U,
      K = function (e) {
        function c(e) {
          var i = this;
          t(this, c), P(Object.getPrototypeOf(c.prototype), "constructor", this).call(this), this.position = this.position.bind(this), W.push(this), this.history = [], this.setOptions(e, !1), b.modules.forEach(function (t) {
            void 0 !== t.initialize && t.initialize.call(i)
          }), this.position()
        }
        return p(c, e), y(c, [{
          key: "getClass",
          value: function () {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
              e = this.options.classes;
            return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
          }
        }, {
          key: "setOptions",
          value: function (t) {
            var e = this,
              n = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
              o = {
                offset: "0 0",
                targetOffset: "0 0",
                targetAttachment: "auto auto",
                classPrefix: "tether"
              };
            this.options = a(o, t);
            var r = this.options,
              s = r.element,
              l = r.target,
              c = r.targetModifier;
            if (this.element = s, this.target = l, this.targetModifier = c, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
                if (void 0 === e[t]) throw new Error("Tether Error: Both element and target must be defined");
                void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
              }), h(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && h(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
            this.targetAttachment = B(this.options.targetAttachment), this.attachment = B(this.options.attachment), this.offset = U(this.options.offset), this.targetOffset = U(this.options.targetOffset), void 0 !== this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = i(this.target), !1 !== this.options.enabled && this.enable(n)
          }
        }, {
          key: "getTargetBounds",
          value: function () {
            if (void 0 === this.targetModifier) return o(this.target);
            if ("visible" === this.targetModifier) {
              if (this.target === document.body) return {
                top: pageYOffset,
                left: pageXOffset,
                height: innerHeight,
                width: innerWidth
              };
              var t = o(this.target),
                e = {
                  height: t.height,
                  width: t.width,
                  top: t.top,
                  left: t.left
                };
              return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
            }
            if ("scroll-handle" === this.targetModifier) {
              var t = void 0,
                i = this.target;
              i === document.body ? (i = document.documentElement, t = {
                left: pageXOffset,
                top: pageYOffset,
                height: innerHeight,
                width: innerWidth
              }) : t = o(i);
              var n = getComputedStyle(i),
                r = i.scrollWidth > i.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                s = 0;
              r && (s = 15);
              var a = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - s,
                e = {
                  width: 15,
                  height: .975 * a * (a / i.scrollHeight),
                  left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15
                },
                l = 0;
              a < 408 && this.target === document.body && (l = -11e-5 * Math.pow(a, 2) - .00727 * a + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
              var h = this.target.scrollTop / (i.scrollHeight - a);
              return e.top = h * (a - e.height - l) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
            }
          }
        }, {
          key: "clearCache",
          value: function () {
            this._cache = {}
          }
        }, {
          key: "cache",
          value: function (t, e) {
            return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
          }
        }, {
          key: "enable",
          value: function () {
            var t = this,
              e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
            !1 !== this.options.addTargetClasses && h(this.target, this.getClass("enabled")), h(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (e) {
              e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
            }), e && this.position()
          }
        }, {
          key: "disable",
          value: function () {
            var t = this;
            l(this.target, this.getClass("enabled")), l(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach(function (e) {
              e.removeEventListener("scroll", t.position)
            })
          }
        }, {
          key: "destroy",
          value: function () {
            var t = this;
            this.disable(), W.forEach(function (e, i) {
              e === t && W.splice(i, 1)
            }), 0 === W.length && n()
          }
        }, {
          key: "updateAttachClasses",
          value: function (t, e) {
            var i = this;
            t = t || this.attachment, e = e || this.targetAttachment;
            var n = ["left", "top", "bottom", "right", "middle", "center"];
            void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);
            var o = this._addAttachClasses;
            t.top && o.push(this.getClass("element-attached") + "-" + t.top), t.left && o.push(this.getClass("element-attached") + "-" + t.left), e.top && o.push(this.getClass("target-attached") + "-" + e.top), e.left && o.push(this.getClass("target-attached") + "-" + e.left);
            var r = [];
            n.forEach(function (t) {
              r.push(i.getClass("element-attached") + "-" + t), r.push(i.getClass("target-attached") + "-" + t)
            }), w(function () {
              void 0 !== i._addAttachClasses && (u(i.element, i._addAttachClasses, r), !1 !== i.options.addTargetClasses && u(i.target, i._addAttachClasses, r), delete i._addAttachClasses)
            })
          }
        }, {
          key: "position",
          value: function () {
            var t = this,
              e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
            if (this.enabled) {
              this.clearCache();
              var i = j(this.targetAttachment, this.attachment);
              this.updateAttachClasses(this.attachment, i);
              var n = this.cache("element-bounds", function () {
                  return o(t.element)
                }),
                a = n.width,
                l = n.height;
              if (0 === a && 0 === l && void 0 !== this.lastSize) {
                var h = this.lastSize;
                a = h.width, l = h.height
              } else this.lastSize = {
                width: a,
                height: l
              };
              var c = this.cache("target-bounds", function () {
                  return t.getTargetBounds()
                }),
                f = c,
                d = v(F(this.attachment), {
                  width: a,
                  height: l
                }),
                u = v(F(i), f),
                p = v(this.offset, {
                  width: a,
                  height: l
                }),
                g = v(this.targetOffset, f);
              d = _(d, p), u = _(u, g);
              for (var m = c.left + u.left - d.left, E = c.top + u.top - d.top, y = 0; y < b.modules.length; ++y) {
                var T = b.modules[y],
                  C = T.position.call(this, {
                    left: m,
                    top: E,
                    targetAttachment: i,
                    targetPos: c,
                    elementPos: n,
                    offset: d,
                    targetOffset: u,
                    manualOffset: p,
                    manualTargetOffset: g,
                    scrollbarSize: S,
                    attachment: this.attachment
                  });
                if (!1 === C) return !1;
                void 0 !== C && "object" == typeof C && (E = C.top, m = C.left)
              }
              var A = {
                  page: {
                    top: E,
                    left: m
                  },
                  viewport: {
                    top: E - pageYOffset,
                    bottom: pageYOffset - E - l + innerHeight,
                    left: m - pageXOffset,
                    right: pageXOffset - m - a + innerWidth
                  }
                },
                O = this.target.ownerDocument,
                I = O.defaultView,
                S = void 0;
              return I.innerHeight > O.documentElement.clientHeight && (S = this.cache("scrollbar-size", s), A.viewport.bottom -= S.height), I.innerWidth > O.documentElement.clientWidth && (S = this.cache("scrollbar-size", s), A.viewport.right -= S.width), -1 !== ["", "static"].indexOf(O.body.style.position) && -1 !== ["", "static"].indexOf(O.body.parentElement.style.position) || (A.page.bottom = O.body.scrollHeight - E - l, A.page.right = O.body.scrollWidth - m - a), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function () {
                var e = t.cache("target-offsetparent", function () {
                    return r(t.target)
                  }),
                  i = t.cache("target-offsetparent-bounds", function () {
                    return o(e)
                  }),
                  n = getComputedStyle(e),
                  s = i,
                  a = {};
                if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
                    a[t.toLowerCase()] = parseFloat(n["border" + t + "Width"])
                  }), i.right = O.body.scrollWidth - i.left - s.width + a.right, i.bottom = O.body.scrollHeight - i.top - s.height + a.bottom, A.page.top >= i.top + a.top && A.page.bottom >= i.bottom && A.page.left >= i.left + a.left && A.page.right >= i.right) {
                  var l = e.scrollTop,
                    h = e.scrollLeft;
                  A.offset = {
                    top: A.page.top - i.top + l - a.top,
                    left: A.page.left - i.left + h - a.left
                  }
                }
              }(), this.move(A), this.history.unshift(A), this.history.length > 3 && this.history.pop(), e && D(), !0
            }
          }
        }, {
          key: "move",
          value: function (t) {
            var e = this;
            if (void 0 !== this.element.parentNode) {
              var i = {};
              for (var n in t) {
                i[n] = {};
                for (var o in t[n]) {
                  for (var s = !1, l = 0; l < this.history.length; ++l) {
                    var h = this.history[l];
                    if (void 0 !== h[n] && !g(h[n][o], t[n][o])) {
                      s = !0;
                      break
                    }
                  }
                  s || (i[n][o] = !0)
                }
              }
              var c = {
                  top: "",
                  left: "",
                  right: "",
                  bottom: ""
                },
                f = function (t, i) {
                  if (!1 !== (void 0 !== e.options.optimizations ? e.options.optimizations.gpu : null)) {
                    var n = void 0,
                      o = void 0;
                    t.top ? (c.top = 0, n = i.top) : (c.bottom = 0, n = -i.bottom), t.left ? (c.left = 0, o = i.left) : (c.right = 0, o = -i.right), window.matchMedia && (window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches || (o = Math.round(o), n = Math.round(n))), c[k] = "translateX(" + o + "px) translateY(" + n + "px)", "msTransform" !== k && (c[k] += " translateZ(0)")
                  } else t.top ? c.top = i.top + "px" : c.bottom = i.bottom + "px", t.left ? c.left = i.left + "px" : c.right = i.right + "px"
                },
                d = !1;
              if ((i.page.top || i.page.bottom) && (i.page.left || i.page.right) ? (c.position = "absolute", f(i.page, t.page)) : (i.viewport.top || i.viewport.bottom) && (i.viewport.left || i.viewport.right) ? (c.position = "fixed", f(i.viewport, t.viewport)) : void 0 !== i.offset && i.offset.top && i.offset.left ? function () {
                  c.position = "absolute";
                  var n = e.cache("target-offsetparent", function () {
                    return r(e.target)
                  });
                  r(e.element) !== n && w(function () {
                    e.element.parentNode.removeChild(e.element), n.appendChild(e.element)
                  }), f(i.offset, t.offset), d = !0
                }() : (c.position = "absolute", f({
                  top: !0,
                  left: !0
                }, t.page)), !d)
                if (this.options.bodyElement) this.element.parentNode !== this.options.bodyElement && this.options.bodyElement.appendChild(this.element);
                else {
                  for (var u = !0, p = this.element.parentNode; p && 1 === p.nodeType && "BODY" !== p.tagName;) {
                    if ("static" !== getComputedStyle(p).position) {
                      u = !1;
                      break
                    }
                    p = p.parentNode
                  }
                  u || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                } var m = {},
                _ = !1;
              for (var o in c) {
                var v = c[o];
                this.element.style[o] !== v && (_ = !0, m[o] = v)
              }
              _ && w(function () {
                a(e.element.style, m), e.trigger("repositioned")
              })
            }
          }
        }]), c
      }(N);
    K.modules = [], b.position = R;
    var Q = a(K, b),
      L = function () {
        function t(t, e) {
          var i = [],
            n = !0,
            o = !1,
            r = void 0;
          try {
            for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
          } catch (t) {
            o = !0, r = t
          } finally {
            try {
              !n && a.return && a.return()
            } finally {
              if (o) throw r
            }
          }
          return i
        }
        return function (e, i) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return t(e, i);
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
      }(),
      H = b.Utils,
      o = H.getBounds,
      a = H.extend,
      u = H.updateClasses,
      w = H.defer,
      G = ["left", "top", "right", "bottom"];
    b.modules.push({
      position: function (t) {
        var e = this,
          i = t.top,
          n = t.left,
          r = t.targetAttachment;
        if (!this.options.constraints) return !0;
        var s = this.cache("element-bounds", function () {
            return o(e.element)
          }),
          l = s.height,
          h = s.width;
        if (0 === h && 0 === l && void 0 !== this.lastSize) {
          var c = this.lastSize;
          h = c.width, l = c.height
        }
        var f = this.cache("target-bounds", function () {
            return e.getTargetBounds()
          }),
          d = f.height,
          p = f.width,
          g = [this.getClass("pinned"), this.getClass("out-of-bounds")];
        this.options.constraints.forEach(function (t) {
          var e = t.outOfBoundsClass,
            i = t.pinnedClass;
          e && g.push(e), i && g.push(i)
        }), g.forEach(function (t) {
          ["left", "top", "right", "bottom"].forEach(function (e) {
            g.push(t + "-" + e)
          })
        });
        var m = [],
          _ = a({}, r),
          v = a({}, this.attachment);
        return this.options.constraints.forEach(function (t) {
          var o = t.to,
            s = t.attachment,
            a = t.pin;
          void 0 === s && (s = "");
          var c = void 0,
            f = void 0;
          if (s.indexOf(" ") >= 0) {
            var u = s.split(" "),
              g = L(u, 2);
            f = g[0], c = g[1]
          } else c = f = s;
          var y = E(e, o);
          "target" !== f && "both" !== f || (i < y[1] && "top" === _.top && (i += d, _.top = "bottom"), i + l > y[3] && "bottom" === _.top && (i -= d, _.top = "top")), "together" === f && ("top" === _.top && ("bottom" === v.top && i < y[1] ? (i += d, _.top = "bottom", i += l, v.top = "top") : "top" === v.top && i + l > y[3] && i - (l - d) >= y[1] && (i -= l - d, _.top = "bottom", v.top = "bottom")), "bottom" === _.top && ("top" === v.top && i + l > y[3] ? (i -= d, _.top = "top", i -= l, v.top = "bottom") : "bottom" === v.top && i < y[1] && i + (2 * l - d) <= y[3] && (i += l - d, _.top = "top", v.top = "top")), "middle" === _.top && (i + l > y[3] && "top" === v.top ? (i -= l, v.top = "bottom") : i < y[1] && "bottom" === v.top && (i += l, v.top = "top"))), "target" !== c && "both" !== c || (n < y[0] && "left" === _.left && (n += p, _.left = "right"), n + h > y[2] && "right" === _.left && (n -= p, _.left = "left")), "together" === c && (n < y[0] && "left" === _.left ? "right" === v.left ? (n += p, _.left = "right", n += h, v.left = "left") : "left" === v.left && (n += p, _.left = "right", n -= h, v.left = "right") : n + h > y[2] && "right" === _.left ? "left" === v.left ? (n -= p, _.left = "left", n -= h, v.left = "right") : "right" === v.left && (n -= p, _.left = "left", n += h, v.left = "left") : "center" === _.left && (n + h > y[2] && "left" === v.left ? (n -= h, v.left = "right") : n < y[0] && "right" === v.left && (n += h, v.left = "left"))), "element" !== f && "both" !== f || (i < y[1] && "bottom" === v.top && (i += l, v.top = "top"), i + l > y[3] && "top" === v.top && (i -= l, v.top = "bottom")), "element" !== c && "both" !== c || (n < y[0] && ("right" === v.left ? (n += h, v.left = "left") : "center" === v.left && (n += h / 2, v.left = "left")), n + h > y[2] && ("left" === v.left ? (n -= h, v.left = "right") : "center" === v.left && (n -= h / 2, v.left = "right"))), "string" == typeof a ? a = a.split(",").map(function (t) {
            return t.trim()
          }) : !0 === a && (a = ["top", "left", "right", "bottom"]), a = a || [];
          var b = [],
            T = [];
          i < y[1] && (a.indexOf("top") >= 0 ? (i = y[1], b.push("top")) : T.push("top")), i + l > y[3] && (a.indexOf("bottom") >= 0 ? (i = y[3] - l, b.push("bottom")) : T.push("bottom")), n < y[0] && (a.indexOf("left") >= 0 ? (n = y[0], b.push("left")) : T.push("left")), n + h > y[2] && (a.indexOf("right") >= 0 ? (n = y[2] - h, b.push("right")) : T.push("right")), b.length && function () {
            var t = void 0;
            t = void 0 !== e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), m.push(t), b.forEach(function (e) {
              m.push(t + "-" + e)
            })
          }(), T.length && function () {
            var t = void 0;
            t = void 0 !== e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), m.push(t), T.forEach(function (e) {
              m.push(t + "-" + e)
            })
          }(), (b.indexOf("left") >= 0 || b.indexOf("right") >= 0) && (v.left = _.left = !1), (b.indexOf("top") >= 0 || b.indexOf("bottom") >= 0) && (v.top = _.top = !1), _.top === r.top && _.left === r.left && v.top === e.attachment.top && v.left === e.attachment.left || (e.updateAttachClasses(v, _), e.trigger("update", {
            attachment: v,
            targetAttachment: _
          }))
        }), w(function () {
          !1 !== e.options.addTargetClasses && u(e.target, m, g), u(e.element, m, g)
        }), {
          top: i,
          left: n
        }
      }
    });
    var H = b.Utils,
      o = H.getBounds,
      u = H.updateClasses,
      w = H.defer;
    b.modules.push({
      position: function (t) {
        var e = this,
          i = t.top,
          n = t.left,
          r = this.cache("element-bounds", function () {
            return o(e.element)
          }),
          s = r.height,
          a = r.width,
          l = this.getTargetBounds(),
          h = i + s,
          c = n + a,
          f = [];
        i <= l.bottom && h >= l.top && ["left", "right"].forEach(function (t) {
          var e = l[t];
          e !== n && e !== c || f.push(t)
        }), n <= l.right && c >= l.left && ["top", "bottom"].forEach(function (t) {
          var e = l[t];
          e !== i && e !== h || f.push(t)
        });
        var d = [],
          p = [],
          g = ["left", "top", "right", "bottom"];
        return d.push(this.getClass("abutted")), g.forEach(function (t) {
          d.push(e.getClass("abutted") + "-" + t)
        }), f.length && p.push(this.getClass("abutted")), f.forEach(function (t) {
          p.push(e.getClass("abutted") + "-" + t)
        }), w(function () {
          !1 !== e.options.addTargetClasses && u(e.target, p, d), u(e.element, p, d)
        }), !0
      }
    });
    var L = function () {
      function t(t, e) {
        var i = [],
          n = !0,
          o = !1,
          r = void 0;
        try {
          for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0);
        } catch (t) {
          o = !0, r = t
        } finally {
          try {
            !n && a.return && a.return()
          } finally {
            if (o) throw r
          }
        }
        return i
      }
      return function (e, i) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, i);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }
    }();
    return b.modules.push({
      position: function (t) {
        var e = t.top,
          i = t.left;
        if (this.options.shift) {
          var n = this.options.shift;
          "function" == typeof this.options.shift && (n = this.options.shift.call(this, {
            top: e,
            left: i
          }));
          var o = void 0,
            r = void 0;
          if ("string" == typeof n) {
            n = n.split(" "), n[1] = n[1] || n[0];
            var s = n,
              a = L(s, 2);
            o = a[0], r = a[1], o = parseFloat(o, 10), r = parseFloat(r, 10)
          } else o = n.top, r = n.left;
          return e += o, i += r, {
            top: e,
            left: i
          }
        }
      }
    }), Q
  }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."); + function (t) {
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery),
function () {
  function t(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function e(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      return typeof t
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    },
    o = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var n = e[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
      }
      return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
      }
    }(),
    r = function (t) {
      function e(t) {
        return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
      }

      function i(t) {
        return (t[0] || t).nodeType
      }

      function n() {
        return {
          bindType: s.end,
          delegateType: s.end,
          handle: function (e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
          }
        }
      }

      function o() {
        if (window.QUnit) return !1;
        var t = document.createElement("bootstrap");
        for (var e in a)
          if (void 0 !== t.style[e]) return {
            end: a[e]
          };
        return !1
      }

      function r(e) {
        var i = this,
          n = !1;
        return t(this).one(l.TRANSITION_END, function () {
          n = !0
        }), setTimeout(function () {
          n || l.triggerTransitionEnd(i)
        }, e), this
      }
      var s = !1,
        a = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend"
        },
        l = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            do {
              t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
          },
          getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e
          },
          reflow: function (t) {
            return t.offsetHeight
          },
          triggerTransitionEnd: function (e) {
            t(e).trigger(s.end)
          },
          supportsTransitionEnd: function () {
            return Boolean(s)
          },
          typeCheckConfig: function (t, n, o) {
            for (var r in o)
              if (o.hasOwnProperty(r)) {
                var s = o[r],
                  a = n[r],
                  l = a && i(a) ? "element" : e(a);
                if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + l + '" but expected type "' + s + '".')
              }
          }
        };
      return function () {
        s = o(), t.fn.emulateTransitionEnd = r, l.supportsTransitionEnd() && (t.event.special[l.TRANSITION_END] = n())
      }(), l
    }(jQuery),
    s = (function (t) {
      var e = "alert",
        n = t.fn[e],
        s = {
          DISMISS: '[data-dismiss="alert"]'
        },
        a = {
          CLOSE: "close.bs.alert",
          CLOSED: "closed.bs.alert",
          CLICK_DATA_API: "click.bs.alert.data-api"
        },
        l = {
          ALERT: "alert",
          FADE: "fade",
          SHOW: "show"
        },
        h = function () {
          function e(t) {
            i(this, e), this._element = t
          }
          return e.prototype.close = function (t) {
            t = t || this._element;
            var e = this._getRootElement(t);
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
          }, e.prototype.dispose = function () {
            t.removeData(this._element, "bs.alert"), this._element = null
          }, e.prototype._getRootElement = function (e) {
            var i = r.getSelectorFromElement(e),
              n = !1;
            return i && (n = t(i)[0]), n || (n = t(e).closest("." + l.ALERT)[0]), n
          }, e.prototype._triggerCloseEvent = function (e) {
            var i = t.Event(a.CLOSE);
            return t(e).trigger(i), i
          }, e.prototype._removeElement = function (e) {
            var i = this;
            if (t(e).removeClass(l.SHOW), !r.supportsTransitionEnd() || !t(e).hasClass(l.FADE)) return void this._destroyElement(e);
            t(e).one(r.TRANSITION_END, function (t) {
              return i._destroyElement(e, t)
            }).emulateTransitionEnd(150)
          }, e.prototype._destroyElement = function (e) {
            t(e).detach().trigger(a.CLOSED).remove()
          }, e._jQueryInterface = function (i) {
            return this.each(function () {
              var n = t(this),
                o = n.data("bs.alert");
              o || (o = new e(this), n.data("bs.alert", o)), "close" === i && o[i](this)
            })
          }, e._handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this)
            }
          }, o(e, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-alpha.6"
            }
          }]), e
        }();
      t(document).on(a.CLICK_DATA_API, s.DISMISS, h._handleDismiss(new h)), t.fn[e] = h._jQueryInterface, t.fn[e].Constructor = h, t.fn[e].noConflict = function () {
        return t.fn[e] = n, h._jQueryInterface
      }
    }(jQuery), function (t) {
      var e = "button",
        n = t.fn[e],
        r = {
          ACTIVE: "active",
          BUTTON: "btn",
          FOCUS: "focus"
        },
        s = {
          DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
          DATA_TOGGLE: '[data-toggle="buttons"]',
          INPUT: "input",
          ACTIVE: ".active",
          BUTTON: ".btn"
        },
        a = {
          CLICK_DATA_API: "click.bs.button.data-api",
          FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
        },
        l = function () {
          function e(t) {
            i(this, e), this._element = t
          }
          return e.prototype.toggle = function () {
            var e = !0,
              i = t(this._element).closest(s.DATA_TOGGLE)[0];
            if (i) {
              var n = t(this._element).find(s.INPUT)[0];
              if (n) {
                if ("radio" === n.type)
                  if (n.checked && t(this._element).hasClass(r.ACTIVE)) e = !1;
                  else {
                    var o = t(i).find(s.ACTIVE)[0];
                    o && t(o).removeClass(r.ACTIVE)
                  } e && (n.checked = !t(this._element).hasClass(r.ACTIVE), t(n).trigger("change")), n.focus()
              }
            }
            this._element.setAttribute("aria-pressed", !t(this._element).hasClass(r.ACTIVE)), e && t(this._element).toggleClass(r.ACTIVE)
          }, e.prototype.dispose = function () {
            t.removeData(this._element, "bs.button"), this._element = null
          }, e._jQueryInterface = function (i) {
            return this.each(function () {
              var n = t(this).data("bs.button");
              n || (n = new e(this), t(this).data("bs.button", n)), "toggle" === i && n[i]()
            })
          }, o(e, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-alpha.6"
            }
          }]), e
        }();
      t(document).on(a.CLICK_DATA_API, s.DATA_TOGGLE_CARROT, function (e) {
        e.preventDefault();
        var i = e.target;
        t(i).hasClass(r.BUTTON) || (i = t(i).closest(s.BUTTON)), l._jQueryInterface.call(t(i), "toggle")
      }).on(a.FOCUS_BLUR_DATA_API, s.DATA_TOGGLE_CARROT, function (e) {
        var i = t(e.target).closest(s.BUTTON)[0];
        t(i).toggleClass(r.FOCUS, /^focus(in)?$/.test(e.type))
      }), t.fn[e] = l._jQueryInterface, t.fn[e].Constructor = l, t.fn[e].noConflict = function () {
        return t.fn[e] = n, l._jQueryInterface
      }
    }(jQuery), function (t) {
      var e = "carousel",
        s = "bs.carousel",
        a = "." + s,
        l = t.fn[e],
        h = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0
        },
        c = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean"
        },
        f = {
          NEXT: "next",
          PREV: "prev",
          LEFT: "left",
          RIGHT: "right"
        },
        d = {
          SLIDE: "slide" + a,
          SLID: "slid" + a,
          KEYDOWN: "keydown" + a,
          MOUSEENTER: "mouseenter" + a,
          MOUSELEAVE: "mouseleave" + a,
          LOAD_DATA_API: "load.bs.carousel.data-api",
          CLICK_DATA_API: "click.bs.carousel.data-api"
        },
        u = {
          CAROUSEL: "carousel",
          ACTIVE: "active",
          SLIDE: "slide",
          RIGHT: "carousel-item-right",
          LEFT: "carousel-item-left",
          NEXT: "carousel-item-next",
          PREV: "carousel-item-prev",
          ITEM: "carousel-item"
        },
        p = {
          ACTIVE: ".active",
          ACTIVE_ITEM: ".active.carousel-item",
          ITEM: ".carousel-item",
          NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
          INDICATORS: ".carousel-indicators",
          DATA_SLIDE: "[data-slide], [data-slide-to]",
          DATA_RIDE: '[data-ride="carousel"]'
        },
        g = function () {
          function l(e, n) {
            i(this, l), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(n), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(p.INDICATORS)[0], this._addEventListeners()
          }
          return l.prototype.next = function () {
            if (this._isSliding) throw new Error("Carousel is sliding");
            this._slide(f.NEXT)
          }, l.prototype.nextWhenVisible = function () {
            document.hidden || this.next()
          }, l.prototype.prev = function () {
            if (this._isSliding) throw new Error("Carousel is sliding");
            this._slide(f.PREVIOUS)
          }, l.prototype.pause = function (e) {
            e || (this._isPaused = !0), t(this._element).find(p.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
          }, l.prototype.cycle = function (t) {
            t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
          }, l.prototype.to = function (e) {
            var i = this;
            this._activeElement = t(this._element).find(p.ACTIVE_ITEM)[0];
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0)) {
              if (this._isSliding) return void t(this._element).one(d.SLID, function () {
                return i.to(e)
              });
              if (n === e) return this.pause(), void this.cycle();
              var o = e > n ? f.NEXT : f.PREVIOUS;
              this._slide(o, this._items[e])
            }
          }, l.prototype.dispose = function () {
            t(this._element).off(a), t.removeData(this._element, s), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
          }, l.prototype._getConfig = function (i) {
            return i = t.extend({}, h, i), r.typeCheckConfig(e, i, c), i
          }, l.prototype._addEventListeners = function () {
            var e = this;
            this._config.keyboard && t(this._element).on(d.KEYDOWN, function (t) {
              return e._keydown(t)
            }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(d.MOUSEENTER, function (t) {
              return e.pause(t)
            }).on(d.MOUSELEAVE, function (t) {
              return e.cycle(t)
            })
          }, l.prototype._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
                break;
              default:
                return
            }
          }, l.prototype._getItemIndex = function (e) {
            return this._items = t.makeArray(t(e).parent().find(p.ITEM)), this._items.indexOf(e)
          }, l.prototype._getItemByDirection = function (t, e) {
            var i = t === f.NEXT,
              n = t === f.PREVIOUS,
              o = this._getItemIndex(e),
              r = this._items.length - 1;
            if ((n && 0 === o || i && o === r) && !this._config.wrap) return e;
            var s = t === f.PREVIOUS ? -1 : 1,
              a = (o + s) % this._items.length;
            return -1 === a ? this._items[this._items.length - 1] : this._items[a]
          }, l.prototype._triggerSlideEvent = function (e, i) {
            var n = t.Event(d.SLIDE, {
              relatedTarget: e,
              direction: i
            });
            return t(this._element).trigger(n), n
          }, l.prototype._setActiveIndicatorElement = function (e) {
            if (this._indicatorsElement) {
              t(this._indicatorsElement).find(p.ACTIVE).removeClass(u.ACTIVE);
              var i = this._indicatorsElement.children[this._getItemIndex(e)];
              i && t(i).addClass(u.ACTIVE)
            }
          }, l.prototype._slide = function (e, i) {
            var n = this,
              o = t(this._element).find(p.ACTIVE_ITEM)[0],
              s = i || o && this._getItemByDirection(e, o),
              a = Boolean(this._interval),
              l = void 0,
              h = void 0,
              c = void 0;
            if (e === f.NEXT ? (l = u.LEFT, h = u.NEXT, c = f.LEFT) : (l = u.RIGHT, h = u.PREV, c = f.RIGHT), s && t(s).hasClass(u.ACTIVE)) return void(this._isSliding = !1);
            if (!this._triggerSlideEvent(s, c).isDefaultPrevented() && o && s) {
              this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s);
              var g = t.Event(d.SLID, {
                relatedTarget: s,
                direction: c
              });
              r.supportsTransitionEnd() && t(this._element).hasClass(u.SLIDE) ? (t(s).addClass(h), r.reflow(s), t(o).addClass(l), t(s).addClass(l), t(o).one(r.TRANSITION_END, function () {
                t(s).removeClass(l + " " + h).addClass(u.ACTIVE), t(o).removeClass(u.ACTIVE + " " + h + " " + l), n._isSliding = !1, setTimeout(function () {
                  return t(n._element).trigger(g)
                }, 0)
              }).emulateTransitionEnd(600)) : (t(o).removeClass(u.ACTIVE), t(s).addClass(u.ACTIVE), this._isSliding = !1, t(this._element).trigger(g)), a && this.cycle()
            }
          }, l._jQueryInterface = function (e) {
            return this.each(function () {
              var i = t(this).data(s),
                o = t.extend({}, h, t(this).data());
              "object" === (void 0 === e ? "undefined" : n(e)) && t.extend(o, e);
              var r = "string" == typeof e ? e : o.slide;
              if (i || (i = new l(this, o), t(this).data(s, i)), "number" == typeof e) i.to(e);
              else if ("string" == typeof r) {
                if (void 0 === i[r]) throw new Error('No method named "' + r + '"');
                i[r]()
              } else o.interval && (i.pause(), i.cycle())
            })
          }, l._dataApiClickHandler = function (e) {
            var i = r.getSelectorFromElement(this);
            if (i) {
              var n = t(i)[0];
              if (n && t(n).hasClass(u.CAROUSEL)) {
                var o = t.extend({}, t(n).data(), t(this).data()),
                  a = this.getAttribute("data-slide-to");
                a && (o.interval = !1), l._jQueryInterface.call(t(n), o), a && t(n).data(s).to(a), e.preventDefault()
              }
            }
          }, o(l, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-alpha.6"
            }
          }, {
            key: "Default",
            get: function () {
              return h
            }
          }]), l
        }();
      t(document).on(d.CLICK_DATA_API, p.DATA_SLIDE, g._dataApiClickHandler), t(window).on(d.LOAD_DATA_API, function () {
        t(p.DATA_RIDE).each(function () {
          var e = t(this);
          g._jQueryInterface.call(e, e.data())
        })
      }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
        return t.fn[e] = l, g._jQueryInterface
      }
    }(jQuery), function (t) {
      var e = "collapse",
        s = "bs.collapse",
        a = t.fn[e],
        l = {
          toggle: !0,
          parent: ""
        },
        h = {
          toggle: "boolean",
          parent: "string"
        },
        c = {
          SHOW: "show.bs.collapse",
          SHOWN: "shown.bs.collapse",
          HIDE: "hide.bs.collapse",
          HIDDEN: "hidden.bs.collapse",
          CLICK_DATA_API: "click.bs.collapse.data-api"
        },
        f = {
          SHOW: "show",
          COLLAPSE: "collapse",
          COLLAPSING: "collapsing",
          COLLAPSED: "collapsed"
        },
        d = {
          WIDTH: "width",
          HEIGHT: "height"
        },
        u = {
          ACTIVES: ".card > .show, .card > .collapsing",
          DATA_TOGGLE: '[data-toggle="collapse"]'
        },
        p = function () {
          function a(e, n) {
            i(this, a), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(n), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
          }
          return a.prototype.toggle = function () {
            t(this._element).hasClass(f.SHOW) ? this.hide() : this.show()
          }, a.prototype.show = function () {
            var e = this;
            if (this._isTransitioning) throw new Error("Collapse is transitioning");
            if (!t(this._element).hasClass(f.SHOW)) {
              var i = void 0,
                n = void 0;
              if (this._parent && (i = t.makeArray(t(this._parent).find(u.ACTIVES)), i.length || (i = null)), !(i && (n = t(i).data(s)) && n._isTransitioning)) {
                var o = t.Event(c.SHOW);
                if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                  i && (a._jQueryInterface.call(t(i), "hide"), n || t(i).data(s, null));
                  var l = this._getDimension();
                  t(this._element).removeClass(f.COLLAPSE).addClass(f.COLLAPSING), this._element.style[l] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(f.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                  var h = function () {
                    t(e._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).addClass(f.SHOW), e._element.style[l] = "", e.setTransitioning(!1), t(e._element).trigger(c.SHOWN)
                  };
                  if (!r.supportsTransitionEnd()) return void h();
                  var d = l[0].toUpperCase() + l.slice(1),
                    p = "scroll" + d;
                  t(this._element).one(r.TRANSITION_END, h).emulateTransitionEnd(600), this._element.style[l] = this._element[p] + "px"
                }
              }
            }
          }, a.prototype.hide = function () {
            var e = this;
            if (this._isTransitioning) throw new Error("Collapse is transitioning");
            if (t(this._element).hasClass(f.SHOW)) {
              var i = t.Event(c.HIDE);
              if (t(this._element).trigger(i), !i.isDefaultPrevented()) {
                var n = this._getDimension(),
                  o = n === d.WIDTH ? "offsetWidth" : "offsetHeight";
                this._element.style[n] = this._element[o] + "px", r.reflow(this._element), t(this._element).addClass(f.COLLAPSING).removeClass(f.COLLAPSE).removeClass(f.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(f.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                var s = function () {
                  e.setTransitioning(!1), t(e._element).removeClass(f.COLLAPSING).addClass(f.COLLAPSE).trigger(c.HIDDEN)
                };
                if (this._element.style[n] = "", !r.supportsTransitionEnd()) return void s();
                t(this._element).one(r.TRANSITION_END, s).emulateTransitionEnd(600)
              }
            }
          }, a.prototype.setTransitioning = function (t) {
            this._isTransitioning = t
          }, a.prototype.dispose = function () {
            t.removeData(this._element, s), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
          }, a.prototype._getConfig = function (i) {
            return i = t.extend({}, l, i), i.toggle = Boolean(i.toggle), r.typeCheckConfig(e, i, h), i
          }, a.prototype._getDimension = function () {
            return t(this._element).hasClass(d.WIDTH) ? d.WIDTH : d.HEIGHT
          }, a.prototype._getParent = function () {
            var e = this,
              i = t(this._config.parent)[0],
              n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return t(i).find(n).each(function (t, i) {
              e._addAriaAndCollapsedClass(a._getTargetFromElement(i), [i])
            }), i
          }, a.prototype._addAriaAndCollapsedClass = function (e, i) {
            if (e) {
              var n = t(e).hasClass(f.SHOW);
              e.setAttribute("aria-expanded", n), i.length && t(i).toggleClass(f.COLLAPSED, !n).attr("aria-expanded", n)
            }
          }, a._getTargetFromElement = function (e) {
            var i = r.getSelectorFromElement(e);
            return i ? t(i)[0] : null
          }, a._jQueryInterface = function (e) {
            return this.each(function () {
              var i = t(this),
                o = i.data(s),
                r = t.extend({}, l, i.data(), "object" === (void 0 === e ? "undefined" : n(e)) && e);
              if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new a(this, r), i.data(s, o)), "string" == typeof e) {
                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                o[e]()
              }
            })
          }, o(a, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-alpha.6"
            }
          }, {
            key: "Default",
            get: function () {
              return l
            }
          }]), a
        }();
      t(document).on(c.CLICK_DATA_API, u.DATA_TOGGLE, function (e) {
        e.preventDefault();
        var i = p._getTargetFromElement(this),
          n = t(i).data(s),
          o = n ? "toggle" : t(this).data();
        p._jQueryInterface.call(t(i), o)
      }), t.fn[e] = p._jQueryInterface, t.fn[e].Constructor = p, t.fn[e].noConflict = function () {
        return t.fn[e] = a, p._jQueryInterface
      }
    }(jQuery), function (t) {
      var e = "dropdown",
        n = ".bs.dropdown",
        s = t.fn[e],
        a = {
          HIDE: "hide" + n,
          HIDDEN: "hidden" + n,
          SHOW: "show" + n,
          SHOWN: "shown" + n,
          CLICK: "click" + n,
          CLICK_DATA_API: "click.bs.dropdown.data-api",
          FOCUSIN_DATA_API: "focusin.bs.dropdown.data-api",
          KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api"
        },
        l = {
          BACKDROP: "dropdown-backdrop",
          DISABLED: "disabled",
          SHOW: "show"
        },
        h = {
          BACKDROP: ".dropdown-backdrop",
          DATA_TOGGLE: '[data-toggle="dropdown"]',
          FORM_CHILD: ".dropdown form",
          ROLE_MENU: '[role="menu"]',
          ROLE_LISTBOX: '[role="listbox"]',
          NAVBAR_NAV: ".navbar-nav",
          VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
        },
        c = function () {
          function e(t) {
            i(this, e), this._element = t, this._addEventListeners()
          }
          return e.prototype.toggle = function () {
            if (this.disabled || t(this).hasClass(l.DISABLED)) return !1;
            var i = e._getParentFromElement(this),
              n = t(i).hasClass(l.SHOW);
            if (e._clearMenus(), n) return !1;
            if ("ontouchstart" in document.documentElement && !t(i).closest(h.NAVBAR_NAV).length) {
              var o = document.createElement("div");
              o.className = l.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus)
            }
            var r = {
                relatedTarget: this
              },
              s = t.Event(a.SHOW, r);
            return t(i).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), t(i).toggleClass(l.SHOW), t(i).trigger(t.Event(a.SHOWN, r)), !1)
          }, e.prototype.dispose = function () {
            t.removeData(this._element, "bs.dropdown"), t(this._element).off(n), this._element = null
          }, e.prototype._addEventListeners = function () {
            t(this._element).on(a.CLICK, this.toggle)
          }, e._jQueryInterface = function (i) {
            return this.each(function () {
              var n = t(this).data("bs.dropdown");
              if (n || (n = new e(this), t(this).data("bs.dropdown", n)), "string" == typeof i) {
                if (void 0 === n[i]) throw new Error('No method named "' + i + '"');
                n[i].call(this)
              }
            })
          }, e._clearMenus = function (i) {
            if (!i || 3 !== i.which) {
              var n = t(h.BACKDROP)[0];
              n && n.parentNode.removeChild(n);
              for (var o = t.makeArray(t(h.DATA_TOGGLE)), r = 0; r < o.length; r++) {
                var s = e._getParentFromElement(o[r]),
                  c = {
                    relatedTarget: o[r]
                  };
                if (t(s).hasClass(l.SHOW) && !(i && ("click" === i.type && /input|textarea/i.test(i.target.tagName) || "focusin" === i.type) && t.contains(s, i.target))) {
                  var f = t.Event(a.HIDE, c);
                  t(s).trigger(f), f.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"), t(s).removeClass(l.SHOW).trigger(t.Event(a.HIDDEN, c)))
                }
              }
            }
          }, e._getParentFromElement = function (e) {
            var i = void 0,
              n = r.getSelectorFromElement(e);
            return n && (i = t(n)[0]), i || e.parentNode
          }, e._dataApiKeydownHandler = function (i) {
            if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName) && (i.preventDefault(), i.stopPropagation(), !this.disabled && !t(this).hasClass(l.DISABLED))) {
              var n = e._getParentFromElement(this),
                o = t(n).hasClass(l.SHOW);
              if (!o && 27 !== i.which || o && 27 === i.which) {
                if (27 === i.which) {
                  var r = t(n).find(h.DATA_TOGGLE)[0];
                  t(r).trigger("focus")
                }
                return void t(this).trigger("click")
              }
              var s = t(n).find(h.VISIBLE_ITEMS).get();
              if (s.length) {
                var a = s.indexOf(i.target);
                38 === i.which && a > 0 && a--, 40 === i.which && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus()
              }
            }
          }, o(e, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-alpha.6"
            }
          }]), e
        }();
      t(document).on(a.KEYDOWN_DATA_API, h.DATA_TOGGLE, c._dataApiKeydownHandler).on(a.KEYDOWN_DATA_API, h.ROLE_MENU, c._dataApiKeydownHandler).on(a.KEYDOWN_DATA_API, h.ROLE_LISTBOX, c._dataApiKeydownHandler).on(a.CLICK_DATA_API + " " + a.FOCUSIN_DATA_API, c._clearMenus).on(a.CLICK_DATA_API, h.DATA_TOGGLE, c.prototype.toggle).on(a.CLICK_DATA_API, h.FORM_CHILD, function (t) {
        t.stopPropagation()
      }), t.fn[e] = c._jQueryInterface, t.fn[e].Constructor = c, t.fn[e].noConflict = function () {
        return t.fn[e] = s, c._jQueryInterface
      }
    }(jQuery), function (t) {
      var e = "modal",
        s = ".bs.modal",
        a = t.fn[e],
        l = {
          backdrop: !0,
          keyboard: !0,
          focus: !0,
          show: !0
        },
        h = {
          backdrop: "(boolean|string)",
          keyboard: "boolean",
          focus: "boolean",
          show: "boolean"
        },
        c = {
          HIDE: "hide.bs.modal",
          HIDDEN: "hidden.bs.modal",
          SHOW: "show.bs.modal",
          SHOWN: "shown.bs.modal",
          FOCUSIN: "focusin.bs.modal",
          RESIZE: "resize.bs.modal",
          CLICK_DISMISS: "click.dismiss.bs.modal",
          KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
          MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
          MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
          CLICK_DATA_API: "click.bs.modal.data-api"
        },
        f = {
          SCROLLBAR_MEASURER: "modal-scrollbar-measure",
          BACKDROP: "modal-backdrop",
          OPEN: "modal-open",
          FADE: "fade",
          SHOW: "show"
        },
        d = {
          DIALOG: ".modal-dialog",
          DATA_TOGGLE: '[data-toggle="modal"]',
          DATA_DISMISS: '[data-dismiss="modal"]',
          FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
        },
        u = function () {
          function a(e, n) {
            i(this, a), this._config = this._getConfig(n), this._element = e, this._dialog = t(e).find(d.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
          }
          return a.prototype.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t)
          }, a.prototype.show = function (e) {
            var i = this;
            if (this._isTransitioning) throw new Error("Modal is transitioning");
            r.supportsTransitionEnd() && t(this._element).hasClass(f.FADE) && (this._isTransitioning = !0);
            var n = t.Event(c.SHOW, {
              relatedTarget: e
            });
            t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(f.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(c.CLICK_DISMISS, d.DATA_DISMISS, function (t) {
              return i.hide(t)
            }), t(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
              t(i._element).one(c.MOUSEUP_DISMISS, function (e) {
                t(e.target).is(i._element) && (i._ignoreBackdropClick = !0)
              })
            }), this._showBackdrop(function () {
              return i._showElement(e)
            }))
          }, a.prototype.hide = function (e) {
            var i = this;
            if (e && e.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");
            var n = r.supportsTransitionEnd() && t(this._element).hasClass(f.FADE);
            n && (this._isTransitioning = !0);
            var o = t.Event(c.HIDE);
            t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(c.FOCUSIN), t(this._element).removeClass(f.SHOW), t(this._element).off(c.CLICK_DISMISS), t(this._dialog).off(c.MOUSEDOWN_DISMISS), n ? t(this._element).one(r.TRANSITION_END, function (t) {
              return i._hideModal(t)
            }).emulateTransitionEnd(300) : this._hideModal())
          }, a.prototype.dispose = function () {
            t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(s), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
          }, a.prototype._getConfig = function (i) {
            return i = t.extend({}, l, i), r.typeCheckConfig(e, i, h), i
          }, a.prototype._showElement = function (e) {
            var i = this,
              n = r.supportsTransitionEnd() && t(this._element).hasClass(f.FADE);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && r.reflow(this._element), t(this._element).addClass(f.SHOW), this._config.focus && this._enforceFocus();
            var o = t.Event(c.SHOWN, {
                relatedTarget: e
              }),
              s = function () {
                i._config.focus && i._element.focus(), i._isTransitioning = !1, t(i._element).trigger(o)
              };
            n ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(300) : s()
          }, a.prototype._enforceFocus = function () {
            var e = this;
            t(document).off(c.FOCUSIN).on(c.FOCUSIN, function (i) {
              document === i.target || e._element === i.target || t(e._element).has(i.target).length || e._element.focus()
            })
          }, a.prototype._setEscapeEvent = function () {
            var e = this;
            this._isShown && this._config.keyboard ? t(this._element).on(c.KEYDOWN_DISMISS, function (t) {
              27 === t.which && e.hide()
            }) : this._isShown || t(this._element).off(c.KEYDOWN_DISMISS)
          }, a.prototype._setResizeEvent = function () {
            var e = this;
            this._isShown ? t(window).on(c.RESIZE, function (t) {
              return e._handleUpdate(t)
            }) : t(window).off(c.RESIZE)
          }, a.prototype._hideModal = function () {
            var e = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function () {
              t(document.body).removeClass(f.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(c.HIDDEN)
            })
          }, a.prototype._removeBackdrop = function () {
            this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
          }, a.prototype._showBackdrop = function (e) {
            var i = this,
              n = t(this._element).hasClass(f.FADE) ? f.FADE : "";
            if (this._isShown && this._config.backdrop) {
              var o = r.supportsTransitionEnd() && n;
              if (this._backdrop = document.createElement("div"), this._backdrop.className = f.BACKDROP, n && t(this._backdrop).addClass(n), t(this._backdrop).appendTo(document.body), t(this._element).on(c.CLICK_DISMISS, function (t) {
                  if (i._ignoreBackdropClick) return void(i._ignoreBackdropClick = !1);
                  t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide())
                }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(f.SHOW), !e) return;
              if (!o) return void e();
              t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(150)
            } else if (!this._isShown && this._backdrop) {
              t(this._backdrop).removeClass(f.SHOW);
              var s = function () {
                i._removeBackdrop(), e && e()
              };
              r.supportsTransitionEnd() && t(this._element).hasClass(f.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(150) : s()
            } else e && e()
          }, a.prototype._handleUpdate = function () {
            this._adjustDialog()
          }, a.prototype._adjustDialog = function () {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
          }, a.prototype._resetAdjustments = function () {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
          }, a.prototype._checkScrollbar = function () {
            this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
          }, a.prototype._setScrollbar = function () {
            var e = parseInt(t(d.FIXED_CONTENT).css("padding-right") || 0, 10);
            this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px")
          }, a.prototype._resetScrollbar = function () {
            document.body.style.paddingRight = this._originalBodyPadding
          }, a.prototype._getScrollbarWidth = function () {
            var t = document.createElement("div");
            t.className = f.SCROLLBAR_MEASURER, document.body.appendChild(t);
            var e = t.offsetWidth - t.clientWidth;
            return document.body.removeChild(t), e
          }, a._jQueryInterface = function (e, i) {
            return this.each(function () {
              var o = t(this).data("bs.modal"),
                r = t.extend({}, a.Default, t(this).data(), "object" === (void 0 === e ? "undefined" : n(e)) && e);
              if (o || (o = new a(this, r), t(this).data("bs.modal", o)), "string" == typeof e) {
                if (void 0 === o[e]) throw new Error('No method named "' + e + '"');
                o[e](i)
              } else r.show && o.show(i)
            })
          }, o(a, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-alpha.6"
            }
          }, {
            key: "Default",
            get: function () {
              return l
            }
          }]), a
        }();
      t(document).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
        var i = this,
          n = void 0,
          o = r.getSelectorFromElement(this);
        o && (n = t(o)[0]);
        var s = t(n).data("bs.modal") ? "toggle" : t.extend({}, t(n).data(), t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var a = t(n).one(c.SHOW, function (e) {
          e.isDefaultPrevented() || a.one(c.HIDDEN, function () {
            t(i).is(":visible") && i.focus()
          })
        });
        u._jQueryInterface.call(t(n), s, this)
      }), t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function () {
        return t.fn[e] = a, u._jQueryInterface
      }
    }(jQuery), function (t) {
      var e = "scrollspy",
        s = t.fn[e],
        a = {
          offset: 10,
          method: "auto",
          target: ""
        },
        l = {
          offset: "number",
          method: "string",
          target: "(string|element)"
        },
        h = {
          ACTIVATE: "activate.bs.scrollspy",
          SCROLL: "scroll.bs.scrollspy",
          LOAD_DATA_API: "load.bs.scrollspy.data-api"
        },
        c = {
          DROPDOWN_ITEM: "dropdown-item",
          DROPDOWN_MENU: "dropdown-menu",
          NAV_LINK: "nav-link",
          NAV: "nav",
          ACTIVE: "active"
        },
        f = {
          DATA_SPY: '[data-spy="scroll"]',
          ACTIVE: ".active",
          LIST_ITEM: ".list-item",
          LI: "li",
          LI_DROPDOWN: "li.dropdown",
          NAV_LINKS: ".nav-link",
          DROPDOWN: ".dropdown",
          DROPDOWN_ITEMS: ".dropdown-item",
          DROPDOWN_TOGGLE: ".dropdown-toggle"
        },
        d = {
          OFFSET: "offset",
          POSITION: "position"
        },
        u = function () {
          function s(e, n) {
            var o = this;
            i(this, s), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(h.SCROLL, function (t) {
              return o._process(t)
            }), this.refresh(), this._process()
          }
          return s.prototype.refresh = function () {
            var e = this,
              i = this._scrollElement !== this._scrollElement.window ? d.POSITION : d.OFFSET,
              n = "auto" === this._config.method ? i : this._config.method,
              o = n === d.POSITION ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
              var i = void 0,
                s = r.getSelectorFromElement(e);
              return s && (i = t(s)[0]), i && (i.offsetWidth || i.offsetHeight) ? [t(i)[n]().top + o, s] : null
            }).filter(function (t) {
              return t
            }).sort(function (t, e) {
              return t[0] - e[0]
            }).forEach(function (t) {
              e._offsets.push(t[0]), e._targets.push(t[1])
            })
          }, s.prototype.dispose = function () {
            t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
          }, s.prototype._getConfig = function (i) {
            if (i = t.extend({}, a, i), "string" != typeof i.target) {
              var n = t(i.target).attr("id");
              n || (n = r.getUID(e), t(i.target).attr("id", n)), i.target = "#" + n
            }
            return r.typeCheckConfig(e, i, l), i
          }, s.prototype._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
          }, s.prototype._getScrollHeight = function () {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          }, s.prototype._getOffsetHeight = function () {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight
          }, s.prototype._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), t >= i) {
              var n = this._targets[this._targets.length - 1];
              return void(this._activeTarget !== n && this._activate(n))
            }
            if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
            for (var o = this._offsets.length; o--;) {
              this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
            }
          }, s.prototype._activate = function (e) {
            this._activeTarget = e, this._clear();
            var i = this._selector.split(",");
            i = i.map(function (t) {
              return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            });
            var n = t(i.join(","));
            n.hasClass(c.DROPDOWN_ITEM) ? (n.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(c.ACTIVE), n.addClass(c.ACTIVE)) : n.parents(f.LI).find("> " + f.NAV_LINKS).addClass(c.ACTIVE), t(this._scrollElement).trigger(h.ACTIVATE, {
              relatedTarget: e
            })
          }, s.prototype._clear = function () {
            t(this._selector).filter(f.ACTIVE).removeClass(c.ACTIVE)
          }, s._jQueryInterface = function (e) {
            return this.each(function () {
              var i = t(this).data("bs.scrollspy"),
                o = "object" === (void 0 === e ? "undefined" : n(e)) && e;
              if (i || (i = new s(this, o), t(this).data("bs.scrollspy", i)), "string" == typeof e) {
                if (void 0 === i[e]) throw new Error('No method named "' + e + '"');
                i[e]()
              }
            })
          }, o(s, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-alpha.6"
            }
          }, {
            key: "Default",
            get: function () {
              return a
            }
          }]), s
        }();
      t(window).on(h.LOAD_DATA_API, function () {
        for (var e = t.makeArray(t(f.DATA_SPY)), i = e.length; i--;) {
          var n = t(e[i]);
          u._jQueryInterface.call(n, n.data())
        }
      }), t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function () {
        return t.fn[e] = s, u._jQueryInterface
      }
    }(jQuery), function (t) {
      var e = t.fn.tab,
        n = {
          HIDE: "hide.bs.tab",
          HIDDEN: "hidden.bs.tab",
          SHOW: "show.bs.tab",
          SHOWN: "shown.bs.tab",
          CLICK_DATA_API: "click.bs.tab.data-api"
        },
        s = {
          DROPDOWN_MENU: "dropdown-menu",
          ACTIVE: "active",
          DISABLED: "disabled",
          FADE: "fade",
          SHOW: "show"
        },
        a = {
          A: "a",
          LI: "li",
          DROPDOWN: ".dropdown",
          LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)",
          FADE_CHILD: "> .nav-item .fade, > .fade",
          ACTIVE: ".active",
          ACTIVE_CHILD: "> .nav-item > .active, > .active",
          DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
          DROPDOWN_TOGGLE: ".dropdown-toggle",
          DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        },
        l = function () {
          function e(t) {
            i(this, e), this._element = t
          }
          return e.prototype.show = function () {
            var e = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(s.ACTIVE) || t(this._element).hasClass(s.DISABLED))) {
              var i = void 0,
                o = void 0,
                l = t(this._element).closest(a.LIST)[0],
                h = r.getSelectorFromElement(this._element);
              l && (o = t.makeArray(t(l).find(a.ACTIVE)), o = o[o.length - 1]);
              var c = t.Event(n.HIDE, {
                  relatedTarget: this._element
                }),
                f = t.Event(n.SHOW, {
                  relatedTarget: o
                });
              if (o && t(o).trigger(c), t(this._element).trigger(f), !f.isDefaultPrevented() && !c.isDefaultPrevented()) {
                h && (i = t(h)[0]), this._activate(this._element, l);
                var d = function () {
                  var i = t.Event(n.HIDDEN, {
                      relatedTarget: e._element
                    }),
                    r = t.Event(n.SHOWN, {
                      relatedTarget: o
                    });
                  t(o).trigger(i), t(e._element).trigger(r)
                };
                i ? this._activate(i, i.parentNode, d) : d()
              }
            }
          }, e.prototype.dispose = function () {
            t.removeClass(this._element, "bs.tab"), this._element = null
          }, e.prototype._activate = function (e, i, n) {
            var o = this,
              l = t(i).find(a.ACTIVE_CHILD)[0],
              h = n && r.supportsTransitionEnd() && (l && t(l).hasClass(s.FADE) || Boolean(t(i).find(a.FADE_CHILD)[0])),
              c = function () {
                return o._transitionComplete(e, l, h, n)
              };
            l && h ? t(l).one(r.TRANSITION_END, c).emulateTransitionEnd(150) : c(), l && t(l).removeClass(s.SHOW)
          }, e.prototype._transitionComplete = function (e, i, n, o) {
            if (i) {
              t(i).removeClass(s.ACTIVE);
              var l = t(i.parentNode).find(a.DROPDOWN_ACTIVE_CHILD)[0];
              l && t(l).removeClass(s.ACTIVE), i.setAttribute("aria-expanded", !1)
            }
            if (t(e).addClass(s.ACTIVE), e.setAttribute("aria-expanded", !0), n ? (r.reflow(e), t(e).addClass(s.SHOW)) : t(e).removeClass(s.FADE), e.parentNode && t(e.parentNode).hasClass(s.DROPDOWN_MENU)) {
              var h = t(e).closest(a.DROPDOWN)[0];
              h && t(h).find(a.DROPDOWN_TOGGLE).addClass(s.ACTIVE), e.setAttribute("aria-expanded", !0)
            }
            o && o()
          }, e._jQueryInterface = function (i) {
            return this.each(function () {
              var n = t(this),
                o = n.data("bs.tab");
              if (o || (o = new e(this), n.data("bs.tab", o)), "string" == typeof i) {
                if (void 0 === o[i]) throw new Error('No method named "' + i + '"');
                o[i]()
              }
            })
          }, o(e, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-alpha.6"
            }
          }]), e
        }();
      t(document).on(n.CLICK_DATA_API, a.DATA_TOGGLE, function (e) {
        e.preventDefault(), l._jQueryInterface.call(t(this), "show")
      }), t.fn.tab = l._jQueryInterface, t.fn.tab.Constructor = l, t.fn.tab.noConflict = function () {
        return t.fn.tab = e, l._jQueryInterface
      }
    }(jQuery), function (t) {
      if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
      var e = "tooltip",
        s = ".bs.tooltip",
        a = t.fn[e],
        l = {
          animation: !0,
          template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          delay: 0,
          html: !1,
          selector: !1,
          placement: "top",
          offset: "0 0",
          constraints: [],
          container: !1
        },
        h = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "string",
          constraints: "array",
          container: "(string|element|boolean)"
        },
        c = {
          TOP: "bottom center",
          RIGHT: "middle left",
          BOTTOM: "top center",
          LEFT: "middle right"
        },
        f = {
          SHOW: "show",
          OUT: "out"
        },
        d = {
          HIDE: "hide" + s,
          HIDDEN: "hidden" + s,
          SHOW: "show" + s,
          SHOWN: "shown" + s,
          INSERTED: "inserted" + s,
          CLICK: "click" + s,
          FOCUSIN: "focusin" + s,
          FOCUSOUT: "focusout" + s,
          MOUSEENTER: "mouseenter" + s,
          MOUSELEAVE: "mouseleave" + s
        },
        u = {
          FADE: "fade",
          SHOW: "show"
        },
        p = {
          TOOLTIP: ".tooltip",
          TOOLTIP_INNER: ".tooltip-inner"
        },
        g = {
          element: !1,
          enabled: !1
        },
        m = {
          HOVER: "hover",
          FOCUS: "focus",
          CLICK: "click",
          MANUAL: "manual"
        },
        _ = function () {
          function a(t, e) {
            i(this, a), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
          }
          return a.prototype.enable = function () {
            this._isEnabled = !0
          }, a.prototype.disable = function () {
            this._isEnabled = !1
          }, a.prototype.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled
          }, a.prototype.toggle = function (e) {
            if (e) {
              var i = this.constructor.DATA_KEY,
                n = t(e.currentTarget).data(i);
              n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
            } else {
              if (t(this.getTipElement()).hasClass(u.SHOW)) return void this._leave(null, this);
              this._enter(null, this)
            }
          }, a.prototype.dispose = function () {
            clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
          }, a.prototype.show = function () {
            var e = this;
            if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
            var i = t.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              if (this._isTransitioning) throw new Error("Tooltip is transitioning");
              t(this.element).trigger(i);
              var n = t.contains(this.element.ownerDocument.documentElement, this.element);
              if (i.isDefaultPrevented() || !n) return;
              var o = this.getTipElement(),
                s = r.getUID(this.constructor.NAME);
              o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(u.FADE);
              var l = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                h = this._getAttachment(l),
                c = !1 === this.config.container ? document.body : t(this.config.container);
              t(o).data(this.constructor.DATA_KEY, this).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                attachment: h,
                element: o,
                target: this.element,
                classes: g,
                classPrefix: "bs-tether",
                offset: this.config.offset,
                constraints: this.config.constraints,
                addTargetClasses: !1
              }), r.reflow(o), this._tether.position(), t(o).addClass(u.SHOW);
              var d = function () {
                var i = e._hoverState;
                e._hoverState = null, e._isTransitioning = !1, t(e.element).trigger(e.constructor.Event.SHOWN), i === f.OUT && e._leave(null, e)
              };
              if (r.supportsTransitionEnd() && t(this.tip).hasClass(u.FADE)) return this._isTransitioning = !0, void t(this.tip).one(r.TRANSITION_END, d).emulateTransitionEnd(a._TRANSITION_DURATION);
              d()
            }
          }, a.prototype.hide = function (e) {
            var i = this,
              n = this.getTipElement(),
              o = t.Event(this.constructor.Event.HIDE);
            if (this._isTransitioning) throw new Error("Tooltip is transitioning");
            var s = function () {
              i._hoverState !== f.SHOW && n.parentNode && n.parentNode.removeChild(n), i.element.removeAttribute("aria-describedby"), t(i.element).trigger(i.constructor.Event.HIDDEN), i._isTransitioning = !1, i.cleanupTether(), e && e()
            };
            t(this.element).trigger(o), o.isDefaultPrevented() || (t(n).removeClass(u.SHOW), this._activeTrigger[m.CLICK] = !1, this._activeTrigger[m.FOCUS] = !1, this._activeTrigger[m.HOVER] = !1, r.supportsTransitionEnd() && t(this.tip).hasClass(u.FADE) ? (this._isTransitioning = !0, t(n).one(r.TRANSITION_END, s).emulateTransitionEnd(150)) : s(), this._hoverState = "")
          }, a.prototype.isWithContent = function () {
            return Boolean(this.getTitle())
          }, a.prototype.getTipElement = function () {
            return this.tip = this.tip || t(this.config.template)[0]
          }, a.prototype.setContent = function () {
            var e = t(this.getTipElement());
            this.setElementContent(e.find(p.TOOLTIP_INNER), this.getTitle()), e.removeClass(u.FADE + " " + u.SHOW), this.cleanupTether()
          }, a.prototype.setElementContent = function (e, i) {
            var o = this.config.html;
            "object" === (void 0 === i ? "undefined" : n(i)) && (i.nodeType || i.jquery) ? o ? t(i).parent().is(e) || e.empty().append(i) : e.text(t(i).text()): e[o ? "html" : "text"](i)
          }, a.prototype.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
          }, a.prototype.cleanupTether = function () {
            this._tether && this._tether.destroy()
          }, a.prototype._getAttachment = function (t) {
            return c[t.toUpperCase()]
          }, a.prototype._setListeners = function () {
            var e = this;
            this.config.trigger.split(" ").forEach(function (i) {
              if ("click" === i) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                return e.toggle(t)
              });
              else if (i !== m.MANUAL) {
                var n = i === m.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                  o = i === m.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                t(e.element).on(n, e.config.selector, function (t) {
                  return e._enter(t)
                }).on(o, e.config.selector, function (t) {
                  return e._leave(t)
                })
              }
              t(e.element).closest(".modal").on("hide.bs.modal", function () {
                return e.hide()
              })
            }), this.config.selector ? this.config = t.extend({}, this.config, {
              trigger: "manual",
              selector: ""
            }) : this._fixTitle()
          }, a.prototype._fixTitle = function () {
            var t = n(this.element.getAttribute("data-original-title"));
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
          }, a.prototype._enter = function (e, i) {
            var n = this.constructor.DATA_KEY;
            return i = i || t(e.currentTarget).data(n), i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusin" === e.type ? m.FOCUS : m.HOVER] = !0), t(i.getTipElement()).hasClass(u.SHOW) || i._hoverState === f.SHOW ? void(i._hoverState = f.SHOW) : (clearTimeout(i._timeout), i._hoverState = f.SHOW, i.config.delay && i.config.delay.show ? void(i._timeout = setTimeout(function () {
              i._hoverState === f.SHOW && i.show()
            }, i.config.delay.show)) : void i.show())
          }, a.prototype._leave = function (e, i) {
            var n = this.constructor.DATA_KEY;
            if (i = i || t(e.currentTarget).data(n), i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), e && (i._activeTrigger["focusout" === e.type ? m.FOCUS : m.HOVER] = !1), !i._isWithActiveTrigger()) {
              if (clearTimeout(i._timeout), i._hoverState = f.OUT, !i.config.delay || !i.config.delay.hide) return void i.hide();
              i._timeout = setTimeout(function () {
                i._hoverState === f.OUT && i.hide()
              }, i.config.delay.hide)
            }
          }, a.prototype._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1
          }, a.prototype._getConfig = function (i) {
            return i = t.extend({}, this.constructor.Default, t(this.element).data(), i), i.delay && "number" == typeof i.delay && (i.delay = {
              show: i.delay,
              hide: i.delay
            }), r.typeCheckConfig(e, i, this.constructor.DefaultType), i
          }, a.prototype._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
          }, a._jQueryInterface = function (e) {
            return this.each(function () {
              var i = t(this).data("bs.tooltip"),
                o = "object" === (void 0 === e ? "undefined" : n(e)) && e;
              if ((i || !/dispose|hide/.test(e)) && (i || (i = new a(this, o), t(this).data("bs.tooltip", i)), "string" == typeof e)) {
                if (void 0 === i[e]) throw new Error('No method named "' + e + '"');
                i[e]()
              }
            })
          }, o(a, null, [{
            key: "VERSION",
            get: function () {
              return "4.0.0-alpha.6"
            }
          }, {
            key: "Default",
            get: function () {
              return l
            }
          }, {
            key: "NAME",
            get: function () {
              return e
            }
          }, {
            key: "DATA_KEY",
            get: function () {
              return "bs.tooltip"
            }
          }, {
            key: "Event",
            get: function () {
              return d
            }
          }, {
            key: "EVENT_KEY",
            get: function () {
              return s
            }
          }, {
            key: "DefaultType",
            get: function () {
              return h
            }
          }]), a
        }();
      return t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
        return t.fn[e] = a, _._jQueryInterface
      }, _
    }(jQuery));
  ! function (r) {
    var a = "popover",
      l = ".bs.popover",
      h = r.fn[a],
      c = r.extend({}, s.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      }),
      f = r.extend({}, s.DefaultType, {
        content: "(string|element|function)"
      }),
      d = {
        FADE: "fade",
        SHOW: "show"
      },
      u = {
        TITLE: ".popover-title",
        CONTENT: ".popover-content"
      },
      p = {
        HIDE: "hide" + l,
        HIDDEN: "hidden" + l,
        SHOW: "show" + l,
        SHOWN: "shown" + l,
        INSERTED: "inserted" + l,
        CLICK: "click" + l,
        FOCUSIN: "focusin" + l,
        FOCUSOUT: "focusout" + l,
        MOUSEENTER: "mouseenter" + l,
        MOUSELEAVE: "mouseleave" + l
      },
      g = function (s) {
        function h() {
          return i(this, h), t(this, s.apply(this, arguments))
        }
        return e(h, s), h.prototype.isWithContent = function () {
          return this.getTitle() || this._getContent()
        }, h.prototype.getTipElement = function () {
          return this.tip = this.tip || r(this.config.template)[0]
        }, h.prototype.setContent = function () {
          var t = r(this.getTipElement());
          this.setElementContent(t.find(u.TITLE), this.getTitle()), this.setElementContent(t.find(u.CONTENT), this._getContent()), t.removeClass(d.FADE + " " + d.SHOW), this.cleanupTether()
        }, h.prototype._getContent = function () {
          return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
        }, h._jQueryInterface = function (t) {
          return this.each(function () {
            var e = r(this).data("bs.popover"),
              i = "object" === (void 0 === t ? "undefined" : n(t)) ? t : null;
            if ((e || !/destroy|hide/.test(t)) && (e || (e = new h(this, i), r(this).data("bs.popover", e)), "string" == typeof t)) {
              if (void 0 === e[t]) throw new Error('No method named "' + t + '"');
              e[t]()
            }
          })
        }, o(h, null, [{
          key: "VERSION",
          get: function () {
            return "4.0.0-alpha.6"
          }
        }, {
          key: "Default",
          get: function () {
            return c
          }
        }, {
          key: "NAME",
          get: function () {
            return a
          }
        }, {
          key: "DATA_KEY",
          get: function () {
            return "bs.popover"
          }
        }, {
          key: "Event",
          get: function () {
            return p
          }
        }, {
          key: "EVENT_KEY",
          get: function () {
            return l
          }
        }, {
          key: "DefaultType",
          get: function () {
            return f
          }
        }]), h
      }(s);
    r.fn[a] = g._jQueryInterface, r.fn[a].Constructor = g, r.fn[a].noConflict = function () {
      return r.fn[a] = h, g._jQueryInterface
    }
  }(jQuery)
}(),
function (t) {
  var e = {
      common: {
        init: function () {
          var e = t("body");
          e.addClass("loaded"), t("#trigger-overlay").click(function () {
            t(".menu").toggleClass("animate"), t(".bar").toggleClass("change"), t(".overlay-menu").toggleClass("open"), e.toggleClass("open")
          }), t(window).resize(function () {
            t(window).width() > 767 && (t(".body-sub").removeClass("overlayOpen"), t(".globalNavMenu").removeClass("overlayOpen"), t(".menu").removeClass("animate"), t(".bar").removeClass("change"), t(".hidden-nav").removeClass("animate"))
          }), t(".videoSlideWrapper").slick({
            dots: !0,
            responsive: [{
              breakpoint: 768,
              settings: {
                arrows: !1
              }
            }]
          })
        },
        finalize: function () {}
      },
      about: {
        init: function () {
          var e = t("body"),
            i = t(".person"),
            n = t("#closer");
          i.removeClass("active"), i.click(function () {
            i.removeClass("active"), t(this).addClass("active"), e.addClass("open").removeClass("closed"), t(".bar").addClass("change"), n.addClass("active")
          }), n.click(function () {
            t(".menu").toggleClass("animate"), t(".bar").removeClass("change"), i.removeClass("active"), e.toggleClass("open").addClass("closed"), t(this).removeClass("active")
          })
        },
        finalize: function () {}
      },
      contact: {
        init: function () {},
        finalize: function () {}
      },
      about_us: {
        init: function () {}
      }
    },
    i = {
      fire: function (t, i, n) {
        var o, r = e;
        i = void 0 === i ? "init" : i, o = "" !== t, o = o && r[t], (o = o && "function" == typeof r[t][i]) && r[t][i](n)
      },
      loadEvents: function () {
        i.fire("common"), t.each(document.body.className.replace(/-/g, "_").split(/\s+/), function (t, e) {
          i.fire(e), i.fire(e, "finalize")
        }), i.fire("common", "finalize")
      }
    };
  t(document).ready(i.loadEvents)
}(jQuery);
//# sourceMappingURL=main.js.map