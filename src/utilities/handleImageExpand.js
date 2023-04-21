const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const projectImgClick = e => {
  console.log(e.target);
};

const initProjectImages = () => {
  // const projectContent = $$(".project-cell__content");
  // projectContent.forEach(el => el.addEventListener("click", projectImgClick));
};

const initImageExpand = () => {
  initProjectImages();
};

export default initImageExpand;