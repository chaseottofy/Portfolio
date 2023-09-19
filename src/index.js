/** ************************************ */
/** ************************************ */
import initTheme from './utilities/handle-theme';
import initProjCards from './template/create-card';
import initScroll from './utilities/handle-scroll';
import initHover from './utilities/handle-hover';
import initCopyElements from './utilities/handle-copy';
import initContactForm from './utilities/handle-form';
import initDefaults from './utilities/handle-defaults';
import initHandleModals from './utilities/handle-modals';
/** ************************************ */
// DEVELOPMENT ONLY
// import enableTesting from './testing/test-index';
// enableTesting(true, false, false, true); // DEV ONLY
/** ************************************ */
const appInit = () => {
  /**
   * @description initTheme
   * get system theme
   * config localStorage theme
   * allow theme change ... etc
  */
  initTheme();

  /**
   * @description initProjectCards
   * There is a skeleton of the card already in the HTML for each card to prevent
   * layout shift when the content is loaded. This function fills in the content 
   * on load.
   */
  initProjCards();

  /**
   * @description initScroll
   * scroll to top (logo)
   * scroll to section (nav links)
   * toggle filter for header if user has scrolled past 100vh;
   */
  initScroll();

  /**
   * @description initHover Popup contact menu on hover
  */
  initHover();

  /**
   * @description initCopyElements config copy to clipboard functionality
  */
  initCopyElements();

  /**
   * @description initContactForm setup contact form POST
  */
  initContactForm();

  /**
   * @description initDefaults set default time / date / etc
  */
  initDefaults();

  /**
   * @description Provide all modals/popups with close on esc functionality
   */
  initHandleModals();
};

appInit();
