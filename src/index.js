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
import "./styles/root.css";
import "./styles/themes.css";

import "./styles/components/button.css";
import "./styles/components/input.css";
import "./styles/components/svg.css";

import "./styles/header.css";
import "./styles/gradientElements/headerGradient.css";

import "./styles/main.css";
import "./styles/gradientElements/dividerGradient.css";
import "./styles/sections/intro.css";
import "./styles/sections/projects.css";
import "./styles/sections/skills.css";
import "./styles/sections/about.css";
import "./styles/sections/contact.css";
import "./styles/footer.css";

import "./styles/aside/scrolltop.css";
import "./styles/aside/themeMenu.css";
import "./styles/aside/toast.css";

/***************************************/


/***************************************/
import initTheme from "./utilities/handleTheme";
import initCopyElements from "./utilities/handleCopy";
import initScroll from "./utilities/handleScroll";
import initHover from "./utilities/handleHover";

/***************************************/
const appInit = () => {
  // set default theme / toggle theme
  initTheme();
  // copy phone # / email
  initCopyElements();
  // scroll to articles / top of page
  initScroll();
  // open/close contact menu
  initHover();
};
appInit();

// !!REMINDER
// reverb thing fl studio
// set svgs to reasonable inline size