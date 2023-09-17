// import configPicture from './handle-images';

import createSpinner from '../template/create-spinner';
import handleState from './handle-state';
import imageSets from './get-image';

const calendarImageVars = [
  ['cweeklgdark', 'cweekmddark', 'Calendar Week'],
  ['cmonthlgdark', 'cmonthmddark', 'Calendar Month'],
  ['cyearlgdark', 'cyearmddark', 'Calendar Year'],
  ['clistlgdark', 'clistmddark', 'Calendar List'],
];

const appendSkeleton = (parent) => {
  const tempSkeleton = document.createElement('aside');
  tempSkeleton.classList.add('img-skeleton');
  tempSkeleton.append(createSpinner());
  parent.prepend(tempSkeleton);
};

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

  parent.append(
    createSource(large, '(min-width: 640px)'),
    createSource(medium, '(max-width: 640px)'),
  );

  const img = new Image();
  img.src = large;
  img.alt = alt;
  img.style = 'max-width:100vw;';
  img.type = 'image/webp';
  img.loading = 'eager';

  const skel = document.querySelector('.img-skeleton');
  img.decode().then(() => {
    parent.append(img);
    if (skel) {
      skel.remove();
    }
  }).catch((encodingError) => {
    // eslint-disable-next-line no-console
    console.assert(false, encodingError);
    if (skel) {
      skel.remove();
    }
  });
};

const configPicture = (parent, nth) => {
  const calendarImageSet = imageSets.calendar;

  const imgWrapper = document.createElement('picture');
  imgWrapper.classList.add('cal-current', 'project-image__calendar');
  imgWrapper.dataset.hasimg = 'true';
  imgWrapper.dataset.calNth = nth;
  parent.append(imgWrapper);

  const [largeSrc, mediumSrc, altText] = calendarImageVars[+nth - 2];
  appendPicture(
    imgWrapper,
    [
      calendarImageSet[largeSrc],
      calendarImageSet[mediumSrc],
      altText,
    ],
  );
};

const initCalendarMulit = () => {
  const [tabState, setTabState] = handleState(0);
  const calendarTabs = document?.querySelectorAll('.proj-cal--tab');

  const handleTab = (nth) => {
    const currentClass = 'cal-current';
    const activeImg = document.querySelector('.cal-current');

    if (nth === tabState() + 1) return;
    setTabState(nth - 1);
    const nowActive = document.querySelector(`[data-cal-nth="${tabState() + 1}"]`);
    // Only the first tab is laoded by default, once a tab is clicked for the first
    // time, the image must be initialized.
    if (nowActive === null) {
      configPicture(activeImg.parentElement, +nth);
      activeImg.classList.remove(currentClass);
      activeImg.classList.add('fade-img--out');
      setTimeout(() => {
        activeImg.classList.add('hide-img');
        activeImg.classList.remove('fade-img--out');
      }, 200);
    } else {
      activeImg.classList.remove(currentClass);
      activeImg.classList.add('hide-img');
      nowActive.classList.remove('hide-img');
      nowActive.classList.add(currentClass);
    }
  };

  const initTabs = () => {
    if (calendarTabs === null) return;

    calendarTabs[tabState()].previousElementSibling.checked = true;
    for (const [index, tab] of calendarTabs.entries()) {
      tab.addEventListener('click', () => {
        handleTab(index + 1);
      });
    }
  };

  initTabs();
};

export default initCalendarMulit;
