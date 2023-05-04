import lhdata from '../data/lighthouseJSON.json';

const createLHModal = (appname) => {
  const base = lhdata[appname];

  const [dataTitle, dataLink, dataScore, dataContent] = [
    base.title,
    base.link,
    base.score,
    lhdata.content,
  ];

  const wrapper = document.createElement('aside');
  wrapper.classList.add('lighthouse-modal--wrapper');
  const modal = document.createElement('div');
  modal.classList.add('lighthouse-modal');

  const header = document.createElement('div');
  const lhtitle = document.createElement('span');
  const closeBtn = document.createElement('button');
  header.classList.add('lighthouse-modal__header');
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

  header.append(lhtitle, closeBtn);
  lhmain.append(mainscore, screenshotLinkBtn);
  lhbody.appendChild(lhmain);

  for (let i = 0; i < 4; i += 1) {
    const [contentTitle, contentDesc] = dataContent[i];

    const sub = document.createElement('div');
    sub.classList.add('lh-sub');

    const subHeader = document.createElement('div');
    subHeader.classList.add('lh-sub-title');
    subHeader.textContent = contentTitle;

    const metricDesc = document.createElement('div');
    metricDesc.classList.add('lh-sub__metrics-title');

    const metricDescTitle = document.createElement('span');
    metricDescTitle.classList.add('lh-sub__metrics-title');
    metricDescTitle.textContent = dataScore[i];
    metricDesc.appendChild(metricDescTitle);
    const hr = document.createElement('hr');

    const metricDescSubtext = document.createElement('div');
    metricDescSubtext.classList.add('lh-sub-subtitle');
    metricDescSubtext.textContent = contentDesc;

    sub.append(subHeader, metricDesc, hr, metricDescSubtext);
    lhbody.appendChild(sub);
  }

  modal.append(header, lhbody);
  wrapper.appendChild(modal);
  return wrapper;
};

export default createLHModal;
