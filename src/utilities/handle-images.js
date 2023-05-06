import createSpinner from '../template/create-spinner';

import imageSets from './get-image';

const calendarImageVars = [
  ['', ''], // placeholder for already loaded image
  ['cweeklgdark', 'cweekmddark', 'Calendar Week'],
  ['cmonthlgdark', 'cmonthmddark', 'Calendar Month'],
  ['cyearlgdark', 'cyearmddark', 'Calendar Year'],
  ['clistlgdark', 'clistmddark', 'Calendar List'],
];

/**
 * appendSkeleton
 * @param {element} parent of picture <parent><picture>
 */
const appendSkeleton = (parent) => {
  const tempSkeleton = document.createElement('aside');
  tempSkeleton.classList.add('img-skeleton');
  tempSkeleton.append(createSpinner());
  parent.prepend(tempSkeleton);
};

/**
 * appendPicture
 * @param {element} <picture> parent
 * @param {object.<string>} imgvars ['./large.webp', './medium.webp', 'alt text']
 */
const appendPicture = (parent, imgvars) => {
  appendSkeleton(parent.parentElement);
  const [large, medium, alt] = imgvars;

  const createSource = (srcset, media) => {
    const source = document.createElement('source');
    source.srcset = srcset;
    source.media = media;
    source.type = 'image/webp';
    return source;
  };

  const sourceLg = createSource(large, '(min-width: 640px)');
  const sourceMd = createSource(medium, '(max-width: 640px)');
  parent.append(sourceLg, sourceMd);

  const img = new Image();
  img.src = large;
  img.alt = alt;
  img.style = 'max-width:100vw;';
  img.type = 'image/webp';

  const skel = document.querySelector('.img-skeleton');
  img.decode().then(() => {
    parent.append(img);
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

/**
 * configPicture
 * @param {element} parent <picture>
 * @param {string} attr   data attribute
 * @param {array.<string>} cSet    array of class names
 * @param {number} nth    tab index
 * @param {boolean} isCal isCalendar
 */
const configPicture = (parent, attr, cSet, nth, isCal) => {
  const imgWrapper = document.createElement('picture');
  for (const cName of cSet) {
    imgWrapper.classList.add(cName);
  }

  imgWrapper.setAttribute('data-hasimg', 'true');
  imgWrapper.setAttribute(attr, nth);
  parent.append(imgWrapper);

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

  for (const [index, element] of cmBodyImgs.entries()) {
    cmHeaderImgs[index].src = element.src;
    cmHeaderArrows[index].src = bentArrowSrc;
  }
  contactMenu.setAttribute('data-cm-loaded', 'true');
};

export default contactMenuLazy;
export { configPicture };
