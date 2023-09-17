/** ************************************ */
/** ************************************ */
import initTheme from './utilities/handle-theme';
import initScroll from './utilities/handle-scroll';
import initHover from './utilities/handle-hover';
import initCopyElements from './utilities/handle-copy';
import initContactForm from './utilities/handle-form';
import initDefaults from './utilities/handle-defaults';
import projCard from './template/create-card';
/** ************************************ */
// DEVELOPMENT ONLY
// import enableTesting from './testing/test-index';
// enableTesting(true, false, false, true); // DEV ONLY
/** ************************************ */
const appInit = () => {
  /**
   * @function initTheme
   * get system theme
   * config localStorage theme
   * allow theme change ... etc
  */
  initTheme();

  /**
   * @function initScroll
   * scroll to top (logo)
   * scroll to section (nav links)
   * toggle filter for header if user has scrolled past 100vh;
   */
  initScroll();

  /**
   * @function initHover Popup contact menu on hover
  */
  initHover();

  /**
   * @function initCopyElements config copy to clipboard functionality
  */
  initCopyElements();

  /**
   * @function initContactForm setup contact form POST
  */
  initContactForm();

  /**
   * @function initDefaults set default time / date / etc
  */
  initDefaults();

  /**
   * @function initProjectCards
   *
   */
  projCard();
};

appInit();
