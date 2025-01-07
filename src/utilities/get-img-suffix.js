import { imgTypesRegexRaw } from '../data/constants';

const getImgSuffix = (img) => {
  const extension = (img.match(imgTypesRegexRaw) || [''])[0];
  if (extension.length === 0 || extension === '.') return '';
  return `image/${extension.slice(1)}`;
};

export default getImgSuffix;
