/** ************************************ */
/** ************************************ */
import initDefaults from './utilities/handle-defaults';
import initHeader from './components/header/header';
import initProjects from './components/projects/projects';
import initSkills from './components/skills/skills';
import initContactMenu from './components/contact-modal/init-contact-modal';
import initForm from './components/form/form';
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
