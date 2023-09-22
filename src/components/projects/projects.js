import imageSets from './import-project-images';

import handleTab from './handle-project-tabs';
import handlePopupImage from './handle-popup-image';

import createProjectTabs from './project-tabs';
import createProjectMenu from './project-menu';
import createProjectFooterButtons from './project-footer';

import createIcon from '../ui/icon';
import createLink from '../ui/link';

import svgIcons from '../../utilities/get-svg';
import getImgArrayFormatted from '../../utilities/get-imgarr-formatted';

import cardData from '../../data/json/projects/projects-card-data.json';
import { projectImageType } from '../../data/constants';

const createProjectPicture = (picture, images) => {
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
      img.loading = 'lazy';
    } else {
      img.srcset = `${img.srcset + src} ${i + 1}x`;
    }
    picture.append(source);
  }
  picture.append(img);
};

const createTabs = (tabs, title) => {
  const tabWrapper = document.createElement('div');
  tabWrapper.classList.add('pc__header-tabs');
  for (let i = 0; i < tabs.length; i += 1) {
    const tab = tabs[i];

    const identifiers = {
      tabId: `proj-${title}-${tab.toLowerCase()}`,
      projName: title,
      suffix: 'View',
    };

    tabWrapper.append(createProjectTabs(
      tab,
      identifiers,
      i + 1,
      i === 0,
      handleTab,
    ));
  }
  return tabWrapper;
};

/**
 * @param {HTMLDivElement} projectCell
 * @param {Array<string> | []} tabs
 * @param {string} projLink
 * @param {string} githubLink
 * @param {string} title
 * @param {string} published
 * @returns {void}
 */
const createProjectHeader = (
  projectCell,
  tabs,
  projLink,
  githubLink,
  title,
  published,
  iconSrcs,
) => {
  const { lock, github, arrow } = iconSrcs;

  const lockIcon = createIcon('img-icon', lock, null);
  const githubIcon = createIcon('img-icon', github, null);
  const arrowRightIcon = createIcon('img-icon', arrow, null);

  const projectHeader = projectCell.querySelector('.project-content__header');
  if (tabs.length > 1) {
    projectHeader.append(createTabs(tabs));
  }

  const publishedText = projectCell.querySelector('.content-published--text');
  publishedText.textContent = `Published: ${published}`;

  const searchArrowRight = projectCell.querySelector('.search-arrowright');
  searchArrowRight.append(arrowRightIcon);

  // search bar
  const subheaderSearch = projectCell.querySelector('.pc__subheader--search');
  const subheaderSearchLink = createLink(projLink, 'demo', null, `Demo: ${title}`, '_self');
  subheaderSearch.prepend(subheaderSearchLink);
  subheaderSearchLink.prepend(lockIcon);

  // Github repo button
  const subheaderRepo = projectCell.querySelector('.pc__subheader--links');
  const subheaderRepoLink = createLink(githubLink, 'github repo', null, null);
  const subheaderGhText = document.createElement('span');
  subheaderGhText.textContent = 'Repo';
  subheaderRepoLink.append(githubIcon, subheaderGhText);
  subheaderRepo.append(subheaderRepoLink);
};

/**
 * @param {HTMLDivElement} projectCell
 * @param {Array<{src: string, alt: string, media: string}>} images
 * @returns {void}
 */
const createProjectBody = (projectCell, images) => {
  const projectBody = projectCell.querySelector('.project-content__body');
  const projectPicture = projectBody.firstElementChild;
  createProjectPicture(projectPicture, images);
};

/**
 * @param {HTMLDivElement} projectCell
 * @param {Array<string>} stacks
 * @param {string} description
 * @param {string} title
 * @param {string} lighthouseKey
 * @returns {void}
 */
const createProjectFooter = (projectCell, stacks, description, title, lighthouseKey) => {
  const projectFooterStacks = projectCell.querySelector('.pf-stacks');
  const projectFooterTitle = projectCell.querySelector('.project-footer__title');
  const projectFooterBtns = projectCell.querySelector('.project-footer-btns');
  const projectFooterDesc = projectCell.querySelector('.project-footer__desc');

  // create icons of tech used in project (stacks)
  for (const stack of stacks) {
    const iconWrapper = document.createElement('div');
    iconWrapper.classList.add('pf-stack');
    const stackIcon = createIcon(`${stack}-icon`, svgIcons[stack], null);
    iconWrapper.append(stackIcon);
    projectFooterStacks.append(iconWrapper);
  }

  // dataset.pfStacks represents the names of the stacks used in the project conjoined by ' + '
  // will appear adjacent to the icon wrapper for the stacks.
  projectFooterStacks.dataset.pfStacks = stacks.join(' + ');
  projectFooterDesc.textContent = `${description}`;
  projectFooterTitle.textContent = title;
  projectFooterBtns.append(...createProjectFooterButtons(lighthouseKey));
};

const createProjectCards = () => {
  const projectCells = document.querySelectorAll('.project-cell');
  const { cal, blog, monthPicker, markdown } = imageSets;
  const { calendarCard, blogCard, monthPickerCard, markdownCard } = cardData;
  const imgArrays = [
    getImgArrayFormatted(cal),
    getImgArrayFormatted(blog),
    getImgArrayFormatted(monthPicker),
    getImgArrayFormatted(markdown),
  ];

  const cardDataArray = [calendarCard, blogCard, monthPickerCard, markdownCard];

  const iconSrcs = {
    lock: svgIcons.lock,
    github: svgIcons.github,
    arrow: svgIcons.arrow,
  };

  for (let i = 0; i < projectCells.length; i += 1) {
    const {
      title,
      projLink,
      githubLink,
      stacks,
      lighthouseKey,
      description,
      published,
      tabs,
    } = cardDataArray[i];

    const cell = projectCells[i];
    const projectImages = imgArrays[i];
    createProjectHeader(cell, tabs, projLink, githubLink, title, published, iconSrcs);
    createProjectBody(cell, projectImages);
    createProjectFooter(cell, stacks, description, title, lighthouseKey);

    // give project cell ID for floating menu scroll
    cell.id = `proj-${lighthouseKey}-top`;
  }
};

const initProjects = () => {
  createProjectMenu();
  createProjectCards();
  const projectsGrid = document.querySelector('.projects-grid');
  projectsGrid.addEventListener('click', handlePopupImage);
};

export default initProjects;
