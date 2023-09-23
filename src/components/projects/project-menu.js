import cardData from '../../data/json/projects/projects-card-data.json';

const createFloatOptions = (options) => {
  const floatingMenu = document.querySelector('.floating-menu');
  const floatListItem = floatingMenu.querySelectorAll('.float-option');

  for (let i = 0; i < options.length; i += 1) {
    const { title, subtitle, href } = options[i];
    const floatOption = floatListItem[i];
    const floatLink = floatOption.querySelector('a');
    floatLink.href = href;
    const [floatTitle, floatSubtitle] = floatLink.children;
    floatTitle.textContent = title;
    floatSubtitle.textContent = subtitle;
  }

  floatingMenu.dataset.floatingMenuLoaded = 'true';
};

const createProjectMenu = () => {
  const projectMenuJSON = cardData.optionsData;
  createFloatOptions(Object.values(projectMenuJSON));
};

export default createProjectMenu;
