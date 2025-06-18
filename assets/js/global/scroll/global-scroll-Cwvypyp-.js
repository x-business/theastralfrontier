var t = Object.defineProperty,
  i = (i, e, s) =>
    ((i, e, s) =>
      e in i
        ? t(i, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: s,
          })
        : (i[e] = s))(i, "symbol" != typeof e ? e + "" : e, s);
import { g as e } from "../../vendor/gsap/vendor-gsap-core-D4-kPFdx.js";
function s(t, i, e) {
  return Math.max(t, Math.min(i, e));
}
class o {
  advance(t) {
    var i;
    if (!this.isRunning) return;
    let e = !1;
    if (this.lerp)
      (this.value =
        ((r = this.value),
        (h = this.to),
        (a = 60 * this.lerp),
        (o = r),
        (n = h),
        (1 - (l = 1 - Math.exp(-a * t))) * o + l * n)),
        Math.round(this.value) === this.to &&
          ((this.value = this.to), (e = !0));
    else {
      this.currentTime += t;
      const i = s(0, this.currentTime / this.duration, 1);
      e = i >= 1;
      const o = e ? 1 : this.easing(i);
      this.value = this.from + (this.to - this.from) * o;
    }
    var o, n, l, r, h, a;
    null == (i = this.onUpdate) || i.call(this, this.value, e),
      e && this.stop();
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(
    t,
    i,
    {
      lerp: e = 0.1,
      duration: s = 1,
      easing: o = (t) => t,
      onStart: n,
      onUpdate: l,
    }
  ) {
    (this.from = this.value = t),
      (this.to = i),
      (this.lerp = e),
      (this.duration = s),
      (this.easing = o),
      (this.currentTime = 0),
      (this.isRunning = !0),
      null == n || n(),
      (this.onUpdate = l);
  }
}
class n {
  constructor({
    wrapper: t,
    content: e,
    autoResize: s = !0,
    debounce: o = 250,
  } = {}) {
    i(this, "resize", () => {
      this.onWrapperResize(), this.onContentResize();
    }),
      i(this, "onWrapperResize", () => {
        this.wrapper === window
          ? ((this.width = window.innerWidth),
            (this.height = window.innerHeight))
          : ((this.width = this.wrapper.clientWidth),
            (this.height = this.wrapper.clientHeight));
      }),
      i(this, "onContentResize", () => {
        this.wrapper === window
          ? ((this.scrollHeight = this.content.scrollHeight),
            (this.scrollWidth = this.content.scrollWidth))
          : ((this.scrollHeight = this.wrapper.scrollHeight),
            (this.scrollWidth = this.wrapper.scrollWidth));
      }),
      (this.wrapper = t),
      (this.content = e),
      s &&
        ((this.debouncedResize = (function (t, i) {
          let e;
          return function () {
            let s = arguments,
              o = this;
            clearTimeout(e),
              (e = setTimeout(function () {
                t.apply(o, s);
              }, i));
          };
        })(this.resize, o)),
        this.wrapper === window
          ? window.addEventListener("resize", this.debouncedResize, !1)
          : ((this.wrapperResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.wrapperResizeObserver.observe(this.wrapper)),
        (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
        this.contentResizeObserver.observe(this.content)),
      this.resize();
  }
  destroy() {
    var t, i;
    null == (t = this.wrapperResizeObserver) || t.disconnect(),
      null == (i = this.contentResizeObserver) || i.disconnect(),
      window.removeEventListener("resize", this.debouncedResize, !1);
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
class l {
  constructor() {
    this.events = {};
  }
  emit(t, ...i) {
    let e = this.events[t] || [];
    for (let s = 0, o = e.length; o > s; s++) e[s](...i);
  }
  on(t, i) {
    var e;
    return (
      (null == (e = this.events[t]) ? void 0 : e.push(i)) ||
        (this.events[t] = [i]),
      () => {
        var e;
        this.events[t] =
          null == (e = this.events[t]) ? void 0 : e.filter((t) => i !== t);
      }
    );
  }
  off(t, i) {
    var e;
    this.events[t] =
      null == (e = this.events[t]) ? void 0 : e.filter((t) => i !== t);
  }
  destroy() {
    this.events = {};
  }
}
const r = 100 / 6;
class h {
  constructor(t, { wheelMultiplier: e = 1, touchMultiplier: s = 1 }) {
    i(this, "onTouchStart", (t) => {
      const { clientX: i, clientY: e } = t.targetTouches
        ? t.targetTouches[0]
        : t;
      (this.touchStart.x = i),
        (this.touchStart.y = e),
        (this.lastDelta = {
          x: 0,
          y: 0,
        }),
        this.emitter.emit("scroll", {
          deltaX: 0,
          deltaY: 0,
          event: t,
        });
    }),
      i(this, "onTouchMove", (t) => {
        const { clientX: i, clientY: e } = t.targetTouches
            ? t.targetTouches[0]
            : t,
          s = -(i - this.touchStart.x) * this.touchMultiplier,
          o = -(e - this.touchStart.y) * this.touchMultiplier;
        (this.touchStart.x = i),
          (this.touchStart.y = e),
          (this.lastDelta = {
            x: s,
            y: o,
          }),
          this.emitter.emit("scroll", {
            deltaX: s,
            deltaY: o,
            event: t,
          });
      }),
      i(this, "onTouchEnd", (t) => {
        this.emitter.emit("scroll", {
          deltaX: this.lastDelta.x,
          deltaY: this.lastDelta.y,
          event: t,
        });
      }),
      i(this, "onWheel", (t) => {
        let { deltaX: i, deltaY: e, deltaMode: s } = t;
        (i *= 1 === s ? r : 2 === s ? this.windowWidth : 1),
          (e *= 1 === s ? r : 2 === s ? this.windowHeight : 1),
          (i *= this.wheelMultiplier),
          (e *= this.wheelMultiplier),
          this.emitter.emit("scroll", {
            deltaX: i,
            deltaY: e,
            event: t,
          });
      }),
      i(this, "onWindowResize", () => {
        (this.windowWidth = window.innerWidth),
          (this.windowHeight = window.innerHeight);
      }),
      (this.element = t),
      (this.wheelMultiplier = e),
      (this.touchMultiplier = s),
      (this.touchStart = {
        x: null,
        y: null,
      }),
      (this.emitter = new l()),
      window.addEventListener("resize", this.onWindowResize, !1),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, {
        passive: !1,
      }),
      this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
  on(t, i) {
    return this.emitter.on(t, i);
  }
  destroy() {
    this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize, !1),
      this.element.removeEventListener("wheel", this.onWheel, {
        passive: !1,
      }),
      this.element.removeEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.removeEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.removeEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
}
class a {
  constructor({
    wrapper: t = window,
    content: i = document.documentElement,
    wheelEventsTarget: e = t,
    eventsTarget: s = e,
    smoothWheel: r = !0,
    syncTouch: a = !1,
    syncTouchLerp: c = 0.075,
    touchInertiaMultiplier: d = 35,
    duration: u,
    easing: p = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    lerp: m = !u && 0.1,
    infinite: v = !1,
    orientation: g = "vertical",
    gestureOrientation: S = "vertical",
    touchMultiplier: w = 1,
    wheelMultiplier: f = 1,
    autoResize: y = !0,
    __experimental__naiveDimensions: _ = !1,
  } = {}) {
    (this.__isSmooth = !1),
      (this.__isScrolling = !1),
      (this.__isStopped = !1),
      (this.__isLocked = !1),
      (this.onVirtualScroll = ({ deltaX: t, deltaY: i, event: e }) => {
        if (e.ctrlKey) return;
        const s = e.type.includes("touch"),
          o = e.type.includes("wheel");
        if (
          this.options.syncTouch &&
          s &&
          "touchstart" === e.type &&
          !this.isStopped &&
          !this.isLocked
        )
          return void this.reset();
        const n = 0 === t && 0 === i,
          l =
            ("vertical" === this.options.gestureOrientation && 0 === i) ||
            ("horizontal" === this.options.gestureOrientation && 0 === t);
        if (n || l) return;
        let r = e.composedPath();
        if (
          ((r = r.slice(0, r.indexOf(this.rootElement))),
          r.find((t) => {
            var i, e, n, l, r;
            return (
              (null === (i = t.hasAttribute) || void 0 === i
                ? void 0
                : i.call(t, "data-lenis-prevent")) ||
              (s &&
                (null === (e = t.hasAttribute) || void 0 === e
                  ? void 0
                  : e.call(t, "data-lenis-prevent-touch"))) ||
              (o &&
                (null === (n = t.hasAttribute) || void 0 === n
                  ? void 0
                  : n.call(t, "data-lenis-prevent-wheel"))) ||
              ((null === (l = t.classList) || void 0 === l
                ? void 0
                : l.contains("lenis")) &&
                !(null === (r = t.classList) || void 0 === r
                  ? void 0
                  : r.contains("lenis-stopped")))
            );
          }))
        )
          return;
        if (this.isStopped || this.isLocked) return void e.preventDefault();
        if (
          ((this.isSmooth =
            (this.options.syncTouch && s) || (this.options.smoothWheel && o)),
          !this.isSmooth)
        )
          return (this.isScrolling = !1), void this.animate.stop();
        e.preventDefault();
        let h = i;
        "both" === this.options.gestureOrientation
          ? (h = Math.abs(i) > Math.abs(t) ? i : t)
          : "horizontal" === this.options.gestureOrientation && (h = t);
        const a = s && this.options.syncTouch,
          c = s && "touchend" === e.type && Math.abs(h) > 5;
        c && (h = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + h,
            Object.assign(
              {
                programmatic: !1,
              },
              a
                ? {
                    lerp: c ? this.options.syncTouchLerp : 1,
                  }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }
            )
          );
      }),
      (this.onNativeScroll = () => {
        if (!this.__preventNextScrollEvent && !this.isScrolling) {
          const t = this.animatedScroll;
          (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            (this.direction = Math.sign(this.animatedScroll - t)),
            this.emit();
        }
      }),
      (window.lenisVersion = "1.0.42"),
      (t !== document.documentElement && t !== document.body) || (t = window),
      (this.options = {
        wrapper: t,
        content: i,
        wheelEventsTarget: e,
        eventsTarget: s,
        smoothWheel: r,
        syncTouch: a,
        syncTouchLerp: c,
        touchInertiaMultiplier: d,
        duration: u,
        easing: p,
        lerp: m,
        infinite: v,
        gestureOrientation: S,
        orientation: g,
        touchMultiplier: w,
        wheelMultiplier: f,
        autoResize: y,
        __experimental__naiveDimensions: _,
      }),
      (this.animate = new o()),
      (this.emitter = new l()),
      (this.dimensions = new n({
        wrapper: t,
        content: i,
        autoResize: y,
      })),
      this.toggleClassName("lenis", !0),
      (this.velocity = 0),
      (this.isLocked = !1),
      (this.isStopped = !1),
      (this.isSmooth = a || r),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
      (this.virtualScroll = new h(s, {
        touchMultiplier: w,
        wheelMultiplier: f,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll);
  }
  destroy() {
    this.emitter.destroy(),
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        !1
      ),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.toggleClassName("lenis", !1),
      this.toggleClassName("lenis-smooth", !1),
      this.toggleClassName("lenis-scrolling", !1),
      this.toggleClassName("lenis-stopped", !1),
      this.toggleClassName("lenis-locked", !1);
  }
  on(t, i) {
    return this.emitter.on(t, i);
  }
  off(t, i) {
    return this.emitter.off(t, i);
  }
  setScroll(t) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = t)
      : (this.rootElement.scrollTop = t);
  }
  resize() {
    this.dimensions.resize();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    (this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.velocity = 0),
      this.animate.stop();
  }
  start() {
    this.isStopped && ((this.isStopped = !1), this.reset());
  }
  stop() {
    this.isStopped ||
      ((this.isStopped = !0), this.animate.stop(), this.reset());
  }
  raf(t) {
    const i = t - (this.time || t);
    (this.time = t), this.animate.advance(0.001 * i);
  }
  scrollTo(
    t,
    {
      offset: i = 0,
      immediate: e = !1,
      lock: o = !1,
      duration: n = this.options.duration,
      easing: l = this.options.easing,
      lerp: r = !n && this.options.lerp,
      onComplete: h,
      force: a = !1,
      programmatic: c = !0,
    } = {}
  ) {
    if ((!this.isStopped && !this.isLocked) || a) {
      if (["top", "left", "start"].includes(t)) t = 0;
      else if (["bottom", "right", "end"].includes(t)) t = this.limit;
      else {
        let e;
        if (
          ("string" == typeof t
            ? (e = document.querySelector(t))
            : (null == t ? void 0 : t.nodeType) && (e = t),
          e)
        ) {
          if (this.options.wrapper !== window) {
            const t = this.options.wrapper.getBoundingClientRect();
            i -= this.isHorizontal ? t.left : t.top;
          }
          const s = e.getBoundingClientRect();
          t = (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
        }
      }
      if ("number" == typeof t) {
        if (
          ((t = Math.round((t += i))),
          this.options.infinite
            ? c && (this.targetScroll = this.animatedScroll = this.scroll)
            : (t = s(0, t, this.limit)),
          e)
        )
          return (
            (this.animatedScroll = this.targetScroll = t),
            this.setScroll(this.scroll),
            this.reset(),
            void (null == h || h(this))
          );
        if (!c) {
          if (t === this.targetScroll) return;
          this.targetScroll = t;
        }
        this.animate.fromTo(this.animatedScroll, t, {
          duration: n,
          easing: l,
          lerp: r,
          onStart: () => {
            o && (this.isLocked = !0), (this.isScrolling = !0);
          },
          onUpdate: (t, i) => {
            (this.isScrolling = !0),
              (this.velocity = t - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = t),
              this.setScroll(this.scroll),
              c && (this.targetScroll = t),
              i || this.emit(),
              i &&
                (this.reset(),
                this.emit(),
                null == h || h(this),
                (this.__preventNextScrollEvent = !0),
                requestAnimationFrame(() => {
                  delete this.__preventNextScrollEvent;
                }));
          },
        });
      }
    }
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.__experimental__naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return "horizontal" === this.options.orientation;
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? ((this.animatedScroll % (t = this.limit)) + t) % t
      : this.animatedScroll;
    var t;
  }
  get progress() {
    return 0 === this.limit ? 1 : this.scroll / this.limit;
  }
  get isSmooth() {
    return this.__isSmooth;
  }
  set isSmooth(t) {
    this.__isSmooth !== t &&
      ((this.__isSmooth = t), this.toggleClassName("lenis-smooth", t));
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(t) {
    this.__isScrolling !== t &&
      ((this.__isScrolling = t), this.toggleClassName("lenis-scrolling", t));
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(t) {
    this.__isStopped !== t &&
      ((this.__isStopped = t), this.toggleClassName("lenis-stopped", t));
  }
  get isLocked() {
    return this.__isLocked;
  }
  set isLocked(t) {
    this.__isLocked !== t &&
      ((this.__isLocked = t), this.toggleClassName("lenis-locked", t));
  }
  get className() {
    let t = "lenis";
    return (
      this.isStopped && (t += " lenis-stopped"),
      this.isLocked && (t += " lenis-locked"),
      this.isScrolling && (t += " lenis-scrolling"),
      this.isSmooth && (t += " lenis-smooth"),
      t
    );
  }
  toggleClassName(t, i) {
    this.rootElement.classList.toggle(t, i),
      this.emitter.emit("className change", this);
  }
}
const c = new (class {
  constructor() {
    (this.lenis = null),
      (this.lastScrollTop = 0),
      (this.threshold = 50),
      (this.thresholdTop = 50),
      992 > window.innerWidth || this.init();
  }
  init() {
    this.initLenis(), this.initScrollDirectionCheck();
  }
  initLenis() {
    (this.lenis = new a({
      lerp: 0.12,
      wheelMultiplier: 0.8,
      touchMultiplier: 2,
      smoothTouch: !1,
    })),
      e.ticker.add((t) => {
        this.lenis && this.lenis.raf(1e3 * t);
      }),
      e.ticker.lagSmoothing(0);
  }
  initScrollDirectionCheck() {
    this.lenis &&
      this.lenis.on("scroll", (t) => {
        const i = t.targetScroll;
        Math.abs(this.lastScrollTop - i) < this.threshold ||
          (i > this.lastScrollTop
            ? document.body.setAttribute("data-scrolling-direction", "down")
            : document.body.setAttribute("data-scrolling-direction", "up"),
          (this.lastScrollTop = i),
          i > this.thresholdTop
            ? document.body.setAttribute("data-scrolling-started", "true")
            : document.body.setAttribute("data-scrolling-started", "false"));
      });
  }
  scrollTo(t, i = {}) {
    this.lenis && this.lenis.scrollTo(t, i);
  }
  stop() {
    this.lenis && this.lenis.stop();
  }
  start() {
    this.lenis && this.lenis.start();
  }
  destroy() {
    this.lenis &&
      (e.ticker.remove(this.lenis.raf),
      this.lenis.destroy(),
      (this.lenis = null));
  }
  getInstance() {
    return this.lenis;
  }
})();
export { c as default };
