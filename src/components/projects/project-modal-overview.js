import projectJSON from '../../data/json/projects/projects-overview-data.json';
import closeOnEscManager from '../../hooks/handle-closeonesc';
import useHandleModalOffset from '../../hooks/handle-modal-offset';
import createButton from '../ui/button';
import createLink from '../ui/link';

const closeProjectOverview = (e) => {
  if (e.target.classList.contains('po-header--close')
    || e.target.classList.contains('project-overview--wrapper')) {
    e.currentTarget.remove();
    useHandleModalOffset();
    closeOnEscManager.forceCleanup();
  }
};

const createProjectHR = () => document.createElement('hr');

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
const configProjectOverview = (title, links, features) => {
  const poWrapper = document.createElement('aside');
  poWrapper.classList.add('project-overview--wrapper');

  const poModal = document.createElement('div');
  poModal.classList.add('project-overview--modal');
  const poModalHeader = document.createElement('div');
  poModalHeader.classList.add('po-header');
  const poModalTitle = document.createElement('h3');
  const poSubheader = document.createElement('div');
  poSubheader.classList.add('po-header--title');
  const poSubheaderText = document.createElement('span');
  poSubheaderText.textContent = ' – Project Overview';
  const br = document.createElement('br');
  poModalTitle.textContent = title;

  const closePoBtn = createButton('x', 'po-header--close', 'close project overview', 'button');
  // MODAL HEADER : APPEND
  poSubheader.append(poModalTitle, br, poSubheaderText);
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
    linksWrapper.append(createLink(link, tooltip, null, key));
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
  poWrapper.addEventListener('click', closeProjectOverview);
  return poWrapper;
};

const createProjectModal = (e) => {
  const body = document.querySelector('body');
  if (body.dataset.activeModal === 'true') return;

  const projectDataAttr = e?.target?.dataset?.proj;
  if (!projectDataAttr) return;

  const { [projectDataAttr]: projectData } = projectJSON;
  const { title, links, features } = projectData;
  const projectOverviewInstance = configProjectOverview(
    title,
    links,
    features,
  );

  body.append(projectOverviewInstance);

  e.target.blur();

  useHandleModalOffset();

  closeOnEscManager.useCloseOnEsc(
    body.dataset.activeModal === 'true',
    () => {
      projectOverviewInstance.remove();
      useHandleModalOffset();
    },
  );
};

export default createProjectModal;
