import cardData from '../data/projects/projectCardsJSON.json';

const createFloatOptions = (options) => {
  const floatOptions = document.createElement('ul');
  floatOptions.classList.add('float-options');

  // for (const option of options) {
  for (let i = 0; i < options.length; i += 1) {
    const { title, subtitle, href } = options[i];
    const floatOption = document.createElement('li');
    const floatOptionLink = document.createElement('a');
    floatOptionLink.href = href;
    floatOptionLink.title = `Scroll to ${title}`;

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

const initProjectLocalLinks = () => {
  const floatingMenu = document.querySelector('.floating-menu');
  const projectMenuJSON = cardData.optionsData;
  floatingMenu.append(createFloatOptions(Object.values(projectMenuJSON)));
};

export default initProjectLocalLinks;
