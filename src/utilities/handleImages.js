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

const appendPicture = (parent, imgvars) => {
  appendSkeleton(parent.parentElement);
  const [large, medium, alt] = imgvars;

  const sourceLg = document.createElement('source');
  sourceLg.setAttribute('srcset', large);
  sourceLg.setAttribute('media', '(min-width: 640px)');

  const sourceMd = document.createElement('source');
  sourceMd.setAttribute('srcset', medium);
  sourceMd.setAttribute('media', '(max-width: 640px)');

  const img = new Image();
  img.src = large;
  img.alt = alt;
  img.style = 'max-width:100vw;';
  parent.append(sourceLg, sourceMd);

  const skel = document.querySelector('.img-skeleton');
  img.decode().then(() => {
    parent.prepend(img);
    if (skel) {
      skel.remove();
    }
  }).catch((encodingError) => {
    console.assert(false, encodingError);
    if (skel) {
      skel.remove();
    }
  });
};

const configPicture = (parent, attr, classSet, nth, isCal) => {
  const imgWrapper = document.createElement('picture');
  classSet.forEach((className) => {
    imgWrapper.classList.add(className);
  });

  imgWrapper.setAttribute('data-hasimg', 'true');
  imgWrapper.setAttribute(attr, nth);
  parent.appendChild(imgWrapper);

  const [lp, mp, alt] = calendarImageVars[+nth - 1];
  const set = isCal ? imageSets.calendar : imageSets.react;

  appendPicture(
    imgWrapper,
    isCal
      ? [set[lp], set[mp], alt]
      : [set.reactlg, set.reactmd, 'React Components'],
  );
};

const contactMenuLazy = () => {
  const contactMenu = document.querySelector('.contact-menu');
  if (contactMenu.getAttribute('data-cm-loaded') === 'true') return;
  const bentArrow = document.querySelector('.img-bent-arrowsrc');
  const bentArrowSrc = bentArrow.getAttribute('src');
  const cmHeaderArrows = document.querySelectorAll('.cm-bent--arrow');
  const cmHeaderImgs = document.querySelectorAll('.cm-header--img');
  const cmBodyImgs = document.querySelectorAll('.cm-body--img');

  for (let i = 0; i < cmHeaderImgs.length; i += 1) {
    cmHeaderImgs[i].setAttribute('src', cmBodyImgs[i].getAttribute('src'));
    cmHeaderArrows[i].setAttribute('src', bentArrowSrc);
  }
  contactMenu.setAttribute('data-cm-loaded', 'true');
};

export default contactMenuLazy;
export { configPicture };
