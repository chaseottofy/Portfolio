/** *************************************************************
https://ottofy.dev
2024 Chase Ottofy - ottofy@zohomail.com

************************************************************* */
import initContactMenu from './components/contact-modal/init-contact-modal';
import initForm from './components/form/form';
import initProjects from './components/projects/projects';
import initSkills from './components/skills/skills';
import initDefaults from './utilities/handle-defaults';
import initTheme from './utilities/set-theme';
/** ************************************ */
/** ************************************ */
const appInit = () => {
  initTheme();
  initProjects();
  initSkills();
  initContactMenu();
  initForm();
  initDefaults();
};

appInit();
