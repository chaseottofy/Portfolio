import lhdata from '../data/min/lighthouseJSONMin.json';
import handleModalOffset from '../utilities/handle-modaloffset';

const body = document.querySelector('.body');
const header = document.querySelector('.header');

const handleLHClose = () => {
  document?.querySelector('.lighthouse-modal--wrapper')?.remove();
  // eslint-disable-next-line no-use-before-define
  window.removeEventListener('keydown', closeLHOnEsc);
  body.removeAttribute('style');
  body.classList.remove('body-prevent-scroll');
  header.removeAttribute('style');
};

const closeLH = (e) => {
  if (e.target.classList.contains('lighthouse-modal--wrapper')
    || e.target.closest('.close-lh-btn')) {
    handleLHClose();
  }
};

const closeLHOnEsc = (e) => {
  if (e.key === 'Escape') {
    handleLHClose();
  }
};

const setLHModal = (appname) => {
  // lhWrapper.classList.remove('hide-lh-modal');
  const lhWrapper = document.createElement('aside');
  lhWrapper.classList.add('lighthouse-modal--wrapper');

  const base = lhdata[appname];

  const [dataTitle, dataLink, dataScore, dataContent] = [
    base.title,
    base.link,
    base.score,
    lhdata.content,
  ];

  const lhmodal = document.createElement('div');
  lhmodal.classList.add('lighthouse-modal');

  const lhheader = document.createElement('div');
  const lhtitle = document.createElement('span');
  lhheader.classList.add('lighthouse-modal__header');
  lhtitle.classList.add('lh-appname');
  const tempspan = document.createElement('span');
  tempspan.textContent = 'Audit: ';
  const brhead = document.createElement('br');
  lhtitle.append(tempspan, brhead, dataTitle);

  const closeBtn = document.createElement('button');
  closeBtn.classList.add('close-lh-btn');
  closeBtn.textContent = 'x';

  const lhbody = document.createElement('div');
  const lhmain = document.createElement('div');
  const mainscore = document.createElement('span');
  lhbody.classList.add('lighthouse-modal__body');
  lhmain.classList.add('lh-main');
  mainscore.textContent = '100';
  mainscore.classList.add('lh-main__score');

  const screenshotLinkBtn = document.createElement('a');
  screenshotLinkBtn.href = dataLink;
  screenshotLinkBtn.title = 'pagespeed.web.dev';
  screenshotLinkBtn.target = '_blank';
  screenshotLinkBtn.rel = 'noopener noreferrer';
  screenshotLinkBtn.textContent = 'View latest audit';
  screenshotLinkBtn.classList.add('lh-main__score-title');

  lhheader.append(lhtitle, closeBtn);
  lhmain.append(mainscore, screenshotLinkBtn);
  lhbody.append(lhmain);

  for (let i = 0; i < 4; i += 1) {
    const [contentTitle, contentDesc] = dataContent[i];

    const lhsub = document.createElement('div');
    lhsub.classList.add('lh-sub');

    const lhsubheader = document.createElement('div');
    lhsubheader.classList.add('lh-sub-title');
    lhsubheader.textContent = contentTitle;

    const metricDesc = document.createElement('div');
    metricDesc.classList.add('lh-sub__metrics-title');

    const metricDescTitle = document.createElement('span');
    metricDescTitle.classList.add('lh-sub__metrics-title');
    metricDescTitle.textContent = dataScore[i];
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
  setTimeout(() => {
    closeBtn.focus();
  }, 50);
  return lhWrapper;
};

const createLHModal = (e) => {
  if (body.classList.contains('body-prevent-scroll')) return;
  body.append(
    setLHModal(e.target.getAttribute('data-lh-proj')),
  );
  e.target.blur();
  handleModalOffset();
  window.addEventListener('keydown', closeLHOnEsc);
};

export default createLHModal;
