const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
import c1 from '../images/projects/calendar/dark_sm/c1.webp';
import c2 from '../images/projects/calendar/dark_sm/c2.webp';
import c3 from '../images/projects/calendar/dark_sm/c3.webp';
import c4 from '../images/projects/calendar/dark_sm/c4.webp';
import c5 from '../images/projects/calendar/dark_sm/c5.webp';
// import lightc1 from '../images/projects/calendar/light_lg/lightc1.webp';
// import lightc2 from '../images/projects/calendar/light_lg/lightc2.webp';
// import lightc3 from '../images/projects/calendar/light_lg/lightc3.webp';
// import lightc4 from '../images/projects/calendar/light_lg/lightc4.webp';
// import lightc5 from '../images/projects/calendar/light_lg/lightc5.webp';



const initCalendarImages = () => {
  const calendarImages = $$(".project-image__calendar");
  const calendarImageSources = [c1, c2, c3, c4, c5];
  for (let i = 0; i < 5; i++) {
    calendarImages[i].src = calendarImageSources[i];
    calendarImages[i].alt = calendarImages[i].getAttribute("data-thumb-title");
  }
};

const initImages = () => {
  initCalendarImages();
};

export default initImages;