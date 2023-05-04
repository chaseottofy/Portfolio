import createSpinner from '../template/createSpinner';

import imageSets from './getImage';

const calendarImageVars = [
  [null, null], // placeholder for already loaded image
  ['cweeklgdark', 'cweekmddark', 'Calendar Week'],
  ['cmonthlgdark', 'cmonthmddark', 'Calendar Month'],
  ['cyearlgdark', 'cyearmddark', 'Calendar Year'],
  ['clistlgdark', 'clistmddark', 'Calendar List'],
];

const appendSkeleton = (parent) => {
  const tempSkeleton = document.createElement('aside');
  tempSkeleton.classList.add('img-skeleton');
  tempSkeleton.appendChild(createSpinner());
  parent.prepend(tempSkeleton);
};

const handleImgError = (img) => {
  console.assert(false, 'Error loading image');
  img.classList.remove('fade-img--in');
  img.classList.add('img--error');
  img.firstChild.remove();
  img.firstChild.nextSibling.remove();
};

const appendPicture = (parent, large, medium, alt) => {
  const sourceLg = document.createElement('source');
  sourceLg.setAttribute('srcset', large);
  sourceLg.setAttribute('media', '(min-width: 640px)');

  const sourceMd = document.createElement('source');
  sourceMd.setAttribute('srcset', medium);
  sourceMd.setAttribute('media', '(max-width: 640px)');

  const imgLg = document.createElement('img');
  imgLg.setAttribute('src', large);
  imgLg.setAttribute('alt', alt);
  imgLg.setAttribute('loading', 'eager');
  imgLg.setAttribute('style', 'max-width:100vw;');

  parent.append(sourceLg, sourceMd, imgLg);
  parent.classList.add('fade-img--in');
  parent.setAttribute('data-hasimg', 'true');

  const skel = document.querySelector('.img-skeleton');
  imgLg.addEventListener('load', () => {
    if (skel) skel.remove();
  }, { once: true });

  imgLg.addEventListener('error', () => {
    if (skel) skel.remove();
    handleImgError(parent);
  }, { once: true });
};

const setCalendarImg = (idx) => {
  const calImgWrappers = document.querySelectorAll('.project-image__calendar');
  const calImg = calImgWrappers[idx];

  if (calImg.getAttribute('data-hasimg') === 'true') {
    return;
  }

  appendSkeleton(document.querySelector('.pcb-cal'));
  // lp:large path, mp:medium path
  const [lp, mp, alt] = calendarImageVars[idx];
  const set = imageSets.calendar;
  appendPicture(calImg, set[lp], set[mp], alt);
};

const setComponentImg = () => {
  const compImg = document.querySelector('.comp-cell__image--2');
  if (compImg.getAttribute('data-comp-hasimg') === 'true') {
    return;
  }

  appendSkeleton(document.querySelector('.pcb-comp'));
  const set = imageSets.react;
  appendPicture(compImg, set.reactlg, set.reactmd, 'React Components');
};

const contactMenuLazy = () => {
  const contactMenu = document.querySelector('.contact-menu');
  if (contactMenu.getAttribute('cm-loaded') === 'true') return;
  const bentArrow = document.querySelector('.img-bent-arrowsrc');
  const bentArrowSrc = bentArrow.getAttribute('src');
  const cmHeaderArrows = document.querySelectorAll('.cm-bent--arrow');
  const cmHeaderImgs = document.querySelectorAll('.cm-header--img');
  const cmBodyImgs = document.querySelectorAll('.cm-body--img');

  for (let i = 0; i < cmHeaderImgs.length; i += 1) {
    cmHeaderImgs[i].setAttribute('src', cmBodyImgs[i].getAttribute('src'));
    cmHeaderArrows[i].setAttribute('src', bentArrowSrc);
  }
  contactMenu.setAttribute('cm-loaded', 'true');
};

export default contactMenuLazy;
export { setCalendarImg, setComponentImg };
