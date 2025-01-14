import path from 'path';
import fs from 'fs';


// log all images from ./src/images/designtest
const designTestImgDir = path.resolve('./src/images/designtest');

const images = fs.readdirSync(designTestImgDir);
for (const img of images) {
  console.log(`background-image: url('../../../images/designtest/${img}');`);
  // background-image: url('../../../images/designtest/bo-play.png');
}