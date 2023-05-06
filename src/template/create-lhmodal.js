import lhdata from '../data/lighthouseJSON.json';

const lhWrapper = document.querySelector('.lighthouse-modal--wrapper');

const createLHModal = (appname) => {
  lhWrapper.classList.remove('hide-lh-modal');

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
  const closeBtn = document.createElement('button');
  lhheader.classList.add('lighthouse-modal__header');
  lhtitle.classList.add('lh-appname');
  lhtitle.textContent = `Lighthouse: ${dataTitle}`;
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
  screenshotLinkBtn.setAttribute('href', dataLink);
  screenshotLinkBtn.setAttribute('title', 'pagespeed.web.dev');
  screenshotLinkBtn.setAttribute('target', '_blank');
  screenshotLinkBtn.setAttribute('rel', 'noopener noreferrer');
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
};

export default createLHModal;
