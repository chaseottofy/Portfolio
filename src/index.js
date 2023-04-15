// !!REMINDER
// reverb thing fl studio
// set svgs to reasonable inline size
/**
 * @fileoverview Entry point, 
 * import all css (DOM order),
 * initialize event listeners
 * --------------------------------
 * 
 * ./root (
 *   - font-face
 *   - common css variables
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
 * (** indicates child of <main>)
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
 * 
 * <footer />
 * 
 * --------------------------------
 * 
 * <aside> <scrolltop />
 * <aside> <themeMenu />
 * <aside> <contactMenu />
 * <aside> <toast />
 * 
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
import "./styles/aside/contactMenu.css";
import "./styles/aside/toast.css";

import initTheme from "./utilities/handleTheme";
import initCopyElements from "./utilities/handleCopy";
import initScroll from "./utilities/handleScroll";

const appInit = () => {
  initTheme();
  initCopyElements();
  
  // 
  initScroll();
}

appInit();