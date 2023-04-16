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

/***/ "./src/styles/components/button.css":
/*!******************************************!*\
  !*** ./src/styles/components/button.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/components/input.css":
/*!*****************************************!*\
  !*** ./src/styles/components/input.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/components/svg.css":
/*!***************************************!*\
  !*** ./src/styles/components/svg.css ***!
  \***************************************/
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

/***/ "./src/styles/themes.css":
/*!*******************************!*\
  !*** ./src/styles/themes.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/utilities/createToast.js":
/*!**************************************!*\
  !*** ./src/utilities/createToast.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = document.querySelector.bind(document);
const toastWrapper = $(".toast-wrapper");

let toastIndex = 0;
const handleToasts = () => {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createToast);

/***/ }),

/***/ "./src/utilities/handleCopy.js":
/*!*************************************!*\
  !*** ./src/utilities/handleCopy.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createToast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createToast */ "./src/utilities/createToast.js");

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const copyToClipboard = (text) => {
  if (!navigator.clipboard || !text) return;
  return navigator.clipboard.writeText(text);
};

const setCopy = (text) => {
  copyToClipboard(text);
  (0,_createToast__WEBPACK_IMPORTED_MODULE_0__["default"])(text);
  return;
}

const copyEmail = () => setCopy("ottofy@zohomail.com");
const copyPhone = () => setCopy("9709882548");
const initCopyElements = () => {
  
  // $(".copy-email").addEventListener("click", copyEmail);
  // contact menu
  $$(".cm-copy--email").forEach(el => {
    el.addEventListener("click", copyEmail);
  })
  $$(".cm-copy--phone").forEach(el => {
    el.addEventListener("click", copyPhone);
  })
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCopyElements);

/***/ }),

/***/ "./src/utilities/handleDefaults.js":
/*!*****************************************!*\
  !*** ./src/utilities/handleDefaults.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = document.querySelector.bind(document);
const contactMenuTime = $(".cm-left--time");
const contactMenuHeader = $(".contact-menu__header");
const navContactBtn = $(".nav-multi__contact");

const getTime = () => {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/Denver",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
}

const initDefaults = () => {
  contactMenuTime.textContent = `MST: ${getTime()}`;

  contactMenuHeader.style.left = `${navContactBtn.getBoundingClientRect().left - 140}px`

  console.log(contactMenuHeader)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDefaults);

/***/ }),

/***/ "./src/utilities/handleHover.js":
/*!**************************************!*\
  !*** ./src/utilities/handleHover.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = document.querySelector.bind(document);
const navContactBtn = $(".nav-multi__contact");
const contactMenu = $(".contact-menu");

const closeContactMenu = () => {
  contactMenu.classList.remove("contact-menu--active");
  navContactBtn.firstChild.classList.remove("nav-menu--contact--active");
  // contactMenu.style.left = "1rem";
  window.removeEventListener("mousemove", contactMousemove);
  return;
};

const contactMousemove = e => {
  console.log({
    e:e,
    target:e.target,
  })
  if (!e || !e.target) return;
  if (e.target.closest(".contact-menu")) return;
  if (e.target.closest(".nav-multi__contact")) return;
  closeContactMenu();
};

const openContactMenu = () => {
  if (contactMenu.classList.contains("contact-menu--active")) return;

  const rect = navContactBtn.getBoundingClientRect();
  if (window.innerWidth > 768) {
    contactMenu.style.left = `${rect.left - 140}px`;
  } else {
    contactMenu.style.left = `1rem`;
  }

  contactMenu.classList.add("contact-menu--active");
  navContactBtn.firstChild.classList.add("nav-menu--contact--active");
  window.addEventListener("mousemove", contactMousemove);
};

const toggleContactMenu = () => {
  if (contactMenu.classList.contains("contact-menu--active")) {
    closeContactMenu();
  } else {
    openContactMenu();
  }
};

const initHover = () => {
  navContactBtn.addEventListener("mouseenter", openContactMenu);
  navContactBtn.addEventListener("touchstart", toggleContactMenu);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initHover);

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
const $$ = document.querySelectorAll.bind(document);
const scrollTop = $(".scroll-top");
const header = $(".header");

const handleHrefScroll = (e) => {
  e.preventDefault();
  $(`${e.target.getAttribute("href")}`).scrollIntoView({
    behavior: "smooth"
  });
};

const handleAttrScroll = (e) => {
  e.preventDefault();
  $(`${e.target.getAttribute("data-href")}`).scrollIntoView({
    behavior: "smooth"
  });
};

const handlePageScroll = () => {
  if (window.pageYOffset > 0) {
    header.classList.add("header-filter");
    scrollTop.classList.remove("hide-scroll-top");
  } else {
    header.classList.remove("header-filter");
    scrollTop.classList.add("hide-scroll-top");
  }
};

const initScroll = () => {
  // scroll to articles on page from nav
  handlePageScroll();
  $$(".nav-menu--link").forEach(link => {
    link.addEventListener("click", handleHrefScroll);
  });
  $(".contact-nav--btn").addEventListener("click", handleAttrScroll);

  // apply filter to header and toggle scroll to top button;
  window.addEventListener("scroll", handlePageScroll);
  // scroll to top;
  $(".scroll-top--btn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initScroll);

/***/ }),

/***/ "./src/utilities/handleTheme.js":
/*!**************************************!*\
  !*** ./src/utilities/handleTheme.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const body = $(".body");
const header = $(".header");
const colorSchemeMeta = $('meta[name="color-scheme"]');
const themeInputs = $$(".theme-input");
const themeLabels = $$(".theme-label");

const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

const setTheme = (theme) => {
  header.classList.remove("header-animate");
  localStorage.setItem("portfolio-theme", theme);
  colorSchemeMeta.setAttribute("content", theme);
  body.setAttribute("class", `body theme__${theme}`);
  setTimeout(() => header.classList.add("header-animate"), 150);
};

const initDefaultTheme = () => {
  const localTheme = localStorage.getItem("portfolio-theme");
  const systemTheme = getSystemTheme();
  themeInputs[2].setAttribute("value", systemTheme);
  themeLabels[2].setAttribute("data-system-theme", systemTheme);
  if (!localTheme || (localTheme !== "dark" && localTheme !== "light")) {
    setTheme(systemTheme);
    themeInputs[2].checked = true;
    return;
  } else {
    setTheme(localTheme);
    themeInputs[localTheme === "dark" ? 0 : 1].checked = true;
    return;
  }
};

const initThemeOptions = () => {
  themeInputs.forEach((input) => {
    input.addEventListener("change", () => {
      const theme = input.getAttribute("value");
      setTheme(theme === "system" ? input.getAttribute("data-system-theme") : theme);
    });
  });
};

const initTheme = () => {
  initDefaultTheme();
  initThemeOptions();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTheme);

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
/* harmony import */ var _styles_themes_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/themes.css */ "./src/styles/themes.css");
/* harmony import */ var _styles_components_button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/components/button.css */ "./src/styles/components/button.css");
/* harmony import */ var _styles_components_input_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/components/input.css */ "./src/styles/components/input.css");
/* harmony import */ var _styles_components_svg_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/components/svg.css */ "./src/styles/components/svg.css");
/* harmony import */ var _styles_header_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/header.css */ "./src/styles/header.css");
/* harmony import */ var _styles_gradientElements_headerGradient_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/gradientElements/headerGradient.css */ "./src/styles/gradientElements/headerGradient.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_gradientElements_dividerGradient_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/gradientElements/dividerGradient.css */ "./src/styles/gradientElements/dividerGradient.css");
/* harmony import */ var _styles_sections_intro_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/sections/intro.css */ "./src/styles/sections/intro.css");
/* harmony import */ var _styles_sections_projects_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/sections/projects.css */ "./src/styles/sections/projects.css");
/* harmony import */ var _styles_sections_skills_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/sections/skills.css */ "./src/styles/sections/skills.css");
/* harmony import */ var _styles_sections_about_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/sections/about.css */ "./src/styles/sections/about.css");
/* harmony import */ var _styles_sections_contact_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/sections/contact.css */ "./src/styles/sections/contact.css");
/* harmony import */ var _styles_footer_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/footer.css */ "./src/styles/footer.css");
/* harmony import */ var _styles_aside_scrolltop_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles/aside/scrolltop.css */ "./src/styles/aside/scrolltop.css");
/* harmony import */ var _styles_aside_themeMenu_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles/aside/themeMenu.css */ "./src/styles/aside/themeMenu.css");
/* harmony import */ var _styles_aside_toast_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles/aside/toast.css */ "./src/styles/aside/toast.css");
/* harmony import */ var _utilities_handleTheme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utilities/handleTheme */ "./src/utilities/handleTheme.js");
/* harmony import */ var _utilities_handleCopy__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utilities/handleCopy */ "./src/utilities/handleCopy.js");
/* harmony import */ var _utilities_handleScroll__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utilities/handleScroll */ "./src/utilities/handleScroll.js");
/* harmony import */ var _utilities_handleHover__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utilities/handleHover */ "./src/utilities/handleHover.js");
/* harmony import */ var _utilities_handleDefaults__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utilities/handleDefaults */ "./src/utilities/handleDefaults.js");
/**
 * @fileoverview Entry point, 
 * import all css (DOM order),
 * initialize event listeners
 * --------------------------------
 * 
 * ./root (
 *   - font-face
 *   - common css variables between themes
 *   - css reset
 *   - html font-size query
 * 
 * --------------------------------
 * 
 * ./themes (dark/light)
 * ./components (button, input, svg)
 * 
 * --------------------------------
 * 
 * <header />
 * <aside> <headerGradient />
 * 
 * --------------------------------
 * fixed elements & popups
 * 
 * <aside> <scrolltop />
 * <aside> <themeMenu />
 * <aside> <contactMenu />
 * <aside> <toast />
 * 
 * --------------------------------
 * (** = child)
 * 
 * <main>
 * ** <dividerGradient />
 * ** <intro />
 * ** <projects />
 * ** <skills />
 * ** <about />
 * ** <contact />
 * </main>
 * 
 * --------------------------------
 * <footer />
 * --------------------------------
 */























/***************************************/


/***************************************/






/***************************************/
const appInit = () => {
  // set default theme / toggle theme
  (0,_utilities_handleTheme__WEBPACK_IMPORTED_MODULE_18__["default"])();
  // copy phone # / email
  (0,_utilities_handleCopy__WEBPACK_IMPORTED_MODULE_19__["default"])();
  // scroll to articles / top of page
  (0,_utilities_handleScroll__WEBPACK_IMPORTED_MODULE_20__["default"])();
  // open/close contact menu
  (0,_utilities_handleHover__WEBPACK_IMPORTED_MODULE_21__["default"])();

  // default time / date / etc
  (0,_utilities_handleDefaults__WEBPACK_IMPORTED_MODULE_22__["default"])();
};
appInit();

// !!REMINDER
// reverb thing fl studio
// set svgs to reasonable inline size
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map