/** *************************************************************
https://ottofy.dev
2023 Chase Ottofy - ottofy@zohomail.com

      ,o888888o. 8888888 8888888888 8888888 8888888888 ,o888888o.
   . 8888     '88.     8 8888             8 8888    . 8888     '88.
  ,8 8888       '8b    8 8888             8 8888   ,8 8888       '8b
  88 8888        '8b   8 8888             8 8888   88 8888        '8b
  88 8888         88   8 8888             8 8888   88 8888         88
  88 8888         88   8 8888             8 8888   88 8888         88
  88 8888        ,8P   8 8888             8 8888   88 8888        ,8P
  '8 8888       ,8P    8 8888             8 8888   '8 8888       ,8P
   ' 8888     ,88'     8 8888             8 8888    ' 8888     ,88'
      '8888888P'       8 8888             8 8888       '8888888P'

************************************************************* */
import initContactMenu from './components/contact-modal/init-contact-modal';
import initForm from './components/form/form';
import initProjects from './components/projects/projects';
import initSkills from './components/skills/skills';
import initDefaults from './utilities/handle-defaults';
/** ************************************ */
/** ************************************ */
const appInit = () => {
  initProjects();
  initSkills();
  initContactMenu();
  initForm();
  initDefaults();
};

appInit();
