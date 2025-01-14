import projectData from '../../data/json/project-data.json';

const createFloatOptions = (options) => {
  const floatingMenu = document.querySelector('.floating-menu');
  const floatListItem = floatingMenu.querySelectorAll('.float-option');

  for (let i = 0; i < options.length; i += 1) {
    const title = options[i];
    const { card: { lighthouseKey, stacks } } = projectData[title];

    const floatLink = floatListItem[i].querySelector('a');
    floatLink.href = `#proj-${lighthouseKey}-top`;
    const [floatTitle, floatSub] = floatLink.querySelectorAll('span');
    floatTitle.textContent = title;
    floatSub.textContent = stacks.join(', ');
  }

  floatingMenu.dataset.floatingMenuLoaded = 'true';
};

const createProjectMenu = () => {
  const projectKeys = Object.keys(projectData);
  createFloatOptions(Object.values(projectKeys));
};

export default createProjectMenu;
