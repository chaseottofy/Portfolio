import { projectImageType } from '../../data/constants';
import cardData from '../../data/json/projects/projects-card-data.json';
import getImgArray from '../../utilities/get-imgarr-formatted';
import svgIcons from '../../utilities/get-svg';
import handlePopupImage from './handle-popup-image';
import handleTab from './handle-project-tabs';
import { startingImageSets } from './import-project-images';
import createProjectMenu from './project-menu';
import createAuditModal from './project-modal-audit';
import createProjectModal from './project-modal-overview';
import createProjectTabs from './project-tabs';

/**
 *
 * @param {HTMLPictureElement} picture
 * @param {Array<object>} images
 * images format example:
 * [
    {
        "src": "images/cday1.8e769cb7.webp",
        "alt": "cdaylgdark",
        "media": "(min-width: 721px)"
    },
  ]
 */
const configProjectPicture = (picture, images) => {
  const img = picture.querySelector('img');
  const sources = picture.querySelectorAll('source');
  for (let i = 0; i < images.length; i += 1) {
    const { src, alt, media } = images[i];
    const source = sources[i];
    source.srcset = src;
    source.media = media;
    source.type = projectImageType;
    img.srcset += src;

    // set first image in provided images array as default
    if (i === 0) {
      img.src = src;
      img.srcset = `${src} 1x, `;
      img.loading = 'lazy';
      img.alt = alt || 'project image';
      img.type = projectImageType;
    } else {
      img.srcset = `${img.srcset + src} ${i + 1}x`;
    }
  }
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
const createProjectHeader = (projectCell, tabs, projLink, githubLink, title, published) => {
  const projectHeader = projectCell.querySelector('.project-content__header');
  // Only create tabs if there are more than 1, if a project does not have tabs, it will
  // be represented by an empty array

  // format title to be used as ID prefix for tabs
  if (tabs.length > 1) {
    const tabsWrapper = projectHeader.querySelector('.pc__header-tabs');
    const formattedTitle = title.toLowerCase().replaceAll(/[^a-z]/g, '');

    for (let i = 0; i < tabs.length; i += 1) {
      const tab = tabs[i];
      const identifiers = {
        tabId: `${formattedTitle}-${tab.toLowerCase()}`,
        projName: formattedTitle,
        suffix: 'View',
      };

      tabsWrapper.append(createProjectTabs(
        tab, // string: tab value
        identifiers, // object created above
        i + 1, // number: tab index
        i === 0, // boolean: input checked
        handleTab, // function: handle tab change
      ));
    }
  }

  const publishedText = projectCell.querySelector('.content-published--text');
  publishedText.textContent = `- ${published}`;

  // set search bar link and title
  const subheaderSearch = projectCell.querySelector('.pc__subheader--search');
  const subheaderSearchLink = subheaderSearch.querySelector('a');
  subheaderSearchLink.setAttribute('href', projLink);

  const subheaderSearchText = subheaderSearch.querySelector('span');
  subheaderSearchText.textContent = `Demo: ${title}`;

  // set github link
  const subheaderRepo = projectCell.querySelector('.pc__subheader--links');
  const subheaderRepoLink = subheaderRepo.querySelector('a');
  subheaderRepoLink.setAttribute('href', githubLink);
};

/**
 * @param {HTMLDivElement} projectCell
 * @param {Array<{src: string, alt: string, media: string}>} images
 * @returns {void}
 */
const createProjectBody = (projectCell, images) => {
  const projectBody = projectCell.querySelector('.project-content__body');
  const projectPicture = projectBody.firstElementChild;
  configProjectPicture(projectPicture, images);
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
  const projectStacksWrapper = projectCell.querySelector('.pf-stacks');
  const projectStacks = projectCell.querySelectorAll('.pf-stack');

  const projectFooterTitle = projectCell.querySelector('.project-footer__title');
  const projectFooterBtnsWrapper = projectCell.querySelector('.project-footer-btns');
  const projectFooterDesc = projectCell.querySelector('.project-footer__desc');

  // create icons of tech used in project (stacks)
  for (let i = 0; i < stacks.length; i += 1) {
    const stack = stacks[i];
    const stackSvg = svgIcons[stack];
    const iconWrapper = projectStacks[i];
    const tempIcon = iconWrapper.querySelector('img');
    tempIcon.src = stackSvg;
    tempIcon.classList.add(`${stack}-icon`);
  }

  projectStacksWrapper.dataset.pfStacks = stacks.join(' + ');
  projectFooterDesc.textContent = `${description}`;
  projectFooterTitle.textContent = title;

  const [auditBtn, overviewBtn] = projectFooterBtnsWrapper.children;
  auditBtn.dataset.lhProj = lighthouseKey;
  overviewBtn.dataset.proj = lighthouseKey;
  auditBtn.addEventListener('click', createAuditModal);
  overviewBtn.addEventListener('click', createProjectModal);
};

/**
 * A skeleton of each project card already exists in the HTML
 * This function fills in the skeleton with data, images, and sets up any event listeners
 *
 * If the project card needs tabs, aka more than 1 image, ensure that a temporary imageSet
 * is provided within 'imageSets' so that only the first image is loaded initially
 *
 * I've added two html templates within the '../templates' folder, one for a
 * project with tabs, and one without.
 * @returns {void}
 */
const createProjectCards = () => {
  const projectCells = document.querySelectorAll('.project-cell');
  const cardDataArray = Object.values(cardData).slice(0, -1);
  const imgArrays = getImgArray(Object.values(startingImageSets));

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

    const [cell, projectImages] = [projectCells[i], imgArrays[i]];

    createProjectHeader(cell, tabs, projLink, githubLink, title, published);
    createProjectBody(cell, projectImages);
    createProjectFooter(cell, stacks, description, title, lighthouseKey);

    // give project cell ID for floating menu scroll
    cell.id = `proj-${lighthouseKey}-top`;
    cell.dataset.projectCellLoaded = 'true';
  }
};

const initProjects = () => {
  createProjectMenu();
  createProjectCards();
  const projectsGrid = document.querySelector('.projects-grid');
  projectsGrid.addEventListener('click', handlePopupImage);
};

export default initProjects;
