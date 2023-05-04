import createSpinner from '../template/createSpinner';

import imageSets from './getImage';

const appendSkeleton = (parent) => {
  const tempSkeleton = document.createElement('aside');
  tempSkeleton.classList.add('img-skeleton');
  tempSkeleton.appendChild(createSpinner());
  parent.prepend(tempSkeleton);
};

const calendarImageVars = [
  [null, null],
  ['cweeklgdark', 'cweekmddark', 'Calendar Week'],
  ['cmonthlgdark', 'cmonthmddark', 'Calendar Month'],
  ['cyearlgdark', 'cyearmddark', 'Calendar Year'],
  ['clistlgdark', 'clistmddark', 'Calendar List'],
];

const setCalendarImg = (idx) => {
  const calImgWrappers = document.querySelectorAll('.project-image__calendar');
  const calImg = calImgWrappers[idx];

  if (calImg.getAttribute('data-hasimg') === 'true') {
    return;
  }

  appendSkeleton(document.querySelector('.pcb-cal'));
  const skel = document.querySelector('.img-skeleton');

  const [largepath, mediumpath, alt] = calendarImageVars[idx];
  const set = imageSets.calendar;
  const large = set[largepath];
  const medium = set[mediumpath];

  const sourceLg = document.createElement('source');
  sourceLg.setAttribute('srcset', large);
  sourceLg.setAttribute('media', '(min-width: 640px)');

  const sourceMd = document.createElement('source');
  sourceMd.setAttribute('srcset', medium);
  sourceMd.setAttribute('media', '(max-width: 640px)');

  const imgLg = document.createElement('img');
  imgLg.setAttribute('src', large);
  imgLg.setAttribute('alt', alt);
  imgLg.setAttribute('style', 'max-width:100vw;');

  calImg.append(sourceLg, sourceMd, imgLg);
  calImg.classList.add('fade-img--in');
  calImg.setAttribute('data-hasimg', 'true');

  imgLg.addEventListener('load', () => {
    if (skel) skel.remove();
  }, { once: true });

  imgLg.addEventListener('error', () => {
    if (skel) skel.remove();
    console.assert(false, 'Error loading image');
    calImg.classList.remove('fade-img--in');
    calImg.classList.add('img--error');
    sourceLg.remove();
    sourceMd.remove();
  }, { once: true });
};

const setComponentImg = () => {
  const compImg = document.querySelector('.comp-cell__image--2');
  if (compImg.getAttribute('data-comp-hasimg') === 'true') {
    return;
  }

  appendSkeleton(document.querySelector('.pcb-comp'));
  const skelcomp = document.querySelector('.img-skeleton');

  const set = imageSets.react;
  const large = set.reactlg;
  const medium = set.reactmd;

  const sourceLg = document.createElement('source');
  sourceLg.setAttribute('srcset', large);
  sourceLg.setAttribute('media', '(min-width: 640px)');

  const sourceMd = document.createElement('source');
  sourceMd.setAttribute('srcset', medium);
  sourceMd.setAttribute('media', '(max-width: 640px)');

  const imgLg = document.createElement('img');
  imgLg.setAttribute('src', large);
  imgLg.setAttribute('alt', 'React Components');
  imgLg.setAttribute('style', 'max-width:100vw;');

  compImg.append(sourceLg, sourceMd, imgLg);
  compImg.setAttribute('data-comp-hasimg', 'true');
  compImg.classList.add('fade-img--in');

  imgLg.addEventListener('load', () => {
    if (skelcomp) skelcomp.remove();
  }, { once: true });

  imgLg.addEventListener('error', () => {
    if (skelcomp) skelcomp.remove();
    console.assert(false, 'Error loading image');
    compImg.classList.remove('fade-img--in');
    compImg.classList.add('img--error');
    imgLg.setAttribute('alt', 'Image failed to load :(');
    sourceLg.remove();
  }, { once: true });
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
