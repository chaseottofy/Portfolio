/** ************************************ */
/** ************************************ */
import initContactMenu from './components/contact-modal/init-contact-modal';
import initForm from './components/form/form';
import initHeader from './components/header/header';
import initProjects from './components/projects/projects';
import initSkills from './components/skills/skills';
import initDefaults from './utilities/handle-defaults';
/** ************************************ */
/** ************************************ */
// *** TESTING *** //
// import measureMemory from '../scripts/testing/measure-memory';
// import measureFocus from '../scripts/testing/measure-focus';
// import measureLayoutShift from '../scripts/testing/measure-shift';
// import measureWidth from '../scripts/testing/measure-width';
// measureLayoutShift();
// measureFocus();
// measureMemory();
// measureWidth();
/** ************************************ */
/** ************************************ */
const appInit = () => {
  initHeader();
  initProjects();
  initSkills();
  initContactMenu();
  initForm();
  initDefaults();
};

appInit();
