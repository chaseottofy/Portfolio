/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/styles/footer.css":(e,o,r)=>{r.r(o)},"./src/styles/header.css":(e,o,r)=>{r.r(o)},"./src/styles/main.css":(e,o,r)=>{r.r(o)},"./src/styles/root.css":(e,o,r)=>{r.r(o)},"./src/utilities/copyToClipboard.js":(e,o,r)=>{r.r(o),r.d(o,{default:()=>s});const s=e=>{if(navigator.clipboard&&e)return navigator.clipboard.writeText(e)}}},o={};function r(s){var t=o[s];if(void 0!==t)return t.exports;var c=o[s]={exports:{}};return e[s](c,c.exports,r),c.exports}r.d=(e,o)=>{for(var s in o)r.o(o,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:o[s]})},r.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{r.r(s);r("./src/styles/root.css"),r("./src/styles/header.css"),r("./src/styles/main.css"),r("./src/styles/footer.css");var e=r("./src/utilities/copyToClipboard.js");const o=document.querySelector.bind(document),t=(document.querySelectorAll.bind(document),o(".header")),c=o(".lines"),l=o(".scroll-top");window.addEventListener("scroll",(()=>{window.pageYOffset>0?(t.classList.add("header-filter"),l.classList.remove("hide-scroll-top")):(t.classList.remove("header-filter"),l.classList.add("hide-scroll-top"))})),o(".copy-email").onclick=()=>(0,e.default)("ottofy@zohomail.com"),o(".copy-phone").onclick=()=>(0,e.default)("9709882548"),l.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})},(()=>{let e=40,o=!0;setInterval((()=>{o&&(e--,10===e&&(o=!1)),o||(e++,40===e&&(o=!0)),c.style.opacity=`.${e}`}),50)})()})()})();
//# sourceMappingURL=bundle.js.map