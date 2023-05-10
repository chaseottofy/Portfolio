/** ************************************ */
/** ************************************ */
import initTheme from './utilities/handle-theme';
import initScroll from './utilities/handle-scroll';
import initHover from './utilities/handle-hover';
import initCopyElements from './utilities/handle-copy';
import initProjectCards from './components/projects';
import initLHModal from './components/lh-modals';
import initContactForm from './utilities/handle-form';
import initDefaults from './utilities/handle-defaults';
/** ************************************ */
// DEVELOPMENT ONLY
// import createShowWidthElement from './testing/show-width';
// createShowWidthElement(); // DEVELOPMENT ONLY
// import initCls from './testing/cls'; // initCls();
/** ************************************ */

const appInit = () => {
  /**
   * @function initTheme
   * get system theme
   * config localStorage theme
   * allow theme change ... etc */
  initTheme();

  /**
   * @function initScroll
   * scroll to top (logo)
   * scroll to section (nav links)
   * toggle filter for header if user has scrolled past 100vh;
   */
  initScroll();

  /**
   * @function initHover Popup contact menu on hover */
  initHover();

  /**
   * @function initCopyElements config copy to clipboard functionality */
  initCopyElements();

  /**
   * @function initProjectCards - config the following:
   * config project overview modal "view full overview btn"
   * allow click through tabs of each project
   * dynamically import relevant images for each tab */
  initProjectCards();

  /**
   * @function initLHModal config lighthouse modal "performance audit btn" */
  initLHModal();

  /**
   * @function initContactForm setup contact form POST */
  initContactForm();

  /**
   * @function initDefaults set default time / date / etc */
  initDefaults();
};

appInit();
// !!REMINDER
// TAB INDEX
