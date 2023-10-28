import { aspectSmallWidth } from '../data/constants';

/**
 *
 * @param {object} images { 'imgName': 'imgPath', ... }
 * @returns formats image data to be used in srcset
 */
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

/**
 *
 * @param {object} images Object of image objects
 * @returns array of image objects formatted using getImgArrayFormatted
 */
const getImageArray = (images) => {
  const arr = [];
  for (let i = 0; i < images.length; i += 1) {
    arr.push(getImgArrayFormatted(images[i]));
  }
  return arr;
};

export default getImageArray;
