const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const header = $(".header");

const handleHrefScroll = (e) => {
  // e.preventDefault();
  $(`${e.target.getAttribute("href")}`).scrollIntoView({
    behavior: "smooth"
  });
};

const handleAttrScroll = (e) => {
  // e.preventDefault();
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

const handleProjectsScroll = (e) => {
  const floatMenu = $(".project-float--wrapper");
  const floatMenuTitle = $(".fm-current");
  const projectContainer = $(".projects-container");
  const projectCells = $$(".project-cell");
  const projectContainerTop = projectContainer.offsetTop;
  const projectContainerBottom = projectContainer.offsetTop + projectContainer.offsetHeight;

  if (window.scrollY >= projectContainerTop && window.scrollY <= projectContainerBottom) {
    floatMenu.classList.add("project-float--active");
    projectCells.forEach((cell) => {
      cell.children[0].textContent = `top:${cell.offsetTop} --- height:${cell.offsetHeight + cell.offsetTop}`;
      if (window.scrollY >= cell.offsetTop && window.scrollY >= cell.offsetHeight + cell.offsetTop) {
        floatMenuTitle.textContent = `${cell.getAttribute("data-proj-title")}`;
      }
    });
  } else {
    floatMenu.classList.remove("project-float--active");
    return;
  }
};

const initThumbnailScroll = () => {
  const scrollLeftBtn = $(".cell-thumbnail--nav__left");
  const scrollRightBtn = $(".cell-thumbnail--nav__right");

  const handleScroll = (e) => {
    const scrollDirection = e.target.getAttribute("data-scroll-direction");
    const scrollContainer = scrollDirection === "left"
      ? e.target.nextElementSibling
      : e.target.previousElementSibling;


    const scrollAmount = scrollContainer.children[0].offsetWidth;
    const childrenLength = scrollContainer.children.length;

    if (scrollDirection === "left") {
      if (scrollContainer.scrollLeft > 0) {
        scrollContainer.scrollLeft -= scrollAmount;
      } else {
        scrollContainer.scrollLeft = scrollAmount * (childrenLength - 1);
      }
    } else {
      if (scrollContainer.scrollLeft < scrollAmount * (childrenLength - 1)) {
        scrollContainer.scrollLeft += scrollAmount;
      } else {
        scrollContainer.scrollLeft = 0;
      }
    }
  };

  scrollLeftBtn.onclick = handleScroll;
  scrollRightBtn.onclick = handleScroll;
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

  window.addEventListener("scroll", handleProjectsScroll, { passive: true });

  window.addEventListener("load", handleProjectsScroll, { once: true });

  // scroll project thumbnails
  initThumbnailScroll();
};

export default initScroll;