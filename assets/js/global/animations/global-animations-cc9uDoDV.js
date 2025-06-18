import { g as t } from "../../vendor/gsap/vendor-gsap-core-D4-kPFdx.js";
import { S as e } from "../../vendor/gsap/vendor-gsap-split-vj7Di18r.js";
class i {
  constructor() {
    if (window.svgAnimationsInstance) return window.svgAnimationsInstance;
    (this.isMobile = 991 >= window.innerWidth),
      (this.initialized = !1),
      this.initObserver(),
      (window.svgAnimationsInstance = this);
  }
  animate(e, i = {}) {
    const { duration: r = 2, delay: s = 0 } = i;
    if (!e) return;
    const a = e.getAttribute("data-direction") || "forward";
    t.set(e, {
      visibility: "visible",
      clipPath:
        "reverse" === a ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
      "-webkit-clip-path":
        "reverse" === a ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
      webkitClipPath:
        "reverse" === a ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
      transform: "translateZ(0)",
    });
    const n = {
      clipPath: "inset(0% 0% 0% 0%)",
      "-webkit-clip-path": "inset(0% 0% 0% 0%)",
      webkitClipPath: "inset(0% 0% 0% 0%)",
      duration: r,
      delay: s,
      ease: "power2.inOut",
      force3D: !0,
    };
    return t.to(e, n);
  }
  initObserver() {
    if (this.initialized) return;
    this.initialized = !0;
    const e = this.isMobile
        ? {
            threshold: 0,
            rootMargin: "50px",
          }
        : {
            threshold: 0,
            rootMargin: "-200px",
          },
      i = new IntersectionObserver((t) => {
        t.forEach((t) => {
          if (t.isIntersecting) {
            const e = t.target.getAttribute("data-svg-trigger"),
              r = t.target.getAttribute("data-direction");
            if (
              (this.animate(t.target),
              i.unobserve(t.target),
              "planet1" === e && "reverse" === r)
            ) {
              const t = document.querySelector(
                '.svg-wrapper[data-svg-trigger="planet1"][data-direction="forward"]'
              );
              t && (this.animate(t), i.unobserve(t));
            }
          }
        });
      }, e),
      r = new Set();
    document
      .querySelectorAll(
        '.svg-wrapper[data-svg-trigger="scroll"], .svg-wrapper[data-svg-trigger="planet1"]'
      )
      .forEach((e) => {
        if (r.has(e)) return;
        const s = e.getAttribute("data-direction") || "forward";
        t.set(e, {
          visibility: "visible",
          clipPath:
            "reverse" === s ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
          "-webkit-clip-path":
            "reverse" === s ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
          webkitClipPath:
            "reverse" === s ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
          transform: "translateZ(0)",
        }),
          i.observe(e),
          r.add(e);
      });
  }
  animateHero(e, i, r = "-=2") {
    return (
      "reverse" === (e.dataset.direction || "forward")
        ? t.set(e, {
            clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            "-webkit-clip-path":
              "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
            webkitClipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
          })
        : t.set(e, {
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            "-webkit-clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
            webkitClipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          }),
      i.to(
        e,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          "-webkit-clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          webkitClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 2,
          ease: "power2.inOut",
        },
        r
      )
    );
  }
}
const r = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: i,
    },
    Symbol.toStringTag,
    {
      value: "Module",
    }
  )
);
t.registerPlugin(e);
const s = 0.8,
  a = 1.2,
  n = 0.8,
  o = 0.5,
  l = 0.3,
  c = 0.07,
  p = 0.2,
  h = 0.03,
  d = "power2.in",
  u = "power2.out",
  y = "power2.inOut",
  g = 0.15,
  m = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: class {
          constructor() {
            (this.splits = new Map()),
              (this.lettersAndSymbols = [
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "g",
                "h",
                "i",
                "j",
                "k",
                "l",
                "m",
                "n",
                "o",
                "p",
                "q",
                "r",
                "s",
                "t",
                "u",
                "v",
                "w",
                "x",
                "y",
                "z",
                "!",
                "@",
                "#",
                "$",
                "%",
                "^",
                "&",
                "*",
                "-",
                "_",
                "+",
                "=",
                ";",
                ":",
                "<",
                ">",
                ",",
              ]),
              (this.splitTextLines = null),
              (this.splitTextLetters = []),
              this.init(),
              this.initObserver(),
              this.setupNavLinkAnimations();
          }
          init() {
            document.querySelectorAll("[data-text-animation]").forEach((i) => {
              this.splits.has(i) && this.splits.get(i).revert();
              const r = i.dataset.textAnimation;
              let s;
              s =
                "reveal" === r
                  ? {
                      type: "lines",
                      linesClass: "line",
                      lineThreshold: 0.3,
                    }
                  : "wipe" === r || "decrypt" === r
                  ? {
                      type: "lines,words,chars",
                      linesClass: "line",
                      wordsClass: "word",
                      charsClass: "char",
                      lineThreshold: 0.3,
                    }
                  : {
                      type: "chars",
                      charsClass: "char",
                    };
              const a = new e(i, s);
              this.splits.set(i, a),
                "reveal" === r
                  ? a.lines.forEach((e) => {
                      const i = e.innerHTML;
                      (e.innerHTML = `<div class="line-inner">${i}</div>`),
                        (e.style.overflow = "hidden");
                      const r = e.querySelector(".line-inner");
                      t.set(r, {
                        y: "100%",
                      });
                    })
                  : "wipe" === r
                  ? a.lines.forEach((e) => {
                      const i = e.querySelectorAll(".char");
                      t.set(i, {
                        opacity: 0,
                      });
                    })
                  : "decrypt" === r
                  ? a.lines.forEach((e) => {
                      const i = e.querySelectorAll(".char");
                      t.set(i, {
                        opacity: 0,
                      });
                    })
                  : t.set(a.chars, {
                      opacity: 0,
                    });
            });
          }
          wipeAnimation(e, i = 0) {
            const r = this.splits.get(e);
            r &&
              r.lines.forEach((e, r) => {
                const a = e.querySelectorAll(".char");
                t.to(a, {
                  opacity: 1,
                  duration: s,
                  stagger: c,
                  ease: u,
                  delay: i + r * g,
                });
              });
          }
          revealAnimation(e, i = 0) {
            if (!this.splits.get(e)) return;
            const r = e.querySelectorAll(".line-inner"),
              s = e.getAttribute("data-text-trigger");
            r.forEach((t) => {
              "load" === s
                ? (t.style.textAlign = "left")
                : "modal" === s && (t.style.textAlign = "center");
            }),
              t.to(r, {
                y: "0%",
                duration: a,
                stagger: p,
                delay: i,
                ease: y,
              });
          }
          randomAnimation(e, i = 0) {
            const r = this.splits.get(e);
            r &&
              t.to(r.chars, {
                opacity: 1,
                duration: n,
                delay: i,
                stagger: {
                  amount: n,
                  from: "random",
                },
                ease: u,
              });
          }
          decryptAnimation(e, i = 0) {
            const r = this.splits.get(e);
            if (!r) return;
            const s = t.timeline({
              delay: i,
            });
            return (
              r.lines.forEach((e, i) => {
                const r = e.querySelectorAll(".char"),
                  a = t.timeline();
                a.to(r, {
                  opacity: 1,
                  duration: o,
                  ease: d,
                }),
                  r.forEach((t) => {
                    const e = t.innerHTML;
                    a.to(
                      t,
                      {
                        duration: o / 10,
                        repeat: 3,
                        onRepeat: () => {
                          t.innerHTML =
                            this.lettersAndSymbols[
                              Math.floor(
                                Math.random() * this.lettersAndSymbols.length
                              )
                            ];
                        },
                        onComplete: () => {
                          t.innerHTML = e;
                        },
                        repeatRefresh: !0,
                        repeatDelay: o / 12.5,
                        ease: "none",
                      },
                      "<+=" + c
                    );
                  }),
                  s.add(a, i * g);
              }),
              s
            );
          }
          setupNavLinkAnimations() {
            const i = document.querySelectorAll(".nav-link");
            i.forEach((r) => {
              if (!this.splits.has(r)) {
                const t = new e(r, {
                  type: "chars",
                  charsClass: "char",
                });
                this.splits.set(r, t);
              }
              const s = r.querySelectorAll(".char");
              t.set(s, {
                opacity: 1,
              });
              const a = t.timeline({
                paused: !0,
              });
              s.forEach((t, e) => {
                a.to(
                  t,
                  {
                    opacity: 0.3,
                    duration: l,
                    ease: u,
                  },
                  e * h
                ).to(
                  t,
                  {
                    opacity: 1,
                    duration: l,
                    ease: u,
                  },
                  e * h + l / 2
                );
              }),
                r.addEventListener("mouseenter", () => {
                  a.restart(),
                    i.forEach((e) => {
                      e !== r &&
                        t.to(e.querySelectorAll(".char"), {
                          opacity: 0.6,
                          duration: l,
                          ease: u,
                        });
                    });
                }),
                r.addEventListener("mouseleave", () => {
                  i.forEach((e) => {
                    e !== r &&
                      t.to(e.querySelectorAll(".char"), {
                        opacity: 1,
                        duration: l,
                        ease: u,
                      });
                  });
                });
            });
          }
          animate(t) {
            if (!t) return;
            const e = t.dataset.textAnimation,
              i = parseFloat(t.dataset.delay) || 0;
            switch (e) {
              case "wipe":
                this.wipeAnimation(t, i);
                break;
              case "reveal":
                this.revealAnimation(t, i);
                break;
              case "random":
                this.randomAnimation(t, i);
                break;
              case "decrypt":
                this.decryptAnimation(t, i);
            }
          }
          destroy() {
            this.splits.forEach((t) => t.revert()), this.splits.clear();
          }
          initObserver() {
            const t = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting &&
                    (this.animate(e.target), t.unobserve(e.target));
                });
              },
              {
                threshold: 0.2,
                rootMargin: "0px",
              }
            );
            document
              .querySelectorAll('[data-text-trigger="scroll"]')
              .forEach((e) => t.observe(e));
          }
          performSplit() {
            try {
              this.splitTextLines && this.splitTextLines.revert(),
                Array.isArray(this.splitTextLetters) &&
                  this.splitTextLetters.forEach((t) => {
                    t && t.revert();
                  }),
                (this.splitTextLetters = []),
                t.set(".planet_heading-wrap", {
                  display: "block",
                  autoAlpha: 0,
                }),
                document.querySelectorAll('[data-text-animation="reveal"]'),
                document.querySelectorAll('[data-text-animation="wipe"]'),
                document.querySelectorAll('[data-text-animation="decrypt"]'),
                document.querySelectorAll('[data-text-animation="random"]'),
                document
                  .querySelectorAll(".planet_heading-wrap")
                  .forEach((e, i) => {
                    0 === i
                      ? t.set(e, {
                          display: "flex",
                          autoAlpha: 1,
                          clearProps: "opacity,visibility",
                        })
                      : t.set(e, {
                          display: "none",
                          autoAlpha: 1,
                          clearProps: "opacity,visibility",
                        });
                  });
            } catch (e) {
              (this.splitTextLines = null), (this.splitTextLetters = []);
            }
          }
        },
      },
      Symbol.toStringTag,
      {
        value: "Module",
      }
    )
  );
export { i as S, r as s, m as t };
