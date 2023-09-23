/** ************************************ */
/** ************************************ */
import initHeader from './components/header/header';
import initProjects from './components/projects/projects';
import initSkills from './components/skills/skills';
import initContactMenu from './components/contact-modal/init-contact-modal';
import initForm from './components/form/form';
import initDefaults from './utilities/handle-defaults';
/** ************************************ */
/** ************************************ */
import measureMemory from '../scripts/testing/measure-memory';
import measureLayoutShift from '../scripts/testing/measure-shift';

const appInit = () => {
  initHeader();
  initProjects();
  // initSkills();
  initContactMenu();
  initForm();
  initDefaults();
};

appInit();

// measureLayoutShift();
// const { innerWidth, innerHeight } = window;
// const projectCells = document.querySelectorAll('.project-cell');
// const cell = projectCells[0];

// // copy cell.innerHTML to clipboard
// const copyCell = () => {
//   window.navigator.clipboard.writeText(cell.innerHTML);
// };

// window.addEventListener('click', () => {
//   copyCell();
// })

// copyCell();
// console.log(cell.innerHTML);
// projectCells.forEach((cell) => {
//   // const { innerHeight } = cell;
//   // console.log(cell.getBoundingClientRect().height);
//   const aspectRatio = 9 / 16;
//   // console.log(innerHeight * aspectRatio);
//   const cellImgWrapper = cell.querySelector('.proj-img');
//   const cellImg = cellImgWrapper.querySelector('img');
//   const {
//     width: imgWrapperWidth,
//     height: imgWrapperHeight,
//   } = cellImgWrapper.getBoundingClientRect();
//   const { height: cellHeight } = cell.getBoundingClientRect();
//   // let offsetWidth = innerWidth - imgWrapperWidth;
//   // const bodyMaxWidth = 1140;
//   // let offsetWidth = innerWidth > bodyMaxWidth ? 0 : innerWidth - bodyMaxWidth;
//   // console.log(offsetWidth)

//   // const otherContentHeightSum = cellHeight - imgWrapperHeight - offsetWidth;
//   // const otherContentOffset = otherContentHeightSum / cellHeight;
//   // console.log(otherContentOffset)
// });
// const {
//   width: imgWrapperWidth,
//   height: imgWrapperHeight,
// } = projectCells[1].getBoundingClientRect();

// window.addEventListener('resize', (e) => {
//   const cell = projectCells[1];
//   const cellContent = cell.querySelector('.project-cell__content');
//   const cellFooter = cell.querySelector('.project-cell__footer');

//   const {
//     width: imgWrapperWidth,
//     height: imgWrapperHeight,
//   } = cell.getBoundingClientRect();

//   const cellContentHeight = cellContent.getBoundingClientRect().height;
//   const cellFooterHeight = cellFooter.getBoundingClientRect().height;
//   const contentPlusFooter = cellContentHeight + cellFooterHeight;
//   const contentPlusFooterOffset = contentPlusFooter / cellContentHeight;
//   console.log({
//     offset: imgWrapperHeight / window.innerHeight,
//   })
// });

// const tempelement = document.createElement('aside');
// tempelement.setAttribute('style', 'position:fixed;inset:0;width:200px;height:200px;z-index:9999;background-color:rgba(40,40,40,0.5);color:white;margin:auto;');
// tempelement.textContent = 'temp';
// tempelement.style.height = `var(--card-default)`;
// document.body.append(tempelement);
// tempelement.style.height = `var(--ap)`;
// tempelement.style.height = `calc(100vh * (9/16))`;
// console.log(imgWrapperHeight);
// console.log(tempelement.getBoundingClientRect().height);