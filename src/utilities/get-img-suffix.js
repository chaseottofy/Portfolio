import { imgTypesRegexRaw } from '../data/constants';

const getImgSuffix = (img) => {
  if (!img) return '';
  const extension = (img.match(imgTypesRegexRaw) || [''])[0];
  // const baseName = filename.split('/').pop().split('.')[0].split('-')[0];

  if (extension.length === 0 || extension === '.') return '';
  return `image/${extension.slice(1)}`;
};

export default getImgSuffix;
