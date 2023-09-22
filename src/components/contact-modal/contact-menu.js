import badgeData from '../../data/json/contact/contact-modal.json';
import createToast from '../ui/toast';
import createButton from '../ui/button';
import { mailtoHref } from '../../data/constants';
import createLink from '../ui/link';
import useCopyToClipboard from '../../hooks/handle-copy';
// import svgIcons from '../../utilities/get-svg';
// import createIcon from '../ui/icon';

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

  const badgeLink = createLink(href, title, 'cm-right--top__cell-badge', null);

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
  badgeTopSpan.dataset.acc = dataAcc;

  if (dataBef) {
    const [bef, aft] = dataBef;
    badgeTopSpan.dataset.bef = aft;
    badgeTopSpan.classList.add('badge-prof');
    badgeTopSpan.textContent = bef;
    badgeTopContainerSvgImg.classList.add('badge-mug');
  } else {
    badgeTopSpan.dataset.acc = dataAcc;
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
  console.log(imgs);
  const menuCell = document.createElement('div');
  menuCell.classList.add('cm-right--bottom__cell');
  const menuSpan = document.createElement('span');
  menuSpan.textContent = spanText;
  const menuCellIcons = document.createElement('div');
  menuCellIcons.classList.add('cm-right--bottom__cell-icons');

  if (btnHref) {
    const menuLink = createLink(mailtoHref, 'Open Mail-to', 'cm-email-goto', null, '_self');
    const menuLinkImg = document.createElement('img');
    menuLinkImg.classList.add('img-icon');
    menuLinkImg.src = imgs[0].src;
    menuLinkImg.alt = '';
    menuLink.append(menuLinkImg);
    menuCellIcons.append(menuLink);
  }

  const menuBtnClass = `cm-copy ${btnClass}`;
  const menuBtn = createButton(null, menuBtnClass, btnTitle, 'button');
  const menuBtnImg = document.createElement('img');
  menuBtnImg.classList.add('img-icon');
  menuBtnImg.src = imgs[1].src;
  menuBtnImg.alt = '';
  menuBtn.addEventListener('click', () => {
    useCopyToClipboard(dataText);
    createToast(dataText, 'Copied!', 'success', 2);
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
  const contactMenuAside = document.createElement('aside');
  contactMenuAside.setAttribute('class', 'contact-menu__header');

  const contactMenuWrapper = document.createElement('div');
  contactMenuWrapper.classList.add('cm-right');
  const contactMenuBody = document.createElement('div');
  contactMenuBody.classList.add('cm-right--top');

  for (const values of Object.values(badgeData)) {
    const badge = createBadge(...Object.values(values));
    contactMenuBody.append(badge);
  }

  const contactMenuFooter = document.createElement('div');
  contactMenuFooter.classList.add('cm-right--bottom', 'cm-right--bottom__body');
  contactMenuFooter.append(
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

  contactMenuWrapper.append(contactMenuBody, contactMenuFooter);
  contactMenuAside.append(contactMenuWrapper);
  body.append(contactMenuAside);
};

export default createContactMenu;
