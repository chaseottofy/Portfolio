import imageSets from '../utilities/get-image';
import svgIcons from '../utilities/get-svg';

import createLHModal from './create-lhmodal';
import createProjectModal from './create-projmodal';
import cardData from '../data/cardsJSON.json';

import initCalendarMulit from '../utilities/handle-tabs';
import handleModalOffset from '../utilities/handle-modaloffset';

import {
  aspectSmallWidth,
  projectImageType,
} from '../data/constants';

const createIcon = (cName, src, alt) => {
  const icon = new Image();
  if (cName) icon.classList.add(cName);
  icon.alt = alt || '';
  icon.src = src || 'img-icon';
  return icon;
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

const createFullImagePopup = (src, alt = 'alt image') => {
  const popup = document.createElement('div');
  popup.classList.add('popup-picture', 'act-modal');
  const popupHeader = document.createElement('div');
  popupHeader.classList.add('popup-picture__header');
  const popupHeaderContent = document.createElement('div');
  popupHeaderContent.classList.add('popup-picture__header-content');
  const imageInfo = document.createElement('span');
  imageInfo.classList.add('popup-picture__info');
  imageInfo.textContent = 'click anywhere to close';

  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('popup-picture__imgwrapper');
  const imgElem = new Image();
  imgElem.src = src;
  imgElem.alt = alt;
  imgElem.loading = 'eager';

  popupHeaderContent.append(imageInfo);
  popupHeader.append(popupHeaderContent);
  imgWrapper.append(imgElem);
  popup.append(popupHeader, imgWrapper);
  document.body.append(popup);
  handleModalOffset(popup);
  popup.addEventListener('click', () => {
    popup.remove();
    handleModalOffset();
  });
};

const createProjectPicture = (images, cNames, attr1, attr2) => {
  const projectImage = document.createElement('picture');

  if (attr1) { projectImage.setAttribute(...Object.values(attr1)); }
  if (attr2) { projectImage.setAttribute(...Object.values(attr2)); }
  for (const cName of cNames) { projectImage.classList.add(cName); }

  for (let i = 0; i < images.length; i += 1) {
    const { src, alt, media } = images[i];
    const source = document.createElement('source');
    source.srcset = src;
    source.media = media;
    source.type = projectImageType;
    if (i === 0) {
      const img = new Image();
      img.src = src;
      img.alt = alt;
      img.style = 'max-width:100vw;';
      img.loading = 'lazy';
      projectImage.append(source, img);
    } else {
      // source tags must be kept in order and inserted before the <img> tag
      projectImage.insertBefore(source, projectImage.lastElementChild);
    }
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
  button.ariaLabel = 'button';
  button.textContent = text;
  button.setAttribute(attrName, dataText);
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
    label.classList.add('proj-cal--tab');
    label.dataset.labAfter = 'view';
    label.dataset.labSm = labSm;
    label.dataset.tabIdx = tabIdx;
    label.setAttribute('for', `proj-calendar-${title.toLowerCase()}`);
    label.ariaLabel = labelTxt;
    label.textContent = `${title} `;
    wrapper.append(input, label);
    return wrapper;
  };

  const tabNames = ['Day', 'Week', 'Month', 'Year', 'List'];
  const calTabs = document.createElement('div');
  calTabs.classList.add('pc__header-tabs');
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
  published,
  projectCell,
  images,
  isCalendar = false,
) => {
  const projectHeader = projectCell.querySelector('.project-content__header');
  const projectSubheader = projectCell.querySelector('.project-content__subheader');
  const projectBody = projectCell.querySelector('.project-content__body');
  const projectCellFooter = projectCell.querySelector('.project-cell__footer');
  const projectFooterTitles = projectCell.querySelector('.project-footer__titles');
  const projectFooterStacks = projectCell.querySelector('.pf-stacks');
  const projectFooterContent = projectCell.querySelector('.project-footer__content');
  const projectPublished = projectCell.querySelector('.project-content__published');
  const lockIcon = createIcon('img-icon', svgIcons.lock, null);
  const ghIcon = createIcon('img-icon', svgIcons.github, null);
  const subheaderGh = createSubheaderLink('links', githubLink, ghIcon, 'github repo', null);
  const projectHref = `proj-${lighthouseKey}-top`;
  projectCell.id = projectHref;
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

  const publishedText = document.createElement('span');
  publishedText.classList.add('content-published--text');
  publishedText.textContent = 'Published: ' + published;
  projectPublished.append(publishedText);

  for (const stack of stacks) {
    projectFooterStacks.append(createStack(
      createIcon(`${stack}-icon`, svgIcons[stack], null),
    ));
  }

  const projectFooterDesc = document.createElement('p');
  projectFooterDesc.classList.add('project-footer__desc');
  projectFooterDesc.textContent = `${description}`;
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
    const media = ind === 0 ? `(min-width: ${aspectSmallWidth + 1}px)` : `(max-width: ${aspectSmallWidth + 1}px)`;
    imgArray.push({ src: value, alt: key, media });
    ind += 1;
  }
  return imgArray;
};

const handlePopupImage = (e) => {
  if (window.innerWidth >= aspectSmallWidth) {
    const img = e.target.closest('img');
    if (!img) return;
    const imgSrc = img?.src;
    const imgAlt = img?.alt || 'alt';
    if (!imgSrc) return;
    createFullImagePopup(imgSrc, imgAlt);
  } else {
    const img = e.target.closest('picture');
    if (!img) return;
    const imgSrc = img?.firstElementChild?.nextElementSibling?.srcset;
    const imgAlt = img?.lastElementChild?.alt || 'alt';
    if (!imgSrc) return;
    createFullImagePopup(imgSrc, imgAlt);
  }
};

const initProjCards = () => {
  const { cal, markdown: mark, blog, monthPicker: mp } = imageSets;
  const { calendarCard, blogCard, monthPickerCard, markdownCard } = cardData;
  const clsNames = ['calendarcm', 'blogcm', 'monthpickercm', 'markdowncm'];
  const imgArrays = [getImgArray(cal), getImgArray(blog), getImgArray(mp), getImgArray(mark)];
  const cardDataArray = [calendarCard, blogCard, monthPickerCard, markdownCard];

  for (let i = 0; i < clsNames.length; i += 1) {
    const cardElem = document.querySelector(`.${clsNames[i]}`);
    // const { title, projLink, githubLink, stacks, lighthouseKey, description, published } = cardDataArray[i];
    createProjectCell(
      ...Object.values(cardDataArray[i]),
      cardElem,
      imgArrays[i],
      i === 0
    );
  }

  initCalendarMulit();
  const projectsGrid = document.querySelector('.projects-grid');
  projectsGrid.addEventListener('click', handlePopupImage);
};

export default initProjCards;
