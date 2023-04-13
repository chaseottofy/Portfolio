/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/aside/scrolltop.css":
/*!****************************************!*\
  !*** ./src/styles/aside/scrolltop.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/footer.css":
/*!*******************************!*\
  !*** ./src/styles/footer.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/gradientElements/dividerGradient.css":
/*!*********************************************************!*\
  !*** ./src/styles/gradientElements/dividerGradient.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/gradientElements/headerGradient.css":
/*!********************************************************!*\
  !*** ./src/styles/gradientElements/headerGradient.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/header.css":
/*!*******************************!*\
  !*** ./src/styles/header.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/root.css":
/*!*****************************!*\
  !*** ./src/styles/root.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/utilities/copyToClipboard.js":
/*!******************************************!*\
  !*** ./src/utilities/copyToClipboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * 
 * @param {string} text hard-coded text to copy to clipboard (phone #/email/etc.)
 * @returns 
 */
const copyToClipboard = (text) => {
  if (!navigator.clipboard || !text) return;
  return navigator.clipboard.writeText(text);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyToClipboard);

/***/ }),

/***/ "./src/utilities/handleScroll.js":
/*!***************************************!*\
  !*** ./src/utilities/handleScroll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = document.querySelector.bind(document);
const handleScroll = () => {
  const scrollTop = $(".scroll-top");
  const header = $(".header");
  if (window.pageYOffset > 0) {
    header.classList.add("header-filter");
    scrollTop.classList.remove("hide-scroll-top");
  } else {
    header.classList.remove("header-filter");
    scrollTop.classList.add("hide-scroll-top");
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleScroll);

/***/ }),

/***/ "./src/utilities/handleTheme.js":
/*!**************************************!*\
  !*** ./src/utilities/handleTheme.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "initTheme": () => (/* binding */ initTheme)
/* harmony export */ });
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const colorSchemeMeta = $('meta[name="color-scheme"]');
const themeBtns = $$(".theme-btn");

const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

const resetThemeBtns = () => themeBtns.forEach(btn => btn.classList.remove("active-theme"));

const handleTheme = (theme, element) => {
  resetThemeBtns();
  element.classList.add("active-theme");
  localStorage.setItem("portfolio-theme", theme);
  colorSchemeMeta.setAttribute("content", theme);
  document.body.setAttribute("class", `body theme__${theme}`);
};

const swap = (target) => {
  resetThemeBtns();
  target.classList.add("active-theme");
};

const delegateTheme = e => {
  if (e.target.closest(".theme-btn")) {
    if (e.target.classList.contains("active-theme")) {
      return;
    }

    const systemTheme = getSystemTheme();
    const currentTheme = localStorage.getItem("portfolio-theme");
    const targetTheme = e.target.getAttribute("data-theme");
    if (targetTheme === "system") {
      if (e.target.getAttribute("data-system-theme") === currentTheme) {
        swap(e.target);
        return;
      } else {
        handleTheme(systemTheme, e.target);
        return;
      }
    } else {
      if (targetTheme === currentTheme) {
        swap(e.target);
        return;
      } else {
        handleTheme(targetTheme, e.target);
        return;
      }
    }
  }
};

const initTheme = () => {
  const localTheme = localStorage.getItem("portfolio-theme");
  const systemTheme = getSystemTheme();
  // append a new attribute to system theme button to refer to system theme
  themeBtns[2].setAttribute("data-system-theme", systemTheme);

  if (!localTheme || (localTheme !== "dark" && localTheme !== "light")) {
    handleTheme(systemTheme, $(`[data-theme="${systemTheme}"]`));
    return;
  } else {
    handleTheme(localTheme, $(`[data-theme="${localTheme}"]`));
    return;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (delegateTheme);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_root_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/root.css */ "./src/styles/root.css");
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/header.css */ "./src/styles/header.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/footer.css */ "./src/styles/footer.css");
/* harmony import */ var _styles_aside_scrolltop_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/aside/scrolltop.css */ "./src/styles/aside/scrolltop.css");
/* harmony import */ var _styles_gradientElements_headerGradient_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/gradientElements/headerGradient.css */ "./src/styles/gradientElements/headerGradient.css");
/* harmony import */ var _styles_gradientElements_dividerGradient_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/gradientElements/dividerGradient.css */ "./src/styles/gradientElements/dividerGradient.css");
/* harmony import */ var _utilities_handleTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/handleTheme */ "./src/utilities/handleTheme.js");
/* harmony import */ var _utilities_handleScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/handleScroll */ "./src/utilities/handleScroll.js");
/* harmony import */ var _utilities_copyToClipboard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utilities/copyToClipboard */ "./src/utilities/copyToClipboard.js");
// !!REMINDER
// reverb thing fl studio
// set svgs to reasonable inline size











const $ = document.querySelector.bind(document);

window.addEventListener("load", _utilities_handleTheme__WEBPACK_IMPORTED_MODULE_7__.initTheme, { once: true });
window.addEventListener("scroll", _utilities_handleScroll__WEBPACK_IMPORTED_MODULE_8__["default"]);
$(".theme-switch").addEventListener("click", _utilities_handleTheme__WEBPACK_IMPORTED_MODULE_7__["default"]);
$(".copy-email").addEventListener("click", () => {
  (0,_utilities_copyToClipboard__WEBPACK_IMPORTED_MODULE_9__["default"])('ottofy@zohomail.com');
});
$(".copy-phone").addEventListener("click", () => {
  (0,_utilities_copyToClipboard__WEBPACK_IMPORTED_MODULE_9__["default"])('9709882548');
});
$(".scroll-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map