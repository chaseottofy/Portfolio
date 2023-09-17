import badgeData from '../data/min/contactJSONMin.json';
import createToast from './create-toast';
import copyToClipboard from '../utilities/get-copytoclipboard';

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
const createBadge = (
  cname,
  href,
  title,
  dataAcc,
  dataBef,
  idx,
) => {
  const cmBodyImgs = document.querySelectorAll('.cm-body--img');
  const bentArrow = document.querySelector('.img-bent-arrowsrc');
  const bentArrowSrc = bentArrow.getAttribute('src');

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

const createCmBottomCell = (
  spanText,
  btnClass,
  btnTitle,
  btnHref,
  dataText,
  imgs,
) => {
  const menuCell = document.createElement('div');
  menuCell.classList.add('cm-right--bottom__cell');
  const menuSpan = document.createElement('span');
  menuSpan.textContent = spanText;
  const menuCellIcons = document.createElement('div');
  menuCellIcons.classList.add('cm-right--bottom__cell-icons');

  if (btnHref) {
    const menuLink = document.createElement('a');
    menuLink.classList.add('cm-email-goto');
    menuLink.href = btnHref;
    menuLink.title = 'Open Mail-to';
    const menuLinkImg = document.createElement('img');
    menuLinkImg.classList.add('img-icon');
    menuLinkImg.src = imgs[0].src;
    menuLinkImg.alt = '';
    menuLink.append(menuLinkImg);
    menuCellIcons.append(menuLink);
  }

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('cm-copy');
  menuBtn.classList.add(btnClass);
  menuBtn.title = btnTitle;
  menuBtn.setAttribute('aria-label', 'button');
  const menuBtnImg = document.createElement('img');
  menuBtnImg.classList.add('img-icon');
  menuBtnImg.src = imgs[1].src;
  menuBtnImg.alt = '';
  menuBtn.addEventListener('click', () => {
    copyToClipboard(dataText);
    createToast(`Copied! ${dataText}`);
  });
  menuBtn.append(menuBtnImg);
  menuCellIcons.append(menuBtn);

  menuCell.append(menuSpan, menuCellIcons);
  return menuCell;
};

const createContactMenu = () => {
  const body = document.querySelector('.body');
  const cmFooterImgs = document.querySelectorAll('.cm-img--icon');

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

  const cmFooter = document.createElement('div');
  cmFooter.classList.add('cm-right--bottom');
  cmFooter.classList.add('cm-right--bottom__body');
  cmFooter.append(
    createCmBottomCell(
      '970-988-2548',
      'cm-copy--phone',
      'Copy Phone Number',
      null,
      '9709882548',
      cmFooterImgs,
    ),
    createCmBottomCell(
      'ottofy@zohomail.com',
      'cm-copy--email',
      'Copy E-mail Address',
      'mailto:ottofy@zohomail.com',
      'ottofy@zohomail.com',
      cmFooterImgs,
    ),
  );

  cmwrapper.append(cm, cmFooter);
  cmAside.append(cmwrapper);
  body.append(cmAside);
};

export default createContactMenu;
