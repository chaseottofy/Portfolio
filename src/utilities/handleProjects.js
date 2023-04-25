const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// const initRefreshSearch = () => {
//   const handleRefresh = e => {
//     const sib = e.target.previousElementSibling.parentElement;
//     if (!sib.classList.contains("skeleton")) {
//       sib.classList.add("skeleton");
//       setTimeout(() => {
//         sib.classList.remove("skeleton");
//       }, 1500);
//     }
//   };

//   $$(".refresh-search").forEach(btn => btn.onclick = handleRefresh);
// };

const initCalendarThumbs = () => {
  const tabs = $$(".proj-header__tablabel");
  const mainImg = $(".project-cell--calendar");
  const calendarSearch = $(".cal-search");

  const handleTabs = e => {
    const curridx = e.target.getAttribute("data-tab-idx");
    const mainIdx = mainImg.getAttribute("data-curr-idx");

    if (curridx === mainIdx) return;
    mainImg.setAttribute("class", `project-cell__image project-cell--calendar cal-cell__image--${curridx}`);
    mainImg.setAttribute("data-curr-idx", curridx);
    calendarSearch.setAttribute("data-search-after", ['day', 'month', 'list', 'week', 'year'][parseInt(curridx) - 1]);
  };

  tabs.forEach(tab => tab.onclick = handleTabs);
};

const initProjects = () => {
  initCalendarThumbs();
  // initRefreshSearch();
};

export default initProjects;