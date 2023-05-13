import badgeData from '../data/min/contactJSONMin.json';

const body = document.querySelector('.body');
const bentArrow = document.querySelector('.img-bent-arrowsrc');
const bentArrowSrc = bentArrow.getAttribute('src');
const cmBodyImgs = document.querySelectorAll('.cm-body--img');

/**
 * createBadge
 * @param {string} cname className
 * @param {string} href profile link
 * @param {string} title profile title
 * @param {string} dataAcc data-attribute containing name of profile
 * @param {array.<string>} dataBef for youtube/codewars badge (extra account info)
 * @param {number} idx index of badge : use to retrieve img src from cmBodyImgs
 * @returns {HTMLDivElement} badge
 */
const createBadge = (cname, href, title, dataAcc, dataBef, idx) => {
  const badge = document.createElement('div');
  badge.classList.add('cm-right--top__cell');
  badge.classList.add(cname);

  const badgeLink = document.createElement('a');
  badgeLink.classList.add('cm-right--top__cell-badge');
  badgeLink.href = href;
  badgeLink.title = title;
  badgeLink.target = '_blank';
  badgeLink.rel = 'noreferrer';

  const badgeTop = document.createElement('div');
  badgeTop.classList.add('badge-top');
  const badgeTopProfile = document.createElement('div');
  badgeTopProfile.classList.add('badge-top--profile');
  const badgeTopContainerSvg = document.createElement('div');
  badgeTopContainerSvg.classList.add('badge-top--container--svg');
  const badgeTopContainerSvgImg = document.createElement('img');
  badgeTopContainerSvgImg.classList.add('cm-header--img');
  badgeTopContainerSvgImg.src = cmBodyImgs[idx].getAttribute('src');
  badgeTopContainerSvgImg.alt = '';
  const badgeTopSpan = document.createElement('span');
  badgeTopSpan.setAttribute('data-acc', dataAcc);

  if (dataBef) {
    const [bef, aft] = dataBef;
    badgeTopSpan.classList.add('badge-prof');
    badgeTopSpan.setAttribute('data-bef', aft);
    badgeTopSpan.textContent = bef;
    badgeTopContainerSvgImg.classList.add('badge-mug');
  } else {
    badgeTopSpan.setAttribute('data-acc', dataAcc);
    badgeTopSpan.textContent = dataAcc;
    badgeTopContainerSvgImg.classList.add('img-icon');
  }

  const badgeFooter = document.createElement('div');
  badgeFooter.classList.add('badge-footer');
  const badgeFooterImg = document.createElement('img');
  badgeFooterImg.setAttribute('class', 'img-icon cm-bent--arrow');
  badgeFooterImg.src = bentArrowSrc;
  badgeFooterImg.alt = '';
  const badgeFooterSpan = document.createElement('span');
  badgeFooterSpan.textContent = title;

  badgeTopContainerSvg.append(badgeTopContainerSvgImg);
  badgeTopProfile.append(badgeTopContainerSvg, badgeTopSpan);
  badgeTop.append(badgeTopProfile);
  badgeFooter.append(badgeFooterImg, badgeFooterSpan);
  badgeLink.append(badgeTop, badgeFooter);
  badge.append(badgeLink);
  return badge;
};

const createContactMenu = () => {
  if (document?.querySelector('.contact-menu__header')) return;
  const cmAside = document.createElement('aside');
  cmAside.setAttribute('class', 'contact-menu__header');

  const cmwrapper = document.createElement('div');
  cmwrapper.classList.add('cm-right');
  const cm = document.createElement('div');
  cm.classList.add('cm-right--top');

  for (const v of Object.values(badgeData)) {
    cm.append(
      createBadge(v.cname, v.href, v.title, v.dataAcc, v.dataBef, v.idx),
    );
  }

  cmwrapper.append(cm);
  cmAside.append(cmwrapper);
  body.append(cmAside);
};

export default createContactMenu;
