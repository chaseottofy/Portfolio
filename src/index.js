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
