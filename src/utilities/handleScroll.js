const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const header = $(".header");

const handleHrefScroll = (e) => {
  $(`${e.target.getAttribute("href")}`).scrollIntoView({
    behavior: "smooth"
  });
};

const handleAttrScroll = (e) => {
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
  // call on init in case page loads beyond point for header-filter
  handlePageScroll();

  // click nav list item links to scroll to section
  $$(".nav-menu--link").forEach(link => link.addEventListener("click", handleHrefScroll, { passive: true }));
  // click contact nav button to scroll to section
  $(".contact-nav--btn").addEventListener("click", handleAttrScroll, { passive: true });
  // click header logo to scroll to top of page
  $(".header-logo").addEventListener("click", handleAttrScroll, { passive: true });

  // when window is scrolled past the intro section, apply a filter to the header to invert the colors
  window.addEventListener("scroll", handlePageScroll, { passive: true });
};

export default initScroll;