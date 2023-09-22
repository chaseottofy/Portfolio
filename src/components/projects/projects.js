import imageSets from './import-project-images';

import handleTab from './project-tabs';
import createProjectMenu from './project-menu';
import createProjectFooterButtons from './project-footer';

import createFullImagePopup from '../ui/image-popup';
import createIcon from '../ui/icon';
import createLink from '../ui/link';

import svgIcons from '../../utilities/get-svg';
import getImgArrayFormatted from '../../utilities/get-imgarr-formatted';

import cardData from '../../data/json/projects/projects-card-data.json';
import { projectImageType } from '../../data/constants';

const createSubheaderLink = (cName, href, icon, alt, children) => {
  const linkwrapper = document.createElement('div');
  linkwrapper.classList.add(`pc__subheader--${cName}`);
  const link = createLink(href, alt, null, null);

  if (children) {
    const linkTxt = document.createTextNode(`Demo: ${alt}`);
    link.append(icon, linkTxt);
    linkwrapper.append(link, children);
  } else {
    link.append(icon);
    linkwrapper.append(link);
  }
  return linkwrapper;
};

const createStack = (icon) => {
  const stack = document.createElement('div');
  stack.classList.add('pf-stack');
  stack.append(icon);
  return stack;
};

const createProjectPicture = (images, cNames, attr1, attr2) => {
  const projectImage = document.createElement('picture');

  if (attr1) { projectImage.setAttribute(...Object.values(attr1)); }
  if (attr2) { projectImage.setAttribute(...Object.values(attr2)); }
  for (const cName of cNames) { projectImage.classList.add(cName); }

  const img = new Image();
  for (let i = 0; i < images.length; i += 1) {
    const { src, alt, media } = images[i];
    const source = document.createElement('source');
    source.srcset = src;
    source.media = media;
    source.type = projectImageType;
    img.srcset += src;
    if (i === 0) {
      img.src = src;
      img.srcset = `${src} 1x, `;
      img.alt = alt || 'project image';
      img.style = 'max-width:100vw;';
      img.loading = 'lazy';
    } else {
      img.srcset = `${img.srcset + src} ${i + 1}x`;
    }
    projectImage.append(source);
  }
  projectImage.append(img);
  return projectImage;
};

const createCalTabs = () => {
  const createTab = (title, tabIdx, checked, listener) => {
    const labSm = title[0];
    const labelTxt = `${title} View`;
    const wrapper = document.createElement('span');
    const input = document.createElement('input');
    input.classList.add('proj-header__tabinput');
    input.id = `proj-calendar-${title.toLowerCase()}`;
    input.type = 'radio';
    input.name = 'proj-calendar--radio';
    input.value = title;
    input.checked = checked;
    const label = document.createElement('label');
    label.classList.add('proj-cal--tab');
    label.dataset.labAfter = 'view';
    label.dataset.labSm = labSm;
    label.dataset.tabIdx = tabIdx;
    label.setAttribute('for', `proj-calendar-${title.toLowerCase()}`);
    label.ariaLabel = labelTxt;
    label.textContent = `${title} `;
    wrapper.append(input, label);

    input.addEventListener('change', () => {
      listener(tabIdx);
    });
    return wrapper;
  };

  const tabNames = ['Day', 'Week', 'Month', 'Year', 'List'];
  const calTabs = document.createElement('div');
  calTabs.classList.add('pc__header-tabs');
  for (let i = 0; i < tabNames.length; i += 1) {
    calTabs.append(createTab(tabNames[i], i + 1, i === 0, handleTab));
  }

  return calTabs;
};

const handlePopupImage = (e) => {
  const imgWrapper = e.target.closest('picture');
  if (!imgWrapper) return;
  const targetImg = imgWrapper?.lastElementChild;
  if (!targetImg) return;

  const swapImg = new Image();
  swapImg.src = targetImg.currentSrc;
  swapImg.alt = targetImg.alt || 'project image';
  swapImg.loading = 'eager';
  createFullImagePopup(swapImg);
};

// 1122 x 847
const createProjectCard = (
  projectCell,
  images,
  isCalendar,
  title,
  projLink,
  githubLink,
  stacks,
  lighthouseKey,
  description,
  published,
) => {
  const projectHeader = projectCell.querySelector('.project-content__header');
  const projectSubheader = projectCell.querySelector('.project-content__subheader');
  const projectBody = projectCell.querySelector('.project-content__body');
  const projectFooterStacks = projectCell.querySelector('.pf-stacks');
  const projectFooterTitle = projectCell.querySelector('.project-footer__title');
  const projectFooterBtns = projectCell.querySelector('.project-footer-btns');
  const projectFooterDesc = projectCell.querySelector('.project-footer__desc');
  const publishedText = projectCell.querySelector('.content-published--text');

  const lockIcon = createIcon('img-icon', svgIcons.lock, null);
  const ghIcon = createIcon('img-icon', svgIcons.github, null);

  const subheaderGhText = document.createElement('span');
  subheaderGhText.textContent = 'Repo';
  const subheaderGh = createSubheaderLink('links', githubLink, ghIcon, 'github repo', null);
  subheaderGh.firstElementChild.append(subheaderGhText);

  projectFooterStacks.dataset.pfStacks = stacks.join(' + ');

  if (isCalendar) {
    projectHeader.append(createCalTabs());
    projectBody.append(createProjectPicture(
      images,
      ['project-image__calendar', 'cal-current'],
      { attrName: 'data-cal-nth', dataText: '1' },
      { attrName: 'data-hasimg', dataText: 'true' },
    ));
  } else {
    const arrowDec = document.createElement('span');
    arrowDec.classList.add('search-arrowright');
    arrowDec.append(createIcon('img-icon', svgIcons.arrow, null));
    projectSubheader.append(createSubheaderLink('search', projLink, lockIcon, title, arrowDec));
    projectBody.append(createProjectPicture(images, ['proj-img-sm'], null, null));
  }

  projectSubheader.append(subheaderGh);
  publishedText.textContent = `Published: ${published}`;

  for (const stack of stacks) {
    projectFooterStacks.append(createStack(
      createIcon(`${stack}-icon`, svgIcons[stack], null),
    ));
  }

  projectFooterDesc.textContent = `${description}`;
  projectFooterTitle.textContent = title;
  projectFooterBtns.append(...createProjectFooterButtons(lighthouseKey));
};

const createProjectCards = () => {
  const projectCells = document.querySelectorAll('.project-cell');
  const {
    cal, markdown, blog, monthPicker,
  } = imageSets;
  const imgArrays = [
    getImgArrayFormatted(cal),
    getImgArrayFormatted(markdown),
    getImgArrayFormatted(blog),
    getImgArrayFormatted(monthPicker),
  ];

  const {
    calendarCard, blogCard, monthPickerCard, markdownCard,
  } = cardData;
  const cardDataArray = [calendarCard, blogCard, monthPickerCard, markdownCard];

  for (let i = 0; i < projectCells.length; i += 1) {
    const {
      title,
      projLink,
      githubLink,
      stacks,
      lighthouseKey,
      description,
      published,
    } = cardDataArray[i];

    const projectCell = projectCells[i];
    projectCell.id = `proj-${lighthouseKey}-top`;

    createProjectCard(
      projectCell,
      imgArrays[i],
      i === 0,
      title,
      projLink,
      githubLink,
      stacks,
      lighthouseKey,
      description,
      published,
    );
  }
};

const initProjects = () => {
  createProjectMenu();
  createProjectCards();
  const projectsGrid = document.querySelector('.projects-grid');
  projectsGrid.addEventListener('click', handlePopupImage);
};

export default initProjects;
