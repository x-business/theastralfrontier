import { g as t } from "../vendor/gsap/vendor-gsap-core-D4-kPFdx.js";
import { F as e } from "../global/core/global-core-Cx4mqg2V.js";
document.addEventListener("DOMContentLoaded", () => {
  const a = {
    get textAnimator() {
      return window.textAnimations;
    },
    get svgAnimator() {
      return window.svgAnimations;
    },
    async init() {
      this.animateHeroImage();
      const a = document.querySelector(".details_bg-svg");
      if (a) {
        t.set(a, {
          scale: 0.7,
          opacity: 0.6,
        });
        const e = new IntersectionObserver(
          (a) => {
            a.forEach((a) => {
              a.isIntersecting &&
                (t.to(a.target, {
                  scale: 1,
                  opacity: 1,
                  duration: 1.5,
                  ease: "power2.out",
                }),
                e.unobserve(a.target));
            });
          },
          {
            threshold: 0.2,
          }
        );
        e.observe(a);
      }
      document.querySelectorAll('[data-text-trigger="load"]').forEach((e) => {
        t.set(e, {
          visibility: "hidden",
        });
      });
      try {
        const t = [
          new e("KH Interference").load(null, 5e3),
          new e("PP Right Grotesk Text").load(null, 5e3),
        ];
        await Promise.all(t), this.initializeAnimations();
      } catch (i) {
        this.initializeAnimations();
      }
    },
    animateHeroImage() {
      const e = document.querySelector('[data-result-animation="image"]');
      e &&
        (t.set(e, {
          scale: 2,
          filter: "brightness(600%)",
          opacity: 0,
          visibility: "visible",
        }),
        t.to(e, {
          scale: 1,
          filter: "brightness(100%)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
        }));
    },
    initializeAnimations() {
      document.querySelectorAll('[data-animation="fade"]').forEach((e) => {
        t.set(e, {
          opacity: 0,
        });
      }),
        t.timeline().add(() => {
          this.animateTextElements(),
            this.animateSVGElements(),
            this.animateFadeElements();
        });
    },
    animateTextElements() {
      document
        .querySelectorAll(
          '[data-text-animation="random"][data-text-trigger="load"]'
        )
        .forEach((e) => {
          t.set(e, {
            visibility: "visible",
          });
          const a = parseFloat(e.getAttribute("data-delay")) || 0;
          this.textAnimator.randomAnimation(e, a);
        }),
        document
          .querySelectorAll(
            '[data-text-animation="wipe"][data-text-trigger="load"]'
          )
          .forEach((e) => {
            t.set(e, {
              visibility: "visible",
            });
            const a = parseFloat(e.getAttribute("data-delay")) || 0;
            this.textAnimator.wipeAnimation(e, a);
          }),
        document
          .querySelectorAll(
            '[data-text-animation="reveal"][data-text-trigger="load"]'
          )
          .forEach((e) => {
            t.set(e, {
              visibility: "visible",
            });
            const a = parseFloat(e.getAttribute("data-delay")) || 0;
            this.textAnimator.revealAnimation(e, a);
          });
    },
    animateSVGElements() {
      document
        .querySelectorAll('.svg-wrapper[data-svg-trigger="load"]')
        .forEach((t) => {
          this.svgAnimator.animate(t);
        });
    },
    animateFadeElements() {
      document.querySelectorAll('[data-animation="fade"]').forEach((e) => {
        const a = parseFloat(e.getAttribute("data-delay")) || 0;
        t.fromTo(
          e,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            visibility: "visible",
            duration: 1,
            delay: a,
            ease: "power2.out",
          }
        );
      });
    },
  };
  document.body.classList.contains("fade-in")
    ? a.init()
    : document.body.addEventListener(
        "transitionend",
        (t) => {
          "opacity" === t.propertyName && a.init();
        },
        {
          once: !0,
        }
      );
});
