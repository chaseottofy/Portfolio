/** ************************************ */
/** ************************************ */
import initDefaults from './utilities/handle-defaults';
import initProjects from './components/projects/projects';
import initSkills from './components/skills/skills';
import initContactMenu from './components/contact-modal/init-contact-modal';
import initForm from './components/form/form';
import initFooter from './components/footer/footer';
/** ************************************ */
/** ************************************ */
const appInit = () => {
  initDefaults();
  initProjects();
  initSkills();
  initContactMenu();
  initForm();
  initFooter();
};

appInit();
