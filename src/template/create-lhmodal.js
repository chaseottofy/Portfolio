import projectAuditsData from '../data/projects/projectAuditsJSON.json';
import handleModalOffset from '../utilities/handle-modaloffset';

const closeLH = (e) => {
  if (e.target.classList.contains('lighthouse-modal--wrapper')
    || e.target.closest('.close-lh-btn')) {
    e.currentTarget.remove();
    handleModalOffset();
  }
};

const configLightHouseModal = (title, link, score, content) => {
  const lhWrapper = document.createElement('aside');
  lhWrapper.classList.add('lighthouse-modal--wrapper', 'act-modal');

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

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-lh-btn');
  closeBtn.textContent = 'x';

  const lhbody = document.createElement('div');
  lhbody.classList.add('lighthouse-modal__body');
  const lhmain = document.createElement('div');
  lhmain.classList.add('lh-main');
  const mainscore = document.createElement('span');
  mainscore.textContent = '100';
  mainscore.classList.add('lh-main__score');

  const screenshotLinkBtn = document.createElement('a');
  screenshotLinkBtn.href = link;
  screenshotLinkBtn.title = 'pagespeed.web.dev';
  screenshotLinkBtn.target = '_blank';
  screenshotLinkBtn.rel = 'noopener noreferrer';
  screenshotLinkBtn.textContent = 'View latest audit';
  screenshotLinkBtn.classList.add('lh-main__score-title');

  lhheader.append(lhtitle, closeBtn);
  lhmain.append(mainscore, screenshotLinkBtn);
  lhbody.append(lhmain);

  for (let i = 0; i < 4; i += 1) {
    const [contentTitle, contentDesc] = content[i];

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

const createLHModal = (e) => {
  const body = document.querySelector('.body');
  if (body.dataset.activeModal === 'true') return;

  const targetProject = e?.target?.dataset?.lhProj;
  if (!targetProject) return;

  const { [targetProject]: activeProjectData, content } = projectAuditsData;
  const { title, link, score } = activeProjectData;
  const lightHouseInstance = configLightHouseModal(
    title,
    link,
    score,
    content,
  );
  body.append(lightHouseInstance);
  handleModalOffset();
  e.target.blur();
};

// const inittemp = () => {
//   handleModalOffset();
//   const { markdown: tempdata, content } = projectAuditsData;
//   const { title, link, score } = tempdata;
//   const lightHouseInstance = configLightHouseModal(
//     title,
//     link,
//     score,
//     content,
//   );
//   document.querySelector('.body').append(lightHouseInstance);
// };
// inittemp();

export default createLHModal;
