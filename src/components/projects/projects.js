import imageSets from './import-project-images';
import svgIcons from '../../utilities/get-svg';
import initCalendarTabs from './project-tabs';
import useHandleModalOffset from '../../hooks/handle-modal-offset';
import createIcon from '../ui/icon';
import createLink from '../ui/link';
import createButton from '../ui/button';

import createAuditModal from './project-modal-audit';
import createProjectModal from './project-modal-overview';
import createProjectMenu from './project-menu';

import cardData from '../../data/json/projects/projects-card-data.json';
import {
  aspectSmallWidth,
  projectImageType,
} from '../../data/constants';

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

const createFullImagePopup = (img) => {
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

  popupHeaderContent.append(imageInfo);
  popupHeader.append(popupHeaderContent);
  imgWrapper.append(img);
  popup.append(popupHeader, imgWrapper);
  document.body.append(popup);
  useHandleModalOffset(popup);
  popup.addEventListener('click', () => {
    popup.remove();
    useHandleModalOffset();
  });
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

const createProjectFooterButton = (
  cName,
  attrName,
  dataText,
  text,
  callback,
) => {
  const projFooterBtn = createButton(text, cName, null, 'button');
  projFooterBtn.dataset.tooltipText = `Open ${text} Modal`;
  projFooterBtn.setAttribute(attrName, dataText);
  projFooterBtn.addEventListener('click', callback);
  return projFooterBtn;
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
      createAuditModal,
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

const createProjectCard = (
  title,
  projLink,
  githubLink,
  stacks,
  lighthouseKey,
  description,
  published,
  projectCellCname,
  images,
  isCalendar = false,
) => {
  const projectCell = document.querySelector(`.${projectCellCname}`);
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
  publishedText.textContent = `Published: ${published}`;
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

const createProjectCards = () => {
  const {
    cal, markdown: mark, blog, monthPicker: mp,
  } = imageSets;
  const {
    calendarCard, blogCard, monthPickerCard, markdownCard,
  } = cardData;

  const clsNames = ['calendarcm', 'blogcm', 'monthpickercm', 'markdowncm'];
  const imgArrays = [getImgArray(cal), getImgArray(blog), getImgArray(mp), getImgArray(mark)];
  const cardDataArray = [calendarCard, blogCard, monthPickerCard, markdownCard];

  for (let i = 0; i < clsNames.length; i += 1) {
    createProjectCard(
      ...Object.values(cardDataArray[i]),
      clsNames[i],
      imgArrays[i],
      i === 0,
    );
  }
};

const initProjects = () => {
  createProjectMenu();
  createProjectCards();
  initCalendarTabs();
  const projectsGrid = document.querySelector('.projects-grid');
  projectsGrid.addEventListener('click', handlePopupImage);
};

export default initProjects;
