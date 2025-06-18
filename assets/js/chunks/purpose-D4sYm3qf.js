import { g as e } from "../vendor/gsap/vendor-gsap-core-D4-kPFdx.js";
import { D as t } from "../vendor/gsap/vendor-gsap-draw-VPuGL5bZ.js";
e.registerPlugin(t);
class r {
  constructor() {
    (this.animations = new Map()),
      (this.config = {
        threshold: 0.5,
        animation: {
          earth: {
            duration: 1,
            ease: "power2.out",
          },
          circles: {
            duration: 0.7,
            stagger: 0.15,
          },
          paths: {
            duration: 25,
            stagger: 1.25,
            delay: 0.5,
          },
        },
      }),
      document.addEventListener("preloaderComplete", () => this.init());
  }
  init() {
    document.querySelectorAll(".purpose_image-wrap").forEach((e) => {
      const t = {
        paths: e.querySelectorAll(".purpose_lines-svg path"),
        earth: e.querySelector(".purpose_planet-earth"),
        circles: e.querySelectorAll(".galaxy-purpose_svg circle"),
      };
      this.animations.set(e, t),
        this.setInitialStates(t),
        this.createObserver(e);
    });
  }
  setInitialStates({ paths: t, earth: r, circles: a }) {
    t.forEach((t) => {
      e.set(t, {
        drawSVG: "0%",
      });
    }),
      r &&
        e.set(r, {
          scale: 0,
          opacity: 0,
          transformOrigin: "50% 50%",
        }),
      a.forEach((t) => {
        e.set(t, {
          scale: 0,
          transformOrigin: "50% 50%",
        });
      });
  }
  animate(t) {
    const r = this.animations.get(t);
    if (!r) return;
    const { earth: a, circles: s, paths: o } = r,
      { animation: i } = this.config,
      n = e.timeline();
    a &&
      n.to(a, {
        scale: 1,
        opacity: 1,
        duration: i.earth.duration,
        ease: i.earth.ease,
      }),
      n.to(
        s,
        {
          scale: 1,
          duration: i.circles.duration,
          ease: "power2.out",
          stagger: {
            amount: i.circles.stagger,
          },
        },
        "-=0.3"
      ),
      n.to(
        o,
        {
          drawSVG: "100%",
          duration: i.paths.duration,
          ease: "power2.out",
          stagger: i.paths.stagger,
        },
        "+=" + i.paths.delay
      );
  }
  createObserver(e) {
    const t = new IntersectionObserver(
      (r) => {
        r.forEach((r) => {
          r.isIntersecting && (this.animate(e), t.unobserve(r.target));
        });
      },
      {
        threshold: this.config.threshold,
      }
    );
    t.observe(e);
  }
  destroy() {
    this.animations.clear();
  }
}
const a = new r();
export { r as default, a as purpose };
