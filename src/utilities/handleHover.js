const $ = document.querySelector.bind(document);
const navContactBtn = $(".nav-multi__contact");
const contactMenu = $(".contact-menu");

const closeContactMenu = () => {
  contactMenu.classList.remove("contact-menu--active");
  navContactBtn.firstChild.classList.remove("nav-menu--contact--active");
  window.removeEventListener("mousemove", contactMousemove);
  window.removeEventListener("touchmove", contactMousemove, { passive: true });
  return;
};

const contactMousemove = e => {
  if (!e || !e.target) return;
  if (e.target.closest(".contact-menu")) return;
  if (e.target.closest(".nav-multi__contact")) return;
  closeContactMenu();
};

const openContactMenu = () => {
  if (contactMenu.classList.contains("contact-menu--active")) return;
  contactMenu.classList.add("contact-menu--active");
  navContactBtn.firstChild.classList.add("nav-menu--contact--active");
  window.addEventListener("mousemove", contactMousemove);
  window.addEventListener("touchmove", contactMousemove, { passive: true });
};

const toggleContactMenu = () => {
  if (contactMenu.classList.contains("contact-menu--active")) {
    closeContactMenu();
  } else {
    openContactMenu();
  }
};

const initHover = () => {
  navContactBtn.addEventListener("mouseenter", openContactMenu);
  navContactBtn.addEventListener("touchstart", toggleContactMenu, {
    passive: true
  });
};

export default initHover;