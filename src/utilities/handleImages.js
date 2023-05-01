import createSpinner from '../factory/createSpinner';

const appendSkeleton = (parent) => {
  const tempSkeleton = document.createElement('aside');
  tempSkeleton.classList.add('img-skeleton');
  tempSkeleton.appendChild(createSpinner());
  parent.prepend(tempSkeleton);
};

const setCalendarImg = (idx) => {
  const calImgWrappers = document.querySelectorAll('.project-image__calendar');
  const calImg = calImgWrappers[idx];
  if (calImg.getAttribute('data-proj-hasimg') === 'true') {
    return;
  }

  const calImgSets = [[null, null], ['cweeklgdark', 'cweekmddark'], ['cmonthlgdark', 'cmonthmddark'], ['cyearlgdark', 'cyearmddark'], ['clistlgdark', 'clistmddark']];
  const imgset = calImgSets[idx];

  appendSkeleton(document.querySelector('.pcb-cal'));
  const skel = document.querySelector('.img-skeleton');

  const calImgPromise = new Promise((resolve, reject) => {
    const img0 = new Image();
    const img1 = new Image();
    img0.src = require('../images/projcal/dark/' + imgset[0] + '.webp');
    img1.src = require('../images/projcal/dark/' + imgset[1] + '.webp');
    img0.addEventListener('load', () => resolve([img0, img1]), { once: true });
    img0.addEventListener('error', () => reject(new Error('Error loading image')), { once: true });
  });

  calImgPromise.then((images) => {
    calImg.src = images[0].src;
    calImg.srcset = `${images[0].src} 2560w, ${images[1].src} 1536w`;
    calImg.classList.add('fade-img--in');
    calImg.setAttribute('data-proj-hasimg', 'true');
    calImg.addEventListener('load', () => {
      if (skel) skel.remove();
    }, { once: true });
  }).catch((err) => {
    console.error(err);
    if (skel) skel.remove();
  });
};

const setComponentImg = () => {
  const compImg = document.querySelector('.comp-cell__image--2');
  if (compImg.getAttribute('data-comp-hasimg') === 'true') {
    return;
  }

  appendSkeleton(document.querySelector('.pcb-comp'));
  const skelcomp = document.querySelector('.img-skeleton');

  const compImgPromise = new Promise((resolve, reject) => {
    const img = new Image();
    img.src = require('../images/component/rjslg.webp');
    img.addEventListener('load', () => resolve(img), { once: true });
    img.addEventListener('error', () => reject(new Error('Error loading image')), { once: true });
  });

  compImgPromise.then((img) => {
    compImg.src = img.src;
    compImg.classList.add('fade-img--in');
    compImg.setAttribute('data-comp-hasimg', 'true');
    compImg.addEventListener('load', () => {
      if (skelcomp) skelcomp.remove();
    }, { once: true });
  }).catch((err) => {
    console.error(err);
    if (skelcomp) skelcomp.remove();
  });
};

const contactMenuLazy = () => {
  const contactMenu = document.querySelector('.contact-menu');
  const contactMenuArrows = document.querySelectorAll('.cm-bent--arrow');
  if (contactMenu.getAttribute('cm-loaded') === 'true') return;

  const setImg = (img, idx) => {
    img.src = document.querySelectorAll('.cm-body--img')[idx].src;
    img.removeAttribute('disabled');
    contactMenuArrows[idx].src = document.querySelector('.img-bent-arrowsrc').src;
    contactMenuArrows[idx].removeAttribute('disabled');
  };

  document.querySelectorAll('.cm-header--img').forEach((img, idx) => setImg(img, idx));
  contactMenu.setAttribute('cm-loaded', 'true');
};

export default contactMenuLazy;
export { setCalendarImg, setComponentImg };
