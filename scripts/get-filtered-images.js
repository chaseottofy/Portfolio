const path = require('path');
const fs = require('fs');

/**
 * 
 * @returns {Set<string>} provides list of images that 
 * are being used within the build within a directory
 */
const getValidImages = () => {
  const jsonpath = path.resolve(process.cwd(), 'src/data/json/project-data.json');
  const jsondata = fs.readFileSync(jsonpath, 'utf-8');
  const parsedData = JSON.parse(jsondata);
  const keys = Object.keys(parsedData);

  return keys.reduce((acc, key) => {
    const { images = [] } = parsedData[key];
    if (images.length === 0) return acc;
    for (const arr of Object.values(images)) {
      for (const img of arr) {
        const spl = img.split('-')[0];
        if (spl === 'fallback') continue;
        const frm = spl.split('.')[0];
        if (frm === 'fallback' || !frm) continue;
        acc.add(frm);
      }
    }
    return acc;
  }, new Set());
};
const validImages = getValidImages();
module.exports = validImages;
