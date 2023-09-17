import lockSvg from '../images/svg/lock.svg';
import arrowRightSvg from '../images/svg/arrowRight.svg';
import githubSvg from '../images/svg/githuboutline.svg';
import reactSvg from '../images/svg/react.svg';
import viteSvg from '../images/svg/vite.svg';
import webpackSvg from '../images/svg/webpack.svg';
import nextSvg from '../images/svg/next.svg';
import typescriptSvg from '../images/svg/typescript.svg';
import vanillaSvg from '../images/svg/vanilla.svg';

import imageSets from '../utilities/get-image';

import createLHModal from './create-lhmodal';
import createProjectModal from './create-projmodal';
import cardData from '../data/cardsJSON.json';

import initCalendarMulit from '../utilities/handle-tabs';

const createIcon = (cName, src, alt) => {
  const icon = new Image();
  if (cName) icon.classList.add(cName);
  icon.alt = alt || '';
  icon.src = src || 'img-icon';
  return icon;
};

const svgIcons = {
  'arrow': arrowRightSvg,
  'github': githubSvg,
  'lock': lockSvg,
  'react': reactSvg,
  'vanilla': vanillaSvg,
  'vite': viteSvg,
  'next': nextSvg,
  'typescript': typescriptSvg,
  'webpack': webpackSvg,
};

const createLink = (href, title, cName, text) => {
  const link = document.createElement('a');
  if (cName) link.classList.add(cName);
  if (text) link.textContent = text;
  link.title = title;
  link.href = href;
  link.target = '_blank';
  link.rel = 'noreferrer';
  return link;
};

const createSubheaderLink = (cName, href, icon, alt, children) => {
  const linkwrapper = document.createElement('div');
  linkwrapper.classList.add(`pc__subheader--${cName}`);
  const link = createLink(href, alt, null, null);

  if (children) {
    const linkTxt = document.createTextNode(alt);
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

  let ind = 0;
  for (const { src, alt, media } of images) {
    const source = document.createElement('source');
    source.srcset = src;
    source.media = media;
    if (ind === 0) {
      const img = new Image();
      img.src = src;
      img.alt = alt;
      img.style = 'max-width:100vw;';
      img.loading = 'lazy';
      projectImage.append(source);
      projectImage.append(img);
    } else {
      // keep source tags in order
      projectImage.insertBefore(source, projectImage.lastElementChild);
    }
    ind += 1;
  }
  return projectImage;
};

const createProjectFooterButton = (
  cName,
  attrName,
  dataText,
  text,
  callback,
) => {
  const button = document.createElement('button');
  button.classList.add(cName);
  button.setAttribute('aria-label', 'button');
  button.setAttribute(attrName, dataText);
  button.textContent = text;
  button.addEventListener('click', callback);
  return button;
};

const createCalTabs = () => {
  const createTab = (title, tabIdx, checked) => {
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
    label.classList.add('proj-header__tablabel', 'proj-cal--tab');
    label.setAttribute('data-lab-after', 'view');
    label.setAttribute('data-lab-sm', labSm);
    label.setAttribute('data-tab-idx', tabIdx);
    label.setAttribute('for', `proj-calendar-${title.toLowerCase()}`);
    label.setAttribute('aria-label', labelTxt);
    label.textContent = `${title} `;
    wrapper.append(input, label);
    return wrapper;
  };

  const tabNames = ['Day', 'Week', 'Month', 'Year', 'List'];
  const calTabs = document.createElement('div');
  calTabs.classList.add('pc__header-tabs', 'calendar-tabs');
  for (let i = 0; i < tabNames.length; i += 1) {
    calTabs.append(createTab(tabNames[i], i + 1, i === 0));
  }
  return calTabs;
};

const createProjectFooterButtons = (lighthouseKey) => {
  const projectFooterBtns = document.createElement('div');
  projectFooterBtns.classList.add('project-footer-btns');
  projectFooterBtns.append(
    createProjectFooterButton(
      'open-lh--btn',
      'data-lh-proj',
      lighthouseKey,
      'Audits',
      createLHModal,
    ),
    createProjectFooterButton(
      'open-overview--btn',
      'data-proj',
      lighthouseKey,
      'Overview',
      createProjectModal,
    ),
  );

  return projectFooterBtns;
};

const createProjectCell = (
  title,
  projLink,
  githubLink,
  stacks,
  lighthouseKey,
  description,
  projectCell,
  images,
  isCalendar = false,
) => {
  const projectContentHeader = projectCell.querySelector('.project-content__header');
  const projectContentSubheader = projectCell.querySelector('.project-content__subheader');
  const projectContentBody = projectCell.querySelector('.project-content__body');
  const projectCellFooter = projectCell.querySelector('.project-cell__footer');
  const projectFooterTitles = projectCell.querySelector('.project-footer__titles');
  const projectFooterStacks = projectCell.querySelector('.pf-stacks');
  const projectFooterContent = projectCell.querySelector('.project-footer__content');
  const lockIcon = createIcon('img-icon', svgIcons.lock, null);
  const githubIcon = createIcon('img-icon', svgIcons.github, null);

  if (isCalendar) {
    projectContentHeader.append(createCalTabs());
    projectContentSubheader.append(
      createSubheaderLink('links', githubLink, githubIcon, 'github repo', null),
    );
    projectContentBody.append(createProjectPicture(
      images,
      ['project-image__calendar', 'cal-current'],
      { attrName: 'data-cal-nth', dataText: '1' },
      { attrName: 'data-hasimg', dataText: 'true' },
    ));
  } else {
    const arrowDec = document.createElement('span');
    arrowDec.classList.add('search-arrowright');
    arrowDec.append(createIcon('img-icon', svgIcons.arrow, null));
    projectContentSubheader.append(
      createSubheaderLink('search', projLink, lockIcon, title, arrowDec),
      createSubheaderLink('links', githubLink, githubIcon, 'github repo', null),
    );
    projectContentBody.classList.add('pcb-sm');
    projectContentBody.append(createProjectPicture(images, ['proj-img-sm'], null, null));
  }

  for (const stack of stacks) {
    projectFooterStacks.append(createStack(
      createIcon(`${stack}-icon`, svgIcons[stack], null),
    ));
  }

  const projectFooterDesc = document.createElement('p');
  projectFooterDesc.classList.add('project-footer__desc');
  projectFooterDesc.textContent = `— ${description}`;
  projectFooterTitles.append(projectFooterDesc, projectFooterStacks);

  const projectFooterTitle = document.createElement('h3');
  projectFooterTitle.classList.add('project-footer__title');
  projectFooterTitle.textContent = title;

  const projectFooterBtns = createProjectFooterButtons(lighthouseKey);
  projectFooterContent.append(projectFooterTitle, projectFooterBtns);
  projectCellFooter.append(projectFooterTitles, projectFooterContent);
  return projectCell;
};

const getImgArray = (images) => {
  const imgArray = [];
  let ind = 0;
  for (const [key, value] of Object.entries(images)) {
    const media = ind === 0 ? '(min-width: 640px)' : '(max-width: 640px)';
    imgArray.push({ src: value, alt: key, media });
    ind += 1;
  }
  return imgArray;
};

const projCard = () => {
  const {
    cal, markdown: mark, blog, monthPicker: mp,
  } = imageSets;
  const {
    calendarCard, blogCard, monthPickerCard, markdownCard,
  } = cardData;
  const clsNames = ['project-calendar', 'blogcm', 'monthpickercm', 'markdowncm'];
  const imgArrays = [getImgArray(cal), getImgArray(blog), getImgArray(mp), getImgArray(mark)];
  const cardDataArray = [calendarCard, blogCard, monthPickerCard, markdownCard];

  for (let i = 0; i < clsNames.length; i += 1) {
    const cardElem = document.querySelector(`.${clsNames[i]}`);
    createProjectCell(...Object.values(cardDataArray[i]), cardElem, imgArrays[i], i === 0);
  }
  initCalendarMulit();
};

export default projCard;
