const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
import c1 from '../images/projects/calendar/dark_lg/c1.webp';
import c2 from '../images/projects/calendar/dark_lg/c2.webp';
import c3 from '../images/projects/calendar/dark_lg/c3.webp';
import c4 from '../images/projects/calendar/dark_lg/c4.webp';
import c5 from '../images/projects/calendar/dark_lg/c5.webp';
import lightc1 from '../images/projects/calendar/light_lg/lightc1.webp';
import lightc2 from '../images/projects/calendar/light_lg/lightc2.webp';
import lightc3 from '../images/projects/calendar/light_lg/lightc3.webp';
import lightc4 from '../images/projects/calendar/light_lg/lightc4.webp';
import lightc5 from '../images/projects/calendar/light_lg/lightc5.webp';

const initImages = () => {
  const calendarImages = $$(".project-image__calendar");
  const calendarImageSources = [c1, c2, c3, c4, c5];
  calendarImages[0].previousElementSibling.setAttribute("srcset", lightc1);
  // if document.body has "theme__light" class, the set srcset to light images
  // calendarImages[0].previousElementSibling.setAttribute("media", "(prefers-color-scheme: dark)");
  for (let i = 0; i < 5; i++) {
    // srcset="night.jpg" media="(prefers-color-scheme: dark)"
    calendarImages[i].src = calendarImageSources[i];
    calendarImages[i].alt = calendarImages[i].getAttribute("data-thumb-title");
  }
};

export default initImages;