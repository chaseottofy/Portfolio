export const aspectSmallHeight = 540;
export const aspectSmallWidth = 720;
export const aspectLargeWidth = 1000;
// export const aspectLargeWidth = 1600;
export const pxToRem = 17;
// this is the path value where it will be imported @importAllImages
export const projectImagePath = '../../images/imgproj';
export const fallbackImageFilename = 'fallback1.webp';
// export const fallbackImagePath = 'images/fallback/fallback1.webp';
export const imgTypes = ['ico', 'svg', 'png', 'webp', 'avif', 'jpg'];
export const imgTypesRegex = new RegExp(`\\.(${imgTypes.join('|')})$`, 'i');
export const imgTypesRegexRaw = /\.(ico|svg|png|webp|avif|jpg)$/i;
export const LOCAL_STORAGE_THEME = 'co-theme';