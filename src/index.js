/** ************************************ */
/** ************************************ */
import initHeader from './components/header/header';
import initProjects from './components/projects/projects';
import initSkills from './components/skills/skills';
import initContactMenu from './components/contact-modal/init-contact-modal';
import initForm from './components/form/form';
import initDefaults from './utilities/handle-defaults';
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
