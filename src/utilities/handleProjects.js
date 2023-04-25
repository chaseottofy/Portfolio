const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const initCalendarThumbs = () => {
  const thumbs = $$(".project-cell__thumbnail");
  const mainImg = $(".project-cell--calendar");
  const handleThumbClick = e => {
    const curridx = e.target.getAttribute("data-thumb-idx");
    const currtitle = e.target.getAttribute("data-thumb-title")
    const replaceidx = mainImg.getAttribute("data-thumb-idx");
    const replacetitle = mainImg.getAttribute("data-thumb-title");

    mainImg.setAttribute("class", `project-cell__image project-cell--calendar cal-cell__image--${curridx}`);
    mainImg.setAttribute("data-thumb-idx", curridx);
    mainImg.setAttribute("data-thumb-title", currtitle);

    e.target.setAttribute("class", `project-cell__thumbnail cal-thumb--${replaceidx}`);
    e.target.setAttribute("data-thumb-idx", replaceidx);
    e.target.setAttribute("data-thumb-title", replacetitle);
  };

  thumbs.forEach((thumb) => thumb.onclick = handleThumbClick);
};


const initProjects = () => {
  initCalendarThumbs();
};

export default initProjects;