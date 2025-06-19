/* empty css                         */
import "./js/chunks/results-CwUP6-Hd.js";
import "./js/global/core/global-core-Cx4mqg2V.js";
import "./js/vendor/gsap/vendor-gsap-core-D4-kPFdx.js";
document.addEventListener("DOMContentLoaded", async () => {
  const n = 991 >= window.innerWidth;
  try {
    if (!n) {
      const n = new Promise((n) => {
        const o = document.createElement("script");
        (o.src = "https://cdn.unicorn.studio/v1.3.2/unicornStudio.umd.js"),
          (o.onload = () => {
            UnicornStudio.init(), n();
          }),
          document.head.appendChild(o);
      });
      await n;
    }
  } catch (o) {}
});
