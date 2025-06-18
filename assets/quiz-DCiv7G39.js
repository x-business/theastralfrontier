/* empty css                         */
import { g as t } from "./js/vendor/gsap/vendor-gsap-core-D4-kPFdx.js";
import { S as e } from "./js/vendor/gsap/vendor-gsap-split-vj7Di18r.js";
import "./js/global/core/global-core-Cx4mqg2V.js";
document.addEventListener("DOMContentLoaded", async () => {
  const t = 991 >= window.innerWidth;
  try {
    if (!t) {
      const t = new Promise((t) => {
        const e = document.createElement("script");
        (e.src = "https://cdn.unicorn.studio/v1.3.2/unicornStudio.umd.js"),
          (e.onload = () => {
            UnicornStudio.init(), t();
          }),
          document.head.appendChild(e);
      });
      await t;
    }
  } catch (e) {}
}),
  t.registerPlugin(e);
const i = new (class {
    constructor() {
      (this.elements = null),
        (this.wordToValidate = ""),
        (this.textSplit = null),
        (this.numberSplit = null);
    }
    init() {
      (this.wordToValidate = this.generateRandomCode()),
        (this.elements = {
          popup: document.querySelector(".popup"),
          inputContainer: document.querySelector(".popup .input-container"),
          inputButtons: document.querySelectorAll(".button.is-input"),
          textButton: document.querySelector(".popup .button.is-age"),
          animatedText: document.querySelector('[data-animation="popup-text"]'),
          animatedNumber: document.querySelector(
            '[data-animation="popup-number"]'
          ),
          popupBack: document.querySelector(".popup-back"),
          closeButton: document.querySelector('[data-close="popup"]'),
          inputs: document.querySelectorAll(".year-input"),
          confirmButton: document.getElementById("age-confirm"),
          body: document.body,
        }),
        this.elements.popup &&
          (this.elements.animatedText &&
            ((this.textSplit = new e(this.elements.animatedText, {
              type: "lines,chars",
              linesClass: "line",
              charsClass: "char char++",
            })),
            t.set(this.elements.animatedText, {
              opacity: 0,
            }),
            t.set(this.textSplit.chars, {
              opacity: 0,
            })),
          this.elements.animatedNumber &&
            (this.numberSplit = new e(this.elements.animatedNumber, {
              type: "chars",
              charsClass: "digit++",
            })),
          this.setInitialStates(),
          this.setupEventListeners(),
          this.setupInputHandling());
    }
    generateRandomCode() {
      return Array.from(
        {
          length: 3,
        },
        () => Math.floor(10 * Math.random())
      ).join("");
    }
    setInitialStates() {
      this.elements.animatedText &&
        t.set(this.elements.animatedText, {
          opacity: 0,
        }),
        this.elements.animatedNumber &&
          t.set(this.elements.animatedNumber, {
            opacity: 0,
          }),
        this.elements.confirmButton &&
          t.set(this.elements.confirmButton, {
            opacity: 0.5,
            pointerEvents: "none",
          });
    }
    setupEventListeners() {
      this.elements.closeButton.addEventListener(
        "click",
        this.closePopup.bind(this)
      );
    }
    popupAnimation() {
      t.killTweensOf(this.elements.animatedText),
        t.killTweensOf(this.textSplit.chars),
        t.killTweensOf(this.elements.inputButtons),
        t.killTweensOf(this.elements.textButton),
        t.killTweensOf(this.elements.popupBack),
        t.killTweensOf(this.elements.popup);
      const e = t.timeline({
        onStart: () => {
          this.elements.body.classList.add("lenis-stopped"),
            "undefined" != typeof lenis && lenis.stop();
        },
      });
      e.fromTo(
        this.elements.popup,
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.5,
          ease: "power1.out",
        }
      ),
        e.to(
          this.elements.animatedText,
          {
            opacity: 1,
            duration: 0.1,
          },
          "<"
        ),
        e.add(() => this.animateRandomText(), "<0.3"),
        e.fromTo(
          this.elements.inputButtons,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            stagger: {
              amount: 0.4,
              ease: "power2.inOut",
            },
            ease: "power2.out",
          },
          "-=0.1"
        ),
        e.fromTo(
          this.elements.textButton,
          {
            opacity: 0,
          },
          {
            opacity: 0.5,
            duration: 0.5,
            ease: "power2.InOut",
          },
          "<0.2"
        ),
        e.fromTo(
          this.elements.popupBack,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
          },
          "<"
        );
    }
    animateRandomText() {
      const e = this.elements.animatedText;
      e &&
        this.textSplit &&
        (t.killTweensOf(this.textSplit.chars),
        this.textSplit.lines.forEach((e, i) => {
          const n = e.querySelectorAll(".char");
          t.to(n, {
            opacity: 1,
            duration: 0.8,
            stagger: 0.07,
            ease: "power2.out",
            delay: 0.35 * i,
          });
        }),
        [
          e.querySelector(".char61"),
          e.querySelector(".char62"),
          e.querySelector(".char63"),
        ].forEach((e, i) => {
          if (!e) return;
          const n = this.wordToValidate[i],
            o = Array.from(
              {
                length: 30,
              },
              () => Math.floor(9 * Math.random())
            );
          o.push(parseInt(n)),
            o.forEach((i, n) => {
              t.delayedCall(0.8 + 0.08 * n, () => {
                e.textContent = i;
              });
            });
        }));
    }
    closePopup() {
      const e = t.timeline({
        onComplete: () => {
          this.elements.body.classList.remove("lenis-stopped"),
            "undefined" != typeof lenis && lenis.start(),
            t.set(this.elements.popup.querySelector(".popup_wrap"), {
              opacity: 1,
            }),
            t.set(this.elements.inputButtons, {
              clearProps: "all",
            }),
            this.elements.inputs.forEach((t, e) => {
              t.value = "";
              const i = t.closest(".button.is-input");
              i &&
                (i.classList.remove("active"),
                i.setAttribute("data-theme", "default"));
            }),
            [
              this.elements.animatedText.querySelector(".char61"),
              this.elements.animatedText.querySelector(".char62"),
              this.elements.animatedText.querySelector(".char63"),
            ].forEach((t) => {
              t && t.setAttribute("data-theme", "default");
            }),
            (this.wordToValidate = this.generateRandomCode());
        },
      });
      this.textSplit.lines.forEach((e, i) => {
        const n = e.querySelectorAll(".char");
        t.to([...n].reverse(), {
          opacity: 0,
          duration: 0.3,
          stagger: 0.02,
          ease: "power2.in",
          delay: 0.05 * i,
        });
      }),
        e.to(
          [...this.elements.inputButtons].reverse(),
          {
            opacity: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.in",
          },
          "+=0.2"
        ),
        e.to(
          this.elements.popup.querySelector(".popup_wrap"),
          {
            opacity: 0,
            duration: 0.3,
            ease: "power1.inOut",
          },
          "-=0.2"
        ),
        e.to(
          this.elements.popup,
          {
            autoAlpha: 0,
            duration: 0.5,
            ease: "power1.inOut",
          },
          "-=0.2"
        );
    }
    setupInputHandling() {
      if (0 === this.elements.inputs.length) return;
      const t = [
        this.elements.animatedText.querySelector(".char61"),
        this.elements.animatedText.querySelector(".char62"),
        this.elements.animatedText.querySelector(".char63"),
      ];
      this.elements.inputs.forEach((e, i) => {
        (e.value = ""),
          e.setAttribute("autocomplete", "off"),
          e.setAttribute("type", "tel"),
          e.setAttribute("inputmode", "numeric"),
          e.setAttribute("pattern", "[0-9]*"),
          e.setAttribute("placeholder", "Y"),
          (e.style.userSelect = "none"),
          (e.style.WebkitUserSelect = "none");
        const n = e.closest(".button.is-input");
        n &&
          (e.addEventListener("beforeinput", (t) => {
            /^\d*$/.test(t.data) || t.preventDefault();
          }),
          e.addEventListener("focus", () => {
            n.classList.add("active");
          }),
          e.addEventListener("click", () => {
            (e.value = ""),
              n.setAttribute("data-theme", "default"),
              t[i] && t[i].setAttribute("data-theme", "default"),
              this.updateConfirmButtonState();
          }),
          e.addEventListener("keydown", (o) => {
            ("Backspace" !== o.key && "Delete" !== o.key) ||
              ((e.value = ""),
              n.setAttribute("data-theme", "default"),
              t[i] && t[i].setAttribute("data-theme", "default"),
              this.updateConfirmButtonState()),
              "Enter" === o.key &&
                Array.from(this.elements.inputs)
                  .map((t) => t.value)
                  .join("") === this.wordToValidate &&
                this.elements.confirmButton.click();
          }),
          e.addEventListener("blur", () => {
            e.value ||
              (n.classList.remove("active"),
              n.setAttribute("data-theme", "default"),
              t[i] && t[i].setAttribute("data-theme", "default"));
          }),
          e.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
            const o = this.wordToValidate[i],
              a = e.target.value,
              s = t[i];
            a === o
              ? (n.setAttribute("data-theme", "green"),
                s && s.setAttribute("data-theme", "green"))
              : a.length > 0
              ? (n.setAttribute("data-theme", "red"),
                s && s.setAttribute("data-theme", "red"))
              : (n.setAttribute("data-theme", "default"),
                s && s.setAttribute("data-theme", "default")),
              1 === a.length &&
                a === o &&
                i < this.elements.inputs.length - 1 &&
                this.elements.inputs[i + 1].focus(),
              this.updateConfirmButtonState();
          }));
      }),
        this.elements.confirmButton &&
          this.elements.confirmButton.addEventListener("click", () => {
            Array.from(this.elements.inputs)
              .map((t) => t.value)
              .join("") === this.wordToValidate &&
              "function" == typeof this.onConfirm &&
              this.onConfirm();
          });
      const e = this.elements.inputs[0].closest("form");
      e &&
        e.addEventListener("submit", (t) => {
          t.preventDefault(),
            Array.from(this.elements.inputs)
              .map((t) => t.value)
              .join("") === this.wordToValidate &&
              this.elements.confirmButton.click();
        });
    }
    updateConfirmButtonState() {
      Array.from(this.elements.inputs)
        .map((t) => t.value)
        .join("") === this.wordToValidate
        ? t.set(this.elements.confirmButton, {
            opacity: 1,
            pointerEvents: "auto",
          })
        : t.set(this.elements.confirmButton, {
            opacity: 0.5,
            pointerEvents: "none",
          });
    }
    setConfirmCallback(t) {
      this.onConfirm = t;
    }
  })(),
  n = {
    get textAnimator() {
      return window.textAnimations;
    },
    get svgAnimator() {
      return window.svgAnimations;
    },
    userAnswers: [],
    resultMapping: {
      red: "/planet/100b-proxima.html",
      blue: "/planet/4-lhs-1140b.html",
      green: "/planet/tee-garden-b.html",
      yellow: "/planet/1-e-trappist.html",
      neutral: "/planet/astral-explorer.html",
    },
    initialPositions: {
      "item-1": {
        x: 0,
        y: 0,
      },
      "item-2": {
        x: 0,
        y: "100%",
      },
      "item-3": {
        x: "100%",
        y: "100%",
      },
      "item-4": {
        x: "-100%",
        y: "100%",
      },
      "item-5": {
        x: 0,
        y: "100%",
      },
    },
    highestQuestionReached: 1,
    animatedElements: new Set(),
    init() {
      const e = t.timeline();
      "true" === localStorage.getItem("needsFadeIn") &&
        ((document.body.style.opacity = "0"),
        (document.body.style.visibility = "visible"),
        localStorage.removeItem("needsFadeIn"),
        e.to(document.body, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            document.body.style.opacity = "";
          },
        })),
        t.set(".quiz_item", {
          opacity: 0,
          visibility: "hidden",
        });
      const i = t.timeline({
        delay: 0.7 * e.duration(),
      });
      Object.entries(this.initialPositions).forEach(([e, i]) => {
        t.set(".quiz_item." + e, {
          x: i.x,
          y: i.y,
        });
      });
      for (let n = 1; 5 >= n; n++) {
        const e = n.toString().padStart(2, "0"),
          i = document.querySelector(`[data-quiz-svg="item-${e}"]`);
        i &&
          (1 === n
            ? t.set(i, {
                scale: 0.8,
                y: "100%",
              })
            : t.set(i, {
                scale: 0.8,
              }));
      }
      this.setupSVGLines(),
        this.initQuizNavigation(),
        this.setupEventListeners(),
        i
          .set(".quiz_item.item-1", {
            visibility: "visible",
          })
          .to(
            ".quiz_item.item-1",
            {
              opacity: 1,
              duration: 1.5,
              ease: "power2.inOut",
            },
            "fadeIn"
          )
          .to(
            '[data-quiz-svg="item-01"]',
            {
              y: "0%",
              duration: 0.8,
              ease: "power2.out",
            },
            "fadeIn+=0.5"
          )
          .call(
            () => {
              this.textAnimator && this.animateQuestionEntry(1);
            },
            null,
            "-=0.1"
          );
    },
    getInitialPosition(t) {
      return this.initialPositions["item-" + t];
    },
    getExitPosition: (t) => ({
      x: 0 === t.x ? 0 : t.x.includes("-") ? "100vw" : "-100vw",
      y: 0 === t.y ? 0 : t.y.includes("-") ? "100vh" : "-100vh",
    }),
    animateQuizItemSVG(e) {
      const i = e.toString().padStart(2, "0"),
        n = document.querySelector(`[data-quiz-svg="item-${i}"]`);
      n &&
        (t.set(n, {
          scale: 0.8,
        }),
        t.to(n, {
          scale: 1,
          duration: 1,
          ease: "power2.out",
        }));
    },
    animateButtonGroup(e) {
      const i = e.toString().padStart(2, "0"),
        n = document.querySelector(`[data-quiz-button-wrap="item-${i}"]`);
      if (n) {
        const e = n.children;
        t.set(e, {
          opacity: 0,
        }),
          t.to(e, {
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          });
      }
    },
    animateQuestionEntry(e) {
      const i = e.toString().padStart(2, "0");
      this.textAnimator &&
        (document
          .querySelectorAll(
            `[data-text-animation="random"][data-quiz="is-${i}"]`
          )
          .forEach((t) => {
            const e = parseFloat(t.getAttribute("data-delay")) || 0;
            this.textAnimator.randomAnimation(t, e);
          }),
        document
          .querySelectorAll(`[data-text-animation="wipe"][data-quiz="is-${i}"]`)
          .forEach((t) => {
            const e = parseFloat(t.getAttribute("data-delay")) || 0;
            this.textAnimator.wipeAnimation(t, e);
          }),
        document
          .querySelectorAll(
            `[data-text-animation="reveal"][data-quiz="is-${i}"]`
          )
          .forEach((t) => {
            const e = parseFloat(t.getAttribute("data-delay")) || 0;
            this.textAnimator.revealAnimation(t, e);
          }),
        document
          .querySelectorAll(
            `[data-text-animation="decrypt"][data-quiz="is-${i}"]`
          )
          .forEach((t) => {
            const e = parseFloat(t.getAttribute("data-delay")) || 0;
            this.textAnimator.decryptAnimation(t, e);
          })),
        document
          .querySelectorAll(
            `.svg-wrapper[data-svg-trigger="quiz"][data-quiz="is-${i}"]`
          )
          .forEach((t) => {
            this.svgAnimator && this.svgAnimator.animate(t);
          }),
        this.animateQuizItemSVG(e),
        t.delayedCall(0.5, () => {
          this.animateButtonGroup(e);
        });
    },
    moveToNextQuestion(e) {
      if (e >= 5) return;
      window.playAudioWithCheck(window.planetMoveAudio);
      const i = e + 1,
        n = ".quiz_item.item-" + e,
        o = ".quiz_item.item-" + i,
        a = document.querySelector(o);
      a &&
        ((a.style.visibility = "visible"),
        (a.style.display = "flex"),
        (a.style.alignItems = "center"),
        (a.style.justifyContent = "center")),
        (this.highestQuestionReached = Math.max(
          this.highestQuestionReached,
          i
        ));
      const s = this.getInitialPosition(i),
        r = this.getExitPosition(s),
        l = i.toString().padStart(2, "0"),
        u = t.timeline();
      t.set(o, {
        x: s.x,
        y: s.y,
        opacity: 0,
        immediateRender: !0,
      }),
        u.to(n, {
          x: r.x,
          y: r.y,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            document.querySelector(n).style.visibility = "hidden";
          },
        });
      const d = document.querySelector(`[data-quiz-svg="item-${l}"]`),
        c = document.querySelector(`[data-quiz-button-wrap="item-${l}"]`);
      d &&
        t.set(d, {
          scale: 0.8,
        }),
        c &&
          t.set(c.children, {
            opacity: 0,
          }),
        u.to(
          o,
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            onStart: () => {
              this.animateQuizLine(e),
                t.delayedCall(0.5, () => {
                  this.animateQuizMarker(i);
                }),
                t.delayedCall(0.5, () => {
                  this.animateQuestionEntry(i);
                });
            },
          },
          "-=0.5"
        );
    },
    animateQuizMarker(e) {
      const i = e.toString().padStart(2, "0");
      document.querySelectorAll("[data-quiz-marker]").forEach((e) => {
        t.to(e, {
          color: "#8f7e77",
          opacity: 0.5,
          duration: 0.5,
          ease: "power2.out",
        }),
          (e.style.cursor = "default");
      });
      for (let a = 1; e >= a; a++) {
        const e = document.querySelector(
          `[data-quiz-marker="item-${a.toString().padStart(2, "0")}"]`
        );
        e &&
          (t.to(e, {
            color: "#ffffff",
            opacity: 0.5,
            duration: 0.5,
            ease: "power2.out",
          }),
          (e.style.cursor = "pointer"));
      }
      const n = document.querySelector(`[data-quiz-marker="item-${i}"]`);
      n &&
        t.to(n, {
          color: "#ffffff",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      const o = t.timeline({
        defaults: {
          duration: 0.4,
          ease: "power2.inOut",
        },
      });
      o.set({}, {}, "start");
      for (let t = this.highestQuestionReached - 1; t >= e; t--) {
        const e = t.toString().padStart(2, "0"),
          i = document.querySelector(`[data-quiz-line="item-${e}"]`);
        if (i) {
          const e = i.querySelector("mask rect");
          e &&
            o.to(
              e,
              {
                attr: {
                  width: 0,
                },
              },
              "start+=" + 0.3 * (this.highestQuestionReached - 1 - t)
            );
        }
      }
    },
    setupSVGLines() {
      document.querySelectorAll("[data-quiz-line]").forEach((t) => {
        const e = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "mask"
          ),
          i = "line-mask-" + t.getAttribute("data-quiz-line");
        e.setAttribute("id", i);
        const n = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect"
        );
        n.setAttribute("width", "0"),
          n.setAttribute("height", "9"),
          n.setAttribute("fill", "white"),
          e.appendChild(n),
          t.insertBefore(e, t.firstChild);
        const o = t.querySelector("path");
        o && o.setAttribute("mask", `url(#${i})`);
      });
    },
    animateQuizLine(e) {
      const i = e.toString().padStart(2, "0"),
        n = "line-" + i,
        o = document.querySelector(`[data-quiz-line="item-${i}"]`);
      if (o) {
        const e = o.querySelector("mask rect");
        e &&
          (t.set(e, {
            attr: {
              width: 0,
            },
          }),
          t.to(e, {
            attr: {
              width: 165,
            },
            duration: 1,
            ease: "power2.inOut",
          }));
      }
      this.animatedElements.add(n);
    },
    initQuizNavigation() {
      document.querySelectorAll("[data-quiz-marker]").forEach((e) => {
        t.set(e, {
          color: "#8f7e77",
          opacity: 0.5,
        }),
          (e.style.cursor = "default"),
          e.addEventListener("click", (t) => {
            const e = parseInt(
              t.currentTarget.getAttribute("data-quiz-marker").split("-")[1]
            );
            this.handleMarkerClick(e);
          });
      });
      const e = document.querySelector('[data-quiz-marker="item-01"]');
      e &&
        (t.set(e, {
          color: "#ffffff",
          opacity: 1,
        }),
        (e.style.cursor = "pointer"));
    },
    handleMarkerClick(t) {
      const e = document.querySelector('.quiz_item[style*="opacity: 1"]'),
        i = parseInt(e.classList[1].split("-")[1]);
      t !== i &&
        ((t > i && (t !== i + 1 || t > this.highestQuestionReached)) ||
          (i > t ? this.moveToQuestion(i, t) : this.moveToNextQuestion(i)));
    },
    moveToQuestion(e, i) {
      window.playAudioWithCheck(window.planetMoveAudio);
      const n = ".quiz_item.item-" + e,
        o = ".quiz_item.item-" + i,
        a = t.timeline(),
        s = document.querySelector(o);
      s &&
        ((s.style.visibility = "visible"),
        (s.style.display = "flex"),
        (s.style.alignItems = "center"),
        (s.style.justifyContent = "center")),
        t.set(o, {
          x: "-100vw",
          y: 0,
          opacity: 0,
          immediateRender: !0,
        }),
        a.to(n, {
          x: "100vw",
          y: 0,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            document.querySelector(n).style.visibility = "hidden";
          },
        }),
        a.to(
          o,
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            onStart: () => {
              this.animateQuizMarker(i);
            },
          },
          "-=0.5"
        );
    },
    calculateAndRedirect() {
      const e = this.userAnswers.reduce(
        (t, e) => ((t[e] = (t[e] || 0) + 1), t),
        {}
      );
      let n = "neutral",
        o = 0;
      Object.entries(e).forEach(([t, e]) => {
        e > o && ((o = e), (n = t));
      });
      const a = this.resultMapping[n];
      localStorage.setItem("quizRedirectPath", a),
        localStorage.setItem(
          "quizUserAnswers",
          JSON.stringify(this.userAnswers)
        ),
        localStorage.setItem("quizMostFrequentAnswer", n),
        window.playAudioWithCheck(window.planetMoveAudio);
      const s = t.timeline();
      s.to(".quiz_item.item-5", {
        y: "-100%",
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          document.querySelector(".quiz_item.item-5").style.visibility =
            "hidden";
        },
      }),
        i.init(),
        i.elements &&
          i.elements.closeButton &&
          i.elements.closeButton.addEventListener("click", () => {
            window.playAudioWithCheck &&
              window.planetMoveAudio &&
              window.playAudioWithCheck(window.planetMoveAudio),
              t.to(i.elements.popup, {
                autoAlpha: 0,
                duration: 0.5,
                ease: "power2.inOut",
              });
            const e = document.querySelector(".quiz_item.item-5");
            (e.style.visibility = "visible"),
              t.fromTo(
                e,
                {
                  y: "-100%",
                  opacity: 0,
                },
                {
                  y: "0%",
                  opacity: 1,
                  duration: 1,
                  ease: "power2.inOut",
                }
              );
          }),
        i.elements &&
          i.elements.confirmButton &&
          (i.elements.confirmButton.onclick = () => {
            Array.from(i.elements.inputs)
              .map((t) => t.value)
              .join("") === i.wordToValidate &&
              t.to("body", {
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
                onComplete: () => {
                  localStorage.setItem("needsFadeIn", "true"),
                    (window.location.href = a);
                },
              });
          }),
        s.add(() => i.popupAnimation(), "-=0.3");
    },
    setupEventListeners() {
      document.querySelectorAll(".button.is-quiz[data-answer]").forEach((t) => {
        (t.style.position = "relative"),
          (t.style.zIndex = "10"),
          (t.style.pointerEvents = "auto");
        const e = (t) => {
          t.preventDefault(), t.stopPropagation();
          const e = parseInt(
              t.currentTarget.closest(".quiz_item").classList[1].split("-")[1]
            ),
            i = t.currentTarget.getAttribute("data-answer");
          this.userAnswers.push(i),
            5 === e ? this.calculateAndRedirect() : this.moveToNextQuestion(e);
        };
        t.addEventListener("click", e), t.addEventListener("touchend", e);
      });
    },
  };
document.addEventListener("DOMContentLoaded", () => {
  n.init();
});

//this is quiz file
