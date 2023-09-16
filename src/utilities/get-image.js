import cdaylgdark from '../imgproj/cday1.webp';
import cdaymddark from '../imgproj/cday2.webp';
import cweeklgdark from '../imgproj/cweek1.webp';
import cweekmddark from '../imgproj/cweek2.webp';
import cmonthlgdark from '../imgproj/cmonth1.webp';
import cmonthmddark from '../imgproj/cmonth2.webp';
import cyearlgdark from '../imgproj/cyear1.webp';
import cyearmddark from '../imgproj/cyear2.webp';
import clistlgdark from '../imgproj/clist1.webp';
import clistmddark from '../imgproj/clist2.webp';
import markdownLg from '../imgproj/markdown1.webp';
import markdownMd from '../imgproj/markdown2.webp';
import blogLg from '../imgproj/blog1.webp';
import blogMd from '../imgproj/blog2.webp';
import mpLg from '../imgproj/mp1.webp';
import mpMd from '../imgproj/mp2.webp';

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
