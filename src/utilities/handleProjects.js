const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const calendartabs = $$(".proj-cal--tab");


const initProjectImages = () => {

  const handleCalendarImages = e => {
    const activeImg = $(".cal-current");
    const selectedIdx = e.target.getAttribute("data-tab-idx");

    if (selectedIdx === activeImg.getAttribute("data-cal-nth")) return;
    activeImg.classList.remove("cal-current");
    activeImg.classList.add("hide-img");

    const newActiveImg = $(`.cal-cell__image--${selectedIdx}`);
    newActiveImg.classList.remove("hide-img");
    newActiveImg.classList.add("cal-current");
    $(".cal-search").setAttribute("data-search-after", ['day', 'week', 'month', 'year', 'list'][parseInt(selectedIdx) - 1]);
  };

  // init calendar
  calendartabs.forEach(tab => tab.onclick = handleCalendarImages);
};

const initProjects = () => {
  // set default image/tab to be first
  calendartabs[0].previousElementSibling.checked = true
  initProjectImages();
};

export default initProjects;