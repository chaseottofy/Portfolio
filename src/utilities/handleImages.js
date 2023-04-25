const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// import c1 from '../images/projects/calendar/c1.webp';
// import c2 from '../images/projects/calendar/c2.webp';
// import c3 from '../images/projects/calendar/c3.webp';
// import c4 from '../images/projects/calendar/c4.webp';
// import c5 from '../images/projects/calendar/c5.webp';
// import lightc1 from '../images/projects/calendar/light/lightc1.webp';
// import lightc2 from '../images/projects/calendar/light/lightc2.webp';
// import lightc3 from '../images/projects/calendar/light/lightc3.webp';
// import lightc4 from '../images/projects/calendar/light/lightc4.webp';
// import lightc5 from '../images/projects/calendar/light/lightc5.webp';

// const calendarImports = [c1, c2, c3, c4, c5, lightc1, lightc2, lightc3, lightc4, lightc5]


// const imageMap = {
//   calendar: {
//     sources: [c1, c2, c3, c4, c5, lightc1, lightc2, lightc3, lightc4, lightc5],
//     ids: ["c1", "c2", "c3", "c4", "c5", "lightc1", "lightc2", "lightc3", "lightc4", "lightc5"]
//   },
// };

// const calendarImages = $$(".project-image__calendar");
// const createLink = (href, id) => {
//   const link = document.createElement('link');
//   link.as = 'image';
//   link.href = href;
//   link.rel = 'preload';
//   link.id = id;
//   document.head.appendChild(link);
// };




// const appendLinks = () => {
//   imageMap.calendar.sources.forEach((href, i) => {
//     createLink(
//       href,
//       imageMap.calendar.ids[i]
//     );
//     if (i < 5) {
//       calendarImages[i].style.backgroundImage = `url(${href})`;
//     }
//   });
// };

// const handleImages = () => {
//   appendLinks();
//   calendarImages.forEach((img, i) => {
//     img.style.backgroundImage = `url(${imageMap.calendar.sources[i]})`;
//   });
// };

const initImages = () => {
  // createLink(c1, "c1");
  // calendarImages[0].style.backgroundImage = `url(${c1})`;
  // appendLinks();
  // handleImages();
};


export default initImages;