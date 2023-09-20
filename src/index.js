/** ************************************ */
/** ************************************ */
import initTheme from './utilities/handle-theme';
import initProjCards from './template/create-projectcards';
import initProjectLocalLinks from './template/create-projoptions';
import initSkillsGrid from './template/create-skills';
import initHover from './utilities/handle-hover';
import initCopyElements from './utilities/handle-copy';
import initContactForm from './utilities/handle-form';
import initDefaults from './utilities/handle-defaults';
import initHandleModals from './utilities/handle-modals';
/** ************************************ */
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
   * @description initProjectLocalLinks
   * - Provides links to each project in the project section at top of section
   */
  initProjectLocalLinks();

  /**
   * @description initSkillsGrid
   * There is a skeleton of the skills grid already in the HTML for each card to prevent
   * Import all svg icons for skills grid and append data to each skill cell
   */
  initSkillsGrid();

  /**
   * @description initHover Popup contact menu on hover
  */
  initHover();

  /**
   * @description initCopyElements config copy to clipboard functionality
   *
  */
  initCopyElements();

  /**
   * @description initContactForm setup contact form POST
   *
  */
  initContactForm();

  /**
   * @description initDefaults set default time / date / etc
   *
  */
  initDefaults();

  /**
   * @description Provide all modals/popups with close on esc functionality
   *
   */
  initHandleModals();
};

appInit();
