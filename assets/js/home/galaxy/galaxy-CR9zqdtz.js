import { g as e } from "../../vendor/gsap/vendor-gsap-core-D4-kPFdx.js";
import { S as t } from "../../vendor/gsap/vendor-gsap-split-vj7Di18r.js";
import { D as a } from "../../vendor/gsap/vendor-gsap-draw-VPuGL5bZ.js";
e.registerPlugin(t, a);
class r {
  constructor() {
    (this.isSafari = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    )),
      (this.colorMap = {
        "is-red": "#B24F42",
        "is-green": "#4F8735",
        "is-blue": "#83C0AE",
        "is-yellow": "#E2AA43",
      }),
      (this.cardTimelines = new Map()),
      this.setInitialStates();
  }
  setInitialStates() {
    document.querySelectorAll(".galaxy_item").forEach((t) => {
      const a = t.querySelector(".galaxy_planet"),
        r = t.querySelector(".galaxy_svg");
      a &&
        e.set(a, {
          scale: 0,
        }),
        r &&
          e.set(r, {
            scale: 0,
          });
    });
  }
  init() {
    this.setInitialStyles(),
      this.createGalaxyObserver(),
      this.setupHoverAnimations();
  }
  animateCardEyebrowSvg(t) {
    const a = t.querySelector('[data-animation="galaxy-eyebrow-svg"]');
    if (!a) return;
    const r = "reveal-mask-" + Math.random().toString(36).substr(2, 9),
      o = a.querySelector("mask"),
      i = a.querySelector("g");
    o && i && ((o.id = r), i.setAttribute("mask", `url(#${r})`));
    const s = a.querySelector("mask rect");
    s &&
      (e.set(s, {
        attr: {
          x: 115,
          width: 0,
          height: 16,
          fill: "white",
        },
      }),
      e.to(s, {
        attr: {
          x: 0,
          width: 115,
        },
        duration: 0.7,
        ease: "power2.inOut",
      }));
  }
  resetCardEyebrowSvg(t) {
    const a = t.querySelector('[data-animation="galaxy-eyebrow-svg"]');
    if (!a) return;
    const r = a.querySelector("mask rect");
    r &&
      e.to(r, {
        attr: {
          x: 115,
          width: 0,
        },
        duration: 0.5,
        ease: "power2.inOut",
      });
  }
  animateGalaxyLines(t) {
    t.querySelectorAll("path").forEach((t) => {
      e.set(t, {
        drawSVG: "0%",
        stroke: "#8f7e77",
        zIndex: 1,
      }),
        e.to(t, {
          drawSVG: "100%",
          duration: 7,
          stagger: 0.5,
          ease: "power2.out",
        });
    });
  }
  animateGalaxyItem(t, a) {
    if (t.classList.contains("animated")) return;
    t.classList.add("animated");
    const r = t.querySelector(".galaxy_planet"),
      o = t.querySelector(".galaxy_svg");
    r &&
      o &&
      e
        .timeline({
          onComplete: () => {
            a && a.unobserve(t);
          },
        })
        .to(r, {
          scale: 1,
          duration: 1,
          ease: "power2.out",
        })
        .to(
          o,
          {
            scale: 1,
            duration: 1,
            ease: "power2.out",
          },
          ">-0.3"
        );
  }
  setInitialStyles() {
    const a = document.querySelectorAll(".galaxy_planet"),
      r = document.querySelectorAll(".galaxy_svg"),
      o = document.querySelectorAll(".galaxy_lines path"),
      i = document.querySelector(".page-bg_effect");
    e.set(a, {
      scale: 0,
    }),
      e.set(r, {
        scale: 0,
      }),
      o.forEach((t) => {
        e.set(t, {
          drawSVG: "0%",
          stroke: "#8f7e77",
          zIndex: 1,
        });
      }),
      i &&
        !this.isSafari &&
        e.set(i, {
          opacity: 0,
          backgroundColor: "#8f7e77",
        }),
      document.querySelectorAll(".galaxy-card").forEach((a) => {
        e.set(a, {
          opacity: 0,
          scale: 0.6,
          display: "none",
        }),
          a
            .querySelectorAll(
              '[data-animation="galaxy-eyebrow"], [data-animation="galaxy-heading"]'
            )
            .forEach((a) => {
              a._split && a._split.revert(),
                (a.style = ""),
                (a.innerHTML = a.textContent);
              const r = new t(a, {
                type: "chars",
                charsClass: "char",
              });
              e.set(r.chars, {
                opacity: 0,
              });
            });
        const r = a.querySelector('[data-animation="galaxy-paragraph"]');
        r &&
          (r._split && r._split.revert(),
          (r.style = ""),
          (r.innerHTML = r.textContent),
          new t(r, {
            type: "lines",
            linesClass: "line",
          }).lines.forEach((t) => {
            (document.createElement("div").style.overflow = "hidden"),
              (t.innerHTML = `<div class="line-inner">${t.innerHTML}</div>`),
              e.set(t.querySelector(".line-inner"), {
                y: "100%",
                opacity: 0,
              });
          }));
        const o = a.querySelector(".card_image-wrap");
        if (o) {
          e.set(o, {
            clipPath: "inset(100% 0% 0% 0%)",
          });
          const t = o.querySelector(".card_image");
          t &&
            e.set(t, {
              scale: 1.5,
              filter: this.isSafari ? "none" : "brightness(300%)",
            });
        }
        const i = a.querySelector(".card_content-icon");
        i &&
          e.set(i, {
            opacity: 0,
          });
      }),
      this.isSafari &&
        (document
          .querySelectorAll('[filter="url(#blurFilter)"]')
          .forEach((e) => e.removeAttribute("filter")),
        document
          .querySelectorAll(".card_svg > path")
          .forEach((e) => e.setAttribute("fill", "#131719"))),
      document.querySelectorAll(".galaxy-card").forEach((e, t) => {
        const a = e.querySelector(".card_svg");
        if (a) {
          const e = a.innerHTML,
            r = "card-" + t;
          a.innerHTML = e.replace(/{{uniqueId}}/g, r);
        }
      });
  }
  setupHoverAnimations() {
    Object.keys(this.colorMap).forEach((a) => {
      document.querySelectorAll(".galaxy_item." + a).forEach((r) => {
        const o = r.querySelector(".galaxy_planet");
        if (!o) return;
        let i = !1;
        o.addEventListener("mouseenter", () => {
          const o = document.querySelector(".galaxy-card." + a);
          if (!o) return;
          const s = this.cardTimelines.get(r);
          s && s.kill();
          const n = e.timeline({
            onStart: () => {
              i = !0;
            },
            onComplete: () => {
              i = !1;
            },
          });
          e.set(o, {
            display: "block",
            opacity: 0,
            scale: 0.6,
          }),
            this.cardTimelines.set(r, n),
            n.to(o, {
              opacity: 1,
              scale: 1,
              duration: 0.7,
              ease: "power2.out",
            });
          const l = document.querySelector(".page-bg_effect");
          l &&
            !this.isSafari &&
            e.to(l, {
              backgroundColor: this.colorMap[a],
              opacity: 1,
              duration: 1,
              ease: "power1.out",
            });
          const c = document.querySelector(".galaxy_line-path." + a);
          c &&
            e.to(c, {
              stroke: this.colorMap[a],
              zIndex: 4,
              duration: 0.3,
            });
          const d = r.querySelector(".galaxy_svg");
          d &&
            e.to(d, {
              color: this.colorMap[a],
              scale: 1.05,
              duration: 0.3,
            });
          const u = r.querySelector(".galaxy_mark");
          u &&
            e.to(u, {
              rotation: 45,
              color: "#FFFFFF",
              duration: 0.3,
              ease: "power2.out",
            }),
            document.querySelectorAll(".galaxy_svg").forEach((t) => {
              t !== d &&
                e.to(t, {
                  scale: 0.95,
                  duration: 0.3,
                });
            });
          const y = o.querySelector(".card_svg");
          this.isSafari
            ? e.fromTo(
                y,
                {
                  opacity: 0,
                  scale: 0.6,
                },
                {
                  opacity: 1,
                  scale: 1,
                  duration: 0.7,
                  ease: "power2.out",
                }
              )
            : this.animateCardWithFilter(y),
            o
              .querySelectorAll(
                '[data-animation="galaxy-eyebrow"], [data-animation="galaxy-heading"]'
              )
              .forEach((a) => {
                a._split && a._split.revert(),
                  (a.style = ""),
                  (a.innerHTML = a.textContent);
                const r = new t(a, {
                  type: "chars",
                  charsClass: "char",
                });
                e.set(r.chars, {
                  opacity: 0,
                }),
                  e.to(r.chars, {
                    opacity: 1,
                    duration: 0.5,
                    delay: 0.3,
                    stagger: {
                      each: 0.03,
                      from: "start",
                      grid: "auto",
                    },
                    ease: "power2.out",
                  });
              }),
            this.animateCardContent(o),
            this.animateCardEyebrowSvg(o);
        }),
          o.addEventListener("mouseleave", () => {
            const t = document.querySelector(".galaxy-card." + a);
            t &&
              (i
                ? e.delayedCall(0.1, () => {
                    this.handleCardClose(t, r, a);
                  })
                : this.handleCardClose(t, r, a));
          }),
          "ontouchstart" in window &&
            document.addEventListener("touchstart", (e) => {
              if (!o.contains(e.target)) {
                const e = document.querySelector(".galaxy-card." + a);
                this.handleCardClose(e, r, a);
              }
            });
      });
    });
  }
  animateCardWithFilter(t) {
    if (!t) return;
    const a = document.querySelector("#cardReveal feGaussianBlur"),
      r = document.querySelector("#cardReveal feDisplacementMap");
    if (!a || !r) return;
    t.style.filter = "url(#cardReveal)";
    const o = {
      stdDeviation: 120,
      scale: 400,
    };
    e.timeline({
      defaults: {
        duration: 1.2,
        ease: "expo.out",
      },
      onUpdate: () => {
        a.setAttribute("stdDeviation", o.stdDeviation),
          r.setAttribute("scale", o.scale);
      },
    })
      .to(
        o,
        {
          stdDeviation: 0,
          scale: 0,
        },
        0
      )
      .fromTo(
        t,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
        },
        0
      );
  }
  animateCardContent(a) {
    e.to(a, {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: "power2.out",
    }),
      a
        .querySelectorAll(
          '[data-animation="galaxy-eyebrow"], [data-animation="galaxy-heading"]'
        )
        .forEach((a, r) => {
          a._split && a._split.revert(),
            (a.style = ""),
            (a.innerHTML = a.textContent);
          const o = new t(a, {
            type: "chars",
            charsClass: "char",
          });
          e.set(o.chars, {
            opacity: 0,
          }),
            e.to(o.chars, {
              opacity: 1,
              duration: 0.5,
              delay: 0.3 + 0.1 * r,
              stagger: {
                each: 0.03,
                from: "start",
              },
              ease: "power2.out",
            });
        });
    const r = a.querySelector('[data-animation="galaxy-paragraph"]');
    if (r) {
      r._split && r._split.revert(),
        (r.style = ""),
        (r.innerHTML = r.textContent),
        new t(r, {
          type: "lines",
          linesClass: "line",
        }).lines.forEach((e) => {
          (document.createElement("div").style.overflow = "hidden"),
            (e.innerHTML = `<div class="line-inner">${e.innerHTML}</div>`);
        });
      const a = r.querySelectorAll(".line-inner");
      e.fromTo(
        a,
        {
          y: "100%",
          opacity: 0,
        },
        {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          stagger: 0.075,
          ease: "power2.out",
        }
      );
    }
    const o = a.querySelector(".card_image-wrap");
    if (o) {
      e.to(o, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.7,
        ease: "power2.inOut",
      });
      const t = o.querySelector(".card_image");
      t &&
        e.to(t, {
          scale: 1,
          filter: this.isSafari ? "none" : "brightness(100%)",
          duration: 0.7,
          ease: "power2.inOut",
        });
    }
    const i = a.querySelector(".card_content-icon");
    i &&
      e.to(i, {
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
        ease: "power2.out",
      });
  }
  createGalaxyObserver() {
    const e = document.querySelector(".section.section_galaxy");
    if (!e) return;
    const t = e.querySelector(".galaxy_lines"),
      a = ["is-blue", "is-red", "is-yellow", "is-green"],
      r = new IntersectionObserver(
        (e, r) => {
          e.forEach((e) => {
            if (e.isIntersecting) {
              const o = e.target;
              o === t
                ? (this.animateGalaxyLines(o), r.unobserve(o))
                : a.some((e) => o.classList.contains(e)) &&
                  this.animateGalaxyItem(o, r);
            }
          });
        },
        {
          threshold: 0.5,
        }
      );
    t && r.observe(t),
      a.forEach((t) => {
        e.querySelectorAll(".galaxy_item." + t).forEach((e) => r.observe(e));
      });
  }
  destroy() {
    this.cardTimelines.forEach((e) => e.kill()), this.cardTimelines.clear();
  }
  handleCardClose(t, a, r) {
    if (t) {
      const o = this.cardTimelines.get(a);
      o && o.kill();
      const i = e.timeline({
        onComplete: () => {
          e.set(t, {
            display: "none",
          });
        },
      });
      this.cardTimelines.set(a, i);
      const s = document.querySelector(".page-bg_effect");
      s &&
        !this.isSafari &&
        e.to(s, {
          opacity: 0,
          duration: 1,
          ease: "power1.out",
        });
      const n = document.querySelector(".galaxy_line-path." + r);
      n &&
        e.to(n, {
          stroke: "#8f7e77",
          zIndex: 1,
          duration: 0.3,
        }),
        document.querySelectorAll(".galaxy_svg").forEach((t) => {
          e.to(t, {
            color: "#8f7e77",
            scale: 1,
            duration: 0.3,
          });
        });
      const l = t.querySelector(".card_svg");
      if (this.isSafari)
        e.to(l, {
          opacity: 0,
          scale: 0.6,
          duration: 0.5,
          ease: "power2.in",
        });
      else {
        const t = document.querySelector("#cardReveal feGaussianBlur"),
          a = document.querySelector("#cardReveal feDisplacementMap");
        if (!t || !a || !l) return;
        let r = {
          stdDeviation: 0,
          scale: 0,
        };
        e.timeline({
          defaults: {
            duration: 0.7,
            ease: "expo.in",
          },
          onUpdate: () => {
            t.setAttribute("stdDeviation", r.stdDeviation),
              a.setAttribute("scale", r.scale);
          },
        })
          .to(
            r,
            {
              stdDeviation: 120,
              scale: 400,
            },
            0
          )
          .to(
            l,
            {
              opacity: 0,
              scale: 0.5,
              duration: 0.7,
              onComplete: () => {
                l.style.filter = "none";
              },
            },
            0
          );
      }
      e.to(t, {
        opacity: 0,
        scale: 0.6,
        duration: 0.5,
        ease: "power2.in",
      });
      const c = t.querySelectorAll(".char");
      e.to(c, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      const d = t.querySelectorAll(".line-inner");
      e.to(d, {
        y: "100%",
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      const u = t.querySelector(".card_image-wrap");
      if (u) {
        e.to(u, {
          clipPath: "inset(100% 0% 0% 0%)",
          duration: 0.5,
          ease: "power2.inOut",
        });
        const t = u.querySelector(".card_image");
        t &&
          e.to(t, {
            scale: 1.5,
            filter: this.isSafari ? "none" : "brightness(300%)",
            duration: 0.5,
            ease: "power2.inOut",
          });
      }
      const y = a.querySelector(".galaxy_mark");
      y &&
        e.to(y, {
          rotation: 0,
          color: "currentColor",
          duration: 0.3,
          ease: "power2.out",
        }),
        this.resetCardEyebrowSvg(t);
      const p = t.querySelector(".card_content-icon");
      p &&
        e.to(p, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
    }
  }
}
const o = new r(),
  i = {
    init: () => {
      o.init();
    },
  };
export { r as default, i as galaxy };
