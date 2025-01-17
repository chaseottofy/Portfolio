// import fs from 'fs';
import sharp from 'sharp';
import path from 'path';
import { resetDirectory } from './async-utils.mjs';

const init = async () => {
  try {
    const outputDir = 'src/images/fallback';
    const imgSizes = [[2000, 820], [720, 540]];
    const imgsData = Array.from({ length: 2 }, (_, i) => [`fallback${i + 1}.webp`, ...imgSizes[i]]);

    await resetDirectory(outputDir);

    for (const [imgName, width, height] of imgsData) {
      const outputPath = path.join(outputDir, imgName);
      const imgType = imgName.split('.')[1];

      await sharp({
        create: {
          width,
          height,
          channels: 4,
          background: { r: 0, g: 0, b: 0, alpha: 1 }
        }
      })
        .toFormat(imgType)
        .toFile(outputPath);
    }

  } catch (error) {
    console.error('Error checking path:', error);
  }
};

init();