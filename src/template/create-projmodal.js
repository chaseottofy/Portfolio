import projectJSON from '../data/min/projectJSONMin.json';

import getScrollBarWidth from '../utilities/get-scrollbarwidth';

const poWrapper = document.querySelector('.project-overview--wrapper');
const body = document.querySelector('body');
const header = document.querySelector('.header');

const handleCloseProjOverview = () => {
  poWrapper.classList.add('hide-po');
  poWrapper.firstElementChild.remove();

  // eslint-disable-next-line no-use-before-define
  poWrapper.removeEventListener('click', closeProjectOverview);
  // eslint-disable-next-line no-use-before-define
  window.removeEventListener('keydown', closeOverviewOnEsc);

  body.classList.remove('body-prevent-scroll');
  body.removeAttribute('style');
  header.removeAttribute('style');
};

const closeProjectOverview = (e) => {
  if (e.target.classList.contains('po-header--close')
    || e.target.classList.contains('project-overview--wrapper')) {
    handleCloseProjOverview();
  }
};

const closeOverviewOnEsc = (e) => {
  if (e.key === 'Escape') {
    handleCloseProjOverview();
  }
};

const createProjectHR = () => {
  const hr = document.createElement('hr');
  return hr;
};

const projectLinkTemplate = (link, text, tooltip) => {
  const linkEl = document.createElement('a');
  linkEl.href = link;
  linkEl.target = '_blank';
  linkEl.rel = 'noopener noreferrer';
  linkEl.textContent = text;
  linkEl.title = tooltip;
  return linkEl;
};

const projectFeatureTemplate = (featureName, featureValue) => {
  const featureTitle = document.createElement('h4');
  featureTitle.textContent = featureName;
  featureTitle.classList.add('po-title');
  const featureList = document.createElement('ul');
  featureList.classList.add('po-list');

  for (const feature of featureValue) {
    const featureEl = document.createElement('li');
    featureEl.classList.add('po-list--item');
    featureEl.textContent = feature;
    featureList.append(featureEl);
  }
  return [featureTitle, featureList];
};

/**
 * setProjectOverview
 * @param {object.<string>} data JSON object
 * data.title : string "name of project"
 * data.links : {link: [url, title]}
 * data.features : {feature: [list of features]}
 */
const setProjectOverview = (data) => {
  const { title, links, features } = data;

  const poModal = document.createElement('div');
  poModal.classList.add('project-overview--modal');
  const poModalHeader = document.createElement('div');
  poModalHeader.classList.add('po-header');
  const poModalTitle = document.createElement('h3');
  const poSubheader = document.createElement('span');
  poSubheader.textContent = 'Project Overview: ';
  poSubheader.classList.add('po-header--title');
  const br = document.createElement('br');
  poModalTitle.textContent = title;

  const closePoBtn = document.createElement('button');
  closePoBtn.textContent = 'x';
  closePoBtn.classList.add('po-header--close');
  closePoBtn.title = 'Close Project Overview';
  closePoBtn.ariaLabel = 'button';
  closePoBtn.addEventListener('click', closeProjectOverview, { once: true });
  // MODAL HEADER : APPEND
  poSubheader.append(br, poModalTitle);
  poModalHeader.append(poSubheader, closePoBtn);

  const poModalBody = document.createElement('div');
  poModalBody.classList.add('po-body');

  const linksTitle = document.createElement('h4');
  linksTitle.classList.add('po-title');
  linksTitle.textContent = 'Links';
  poModalBody.append(linksTitle);

  const linksWrapper = document.createElement('div');
  linksWrapper.classList.add('proj-overview--links');

  // create <UL><LI> cascade for each link
  for (const [key, val] of Object.entries(links)) {
    const [link, tooltip] = val;
    linksWrapper.append(projectLinkTemplate(
      link,
      key,
      tooltip,
    ));
  }
  poModalBody.append(linksWrapper);

  // create <UL><LI> cascade for each feature
  for (const [key, val] of Object.entries(features)) {
    const [featureTitle, featureList] = projectFeatureTemplate(key, val);
    poModalBody.append(featureTitle, featureList, createProjectHR());
  }

  // MODAL : APPEND
  poModal.append(poModalHeader, poModalBody);
  poWrapper.append(poModal);
};

const createProjectModal = (e) => {
  poWrapper.classList.remove('hide-po');
  body.classList.add('body-prevent-scroll');
  body.style.paddingRight = `${getScrollBarWidth()}px`;
  header.style.paddingRight = `${getScrollBarWidth()}px`;
  setProjectOverview(projectJSON[e.target.getAttribute('data-proj')]);
  poWrapper.addEventListener('click', closeProjectOverview);
  window.addEventListener('keydown', closeOverviewOnEsc);
  e.target.blur();
};

export default createProjectModal;
