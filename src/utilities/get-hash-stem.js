import { imgTypesRegex } from '../data/constants';

const getHashStem = (imgPath) => {
  if (!imgPath || typeof imgPath !== 'string') return 'fallback';
  return (imgPath
    .replaceAll(/^[^\dA-Za-z]+/g, '')
    .replace(imgTypesRegex, '')
    .replaceAll(/(images\/)/gi, '')
    .split('.')[0]
    .replace(/\/$/, '')) || 'fallback';
};

export default getHashStem;
