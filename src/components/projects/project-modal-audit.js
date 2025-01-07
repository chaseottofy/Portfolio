import projectData from '../../data/json/projects/project-data.json';
import closeOnEscManager from '../../hooks/handle-closeonesc';
import useHandleModalOffset from '../../hooks/handle-modal-offset';
import createButton from '../ui/button';
import createLink from '../ui/link';

const closeLH = (e) => {
  if (e.target.classList.contains('lighthouse-modal--wrapper')
    || e.target.closest('.close-lh-btn')) {
    e.currentTarget.remove();
    useHandleModalOffset();
    closeOnEscManager.forceCleanup();
  }
};

const auditContent = [
  ['First Contentful Paint', 'Marks the time at which the first text or image is painted.'],
  ['Largest Contentful Paint', 'Marks the time at which the largest text or image is painted.'],
  ['Total Blocking Time', 'Sum of all time periods between FCP and Time to Interactive.'],
  ['Cumulative Layout Shift', 'Measures the movement of visible elements within the viewport.'],
];

const configAuditModal = (title, link, score) => {
  const lhWrapper = document.createElement('aside');
  lhWrapper.classList.add('lighthouse-modal--wrapper');

  const lhmodal = document.createElement('div');
  lhmodal.classList.add('lighthouse-modal');

  const lhheader = document.createElement('div');
  const lhtitle = document.createElement('span');
  lhheader.classList.add('lighthouse-modal__header');
  lhtitle.classList.add('lh-appname');
  const tempspan = document.createElement('span');
  tempspan.textContent = 'Audit: ';
  const brhead = document.createElement('br');
  lhtitle.append(tempspan, brhead, title);

  const closeBtn = createButton('x', 'close-lh-btn', 'close audit modal', 'button');
  const lhbody = document.createElement('div');
  lhbody.classList.add('lighthouse-modal__body');
  const lhmain = document.createElement('div');
  lhmain.classList.add('lh-main');
  const mainscore = document.createElement('span');
  mainscore.textContent = '100';
  mainscore.classList.add('lh-main__score');

  const screenshotLinkBtn = createLink(
    link,
    'pagespeed.web.dev',
    'lh-main__score-title',
    'View latest audit',
  );
  lhheader.append(lhtitle, closeBtn);
  lhmain.append(mainscore, screenshotLinkBtn);
  lhbody.append(lhmain);

  for (let i = 0; i < auditContent.length; i += 1) {
    const [contentTitle, contentDesc] = auditContent[i];

    const lhsub = document.createElement('div');
    lhsub.classList.add('lh-sub');

    const lhsubheader = document.createElement('div');
    lhsubheader.classList.add('lh-sub-title');
    lhsubheader.textContent = contentTitle;

    const metricDesc = document.createElement('div');
    metricDesc.classList.add('lh-sub__metrics-title');

    const metricDescTitle = document.createElement('span');
    metricDescTitle.classList.add('lh-sub__metrics-title');
    metricDescTitle.textContent = score[i];
    metricDesc.append(metricDescTitle);
    const lhhr = document.createElement('hr');

    const metricDescSubtext = document.createElement('div');
    metricDescSubtext.classList.add('lh-sub-subtitle');
    metricDescSubtext.textContent = contentDesc;

    lhsub.append(lhsubheader, metricDesc, lhhr, metricDescSubtext);
    lhbody.append(lhsub);
  }

  lhmodal.append(lhheader, lhbody);
  lhWrapper.append(lhmodal);
  lhWrapper.addEventListener('click', closeLH);
  return lhWrapper;
};

const createAuditModal = (e) => {
  // const
  const body = document.querySelector('.body');
  if (body.dataset.activeModal === 'true') return;

  const targetProject = e?.target?.dataset?.lhProj;
  if (!targetProject) return;

  const {
    title,
    links: { auditLink = ['#'] },
    audit: { score },
  } = projectData[targetProject];
  const lightHouseInstance = configAuditModal(title, auditLink[0], score);
  body.append(lightHouseInstance);
  useHandleModalOffset();
  e.target.blur();

  closeOnEscManager.useCloseOnEsc(
    body.dataset.activeModal === 'true',
    () => {
      lightHouseInstance.remove();
      useHandleModalOffset();
    },
  );
};

export default createAuditModal;
