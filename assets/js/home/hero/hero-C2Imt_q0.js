import { g as e } from "../../vendor/gsap/vendor-gsap-core-D4-kPFdx.js";
import { S as t } from "../../vendor/gsap/vendor-gsap-split-vj7Di18r.js";
import { S as o } from "../../global/animations/global-animations-cc9uDoDV.js";
import {
  S as r,
  P as n,
  W as a,
  a as i,
  T as s,
  V as l,
  b as c,
  N as d,
  D as u,
  M as m,
  C as p,
} from "../../vendor/three/vendor-three-GTafDV1Z.js";
e.registerPlugin(t);
const y = {
    init: () => {
      window.innerWidth > 991 || window.addEventListener("resize", () => {});
    },
    startHeroAnimations: () => {
      const r = e.timeline(),
        n = new o(),
        a = document.querySelector(".preloader"),
        i = document.querySelector(".preloader .loader_icons"),
        s = document.querySelector(".preloader_lottie"),
        l = document.querySelector(".preloader .text-style-subloading"),
        c = [
          document.querySelector(".preloader .text-style-loader"),
          document.querySelector(".text-style-loadingfinal"),
          document.querySelector(".text-style-loadersound"),
          document.querySelector(
            ".loader_icons .loader_enter .text-style-enter"
          ),
        ],
        d = e.timeline();
      l &&
        l.querySelectorAll(".line").forEach((e) => {
          const t = e.querySelectorAll(".char");
          d.to(
            t,
            {
              opacity: 0,
              duration: 0.1,
              stagger: -0.025,
              ease: "power2.out",
            },
            0
          );
        }),
        c.forEach((e) => {
          e &&
            e.querySelectorAll(".line").forEach((e) => {
              const t = e.querySelectorAll(".char");
              d.to(
                t,
                {
                  opacity: 0,
                  duration: 0.25,
                  stagger: -0.075,
                  ease: "power2.out",
                },
                0
              );
            });
        }),
        d
          .to(
            [i, s],
            {
              opacity: 0,
              duration: 0.5,
              ease: "power2.out",
            },
            0.25
          )
          .to(
            a,
            {
              opacity: 0,
              duration: 0.75,
              ease: "power2.inOut",
              onComplete: () => {
                (a.style.display = "none"),
                  document.body.classList.remove("is-loading");
              },
            },
            0.5
          ),
        r.add(d);
      const u = document.querySelector(".hero_bg-image.is-image"),
        m = document.querySelector(".hero_bg-image.is-svg");
      u &&
        e.set(u, {
          opacity: 0,
          scale: 0.8,
          rotation: 20,
        }),
        m &&
          e.set(m, {
            opacity: 0,
            scale: 0.8,
          }),
        u &&
          r.to(
            u,
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.5,
              ease: "power2.out",
            },
            "-=0.5"
          ),
        m &&
          r.to(
            m,
            {
              opacity: 1,
              scale: 1,
              duration: 1.5,
              ease: "power2.out",
            },
            "-=0.5"
          ),
        [
          document.querySelector(".eyebrow-hero.is-line-1"),
          ...document.querySelectorAll(
            ".heading-hero.is-line-2, .heading-hero.is-line-3, .heading-hero.is-line-4"
          ),
        ].forEach((e, o) => {
          if (e) {
            const n = new t(e, {
              type: "chars",
              charsClass: "char",
            });
            n.chars.forEach((e) => {
              Object.assign(e.style, {
                backgroundImage:
                  'url("https://cdn.prod.website-files.com/6738a290d57d477447758a67/676a9d48772b3131b2de1e9a_Noise%201.png")',
                backgroundSize: "cover",
                webkitBackgroundClip: "text",
                backgroundClip: "text",
                webkitTextFillColor: "transparent !important",
                color: "transparent",
                display: "inline-block",
                backgroundColor: "#a8948b",
                backgroundBlendMode: "normal",
                mixBlendMode: "normal",
              });
            }),
              r.fromTo(
                n.chars,
                {
                  opacity: 0,
                  y: 5,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  stagger: 0.07,
                  ease: "power2.out",
                },
                0 === o ? "-=1.8" : "<+=0.2"
              );
          }
        });
      const p = document.querySelector(".hero_scroll-tag");
      p &&
        p
          .querySelectorAll('[data-text-animation="hero-random"]')
          .forEach((o) => {
            if (o) {
              const n = new t(o, {
                type: "chars",
                charsClass: "char",
                position: "relative",
              });
              e.set(o, {
                opacity: 1,
              });
              const a = o.querySelectorAll("div");
              e.set(a, {
                opacity: 1,
              }),
                e.set(n.chars, {
                  opacity: 0,
                }),
                r.to(
                  n.chars,
                  {
                    opacity: 1,
                    duration: 0.5,
                    stagger: {
                      each: 0.05,
                      from: "random",
                    },
                    ease: "power2.out",
                  },
                  "-=1"
                );
            }
          });
      const y = document.querySelector(".text-style-hero_sub");
      y &&
        (e.set(y, {
          opacity: 0,
          y: 10,
        }),
        r.to(
          y,
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1"
        )),
        document
          .querySelectorAll('.svg-wrapper[data-animation="hero"]')
          .forEach((e) => {
            n.animateHero(e, r, "-=1.5");
          }),
        r.eventCallback("onComplete", () => {
          document.dispatchEvent(new CustomEvent("heroAnimationsComplete"));
        }),
        r.play();
    },
  },
  h = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: y,
      },
      Symbol.toStringTag,
      {
        value: "Module",
      }
    )
  );
e.registerPlugin(t);
const g = () => {
    const e = document.querySelector("#three-canvas-hero");
    e && (e.style.display = window.innerWidth > 991 ? "block" : "none");
  },
  w = () => {
    const e = () => {};
    return (
      g(),
      window.addEventListener("resize", g),
      window.addEventListener("beforeunload", e),
      {
        cleanup: e,
      }
    );
  },
  f = {
    init: w,
    startHeroAnimations: () => {
      const y = (() => {
          var e, t;
          const o =
              null == (e = document.getElementById("vertex-shader"))
                ? void 0
                : e.textContent,
            y =
              null == (t = document.getElementById("fragment-shader"))
                ? void 0
                : t.textContent;
          if (!o || !y) return;
          const h = document.querySelector(".hero_bg-image-wrap"),
            g = document.querySelector("#three-canvas-hero"),
            w = document.querySelector(".hero_bg-image-component"),
            f = (e) =>
              e *
              parseFloat(getComputedStyle(document.documentElement).fontSize),
            b = f(65),
            S = f(80),
            v = w.offsetWidth,
            q = Math.min(S, Math.max(b, v)),
            x = new r();
          x.background = null;
          const E = new n(75, q / h.offsetHeight, 0.1, 1e3);
          E.position.z = 3.85;
          const C = new a({
            antialias: !0,
            alpha: !0,
            premultipliedAlpha: !1,
          });
          C.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
            C.setSize(q, h.offsetHeight),
            C.setClearColor(0, 0),
            C.setClearAlpha(0),
            g.appendChild(C.domElement);
          const _ = C.getContext().getExtension("WEBGL_lose_context");
          C.domElement.addEventListener(
            "webglcontextlost",
            (e) => {
              e.preventDefault();
            },
            !1
          ),
            C.domElement.addEventListener(
              "webglcontextrestored",
              () => {
                T();
              },
              !1
            ),
            window.addEventListener("beforeunload", () => {
              _ && _.loseContext();
            });
          const k = new i(5, 5, 64, 64),
            A = new s().load(
              "https://cdn.prod.website-files.com/6738a290d57d477447758a67/676a9c34b2605216c161652e_3d%20element.webp",
              (e) => {
                const t = e.image.width / e.image.height;
                if (z) {
                  const e = window.innerWidth > 768 ? 0.8 : 0.6;
                  z.scale.set(e, e / t, 1), C.render(x, E);
                }
              }
            );
          A.onload = () => {
            if (!A.image) return;
            const e = A.image.width / A.image.height;
            z.scale.set(0.8, 0.8 / e, 1), C.render(x, E);
          };
          const T = (function () {
            let e;
            return function (...t) {
              clearTimeout(e),
                (e = setTimeout(() => {
                  clearTimeout(e),
                    (() => {
                      const e = (e) =>
                          e *
                          parseFloat(
                            getComputedStyle(document.documentElement).fontSize
                          ),
                        t = e(65),
                        o = e(80),
                        r = w.offsetWidth,
                        n = Math.min(o, Math.max(t, r)),
                        a = n / h.offsetHeight;
                      let i, s, l;
                      if (
                        ((E.aspect = a),
                        E.updateProjectionMatrix(),
                        C.setSize(n, h.offsetHeight),
                        window.innerWidth > 768
                          ? window.innerWidth > 991
                            ? window.innerWidth > 1024
                              ? ((i = 70), (s = 3.85))
                              : ((i = 59.5), (s = 5))
                            : ((i = 66.5), (s = 4.2))
                          : ((i = 60 + (window.innerWidth / 768) * 10),
                            (s = 4.5)),
                        (E.fov = Math.min(90, Math.max(60, i))),
                        (E.position.z = s),
                        E.updateProjectionMatrix(),
                        (l =
                          window.innerWidth > 768
                            ? window.innerWidth > 991
                              ? window.innerWidth > 1024
                                ? 0.8
                                : 0.5
                              : 0.7
                            : 0.6),
                        z && A.image)
                      ) {
                        const e = A.image.width / A.image.height;
                        z.scale.set(l, l / e, 1);
                      }
                      C.render(x, E);
                    })(...t);
                }, 100));
            };
          })();
          window.addEventListener("resize", T), T();
          const W = {
              uTexture: {
                value: A,
              },
              uTime: {
                value: 0,
              },
              uProgress: {
                value: 0,
              },
              uResolution: {
                value: new l(window.innerWidth, window.innerHeight),
              },
            },
            M = new c({
              vertexShader: o,
              fragmentShader: y,
              uniforms: W,
              transparent: !0,
              blending: d,
              depthWrite: !1,
              depthTest: !1,
              side: u,
            }),
            z = new m(k, M);
          x.add(z);
          const L = () => {
            var e;
            C &&
              (C.dispose(),
              C.forceContextLoss(),
              null == (e = C.domElement) || e.remove()),
              k && k.dispose(),
              M && M.dispose(),
              A && A.dispose(),
              x &&
                (x.traverse((e) => {
                  e.geometry && e.geometry.dispose(),
                    e.material &&
                      (Array.isArray(e.material)
                        ? e.material.forEach((e) => e.dispose())
                        : e.material.dispose());
                }),
                x.clear()),
              window.removeEventListener("resize", T),
              window.removeEventListener("beforeunload", L);
          };
          return (
            window.addEventListener("beforeunload", L),
            {
              uniforms: W,
              renderer: C,
              scene: x,
              camera: E,
              canvasContainer: g,
              clock: new p(),
              handleResize: T,
              dispose: L,
            }
          );
        })(),
        h = e.timeline();
      [
        document.querySelector(".preloader .text-style-loader"),
        document.querySelector(".text-style-loadingfinal"),
        document.querySelector(".preloader_subheading .text-style-subloading"),
        document.querySelector(".text-style-loadersound"),
        document.querySelector(".loader_icons .loader_enter .text-style-enter"),
      ].forEach((e) => {
        e &&
          e.querySelectorAll(".line").forEach((e) => {
            const t = e.querySelectorAll(".char");
            h.to(
              t,
              {
                opacity: 0,
                duration: 0.3,
                stagger: -0.05,
                ease: "power2.out",
              },
              0
            );
          });
      });
      const g = document.querySelector(".loader_bg-svg.is-loader");
      g &&
        h.to(
          g,
          {
            scale: 1,
            x: 0,
            y: 0,
            opacity: 1,
            strokeWidth: 0.5,
            rotationX: 180,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1.5"
        );
      const w = document.querySelector(".preloader"),
        f = document.querySelector(".preloader .loader_icons");
      h
        .to(
          [f, document.querySelector(".preloader_lottie")],
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          0
        )
        .to(
          w,
          {
            opacity: 0,
            duration: 1,
            delay: 1,
            ease: "power2.out",
            onComplete: () => {
              document.body.classList.remove("lenis-stopped"),
                window.lenis && window.lenis.start(),
                (w.style.display = "none");
            },
          },
          0
        ),
        [
          document.querySelector(".eyebrow-hero.is-line-1"),
          ...document.querySelectorAll(
            ".heading-hero.is-line-2, .heading-hero.is-line-3, .heading-hero.is-line-4"
          ),
        ].forEach((e, o) => {
          if (e) {
            const r = new t(e, {
              type: "chars",
              charsClass: "char",
            });
            r.chars.forEach((e) => {
              Object.assign(e.style, {
                backgroundImage:
                  'url("https://cdn.prod.website-files.com/6738a290d57d477447758a67/676a9d48772b3131b2de1e9a_Noise%201.png")',
                backgroundSize: "cover",
                webkitBackgroundClip: "text",
                backgroundClip: "text",
                webkitTextFillColor: "transparent !important",
                color: "transparent",
                display: "inline-block",
                backgroundColor: "#a8948b",
                backgroundBlendMode: "normal",
                mixBlendMode: "normal",
              });
            }),
              h.fromTo(
                r.chars,
                {
                  opacity: 0,
                  y: 5,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 1,
                  stagger: 0.07,
                  ease: "power2.out",
                },
                0 === o ? "-=0.8" : "<+=0.2"
              );
          }
        });
      const b = document.querySelector(".hero_bg-image.is-svg");
      b &&
        (e.set(b, {
          opacity: 0,
          scale: 0.9,
        }),
        h.to(
          b,
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=1.5"
        ));
      const S = document.querySelector(".hero_scroll-tag");
      S &&
        S.querySelectorAll('[data-text-animation="hero-random"]').forEach(
          (o) => {
            if (o) {
              e.set(o, {
                opacity: 1,
              }),
                new t(o, {
                  type: "chars",
                  charsClass: "char",
                  position: "relative",
                });
              const r = o.querySelectorAll("div");
              e.set(r, {
                opacity: 1,
              });
              const n = o.querySelectorAll(".char");
              e.set(n, {
                opacity: 0,
              }),
                h.to(
                  n,
                  {
                    opacity: 1,
                    duration: 0.5,
                    stagger: {
                      each: 0.05,
                      from: "random",
                    },
                    ease: "power2.out",
                  },
                  "-=1"
                );
            }
          }
        );
      const v = document.querySelector(".text-style-hero_sub");
      v &&
        (e.set(v, {
          opacity: 0,
          y: 10,
        }),
        h.to(
          v,
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
          },
          "-=1"
        ));
      const q = new o();
      if (
        (document
          .querySelectorAll('.svg-wrapper[data-animation="hero"]')
          .forEach((e) => {
            q.animateHero(e, h, "-=3.5");
          }),
        y)
      ) {
        const e = document.querySelector(".hero_bg-image-wrap");
        e &&
          ((e.style.opacity = 1),
          h.to(
            y.uniforms.uProgress,
            {
              value: 1,
              duration: 2,
              ease: "power2.out",
              onStart: () => {
                const e = () => {
                  if (!y) return;
                  const { uniforms: t, renderer: o, scene: r, camera: n } = y;
                  !1 !== t.uTime.needsUpdate &&
                    ((t.uTime.value = y.clock.getElapsedTime()),
                    (t.uTime.needsUpdate = !1)),
                    o.render(r, n),
                    requestAnimationFrame(e);
                };
                (y.uniforms.uTime.needsUpdate = !0), e();
              },
            },
            "-=3.5"
          ));
      }
      h.eventCallback("onComplete", () => {
        document.dispatchEvent(new CustomEvent("heroAnimationsComplete"));
      }),
        h.play();
    },
    destroy: () => {
      const e = w();
      (null == e ? void 0 : e.cleanup) && e.cleanup();
    },
  },
  b = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: f,
      },
      Symbol.toStringTag,
      {
        value: "Module",
      }
    )
  );
export { b as d, h as m };
