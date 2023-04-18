const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const header = $(".header");

const handleHrefScroll = (e) => {
  e.preventDefault();
  $(`${e.target.getAttribute("href")}`).scrollIntoView({
    behavior: "smooth"
  });
};

const handleAttrScroll = (e) => {
  e.preventDefault();
  $(`${e.target.getAttribute("data-href")}`).scrollIntoView({
    behavior: "smooth"
  });
};

const handlePageScroll = () => {
  if (window.pageYOffset > window.innerHeight) {
    header.classList.add("header-filter");
  } else {
    header.classList.remove("header-filter");
  }
};

const initScroll = () => {
  // scroll to articles on page from nav
  handlePageScroll();
  $$(".nav-menu--link").forEach(link => {
    link.addEventListener("click", handleHrefScroll, { passive: true });
  });
  $(".contact-nav--btn").addEventListener("click", handleAttrScroll, { passive: true });
  $(".header-logo").addEventListener("click", handleAttrScroll, { passive: true });

  // apply filter to header and toggle scroll to top button;
  window.addEventListener("scroll", handlePageScroll, { passive: true });
};

export default initScroll;