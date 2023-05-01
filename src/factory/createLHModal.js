const createLHModal = (idx) => {
  const apps = {
    '0': {
      title: 'Google Calendar 2.0',
      link: 'https://pagespeed.web.dev/analysis/https-chaseottofy-github-io-google-calendar-clone-vanilla/3ra0nt0y2h?form_factor=desktop',
      score: ['0.3', '0.3', '0.0', '0.0'],
    },
    '1': {
      title: 'Markdown Lite ',
      link: 'https://pagespeed.web.dev/analysis/https-chaseottofy-github-io-react-lite-markdown/ov2k7dtd51?form_factor=desktop',
      score: ['0.4', '0.4', '0.0', '0.0'],
    },
    content: [
      ['First Contentful Paint', 'Marks the time at which the first text or image is painted.'],
      ['Largest Contentful Paint', 'Marks the time at which the largest text or image is painted.'],
      ['Total Blocking Time', 'Sum of all time periods between FCP and Time to Interactive'],
      ['Cumulative Layout Shift', 'Measures the movement of visible elements within the viewport.'],
    ],
  };

  const wrapper = document.createElement('aside');
  wrapper.classList.add('lighthouse-modal--wrapper');
  const modal = document.createElement('div');
  modal.classList.add('lighthouse-modal');

  const header = document.createElement('div');
  const title = document.createElement('span');
  const closeBtn = document.createElement('button');
  header.classList.add('lighthouse-modal__header');
  title.classList.add('lh-appname');
  title.textContent = `Lighthouse: ${apps[idx].title}`;
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
  screenshotLinkBtn.setAttribute('href', apps[idx].link);
  screenshotLinkBtn.setAttribute('title', 'pagespeed.web.dev');
  screenshotLinkBtn.setAttribute('target', '_blank');
  screenshotLinkBtn.setAttribute('rel', 'noopener noreferrer');
  screenshotLinkBtn.textContent = 'Run an audit';
  screenshotLinkBtn.classList.add('lh-main__score-title');

  header.append(title, closeBtn);
  lhmain.append(mainscore, screenshotLinkBtn);
  lhbody.appendChild(lhmain);

  for (let i = 0; i < 4; i++) {
    const sub = document.createElement('div');
    sub.classList.add('lh-sub');
    const subHeader = document.createElement('div');
    subHeader.classList.add('lh-sub-title');
    subHeader.textContent = apps.content[i][0];
    const metricDesc = document.createElement('div');
    metricDesc.classList.add('lh-sub__metrics-title');
    const metricDescTitle = document.createElement('span');
    metricDescTitle.classList.add('lh-sub__metrics-title');
    metricDescTitle.textContent = apps[idx].score[i];
    metricDesc.appendChild(metricDescTitle);
    const hr = document.createElement('hr');
    const metricDescSubtext = document.createElement('div');
    metricDescSubtext.classList.add('lh-sub-subtitle');
    metricDescSubtext.textContent = apps.content[i][1];

    sub.append(subHeader, metricDesc, hr, metricDescSubtext);
    lhbody.appendChild(sub);
  }

  modal.append(header, lhbody);
  wrapper.appendChild(modal);
  return wrapper;
};

export default createLHModal;
