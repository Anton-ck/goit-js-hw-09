!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("6JpON"),i={form:document.querySelector(".form"),firstDelayInput:document.querySelector('[name="delay"]'),delayStepInput:document.querySelector('[name="step"]'),amoutInput:document.querySelector('[name="amount"]')},a=function(e,t){return new Promise((function(n,o){var r=Math.random()>.3;setTimeout((function(){r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))};i.form.addEventListener("submit",(function(t){t.preventDefault();var n=Number(i.firstDelayInput.value),o=Number(i.delayStepInput.value),r=Number(i.amoutInput.value);if(!n||!o||!r)return e(u).Report.failure("Fuck","Fill all the fields","OK");for(var l=1;l<=r;l+=1){a(l,n+o*l).then((function(t){var n=t.position,o=t.delay;e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.96687390.js.map
