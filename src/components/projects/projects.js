import projectData from '../../data/json/project-data.json';
import getImgSuffix from '../../utilities/get-img-suffix';
import svgIcons from '../../utilities/get-svg';
import handleTab from './handle-project-tabs';
import { sourceImages } from './import-project-images';
import createProjectMenu from './project-menu';
import createProjectModal from './project-modal-overview';
import createProjectTabs from './project-tabs';

const configProjectPicture = (picture, images) => {
  const img = picture.querySelector('img');
  if (img.hasAttribute('srcset')) img.removeAttribute('srcset');
  const sources = picture.querySelectorAll('source');
  for (let i = 0; i < images.length; i += 1) {
    const { src, alt, media } = images[i];
    const srcExtension = getImgSuffix(src);
    const source = sources[i];
    source.srcset = src;
    source.media = media;
    source.type = srcExtension;
    if (i === 0) {
      img.src = src;
      img.srcset = `${src} 1x`;
      img.loading = 'eager';
      img.alt = alt || 'project image';
      img.type = srcExtension;
    } else {
      img.srcset += `, ${src} ${i + 1}x`;
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
  subheaderSearchText.textContent = `Go to: ${title}`;

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

  for (let i = 0; i < stacks.length; i += 1) {
    const stack = stacks[i];
    const stackSvg = svgIcons[stack];
    const iconWrapper = projectStacks[i];
    const tempIcon = iconWrapper.querySelector('img');
    tempIcon.src = stackSvg;

    tempIcon.classList.add(`${stack}-icon`);
    tempIcon.classList.add('icn-svg');
  }

  projectStacksWrapper.dataset.pfStacks = stacks.join(' + ');
  projectFooterDesc.textContent = `${description}`;
  projectFooterTitle.textContent = `${title} `;

  const overviewBtn = projectFooterBtnsWrapper.querySelector('.open-overview--btn');
  overviewBtn.dataset.proj = lighthouseKey;
  overviewBtn.addEventListener('click', createProjectModal);
};

const createProjectCards = (data, sources) => {
  const projectCells = document.querySelectorAll('.project-cell');
  const cardDataKeys = Object.keys(data);
  const projectImages = Object.values(sources);

  for (let i = 0; i < projectCells.length; i += 1) {
    const cell = projectCells[i];
    const { title, links, card } = data[cardDataKeys[i]];
    const { lighthouseKey, description, published, tabs, stacks } = card;
    const { live: projLink = ['#'], github: githubLink = ['#'] } = links;
    createProjectHeader(cell, tabs, projLink[0], githubLink[0], title, published);
    createProjectBody(cell, projectImages[i]);
    createProjectFooter(cell, stacks, description, title, lighthouseKey);
    // give project cell ID for floating menu scroll
    cell.id = `proj-${lighthouseKey}-top`;
    cell.dataset.projectCellLoaded = 'true';
    cell.setAttribute('z-index', -1);
  }
};

const initProjects = () => {
  createProjectMenu(projectData);
  createProjectCards(projectData, sourceImages);
};

export default initProjects;
