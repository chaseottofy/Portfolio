const createFloatOptions = (data) => {
  const projectKeys = Object.keys(data);
  const options = Object.values(projectKeys);
  const floatingMenu = document.querySelector('.floating-menu');
  const floatListItem = floatingMenu.querySelectorAll('.float-option');

  for (let i = 0; i < options.length; i += 1) {
    const title = options[i];
    const { card: { lighthouseKey, stacks } } = data[title];

    const floatLink = floatListItem[i].querySelector('a');
    floatLink.href = `#proj-${lighthouseKey}-top`;
    const [floatTitle, floatSub] = floatLink.querySelectorAll('span');
    floatTitle.textContent = title;
    floatSub.textContent = stacks.join(', ');
  }

  floatingMenu.dataset.floatingMenuLoaded = 'true';
};

const createProjectMenu = (projectData) => {
  createFloatOptions(projectData);
};

export default createProjectMenu;
