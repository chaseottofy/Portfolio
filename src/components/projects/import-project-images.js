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

const calendarImages = {
  'cweeklgdark': cweeklgdark,
  'cweekmddark': cweekmddark,
  'cmonthlgdark': cmonthlgdark,
  'cmonthmddark': cmonthmddark,
  'cyearlgdark': cyearlgdark,
  'cyearmddark': cyearmddark,
  'clistlgdark': clistlgdark,
  'clistmddark': clistmddark,
};

const calendarStart = { cdaylgdark, cdaymddark };
const markdownImages = { markdownLg, markdownMd };
const blogImages = { blogLg, blogMd };
const monthPickerImages = { mpLg, mpMd };

const imageSets = {
  calendar: calendarImages,
  cal: calendarStart,
  markdown: markdownImages,
  blog: blogImages,
  monthPicker: monthPickerImages,
};

export default imageSets;
