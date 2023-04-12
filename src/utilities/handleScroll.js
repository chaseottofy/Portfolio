const $ = document.querySelector.bind(document);
const handleScroll = () => {
  const scrollTop = $(".scroll-top");
  const header = $(".header");
  if (window.pageYOffset > 0) {
    header.classList.add("header-filter");
    scrollTop.classList.remove("hide-scroll-top");
  } else {
    header.classList.remove("header-filter");
    scrollTop.classList.add("hide-scroll-top");
  }
};
export default handleScroll;