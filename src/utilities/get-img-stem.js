import { imgTypesRegex } from '../data/constants';

const getImgStem = (imgPath) => {
  if (!imgPath || typeof imgPath !== 'string') return 'fallback';
  return (imgPath
    .replace(/^[^\dA-Za-z]+/, '')
    .replace(imgTypesRegex, '')
    .replace(/\/$/, '')) || 'fallback';
};

export default getImgStem;
