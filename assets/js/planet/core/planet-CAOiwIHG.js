const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/js/global/scroll/global-scroll-Cwvypyp-.js",
      "assets/js/vendor/gsap/vendor-gsap-core-D4-kPFdx.js",
    ])
) => i.map((i) => d[i]);
import {
  p as t,
  a as e,
  _ as i,
} from "../../global/core/global-core-Cx4mqg2V.js";
import {
  S as s,
  T as n,
  W as a,
  L as o,
  c as r,
  A as l,
  d as c,
  e as h,
  f as d,
  g as p,
  h as u,
  F as m,
  i as y,
  j as g,
  V as w,
  M as v,
  B as f,
  k as x,
  l as b,
  m as M,
  n as P,
  o as S,
  p as A,
  q as E,
  r as I,
  P as L,
  s as T,
  t as C,
  u as q,
} from "../../vendor/three/vendor-three-GTafDV1Z.js";
import { g as O } from "../../vendor/gsap/vendor-gsap-core-D4-kPFdx.js";
import { S as k } from "../../vendor/gsap/vendor-gsap-split-vj7Di18r.js";
class _ {
  constructor() {
    (this.scene = new s()),
      (this.currentPlanetIndex = 0),
      (this.textureLoader = new n()),
      (this.textureLoader.crossOrigin = ""),
      (this.disposables = new Set()),
      (this.planets = []),
      (this.isMobile = 768 >= window.innerWidth),
      (this.segments = this.isMobile ? 32 : 64),
      (this.initialized = this.initialize()),
      (this.shadowMapSize = this.isMobile ? 1024 : 2048),
      (this.isModalOpen = !1),
      (this.frameCount = 0),
      (this.fpsMonitor = {
        frames: 0,
        lastTime: performance.now(),
        lowPerformanceMode: !1,
        fpsThreshold: this.isMobile ? 30 : 45,
        consecutiveLowFPS: 0,
        maxLowFPSCount: 5,
      }),
      this.isMobile
        ? ((this.particleCount = 250), (this.particleUpdateRate = 2))
        : ((this.particleCount = 1e3), (this.particleUpdateRate = 1)),
      (this.particleFrameCount = 0),
      (this.sharedMaterialProps = {
        roughness: 0.7,
        metalness: 0.2,
      }),
      (this.needsRender = !0),
      (this.lastFrameTime = performance.now()),
      (this.frameInterval = 1e3 / 60),
      (this.isVisible = !0),
      document.addEventListener("visibilitychange", () => {
        (this.isVisible = !document.hidden),
          (this.needsRender = this.isVisible);
      });
  }
  async initialize() {
    return (
      await this.loadTexturesWithFallback(),
      this.setupRenderer(),
      this.setupLighting(),
      this.setupFog(),
      this.createPlanets(),
      this.setPlanetPositions(),
      this.setPlanetSizes(),
      this.isMobile || this.createParticles(),
      !0
    );
  }
  setupRenderer() {
    const t = document.getElementById("three-canvas");
    (this.renderer = new a({
      canvas: t,
      antialias: !this.isMobile,
      alpha: !0,
      powerPreference: this.isMobile ? "low-power" : "high-performance",
      precision: this.isMobile ? "mediump" : "highp",
    })),
      this.isMobile
        ? (this.renderer.setPixelRatio(1),
          (this.renderer.toneMapping = o),
          (this.renderer.outputColorSpace = r))
        : (this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
          (this.renderer.toneMapping = l),
          (this.renderer.outputColorSpace = c)),
      this.renderer.setSize(window.innerWidth, window.innerHeight),
      (this.renderer.toneMappingExposure = 0.7),
      (this.renderer.shadowMap.enabled = !this.isMobile),
      (this.renderer.shadowMap.type = h);
  }
  setupLighting() {
    this.isMobile
      ? ((this.ambientLight = new d(4210752, 5)),
        this.scene.add(this.ambientLight),
        (this.directionalLight = new p(16777215, 4)),
        this.directionalLight.position.set(-20, 20, 30),
        this.directionalLight.target.position.set(20, 0, 0),
        this.scene.add(this.directionalLight),
        this.scene.add(this.directionalLight.target))
      : ((this.ambientLight = new d(4210752, 1.8)),
        this.scene.add(this.ambientLight),
        (this.directionalLight = new p(16777215, 1.8)),
        this.directionalLight.position.set(-50, 50, 20),
        this.directionalLight.target.position.set(0, 0, 0),
        this.scene.add(this.directionalLight),
        this.scene.add(this.directionalLight.target));
  }
  setupFog() {
    if (!this.isMobile) {
      const t = new u("#21262B");
      (this.initialFogDensity = 0.005),
        (this.transitionFogDensity = 0.02),
        (this.scene.fog = new m(t, this.initialFogDensity));
    }
  }
  createGeometry() {
    return (
      this.sphereGeometry ||
        ((this.sphereGeometry = new y(5, this.segments, this.segments)),
        this.disposables.add(this.sphereGeometry)),
      this.sphereGeometry
    );
  }
  createPlanet1() {
    const t = new g({
      ...this.sharedMaterialProps,
      map: this.textures.planet1.diffuse,
      normalMap: this.textures.planet1.normal,
      normalScale: new w(2, 2),
      roughness: 0.8,
    });
    t.needsUpdate = !0;
    const e = new v(this.createGeometry(), t);
    return this.isMobile || ((e.castShadow = !0), (e.receiveShadow = !0)), e;
  }
  createPlanet2() {
    const t = new g({
        ...this.sharedMaterialProps,
        map: this.textures.planet2.diffuse,
        normalMap: this.textures.planet2.normal,
        normalScale: new w(0.2, 0.2),
      }),
      e = new v(this.createGeometry(), t);
    return this.isMobile || ((e.castShadow = !0), (e.receiveShadow = !0)), e;
  }
  createPlanet3() {
    const t = new g({
        ...this.sharedMaterialProps,
        map: this.textures.planet3.diffuse,
        normalMap: this.textures.planet3.normal,
        normalScale: new w(1, 1),
      }),
      e = new v(this.createGeometry(), t);
    return this.isMobile || ((e.castShadow = !0), (e.receiveShadow = !0)), e;
  }
  createPlanets() {
    (this.planet1 = this.createPlanet1()),
      (this.planet2 = this.createPlanet2()),
      (this.planet3 = this.createPlanet3()),
      this.scene.add(this.planet1, this.planet2, this.planet3),
      (this.planets = [this.planet1, this.planet2, this.planet3]);
  }
  setPlanetPositions() {
    this.isMobile
      ? (this.planet1.position.set(0, 0, 0),
        this.planet2.position.set(20, 0, 0),
        this.planet3.position.set(40, 0, 0))
      : (this.planet1.position.set(0, 0, 0),
        this.planet2.position.set(40, -40, -30),
        this.planet3.position.set(-40, -80, -60));
  }
  setPlanetSizes() {
    const t = this.isMobile ? 0.9 : 1;
    this.planets.forEach((e) => {
      e.scale.set(t, t, t);
    });
  }
  resize(t, e) {
    (this.isMobile = 768 >= t),
      (this.useHighQuality = !this.isMobile),
      this.renderer.setSize(t, e),
      this.isMobile
        ? (this.renderer.setPixelRatio(1),
          (this.renderer.toneMapping = o),
          (this.renderer.outputColorSpace = r))
        : (this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
          (this.renderer.toneMapping = l),
          (this.renderer.outputColorSpace = c)),
      this.setPlanetPositions(),
      this.setPlanetSizes(),
      this.planets &&
        this.planets.forEach((t, e) => {
          var i;
          if (t.material) {
            const s = e + 1,
              n = this.useHighQuality
                ? null == (i = this.textures["planet" + s])
                  ? void 0
                  : i.normal
                : null;
            (t.material.normalMap = n), (t.material.needsUpdate = !0);
          }
        }),
      (this.needsRender = !0);
  }
  getPlanets() {
    return this.planets || [];
  }
  getPlanet(t) {
    return this.planets && this.planets[t] ? this.planets[t] : null;
  }
  getCurrentPlanetIndex() {
    return this.currentPlanetIndex;
  }
  setCurrentPlanetIndex(t) {
    this.currentPlanetIndex = t;
  }
  createParticles() {
    if (this.isMobile) return;
    const t = new Float32Array(3 * this.particleCount),
      e = new Float32Array(3 * this.particleCount),
      i = new Float32Array(this.particleCount);
    for (let c = 0; c < this.particleCount; c++) {
      const s = 3 * c,
        n = 100,
        a = 2 * Math.random() * Math.PI,
        o = Math.acos(2 * Math.random() - 1);
      (t[s] = n * Math.sin(o) * Math.cos(a)),
        (t[s + 1] = n * Math.sin(o) * Math.sin(a)),
        (t[s + 2] = n * Math.cos(o)),
        (e[s] = 0.1 * (Math.random() - 0.5)),
        (e[s + 1] = 0.1 * (Math.random() - 0.5)),
        (e[s + 2] = 0.1 * (Math.random() - 0.5)),
        (i[c] = 0.15);
    }
    const s = new f();
    s.setAttribute("position", new x(t, 3));
    const n = document.createElement("canvas");
    (n.width = 64), (n.height = 64);
    const a = n.getContext("2d"),
      o = a.createRadialGradient(32, 32, 0, 32, 32, 32);
    o.addColorStop(0, "rgba(255, 255, 255, 1)"),
      o.addColorStop(0.3, "rgba(255, 255, 255, 0.3)"),
      o.addColorStop(1, "rgba(255, 255, 255, 0)"),
      (a.fillStyle = o),
      a.fillRect(0, 0, 64, 64);
    const r = new b(n),
      l = new M({
        size: 0.8,
        map: r,
        transparent: !0,
        opacity: 0.6,
        blending: P,
        sizeAttenuation: !0,
        depthWrite: !1,
      });
    (this.particles = new S(s, l)),
      this.scene.add(this.particles),
      (this.particleVelocities = e),
      this.disposables.add(s),
      this.disposables.add(l),
      this.disposables.add(r);
  }
  updateParticles() {
    if (!this.particles || this.isMobile || !this.isVisible) return;
    if (
      (this.particleFrameCount++,
      this.particleFrameCount % this.particleUpdateRate != 0)
    )
      return;
    const t = this.particles.geometry.attributes.position.array;
    for (let e = 0; e < t.length; e += 3) {
      (t[e] += this.particleVelocities[e]),
        (t[e + 1] += this.particleVelocities[e + 1]),
        (t[e + 2] += this.particleVelocities[e + 2]);
      const i = t[e] ** 2 + t[e + 1] ** 2 + t[e + 2] ** 2;
      if (i > 22500) {
        const s = 100 / Math.sqrt(i);
        (t[e] *= s), (t[e + 1] *= s), (t[e + 2] *= s);
      }
    }
    (this.particles.geometry.attributes.position.needsUpdate = !0),
      (this.needsRender = !0);
  }
  setModalOpen(t) {
    (this.isModalOpen = t), (this.needsRender = !0);
  }
  updatePerformance() {
    const t = performance.now(),
      e = t - this.fpsMonitor.lastTime;
    if ((this.fpsMonitor.frames++, e >= 1e3)) {
      const i = (1e3 * this.fpsMonitor.frames) / e;
      (this.fpsMonitor.frames = 0),
        (this.fpsMonitor.lastTime = t),
        i < this.fpsMonitor.fpsThreshold
          ? (this.fpsMonitor.consecutiveLowFPS++,
            30 > i
              ? (this.particleUpdateRate = 4)
              : 45 > i && (this.particleUpdateRate = 2),
            this.fpsMonitor.consecutiveLowFPS <
              this.fpsMonitor.maxLowFPSCount ||
              (this.enableLowPerformanceMode(),
              this.reduceQuality(),
              (this.fpsMonitor.consecutiveLowFPS = 0)))
          : ((this.fpsMonitor.consecutiveLowFPS = Math.max(
              0,
              this.fpsMonitor.consecutiveLowFPS - 1
            )),
            (this.particleUpdateRate = 1));
    }
  }
  reduceQuality() {
    var t;
    const e = this.renderer.getPixelRatio();
    if (e > 0.75) this.renderer.setPixelRatio(Math.max(0.75, e - 0.25));
    else {
      if (!this.renderer.shadowMap.enabled)
        return this.particles && this.particleCount > 250
          ? ((this.particleCount = Math.max(250, this.particleCount - 100)),
            void this.createParticles())
          : this.segments > 16
          ? ((this.segments = Math.max(16, this.segments - 8)),
            null == (t = this.sphereGeometry) || t.dispose(),
            (this.sphereGeometry = null),
            void this.createPlanets())
          : void 0;
      this.renderer.shadowMap.enabled = !1;
    }
  }
  enableLowPerformanceMode() {
    this.fpsMonitor.lowPerformanceMode ||
      ((this.fpsMonitor.lowPerformanceMode = !0),
      this.planets.forEach((t) => {
        t.material &&
          ((t.material.normalMap = null),
          (t.material.roughness = 1),
          (t.material.metalness = 0),
          (t.material.needsUpdate = !0));
      }),
      (this.scene.fog = null),
      A.clear(),
      (this.needsRender = !0));
  }
  render(t) {
    if (!this.isVisible) return;
    const e = performance.now();
    if (e - this.lastFrameTime >= this.frameInterval) {
      if (
        ((this.lastFrameTime = e),
        this.isMobile && this.updatePerformance(),
        this.updateParticles(),
        !this.isModalOpen)
      ) {
        const t = this.isMobile ? 3e-4 : 5e-4;
        this.planets.forEach((e) => {
          e.rotation.y += t;
        }),
          (this.needsRender = !0);
      }
      this.needsRender &&
        (this.renderer.render(this.scene, t),
        this.frameCount++,
        (this.needsRender = !1));
    }
  }
  checkScreenSize() {
    const t = Math.max(window.innerWidth, document.documentElement.clientWidth);
    (this.isMobile = 768 >= t), (this.useHighQuality = !this.isMobile);
  }
  loadTexturesWithFallback() {
    return new Promise((t) => {
      const e = new n(),
        i = (t) =>
          new Promise((i) => {
            e.load(
              t,
              (t) => {
                (t.flipY = !1),
                  (t.anisotropy = this.isMobile ? 1 : this.anisotropyLevel),
                  (t.needsUpdate = !0),
                  (t.generateMipmaps = !this.isMobile),
                  (t.minFilter = this.isMobile ? E : I),
                  this.disposables.add(t),
                  i(t);
              },
              void 0,
              () => {
                i(null);
              }
            );
          }),
        s = [
          i(
            this.isMobile
              ? "/assets/webp/planet1-diffuse-low-hCQqQKn7.webp"
              : "/assets/webp/planet1-diffuse-BJo6536r.webp"
          ),
          i(
            this.isMobile
              ? "/assets/webp/planet2-diffuse-low-dtRTxVRc.webp"
              : "/assets/webp/planet2-diffuse-DUwUrhng.webp"
          ),
          i(
            this.isMobile
              ? "/assets/webp/planet3-diffuse-low-DrOd1Kp-.webp"
              : "/assets/webp/planet3-diffuse-BbToi14G.webp"
          ),
        ];
      this.isMobile ||
        s.push(
          i("/assets/webp/planet1-normal-DguUcEqL.webp"),
          i("/assets/webp/planet2-normal-CLsUnTc3.webp"),
          i("/assets/webp/planet3-normal-MJ3llBoj.webp")
        ),
        Promise.all(s).then((e) => {
          const [i, s, n, ...a] = e;
          this.textures &&
            Object.values(this.textures).forEach((t) => {
              Object.values(t).forEach((t) => {
                (null == t ? void 0 : t.dispose) && t.dispose();
              });
            }),
            (this.textures = {
              planet1: {
                diffuse: i || this.createColorTexture("#666666"),
                normal: this.isMobile ? null : a[0],
              },
              planet2: {
                diffuse: s || this.createColorTexture("#777777"),
                normal: this.isMobile ? null : a[1],
              },
              planet3: {
                diffuse: n || this.createColorTexture("#888888"),
                normal: this.isMobile ? null : a[2],
              },
            }),
            A.clear(),
            t();
        });
    });
  }
  createColorTexture(t) {
    const e = document.createElement("canvas");
    (e.width = 32), (e.height = 32);
    const i = e.getContext("2d");
    (i.fillStyle = t), i.fillRect(0, 0, 32, 32);
    const s = new b(e);
    return (
      (s.generateMipmaps = !1),
      (s.minFilter = E),
      (s.magFilter = E),
      this.disposables.add(s),
      s
    );
  }
  dispose() {
    this.disposables.forEach((t) => {
      t.dispose && t.dispose();
    }),
      this.textures &&
        Object.values(this.textures).forEach((t) => {
          Object.values(t).forEach((t) => {
            t && t.dispose && t.dispose();
          });
        }),
      this.planets &&
        this.planets.forEach((t) => {
          t.geometry && t.geometry.dispose(),
            t.material &&
              (t.material.map && t.material.map.dispose(),
              t.material.dispose());
        }),
      this.particles &&
        (this.particles.geometry && this.particles.geometry.dispose(),
        this.particles.material && this.particles.material.dispose()),
      this.renderer &&
        (this.renderer.dispose(),
        this.renderer.forceContextLoss(),
        (this.renderer.domElement = null)),
      this.scene && this.scene.clear(),
      (this.textures = null),
      (this.planets = null),
      (this.particles = null),
      (this.scene = null),
      (this.renderer = null);
  }
}
class R {
  constructor(t) {
    (this.camera = new L(75, window.innerWidth / window.innerHeight, 0.1, 1e3)),
      this.camera.position.set(0, 0, 12),
      (this.isAnimating = !1),
      (this.currentPlanetIndex = null),
      (this.planetScene = t),
      (this.textAnimations = window.textAnimations),
      (this.svgAnimations = window.svgAnimations),
      (this.observedElements = new WeakMap()),
      this.cacheSelectors(),
      (this.textAnimationsReadyHandler =
        this.handleTextAnimationsReady.bind(this)),
      this.initializeHeadingDisplays(),
      this.initializeTerminalDisplays(),
      (this.observer = new IntersectionObserver(
        this.handleIntersection.bind(this),
        {
          threshold: 0.2,
          rootMargin: "0px",
        }
      )),
      this.initPlanet1Observer();
  }
  cacheSelectors() {
    (this.planetLink = document.getElementById("planet-link")),
      (this.headingWraps = document.querySelectorAll(".planet_heading-wrap")),
      (this.terminals = document.querySelectorAll(".terminal-container")),
      (this.planetSvgs = document.querySelectorAll(".planet-svg")),
      (this.countHeadings = {
        current: document.querySelector(".count-heading.current"),
        next: document.querySelector(".count-heading.next"),
        prev: document.querySelector(".count-heading.prev"),
      });
  }
  handleIntersection(t) {
    t.forEach((t) => {
      if (t.isIntersecting && !this.observedElements.has(t.target)) {
        const e = t.target;
        if (e.dataset.textAnimation && this.textAnimations) {
          const t = e.dataset.textAnimation + "Animation";
          this.textAnimations[t] && this.textAnimations[t](e);
        }
        this.observedElements.set(t.target, !0),
          this.observer.unobserve(t.target);
      }
    });
  }
  initPlanet1Observer() {
    document
      .querySelectorAll('[data-text-animation][data-text-trigger="planet1"]')
      .forEach((t) => this.observer.observe(t));
  }
  updateAspect(t, e) {
    (this.camera.aspect = t / e), this.camera.updateProjectionMatrix();
  }
  moveToPlanet(i, s, n) {
    if (this.isAnimating || this.currentPlanetIndex === s) return;
    (this.isAnimating = !0), t(e);
    const a = this.calculateTargetPosition(i),
      o = "planet" + (s + 1),
      r = O.timeline({
        defaults: {
          duration: 1.5,
          ease: "power3.inOut",
        },
        onComplete: () => {
          this.camera.lookAt(i.position),
            (this.currentPlanetIndex = s),
            (this.isAnimating = !1);
        },
      });
    this.updateButtonActiveState(s),
      this.updateCounter(s),
      this.planetScene.setPlanetPositions();
    const {
      currentHeading: l,
      currentTerminal: c,
      newHeading: h,
      newTerminal: d,
    } = this.getTransitionElements(s);
    return (
      r
        .to(
          this.camera.position,
          {
            ...a,
            duration: 1.5,
          },
          0
        )
        .add(this.createFogTimeline(n), 0)
        .to(
          l,
          {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => (l.style.display = "none"),
          },
          0
        )
        .add(this.createTerminalTimeline(c, d), 0.2)
        .add(this.createHeadingTimeline(h, o), 0.5)
        .add(this.createSvgTimeline(s), 0),
      r
    );
  }
  calculateTargetPosition(t) {
    return {
      x: t.position.x,
      y: window.innerWidth > 768 ? t.position.y : 0,
      z: t.position.z + 12,
    };
  }
  getTransitionElements(t) {
    return {
      currentHeading:
        null !== this.currentPlanetIndex
          ? document.querySelector(
              ".planet_heading-wrap.is-0" + (this.currentPlanetIndex + 1)
            )
          : document.querySelector(".planet_heading-wrap.is-01"),
      currentTerminal:
        null !== this.currentPlanetIndex
          ? document.querySelector(
              ".terminal-container.is-0" + (this.currentPlanetIndex + 1)
            )
          : document.querySelector(".terminal-container.is-01"),
      newHeading: document.querySelector(".planet_heading-wrap.is-0" + (t + 1)),
      newTerminal: document.querySelector(".terminal-container.is-0" + (t + 1)),
    };
  }
  createFogTimeline(t) {
    return (null == t ? void 0 : t.fog)
      ? O.timeline()
          .to(
            t.fog,
            {
              density: 0.02,
              duration: 1.5,
            },
            0
          )
          .to(
            t.fog,
            {
              density: 0.005,
              duration: 1.5,
            },
            0.75
          )
      : O.timeline();
  }
  createTerminalTimeline(t, e) {
    const i = O.timeline();
    return (
      i
        .to(t, {
          opacity: 0,
          filter: "blur(5px)",
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            (t.style.display = "none"),
              (e.style.display = "flex"),
              O.set(e, {
                opacity: 0,
                filter: "blur(5px)",
              });
          },
        })
        .to(e, {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5,
          ease: "power2.inOut",
        }),
      i
    );
  }
  createHeadingTimeline(t, e) {
    const i = O.timeline();
    return (
      (t.style.display = "flex"),
      O.set(t, {
        opacity: 0,
      }),
      t.querySelectorAll("[data-text-animation]").forEach((t) => {
        const e = t.dataset.textAnimation;
        "random" === e || "wipe" === e
          ? O.set(t.querySelectorAll(".char"), {
              opacity: 0,
            })
          : "reveal" === e &&
            O.set(t.querySelectorAll(".line-inner"), {
              y: "100%",
            });
      }),
      t.querySelectorAll(".svg-wrapper").forEach((t) => {
        t.dataset.svgTrigger === e &&
          O.set(t, {
            clipPath:
              "forward" === t.dataset.direction
                ? "inset(0 100% 0 0)"
                : "inset(0 0 0 100%)",
          });
      }),
      i
        .to(t, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .add(() => {
          t.querySelectorAll("[data-text-animation]").forEach((t) => {
            var i, s;
            const n = t.dataset.textAnimation;
            t.dataset.textTrigger === e &&
              this.textAnimations &&
              (null == (s = (i = this.textAnimations)[n + "Animation"]) ||
                s.call(i, t, 0));
          }),
            t.querySelectorAll(".svg-wrapper").forEach((t) => {
              t.dataset.svgTrigger === e &&
                O.to(t, {
                  clipPath:
                    "forward" === t.dataset.direction
                      ? "inset(0 0% 0 0)"
                      : "inset(0 0 0 0%)",
                  duration: 1.2,
                  ease: "power2.inOut",
                });
            });
        }),
      i
    );
  }
  createSvgTimeline(t) {
    return O.timeline().to(this.planetSvgs, {
      scale: (e) => (e === t ? 1.1 : 1),
      opacity: (e) => (e === t ? 1 : 0.5),
      duration: 0.5,
      transformOrigin: "center center",
    });
  }
  updateCounter(t) {
    const { current: e, next: i, prev: s } = this.countHeadings;
    if (!e || !i || !s) return;
    const n = parseInt(e.textContent, 10),
      a = t + 1;
    if (n === a) return;
    const o = a > n ? "up" : "down",
      r = "up" === o ? i : s;
    if (null === this.currentPlanetIndex)
      return (
        O.set([e, i, s], {
          y: "0%",
        }),
        (e.textContent = "01"),
        (i.textContent = "02"),
        (s.textContent = "03"),
        O.set(i, {
          y: "100%",
        }),
        O.set(s, {
          y: "-100%",
        }),
        void (1 !== a && this.animateCounter(e, r, o, a))
      );
    this.animateCounter(e, r, o, a);
  }
  animateCounter(t, e, i, s) {
    const n = 10 > s ? "0" + s : s;
    e.textContent = n;
    const a = O.timeline({
      defaults: {
        duration: 1,
        ease: "power3.inOut",
      },
    });
    a.to(
      t,
      {
        y: "up" === i ? "-100%" : "100%",
      },
      0
    ),
      a.fromTo(
        e,
        {
          y: "up" === i ? "100%" : "-100%",
        },
        {
          y: "0%",
          onComplete: () => {
            (this.countHeadings.current.textContent = n),
              O.set(this.countHeadings.current, {
                y: "0%",
              }),
              O.set(e, {
                y: "up" === i ? "100%" : "-100%",
              });
          },
        },
        0
      );
  }
  updateButtonActiveState(t) {
    const e = document.querySelectorAll("#link-blocks .button.is-icon");
    e.forEach((t) => t.classList.remove("active"));
    const i = e[t];
    i && i.classList.add("active");
  }
  handleSvgTransitions(t) {
    this.planetSvgs.forEach((e, i) => {
      O.to(e, {
        scale: i === t ? 1.1 : 1,
        opacity: i === t ? 1 : 0.5,
        duration: 2,
        ease: "power3.inOut",
      });
    });
  }
  getPosition() {
    return this.camera.position;
  }
  lookAt(t) {
    this.camera.lookAt(t);
  }
  resetTextAnimations() {
    if (
      (this.headingWraps.forEach((t) => {
        O.set(t, {
          opacity: 0,
        }),
          t.querySelectorAll("[data-text-animation]").forEach((t) => {
            const e = t.querySelectorAll(".char");
            O.set(e, {
              opacity: 0,
            });
            const i = t.querySelectorAll(".line");
            O.set(i, {
              y: "100%",
              opacity: 0,
            });
          });
      }),
      null !== this.currentPlanetIndex)
    ) {
      const t = document.querySelector(
        ".planet_heading-wrap.is-0" + (this.currentPlanetIndex + 1)
      );
      O.set(t, {
        opacity: 1,
      });
    }
  }
  handleTextAnimationsReady() {
    this.headingWraps.forEach((t, e) => {
      (t.style.display = 0 === e ? "flex" : "none"),
        (t.style.opacity = 0 === e ? "1" : "0");
    });
  }
  initializeHeadingDisplays() {
    var t;
    (null == (t = this.textAnimations) ? void 0 : t.initialized)
      ? this.handleTextAnimationsReady()
      : window.addEventListener(
          "textAnimationsReady",
          this.textAnimationsReadyHandler,
          {
            once: !0,
          }
        );
  }
  initializeTerminalDisplays() {
    this.terminals.forEach((t) => {
      (t.style.display = "none"),
        (t.style.opacity = "0"),
        (t.style.filter = "blur(5px)");
    });
    const t = document.querySelector(".terminal-container.is-01");
    t &&
      ((t.style.display = "flex"),
      (t.style.opacity = "1"),
      (t.style.filter = "blur(0px)"));
  }
  dispose() {
    window.removeEventListener(
      "textAnimationsReady",
      this.textAnimationsReadyHandler
    ),
      this.observer && (this.observer.disconnect(), (this.observer = null)),
      (this.textAnimationsReadyHandler = null),
      (this.textAnimations = null),
      (this.svgAnimations = null);
  }
}
class D {
  constructor() {
    (this.planetScene = new _()),
      (this.camera = new R(this.planetScene)),
      (this.isAnimating = !1),
      (this.isInteractive = !1),
      (this.isRevealCardOpen = !1),
      (this.interactive = null),
      (this.touchpoints = null),
      (this.isDesktop = window.innerWidth >= 992),
      (this.isMoving = !1),
      (this.lastClickTime = 0),
      (this.clickCooldown = 1e3),
      this.init();
  }
  async init() {
    try {
      await this.planetScene.initialized,
        (this.planets = this.planetScene.getPlanets()),
        this.isDesktop &&
          (await i(async () => {
            const { PlanetInteractive: t } = await Promise.resolve().then(
              () => F
            );
            return {
              PlanetInteractive: t,
            };
          }, void 0).then(({ PlanetInteractive: t }) => {
            (this.interactive = new t(
              this.camera.camera,
              this.planets,
              this.planetScene
            )),
              (this.interactive.currentPlanetIndex = 0),
              (window.planetInteractive = this.interactive);
          })),
        this.setupUIElements(),
        this.setupEventListeners(),
        this.animate();
    } catch (t) {}
  }
  setupUIElements() {
    (this.planetLink = document.getElementById("planet-link")),
      (this.buttons = document.querySelectorAll(
        "#link-blocks .button.is-icon"
      )),
      (this.svgContainer = document.getElementById("svg-container")),
      (this.planetSvgs = [
        document.getElementById("planet1-svg"),
        document.getElementById("planet2-svg"),
        document.getElementById("planet3-svg"),
      ]);
  }
  setupEventListeners() {
    window.addEventListener("resize", () => {
      var t;
      this.planetScene.resize(window.innerWidth, window.innerHeight),
        this.camera.updateAspect(window.innerWidth, window.innerHeight);
      const e = this.isDesktop;
      (this.isDesktop = window.innerWidth >= 992),
        e && !this.isDesktop
          ? ((null == (t = this.interactive) ? void 0 : t.isInteractive) &&
              this.interactive.closeInteractiveMode(),
            (this.interactive = null))
          : !e && this.isDesktop && this.initializeDesktop();
    }),
      this.buttons.forEach((t) => {
        t.addEventListener("click", (e) => {
          var i, s;
          e.preventDefault(), e.stopPropagation();
          const n = parseInt(t.getAttribute("data-planet"), 10),
            a = this.planetScene.getPlanet(n);
          return (
            a &&
              (null == (i = this.camera) ? void 0 : i.camera) &&
              ((null == (s = this.interactive) ? void 0 : s.isInteractive) &&
                this.interactive.closeInteractiveMode(),
              this.touchpoints && this.touchpoints.hideTouchpoints(),
              this.camera.moveToPlanet(a, n, this.planetScene.scene),
              this.planetScene.setCurrentPlanetIndex(n),
              this.interactive && (this.interactive.currentPlanetIndex = n),
              this.touchpoints &&
                setTimeout(() => {
                  this.touchpoints.showTouchpoints(n);
                }, 1e3)),
            !1
          );
        });
      });
  }
  animate() {
    var t, e;
    (null == (t = this.camera) ? void 0 : t.camera) &&
      (requestAnimationFrame(this.animate.bind(this)),
      this.isDesktop &&
        (null == (e = this.interactive) ? void 0 : e.isInteractive) &&
        this.interactive.update(),
      this.updateSvgPositions(),
      this.planetScene &&
        this.camera.camera &&
        this.planetScene.render(this.camera.camera));
  }
  updateSvgPositions() {
    const t = this.planetScene.getPlanets();
    t &&
      t.length &&
      t.forEach((t, e) => {
        this.planetSvgs[e] && this.updateSvgPosition(this.planetSvgs[e], t);
      });
  }
  updateSvgPosition(t, e) {
    const i = e.position.clone();
    i.project(this.camera.camera);
    const s = (0.5 * i.x + 0.5) * window.innerWidth,
      n =
        window.innerWidth > 768
          ? (-0.5 * i.y + 0.5) * window.innerHeight
          : 0.5 * window.innerHeight;
    (t.style.left = s + "px"),
      (t.style.top = n + "px"),
      (t.style.transform = "translate(-50%, -50%)");
  }
  async initializeDesktop() {
    try {
      const { PlanetInteractive: t } = await i(async () => {
        const { PlanetInteractive: t } = await Promise.resolve().then(() => F);
        return {
          PlanetInteractive: t,
        };
      }, void 0);
      (this.interactive = new t(
        this.camera.camera,
        this.planets,
        this.planetScene
      )),
        (this.interactive.currentPlanetIndex =
          this.planetScene.getCurrentPlanetIndex()),
        (window.planetInteractive = this.interactive);
    } catch (t) {}
  }
}
O.registerPlugin(k);
const F = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      PlanetInteractive: class {
        constructor(t, e, i) {
          if (
            ((this.camera = t),
            (this.planets = e),
            (this.scene = i),
            (this.isInteractive = !1),
            (this.currentPlanetIndex = null),
            (this.isAnimating = !1),
            (this.isDragging = !1),
            (this.momentum = 0),
            (this.lastMouseX = 0),
            (this.isModalOpen = !1),
            (this.isRevealCardOpen = !1),
            (this.closeButton = document.querySelector("#close-interaction")),
            (this.planetLink = document.querySelector("#planet-link")),
            (this.svgs = [
              document.getElementById("planet1-svg"),
              document.getElementById("planet2-svg"),
              document.getElementById("planet3-svg"),
            ]),
            (this.touchpoints = Array.from(
              document.querySelectorAll("img.touchpoint-svg")
            )),
            this.touchpoints.forEach((t) => {
              (t.style.position = "absolute"),
                (t.style.display = "none"),
                (t.style.opacity = "0"),
                (t.style.visibility = "hidden"),
                (t.style.transform = "translate(-50%, -50%) scale(0)"),
                (t.style.pointerEvents = "none");
            }),
            this.planetLink &&
              (this.planetLink.onclick = (t) => {
                t.preventDefault(),
                  t.stopPropagation(),
                  null !== this.currentPlanetIndex &&
                    this.makePlanetInteractive(
                      this.planets[this.currentPlanetIndex],
                      this.currentPlanetIndex
                    );
              }),
            this.closeButton &&
              (this.closeButton.onclick = (t) => {
                t.preventDefault(),
                  t.stopPropagation(),
                  this.closeInteractiveMode();
              }),
            this.initTouchpoints(),
            (this.textAnimations = window.textAnimations),
            (this.svgAnimations = window.svgAnimations),
            !this.textAnimations || !this.svgAnimations)
          ) {
            const t = setInterval(() => {
              window.textAnimations &&
                window.svgAnimations &&
                ((this.textAnimations = window.textAnimations),
                (this.svgAnimations = window.svgAnimations),
                clearInterval(t));
            }, 100);
          }
        }
        setModalOpen(t) {
          (this.isModalOpen = t), t && (this.momentum = 0);
        }
        makePlanetInteractive(t, e) {
          if (this.isAnimating) return;
          (this.isAnimating = !0),
            (this.isInteractive = !0),
            (this.currentPlanetIndex = e),
            (this.planetLink.style.display = "none"),
            (document.querySelector(".planet-slider").style.pointerEvents =
              "none");
          const i = document.querySelectorAll("#link-blocks .button.is-icon");
          O.to(i, {
            opacity: 0.5,
            duration: 1,
            stagger: {
              amount: 0.3,
              from: "start",
              ease: "power3.inOut",
            },
          });
          const s = document.querySelector(
              ".planet_heading-wrap.is-0" + (e + 1)
            ),
            n = document.querySelector(".terminal-container.is-0" + (e + 1));
          O.to([s, n], {
            opacity: 0,
            filter: "blur(5px)",
            duration: 1,
            ease: "power3.inOut",
          }),
            O.to(this.svgs[e], {
              scale: 0.7,
              opacity: 0,
              duration: 2,
              ease: "power3.inOut",
            });
          const a = window.innerWidth > 768 ? 1.2 : 1;
          O.timeline()
            .to(t.scale, {
              x: a,
              y: a,
              z: a,
              duration: 3,
              ease: "power3.inOut",
            })
            .to(
              t.rotation,
              {
                y: t.rotation.y - Math.PI,
                duration: 3,
                ease: "power3.inOut",
                onComplete: () => {
                  (this.isAnimating = !1),
                    this.showTouchpoints(this.currentPlanetIndex);
                },
              },
              0
            ),
            this.setupDragInteraction(t),
            (this.closeButton.style.display = "block"),
            O.to(this.closeButton, {
              opacity: 1,
              duration: 1,
              ease: "power3.inOut",
            });
        }
        setupDragInteraction(t) {
          const e = (t) => {
              (this.isDragging = !0),
                (this.lastMouseX = t.clientX),
                (this.momentum = 0),
                (document.body.style.cursor = "grabbing");
            },
            i = (e) => {
              if (this.isDragging) {
                const i = e.clientX - this.lastMouseX;
                (this.lastMouseX = e.clientX),
                  (this.momentum = 0.001 * i),
                  (t.rotation.y += this.momentum);
              }
            },
            s = () => {
              (this.isDragging = !1), (document.body.style.cursor = "default");
            };
          window.addEventListener("mousedown", e),
            window.addEventListener("mousemove", i),
            window.addEventListener("mouseup", s),
            window.addEventListener("touchstart", (t) => {
              e({
                clientX: t.touches[0].clientX,
                clientY: t.touches[0].clientY,
              });
            }),
            window.addEventListener("touchmove", (t) => {
              i({
                clientX: t.touches[0].clientX,
                clientY: t.touches[0].clientY,
              });
            }),
            window.addEventListener("touchend", s),
            (this.dragListeners = {
              onMouseDown: e,
              onMouseMove: i,
              onMouseUp: s,
            });
        }
        closeInteractiveMode() {
          if (!this.isInteractive || this.isAnimating) return;
          (this.isAnimating = !0),
            (this.isInteractive = !1),
            this.hideTouchpoints(),
            O.to(this.closeButton, {
              opacity: 0,
              duration: 0.3,
              ease: "power2.inOut",
              onComplete: () => {
                (this.closeButton.style.display = "none"),
                  (this.planetLink.style.display = "block"),
                  O.to(this.planetLink, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.inOut",
                  });
              },
            }),
            (document.querySelector(".planet-slider").style.pointerEvents =
              "auto");
          const t = document.querySelectorAll("#link-blocks .button.is-icon");
          O.to(t, {
            opacity: 1,
            duration: 0.3,
            stagger: {
              amount: 0.1,
              from: "end",
              ease: "power3.inOut",
            },
          }),
            this.showTextElements(),
            this.resetPlanet(),
            this.dragListeners &&
              (window.removeEventListener(
                "mousedown",
                this.dragListeners.onMouseDown
              ),
              window.removeEventListener(
                "mousemove",
                this.dragListeners.onMouseMove
              ),
              window.removeEventListener(
                "mouseup",
                this.dragListeners.onMouseUp
              ),
              window.removeEventListener(
                "touchstart",
                this.dragListeners.onMouseDown
              ),
              window.removeEventListener(
                "touchmove",
                this.dragListeners.onMouseMove
              ),
              window.removeEventListener(
                "touchend",
                this.dragListeners.onMouseUp
              ));
        }
        showTextElements() {
          if (null === this.currentPlanetIndex) return;
          const t = document.querySelector(
              ".planet_heading-wrap.is-0" + (this.currentPlanetIndex + 1)
            ),
            e = document.querySelector(
              ".terminal-container.is-0" + (this.currentPlanetIndex + 1)
            );
          O.to([t, e], {
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            delay: 0.5,
            ease: "power3.inOut",
          });
        }
        resetPlanet() {
          if (null === this.currentPlanetIndex) return;
          const t = this.planets[this.currentPlanetIndex],
            e = window.innerWidth > 768 ? 1 : 0.8;
          O.timeline()
            .to(t.rotation, {
              x: 0,
              y: t.rotation.y + Math.PI,
              duration: 3,
              ease: "power3.inOut",
            })
            .to(
              t.scale,
              {
                x: e,
                y: e,
                z: e,
                duration: 3,
                ease: "power3.inOut",
                onComplete: () => {
                  this.isAnimating = !1;
                },
              },
              0
            )
            .to(
              this.svgs[this.currentPlanetIndex],
              {
                scale: 1,
                opacity: 1,
                duration: 2,
                ease: "power3.inOut",
              },
              0
            );
        }
        showTouchpoints(t) {
          const e = 3 * t;
          this.touchpoints.slice(e, e + 3).forEach((t, e) => {
            (t.style.display = "block"),
              (t.style.visibility = "visible"),
              (t.style.pointerEvents = "auto"),
              O.to(t, {
                opacity: 1,
                scale: 1.4,
                duration: 0.5,
                delay: 0.1 * e,
                ease: "back.out(1.7)",
                onComplete: () =>
                  (t.style.transform = "translate(-50%, -50%) scale(1.4)"),
              });
          });
        }
        hideTouchpoints() {
          this.touchpoints.forEach((t) => {
            O.to(t, {
              opacity: 0,
              scale: 0,
              duration: 0.3,
              ease: "power2.in",
              onComplete: () => {
                (t.style.display = "none"),
                  (t.style.visibility = "hidden"),
                  (t.style.pointerEvents = "none");
              },
            });
          });
        }
        updateTouchpointPositions() {
          if (!this.isInteractive || null === this.currentPlanetIndex) return;
          const t = 3 * this.currentPlanetIndex,
            e = this.touchpoints.slice(t, t + 3),
            i = this.planets[this.currentPlanetIndex],
            s = new C(),
            n = new q();
          n.multiplyMatrices(
            this.camera.projectionMatrix,
            this.camera.matrixWorldInverse
          ),
            s.setFromProjectionMatrix(n);
          const a = [
            new T(0, 0.2, 1).normalize().multiplyScalar(5),
            new T(-1, -0.6, 0).normalize().multiplyScalar(5),
            new T(0, 0, -1).normalize().multiplyScalar(5),
          ];
          e.forEach((t, e) => {
            const n = a[e].clone().applyMatrix4(i.matrixWorld),
              o = n.clone().project(this.camera),
              r = (0.5 * o.x + 0.5) * window.innerWidth,
              l = (-0.5 * o.y + 0.5) * window.innerHeight;
            if (!s.containsPoint(n))
              return (t.style.display = "none"), void (t.style.opacity = "0");
            const c = i.getWorldPosition(new T()),
              h = new T().subVectors(n, c).normalize(),
              d = new T().subVectors(this.camera.position, n).normalize();
            h.dot(d) > 0
              ? ((t.style.display = "block"),
                (t.style.visibility = "visible"),
                (t.style.opacity = "1"),
                (t.style.left = r + "px"),
                (t.style.top = l + "px"))
              : ((t.style.visibility = "hidden"), (t.style.opacity = "0"));
          });
        }
        update() {
          if (
            this.isInteractive &&
            null !== this.currentPlanetIndex &&
            !this.isModalOpen
          ) {
            const t = this.planets[this.currentPlanetIndex];
            this.updateTouchpointPositions(),
              this.isDragging ||
                (Math.abs(this.momentum) > 1e-4
                  ? ((t.rotation.y += this.momentum), (this.momentum *= 0.97))
                  : ((this.momentum = 0), (t.rotation.y += 5e-4)));
          }
        }
        initTouchpoints() {
          this.touchpoints.forEach((t, e) => {
            t.addEventListener("mouseenter", () => {
              this.isModalOpen ||
                O.to(t, {
                  scale: 1.8,
                  duration: 0.3,
                  ease: "power2.out",
                });
            }),
              t.addEventListener("mouseleave", () => {
                this.isModalOpen ||
                  O.to(t, {
                    scale: 1.5,
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.out",
                  });
              }),
              t.addEventListener("click", () => {
                this.isModalOpen || this.openModal(e + 1);
              });
          }),
            document.querySelectorAll('[data-element="close"]').forEach((t) => {
              t.addEventListener("click", () => this.closeModal());
            });
          const t = document.querySelector(".planet-modal_component");
          t &&
            t.addEventListener("click", (e) => {
              e.target === t && this.closeModal();
            });
        }
        get textAnimator() {
          return window.textAnimations;
        }
        get svgAnimator() {
          return window.svgAnimations;
        }
        openModal(t) {
          const e = document.querySelector(".planet-modal_component"),
            s = document.querySelector(`[data-modal="${t}"]`),
            n = this.touchpoints[t - 1],
            a = document.getElementById("close-interaction"),
            o = document.getElementById("canvas-wrapper");
          if (e && s) {
            i(async () => {
              const { default: t } = await import(
                "../../global/scroll/global-scroll-Cwvypyp-.js"
              );
              return {
                default: t,
              };
            }, __vite__mapDeps([0, 1])).then(({ default: t }) => {
              if (t) {
                const e = o.getBoundingClientRect();
                0 > e.top || e.bottom > window.innerHeight
                  ? t.scrollTo(o, {
                      offset: 0,
                      duration: 1,
                      onComplete: () => {
                        t.stop();
                      },
                    })
                  : t.stop();
              }
            }),
              (this.isModalOpen = !0),
              this.scene.setModalOpen(!0),
              (e.style.display = "flex"),
              (e.style.opacity = "0"),
              a && (a.style.display = "none");
            const t = O.timeline();
            t.to(e, {
              opacity: 1,
              duration: 1,
              ease: "power2.out",
            });
            const r = s.querySelector(".modal_icon");
            r &&
              (O.set(r, {
                opacity: 0,
              }),
              t.to(
                r,
                {
                  opacity: 1,
                  duration: 1,
                  ease: "power2.out",
                },
                0.3
              )),
              O.set(s, {
                display: "block",
                xPercent: 100,
                opacity: 0,
              }),
              t.to(
                s,
                {
                  xPercent: 0,
                  opacity: 1,
                  duration: 1,
                  ease: "power2.out",
                },
                0
              ),
              t.to(
                n,
                {
                  rotation: 45,
                  scale: 1.5,
                  duration: 0.3,
                  ease: "power2.out",
                },
                0
              );
            const l = s.querySelector(".modal_image-wrap"),
              c = s.querySelector(".modal_image");
            l &&
              c &&
              (O.set(l, {
                clipPath: "inset(100% 0% 0% 0%)",
              }),
              O.set(c, {
                scale: 1.5,
                filter: "brightness(200%)",
              }),
              t
                .to(
                  l,
                  {
                    clipPath: "inset(0% 0% 0% 0%)",
                    duration: 1,
                  },
                  0.3
                )
                .to(
                  c,
                  {
                    scale: 1,
                    filter: "brightness(100%)",
                    duration: 1,
                  },
                  0.3
                ));
            const h = s.querySelectorAll('p[data-text-trigger="modal"]');
            document.fonts.ready.then(() => {
              h.forEach((t) => {
                t._split && t._split.revert(),
                  (t.style = ""),
                  (t.innerHTML = t.textContent);
                const e = new k(t, {
                  type: "lines",
                  linesClass: "line",
                });
                (t._split = e),
                  e.lines.forEach((t) => {
                    (document.createElement("div").style.overflow = "hidden"),
                      (t.innerHTML = `<div class="line-inner" style="text-align: center;">${t.innerHTML}</div>`);
                  });
                const i = t.querySelectorAll(".line-inner");
                O.fromTo(
                  i,
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
                    delay: 0.3,
                  }
                );
              });
            }),
              this.textAnimator &&
                (s
                  .querySelectorAll(
                    '[data-text-animation="random"][data-text-trigger="modal"]'
                  )
                  .forEach((t) => {
                    const e = parseFloat(t.getAttribute("data-delay")) || 0.3;
                    this.textAnimator.randomAnimation(t, e);
                  }),
                s
                  .querySelectorAll(
                    '[data-text-animation="wipe"][data-text-trigger="modal"]'
                  )
                  .forEach((t) => {
                    const e = parseFloat(t.getAttribute("data-delay")) || 0.3;
                    this.textAnimator.wipeAnimation(t, e);
                  })),
              s
                .querySelectorAll('.svg-wrapper[data-svg-trigger="modal"]')
                .forEach((t) => {
                  this.svgAnimator && this.svgAnimator.animate(t);
                });
          }
        }
        closeModal() {
          const t = document.querySelector(".planet-modal_component"),
            e = document.querySelector(
              '.planet-modal_item[style*="display: block"]'
            ),
            s = parseInt(null == e ? void 0 : e.getAttribute("data-modal")),
            n = this.touchpoints[s - 1],
            a = document.getElementById("close-interaction");
          if (t && e) {
            const s = O.timeline();
            s.to([t, e], {
              opacity: 0,
              duration: 0.5,
              ease: "power2.inOut",
              onComplete: () => {
                i(async () => {
                  const { default: t } = await import(
                    "../../global/scroll/global-scroll-Cwvypyp-.js"
                  );
                  return {
                    default: t,
                  };
                }, __vite__mapDeps([0, 1])).then(({ default: t }) => {
                  t && t.start();
                }),
                  O.killTweensOf(e.querySelectorAll("*")),
                  (t.style.display = "none"),
                  (e.style.display = "none"),
                  O.set([t, e], {
                    opacity: 1,
                  }),
                  (this.isModalOpen = !1),
                  this.scene.setModalOpen(!1),
                  e
                    .querySelectorAll('[data-text-trigger="modal"]')
                    .forEach((t) => {
                      if ("reveal" === t.getAttribute("data-text-animation")) {
                        const e = t.querySelectorAll(".line-inner");
                        O.set(e, {
                          y: "100%",
                        });
                      } else {
                        const e = t.querySelectorAll(".char");
                        O.set(e, {
                          opacity: 0,
                        });
                      }
                    }),
                  e
                    .querySelectorAll('.svg-wrapper[data-svg-trigger="modal"]')
                    .forEach((t) => {
                      const e = t.getAttribute("data-direction") || "forward";
                      O.set(t, {
                        clipPath:
                          "reverse" === e
                            ? "inset(0% 0% 0% 100%)"
                            : "inset(0% 100% 0% 0%)",
                      });
                    });
                const s = e.querySelector(".modal_image-wrap"),
                  n = e.querySelector(".modal_image");
                s &&
                  n &&
                  (O.set(s, {
                    clipPath: "inset(100% 0% 0% 0%)",
                  }),
                  O.set(n, {
                    scale: 1.5,
                    filter: "brightness(200%)",
                  })),
                  a && (a.style.display = "block"),
                  e
                    .querySelectorAll('p[data-text-trigger="modal"]')
                    .forEach((t) => {
                      t._split && (t._split.revert(), delete t._split);
                    });
              },
            }),
              n &&
                s.to(
                  n,
                  {
                    rotation: 0,
                    scale: 1.5,
                    duration: 0.3,
                    ease: "power2.out",
                  },
                  0
                );
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
export { D as default };
