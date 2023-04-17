const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const scrollTop = $(".scroll-top");
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
  if (window.pageYOffset > 0) {
    header.classList.add("header-filter");
    scrollTop.classList.remove("hide-scroll-top");
  } else {
    header.classList.remove("header-filter");
    scrollTop.classList.add("hide-scroll-top");
  }
};

const initScroll = () => {
  // scroll to articles on page from nav
  handlePageScroll();
  $$(".nav-menu--link").forEach(link => {
    link.addEventListener("click", handleHrefScroll);
  });
  $(".contact-nav--btn").addEventListener("click", handleAttrScroll);
  $(".header-logo").addEventListener("click", handleAttrScroll);

  // apply filter to header and toggle scroll to top button;
  window.addEventListener("scroll", handlePageScroll);
  // scroll to top;
  $(".scroll-top--btn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

export default initScroll;