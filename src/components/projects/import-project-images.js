import blogLg from '../../images/imgproj/blog1.webp';
import blogMd from '../../images/imgproj/blog2.webp';
import cdaylgdark from '../../images/imgproj/cday1.webp';
import cdaymddark from '../../images/imgproj/cday2.webp';
import clistlgdark from '../../images/imgproj/clist1.webp';
import clistmddark from '../../images/imgproj/clist2.webp';
import cmonthlgdark from '../../images/imgproj/cmonth1.webp';
import cmonthmddark from '../../images/imgproj/cmonth2.webp';
import cweeklgdark from '../../images/imgproj/cweek1.webp';
import cweekmddark from '../../images/imgproj/cweek2.webp';
import cyearlgdark from '../../images/imgproj/cyear1.webp';
import cyearmddark from '../../images/imgproj/cyear2.webp';
import markdownLg from '../../images/imgproj/markdown1.webp';
import markdownMd from '../../images/imgproj/markdown2.webp';
import mpLg from '../../images/imgproj/mp1.webp';
import mpMd from '../../images/imgproj/mp2.webp';
import tmLg from '../../images/imgproj/tm1.webp';
import tmMd from '../../images/imgproj/tm2.webp';
// const requireContext = require.context('../../images/imgproj', true, /\.webp$/);
// // console.log(requireContext)
// const images = {};
// requireContext.keys().forEach((key) => {
//   const moduleName = key.replace(/^\.\/(.*)\.webp$/, '$1');
//   images[moduleName] = requireContext(key);
// });
// console.log(images)

const imageSets = {
  calendar: {
    cweeklgdark,
    cweekmddark,
    cmonthlgdark,
    cmonthmddark,
    cyearlgdark,
    cyearmddark,
    clistlgdark,
    clistmddark,
  },
  cal: { cdaylgdark, cdaymddark },
  markdown: { markdownLg, markdownMd },
  blog: { blogLg, blogMd },
  monthPicker: { mpLg, mpMd },
  taskManager: { tmLg, tmMd },
};
const startingImageSets = {
  cal: { cdaylgdark, cdaymddark },
  blog: { blogLg, blogMd },
  monthPicker: { mpLg, mpMd },
  markdown: { markdownLg, markdownMd },
  taskManager: { tmLg, tmMd },
};

export default imageSets;
export { startingImageSets };
