import cardData from '../../data/json/projects/projects-card-data.json';
import createLink from '../ui/link';

const createFloatOptions = (options, parent) => {
  // const floatOptions = document.createElement('ul');
  const floatOptions = parent.querySelector('.float-options');
  floatOptions.classList.add('float-options');

  for (let i = 0; i < options.length; i += 1) {
    const { title, subtitle, href } = options[i];
    const floatOption = document.createElement('li');
    const linkTitle = `Scroll to ${title}`;
    const floatOptionLink = createLink(href, linkTitle, null, null, '_self');
    const floatOptionTitle = document.createElement('span');
    floatOptionTitle.dataset.projTitleIndex = `${i + 1}.`;
    const floatOptionSubtitle = document.createElement('span');
    floatOptionTitle.textContent = title;
    floatOptionSubtitle.textContent = subtitle;
    floatOptionLink.append(floatOptionTitle, floatOptionSubtitle);
    floatOption.append(floatOptionLink);
    floatOptions.append(floatOption);
  }
  return floatOptions;
};

const createProjectMenu = () => {
  const floatingMenu = document.querySelector('.floating-menu');
  const projectMenuJSON = cardData.optionsData;
  floatingMenu.append(
    createFloatOptions(
      Object.values(projectMenuJSON),
      floatingMenu,
    ),
  );
};

export default createProjectMenu;
