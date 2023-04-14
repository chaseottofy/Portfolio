/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/aside/contactMenu.css":
/*!******************************************!*\
  !*** ./src/styles/aside/contactMenu.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/aside/scrolltop.css":
/*!****************************************!*\
  !*** ./src/styles/aside/scrolltop.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/aside/themeMenu.css":
/*!****************************************!*\
  !*** ./src/styles/aside/themeMenu.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/aside/toast.css":
/*!************************************!*\
  !*** ./src/styles/aside/toast.css ***!
  \************************************/
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

/***/ "./src/styles/sections/about.css":
/*!***************************************!*\
  !*** ./src/styles/sections/about.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/sections/contact.css":
/*!*****************************************!*\
  !*** ./src/styles/sections/contact.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/sections/intro.css":
/*!***************************************!*\
  !*** ./src/styles/sections/intro.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/sections/projects.css":
/*!******************************************!*\
  !*** ./src/styles/sections/projects.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/sections/skills.css":
/*!****************************************!*\
  !*** ./src/styles/sections/skills.css ***!
  \****************************************/
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
const $ = document.querySelector.bind(document);
const toastWrapper = $(".toast-wrapper");

let toastIndex = 0;
const handleToasts = () => {
  console.log(toastIndex)
  if (toastWrapper.children.length >= 4) {
    toastWrapper.removeChild(toastWrapper.children[toastWrapper.children.length - 1]);
  }

  for (let i = 0; i < toastWrapper.children.length; i++) {
    const toast = toastWrapper.children[i];
    const idx = +toast.getAttribute("toast-idx");
    if (idx === 4) {
      toast.classList.add("hide-toast");
    }

    toast.setAttribute("class", `toast toast--${i + 1}`);
    toast.style.zIndex = 9000 - i;
    toast.style.bottom = `${i + 2}rem`;
  }
};

const createToast = (text) => {
  if (toastIndex <= 3) {toastIndex++;}

  let width = 0;
  const wrapper = document.createElement("aside");
  wrapper.classList.add("toast");
  wrapper.style.zIndex = 9000;
  wrapper.style.bottom = '2rem';
  wrapper.setAttribute("toast-idx", toastIndex);

  const progressbar = document.createElement("span");
  progressbar.classList.add("toast-progress");
  progressbar.style.width = `${width}%`;

  const progresstrack = document.createElement("span");
  progresstrack.classList.add("toast-progress--length");

  const message = document.createElement("span");
  message.classList.add("toast-message");
  message.textContent = `copied – ${text}`;

  wrapper.append(progressbar, progresstrack, message);
  toastWrapper.prepend(wrapper);
  handleToasts();

  setInterval(() => {
    width++;
    progressbar.style.width = `${width}%`;
    if (width === 100) {
      wrapper.remove();
      if (toastIndex > 0) {toastIndex--;}
      clearInterval();
    }
  }, 10);
};

const copyToClipboard = (text) => {
  if (!navigator.clipboard || !text) return;
  return navigator.clipboard.writeText(text);
};

const handleCopyEmail = () => {
  const message = "ottofy@zohomail.com";
  copyToClipboard(message);
  createToast(message);
  return;
}

// const handleCopyPhone = () => {
//   const message = "9709882548";
//   copyToClipboard(message);
//   createToast(message);
//   return;
// }
const initCopy = () => {
  $(".copy-email").addEventListener("click", handleCopyEmail);
  // $(".copy-phone").addEventListener("click", handleCopyPhone);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCopy);

/***/ }),

/***/ "./src/utilities/handleMenuLinks.js":
/*!******************************************!*\
  !*** ./src/utilities/handleMenuLinks.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const handleMenuLink = (e) => {
  e.preventDefault();
  $(`${e.target.getAttribute("href")}`).scrollIntoView({
    behavior: "smooth"
  });
};

const setMenuLinks = () => {
  $$(".nav-menu--link").forEach(link => {
    link.addEventListener("click", handleMenuLink);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setMenuLinks);

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
const body = $(".body");
const header = $(".header");
const colorSchemeMeta = $('meta[name="color-scheme"]');
const themeBtns = $$(".theme-btn");

const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

const resetThemeBtns = () => themeBtns.forEach(btn => btn.classList.remove("active-theme"));

const handleTheme = (theme, element) => {
  resetThemeBtns();
  header.classList.remove("header-animate");
  element.classList.add("active-theme");
  localStorage.setItem("portfolio-theme", theme);
  colorSchemeMeta.setAttribute("content", theme);
  body.setAttribute("class", `body theme__${theme}`);
  setTimeout(() => header.classList.add("header-animate"), 150);
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
/* harmony import */ var _styles_gradientElements_headerGradient_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/gradientElements/headerGradient.css */ "./src/styles/gradientElements/headerGradient.css");
/* harmony import */ var _styles_gradientElements_dividerGradient_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/gradientElements/dividerGradient.css */ "./src/styles/gradientElements/dividerGradient.css");
/* harmony import */ var _styles_sections_intro_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/sections/intro.css */ "./src/styles/sections/intro.css");
/* harmony import */ var _styles_sections_projects_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/sections/projects.css */ "./src/styles/sections/projects.css");
/* harmony import */ var _styles_sections_skills_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/sections/skills.css */ "./src/styles/sections/skills.css");
/* harmony import */ var _styles_sections_about_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/sections/about.css */ "./src/styles/sections/about.css");
/* harmony import */ var _styles_sections_contact_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/sections/contact.css */ "./src/styles/sections/contact.css");
/* harmony import */ var _styles_aside_scrolltop_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/aside/scrolltop.css */ "./src/styles/aside/scrolltop.css");
/* harmony import */ var _styles_aside_themeMenu_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/aside/themeMenu.css */ "./src/styles/aside/themeMenu.css");
/* harmony import */ var _styles_aside_contactMenu_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/aside/contactMenu.css */ "./src/styles/aside/contactMenu.css");
/* harmony import */ var _styles_aside_toast_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/aside/toast.css */ "./src/styles/aside/toast.css");
/* harmony import */ var _utilities_handleTheme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./utilities/handleTheme */ "./src/utilities/handleTheme.js");
/* harmony import */ var _utilities_handleScroll__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utilities/handleScroll */ "./src/utilities/handleScroll.js");
/* harmony import */ var _utilities_copyToClipboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utilities/copyToClipboard */ "./src/utilities/copyToClipboard.js");
/* harmony import */ var _utilities_handleMenuLinks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utilities/handleMenuLinks */ "./src/utilities/handleMenuLinks.js");
// !!REMINDER
// reverb thing fl studio
// set svgs to reasonable inline size
























const $ = document.querySelector.bind(document);
window.addEventListener("load", _utilities_handleTheme__WEBPACK_IMPORTED_MODULE_15__.initTheme, { once: true });
window.addEventListener("scroll", _utilities_handleScroll__WEBPACK_IMPORTED_MODULE_16__["default"]);

$(".theme-switch").addEventListener("click", _utilities_handleTheme__WEBPACK_IMPORTED_MODULE_15__["default"]);
$(".scroll-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

(0,_utilities_copyToClipboard__WEBPACK_IMPORTED_MODULE_17__["default"])();
(0,_utilities_handleMenuLinks__WEBPACK_IMPORTED_MODULE_18__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map