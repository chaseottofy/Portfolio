// import html from "./index.html";

/**
 * @fileoverview
 * - import all stylesheets in order of DOM hierarchy 
 * (webpack bundles them in order of import into one file @dist/main.css)\
 * 
 * - import init functions for all utilities/handlers
 */
// font declarations / css reset / css variables (root & themes)
import "./styles/root.css";

// two classes : light/dark 
// -- note that root.css holds the primary/secondary color variables
// this is for text / background / etc colors
import "./styles/themes.css";


// reusable components
import "./styles/components/button.css";
import "./styles/components/input.css";
import "./styles/components/svg.css";


// header : nav / logo / theme toggle
import "./styles/header.css";
import "./styles/headerLogo.css";
import "./styles/gradientElements/headerGradient.css";


// main : intro / projects / about / skills / contact --- provide basic layout & header
import "./styles/main.css";


// divider for each main section
import "./styles/gradientElements/dividerGradient.css";


// intro : section 1
import "./styles/sections/intro.css";


// projects : section 2
import "./styles/sections/sectionprojects/projectImages2.css";
import "./styles/sections/sectionprojects/projectsLayout.css";
import "./styles/sections/sectionprojects/projectCard.css";
import "./styles/sections/sectionprojects/projectContent.css";


// about/skills : section 3/4
import "./styles/sections/about.css";
import "./styles/sections/skills.css";


// contact/contactForm : section 5/6
import "./styles/sections/contact.css";
import "./styles/sections/contactForm.css";


// Dynamic content (loading animations/ toast notifications) & modals
import "./styles/aside/themeMenu.css";
import "./styles/aside/toast.css";
import "./styles/aside/lighthouseModal.css";
import "./styles/aside/spinner.css";
import "./styles/aside/hoverContext.css";


import "./styles/footer.css";

/*

*/
/**
 * List of breakpoints
 * 1020
 * 768
 * 640
 * 490
 * 380
 */

// https://www.wiktorwisniewski.dev/blog/preloading-assets-with-webpack5
// https://github.com/webdiscus/html-bundler-webpack-plugin
// https://vercel.com/features/edge-functions
// https://www.bestfolios.com/home
/***************************************/


/***************************************/
import initTheme from "./utilities/handleTheme";
import initScroll from "./utilities/handleScroll";
import initHover from "./utilities/handleHover";
import initCopyElements from "./utilities/handleCopy";
import initProjects from "./utilities/handleProjects";
import initContactForm from "./utilities/handleForm";
import initModals from "./utilities/handleModals";
import initDefaults from "./utilities/handleDefaults";
import initImages from "./utilities/handleImages";
/***************************************/
const appInit = () => {
  // preload images
  initImages();

  // set default theme / toggle theme
  initTheme();

  // scroll to nav elements / top of page
  initScroll();

  // hovers : contact menu (navbar) / tbd..
  initHover();

  // configure any copy to clipboard elements
  initCopyElements();

  // click through project tabs to serve new images
  initProjects();

  // set up form POST & error-handling
  initContactForm();

  // configure open/close for all modals
  initModals();

  // set default time / date / etc
  initDefaults();
};

appInit();

// !!REMINDER
// TAB INDEX
// set svgs to reasonable inline size