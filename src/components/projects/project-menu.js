import cardData from '../../data/json/projects/projects-card-data.json';
import createLink from '../ui/link';

const createFloatOptions = (options) => {
  const floatingMenu = document.querySelector('.floating-menu');
  const floatListItem = floatingMenu.querySelectorAll('.float-option');

  for (let i = 0; i < options.length; i += 1) {
    const { title, subtitle, href } = options[i];
    const floatOption = floatListItem[i];
    const linkTitle = `Scroll to ${title}`;
    const floatOptionLink = createLink(href, linkTitle, null, null, '_self');
    const floatOptionTitle = document.createElement('span');
    floatOptionTitle.dataset.projTitleIndex = `${i + 1}.`;
    const floatOptionSubtitle = document.createElement('span');
    floatOptionTitle.textContent = title;
    floatOptionSubtitle.textContent = subtitle;
    floatOptionLink.append(floatOptionTitle, floatOptionSubtitle);
    floatOption.append(floatOptionLink);
  }
};

const createProjectMenu = () => {
  const projectMenuJSON = cardData.optionsData;
  createFloatOptions(Object.values(projectMenuJSON));
};

export default createProjectMenu;
