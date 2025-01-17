import {
  aspectSmallWidth,
} from '../../data/constants';
import handleState from '../../hooks/handle-state';
import getImgSuffix from '../../utilities/get-img-suffix';
import createSpinner from '../ui/spinner';
import projectImages from './import-project-images';

const createSource = (srcset, media, extension) => {
  const source = document.createElement('source');
  source.srcset = srcset;
  source.media = media;
  source.type = extension;
  return source;
};

const appendSkeleton = (parent) => {
  const tempSkeleton = document.createElement('aside');
  tempSkeleton.classList.add('img-skeleton');
  tempSkeleton.append(createSpinner());
  parent.prepend(tempSkeleton);
};

const appendPicture = (parent, altval, sources) => {
  appendSkeleton(parent.parentElement);
  const [large, medium] = sources;
  const extensionLarge = getImgSuffix(large);
  const skel = document.querySelector('.img-skeleton');
  const widthValues = [
    `(min-width: ${aspectSmallWidth + 1}px)`,
    `(max-width: ${aspectSmallWidth}px)`,
  ];

  if (extensionLarge === '') {
    console.warn('No image extension found');
    if (skel) skel.remove();
    return;
  }

  parent.append(createSource(large, widthValues[0], extensionLarge));
  parent.append(createSource(medium, widthValues[1], extensionLarge));

  const img = new Image();
  img.src = large;
  img.srcset = `${large} 1x, ${medium} 2x`;
  img.alt = altval;
  img.style = 'max-width:100vw;';
  img.type = extensionLarge;
  img.loading = 'eager';

  img.decode().then(() => {
    parent.append(img);
    if (skel) skel.remove();
  }).catch((encodingError) => {
    console.warn(encodingError);
    if (skel) skel.remove();
  });
};

const configPicture = (parent, nth) => {
  const imgWrapper = document.createElement('picture');
  const { calendar: calendarImageSet } = projectImages;
  imgWrapper.classList.add('cal-current', 'proj-img');
  imgWrapper.dataset.hasimg = 'true';
  imgWrapper.dataset.calNth = nth;
  parent.append(imgWrapper);
  appendPicture(imgWrapper, 'cal', calendarImageSet[nth - 1]);
};

const [tabState, setTabState] = handleState(0);

const handleTab = (nth) => {
  const currentClass = 'cal-current';
  const activeImg = document.querySelector('.cal-current');
  if (nth === tabState() + 1) return;
  setTabState(nth - 1);
  const nowActive = document.querySelector(`[data-cal-nth="${tabState() + 1}"]`);

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
