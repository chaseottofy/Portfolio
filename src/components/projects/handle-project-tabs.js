import createSpinner from '../ui/spinner';
import handleState from '../../hooks/handle-state';
import imageSets from './import-project-images';
import {
  aspectSmallWidth,
  projectImageType,
} from '../../data/constants';

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

/*
const createProjectPicture = (picture, images) => {
  const img = new Image();
  for (let i = 0; i < images.length; i += 1) {
    const { src, alt, media } = images[i];
    const source = document.createElement('source');
    source.srcset = src;
    source.media = media;
    source.type = projectImageType;
    img.srcset += src;
    if (i === 0) {
      img.src = src;
      img.srcset = `${src} 1x, `;
      img.alt = alt || 'project image';
      img.loading = 'lazy';
    } else {
      img.srcset = `${img.srcset + src} ${i + 1}x`;
    }
    picture.append(source);
  }
  picture.append(img);
};
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

  parent.append(
    createSource(large, `(min-width: ${aspectSmallWidth + 1}px)`),
    createSource(medium, `(max-width: ${aspectSmallWidth + 1}px)`),
  );

  const img = new Image();
  img.src = large;
  img.srcset = `${large} 1x, ${medium} 2x`;
  img.alt = alt;
  img.style = 'max-width:100vw;';
  img.type = projectImageType;
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
  imgWrapper.classList.add('cal-current', 'proj-img');
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

const [tabState, setTabState] = handleState(0);

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

export default handleTab;
