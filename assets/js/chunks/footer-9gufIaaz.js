import { g as e } from "../vendor/gsap/vendor-gsap-core-D4-kPFdx.js";
import { D as t } from "../vendor/gsap/vendor-gsap-draw-VPuGL5bZ.js";
e.registerPlugin(t);
class r {
  constructor() {
    (this.config = {
      threshold: 0.5,
      animation: {
        duration: 3.6,
        ease: "power2.inOut",
        overlap: 1.5,
        circles: {
          duration: 0.5,
          stagger: 1,
        },
      },
    }),
      (this.elements = null);
  }
  init() {
    (this.elements = {
      component: document.querySelector(".footer_component"),
      svg: document.querySelector(".footer_bg-svg"),
      image: document.querySelector(".footer_image"),
      dragButton: document.querySelector(".button.is-drag"),
      lines: document.querySelectorAll(".footer_svg-line"),
      circles: {
        stroked: [
          document.querySelector(".footer_svg-circle.is-01"),
          document.querySelector(".footer_svg-circle.is-02"),
          document.querySelector(".footer_svg-circle.is-03"),
        ],
        dashed: [
          document.querySelector(".footer_svg-circle-dash.is-01"),
          document.querySelector(".footer_svg-circle-dash.is-02"),
        ],
      },
    }),
      this.elements.component &&
        (this.setInitialStates(),
        this.createObserver(),
        this.createDragButtonObserver());
  }
  setInitialStates() {
    this.elements.image &&
      e.set(this.elements.image, {
        y: "50%",
        rotate: -20,
        rotateX: -20,
      }),
      this.elements.lines.forEach((t) => {
        e.set(t, {
          drawSVG: "0%",
        });
      }),
      this.elements.circles.stroked.forEach((t) => {
        t &&
          e.set(t, {
            drawSVG: "0%",
          });
      }),
      this.elements.circles.dashed.forEach((t) => {
        t &&
          e.set(t, {
            opacity: 0,
          });
      }),
      this.elements.dragButton &&
        e.set(this.elements.dragButton, {
          opacity: 0,
        });
  }
  animate() {
    const { duration: t, ease: r, overlap: s } = this.config.animation,
      o = e.timeline({
        defaults: {
          ease: r,
        },
      });
    this.elements.image &&
      o.to(this.elements.image, {
        y: "0%",
        rotate: 0,
        rotateX: 0,
        duration: t / 2,
      }),
      o.to(
        this.elements.lines,
        {
          drawSVG: "100%",
          duration: t,
        },
        "-=" + s
      ),
      this.elements.circles.stroked.forEach((e, r) => {
        e &&
          o.to(
            e,
            {
              drawSVG: "100%",
              duration: t,
              delay: 0.2 * (r + 1),
            },
            "<"
          );
      }),
      this.elements.circles.dashed.forEach((e) => {
        e &&
          o.to(
            e,
            {
              opacity: 1,
              duration: t,
              delay: 0.8,
            },
            "<"
          );
      });
  }
  createObserver() {
    const e = new IntersectionObserver(
      (t) => {
        t.forEach((t) => {
          t.isIntersecting &&
            t.intersectionRatio >= 0.4 &&
            (this.animate(), e.unobserve(t.target));
        });
      },
      {
        threshold: [0, 0.4, 1],
        rootMargin: "0px",
      }
    );
    e.observe(this.elements.component);
  }
  createDragButtonObserver() {
    if (!this.elements.dragButton) return;
    const t = new IntersectionObserver(
      (r) => {
        r.forEach((r) => {
          r.isIntersecting &&
            (e.to(this.elements.dragButton, {
              opacity: 1,
              duration: 1.25,
              delay: 1,
              ease: "power2.InOut",
            }),
            t.unobserve(r.target));
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      }
    );
    t.observe(this.elements.dragButton);
  }
  destroy() {
    this.elements = null;
  }
}
const s = new r();
export { r as default, s as footer };
