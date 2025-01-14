import contactData from '../../data/json/contact.json';
import useCopyToClipboard from '../../hooks/handle-copy';
import createButton from '../ui/button';
import createLink from '../ui/link';
import createToast from '../ui/toast';

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
  const badgeFooterSpan = document.createElement('span');
  badgeFooterSpan.textContent = title;

  badgeTopContainerSvg.append(badgeTopContainerSvgImg);
  badgeTopProfile.append(badgeTopContainerSvg, badgeTopSpan);
  badgeTop.append(badgeTopProfile);
  badgeFooter.append(badgeFooterSpan);
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
  const { mailto: mailToSubject } = contactData;
  const menuCell = document.createElement('div');
  menuCell.classList.add('cm-right--bottom__cell');
  const menuSpan = document.createElement('span');
  menuSpan.textContent = spanText;
  const menuCellIcons = document.createElement('div');
  menuCellIcons.classList.add('cm-right--bottom__cell-icons');

  if (btnHref) {
    const menuLink = createLink(mailToSubject, 'Open Mail-to', 'cm-email-goto', null, '_self');
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
  const { phone, email, badges } = contactData;
  const cmFooterImgs = document.querySelectorAll('.cm-img--icon');
  const contactMenuWrapper = document.createElement('div');
  contactMenuWrapper.classList.add('cm-right');
  const contactMenuBody = document.createElement('div');
  contactMenuBody.classList.add('cm-right--top');
  for (const values of Object.values(badges)) {
    const badge = createBadge(...Object.values(values));
    contactMenuBody.append(badge);
  }

  const contactMenuFooter = document.createElement('div');
  contactMenuFooter.classList.add('cm-right--bottom', 'cm-right--bottom__body');
  contactMenuFooter.append(
    createCmBottomCell(
      phone,
      'cm-copy--phone',
      'Copy Phone Number',
      null,
      phone.replaceAll('-', ''),
      cmFooterImgs,
    ),
    createCmBottomCell(
      email,
      'cm-copy--email',
      'Copy E-mail Address',
      `mailto:${email}`,
      email,
      cmFooterImgs,
    ),
  );

  contactMenuWrapper.append(contactMenuBody, contactMenuFooter);
  contactMenuWrapper.firstElementChild.focus();
  return contactMenuWrapper;
};

export default createContactMenu;
