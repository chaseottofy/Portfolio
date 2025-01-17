// import { imgTypesRegex } from '../../data/constants';
// import projectData from '../../data/json/project-data.json';
// import getImgStem from '../../utilities/get-img-stem';
// import fallback1 from '../../images/fallback/fallback1.webp';
// import fallback2 from '../../images/fallback/fallback2.webp';
import { aspectSmallWidth } from '../../data/constants';
import blog1 from '../../images/imgproj/blog1.webp';
import blog2 from '../../images/imgproj/blog2.webp';
import calendarday1 from '../../images/imgproj/calendarday1.webp';
import calendarday2 from '../../images/imgproj/calendarday2.webp';
import calendarlist1 from '../../images/imgproj/calendarlist1.webp';
import calendarlist2 from '../../images/imgproj/calendarlist2.webp';
import calendarmonth1 from '../../images/imgproj/calendarmonth1.webp';
import calendarmonth2 from '../../images/imgproj/calendarmonth2.webp';
import calendarweek1 from '../../images/imgproj/calendarweek1.webp';
import calendarweek2 from '../../images/imgproj/calendarweek2.webp';
import calendaryear1 from '../../images/imgproj/calendaryear1.webp';
import calendaryear2 from '../../images/imgproj/calendaryear2.webp';
import markdown1 from '../../images/imgproj/markdown1.webp';
import markdown2 from '../../images/imgproj/markdown2.webp';
import monthpicker1 from '../../images/imgproj/monthpicker1.webp';
import monthpicker2 from '../../images/imgproj/monthpicker2.webp';

const projectImages = {
  calendar: [
    [calendarday1, calendarday2],
    [calendarweek1, calendarweek2],
    [calendarmonth1, calendarmonth2],
    [calendaryear1, calendaryear2],
    [calendarlist1, calendarlist2],
  ],
  blog: [blog1, blog2],
  monthpicker: [monthpicker1, monthpicker2],
  markdown: [markdown1, markdown2],
  // fallback: [fallback1, fallback2],
};
const sourceImages = {};
for (const [key, value] of Object.entries(projectImages)) {
  sourceImages[key] = [];
  const imgset = Array.isArray(value[0]) ? value[0] : value;
  for (let i = 0; i < imgset.length; i += 1) {
    sourceImages[key].push({
      src: imgset[i],
      alt: key,
      media: `(${i === 0 ? 'min' : 'max'}-width: ${aspectSmallWidth + 1}px)`,
    });
  }
}

export default projectImages;
export { sourceImages };
