import { aspectSmallWidth } from '../data/constants';

const getImgArrayFormatted = (images) => {
  const imgArray = [];
  let ind = 0;
  for (const [key, value] of Object.entries(images)) {
    const media = ind === 0 ? `(min-width: ${aspectSmallWidth + 1}px)` : `(max-width: ${aspectSmallWidth + 1}px)`;
    imgArray.push({ src: value, alt: key, media });
    ind += 1;
  }
  return imgArray;
};

export default getImgArrayFormatted;
