const $ = document.querySelector.bind(document);
const navContactBtn = $(".nav-multi__contact");
const contactMenu = $(".contact-menu");

const closeContactMenu = () => {
  contactMenu.classList.remove("contact-menu--active");
  navContactBtn.firstChild.classList.remove("nav-menu--contact--active");
  // contactMenu.style.left = "1rem";
  window.removeEventListener("mousemove", contactMousemove);
  return;
};

const contactMousemove = e => {
  console.log({
    e:e,
    target:e.target,
  })
  if (!e || !e.target) return;
  if (e.target.closest(".contact-menu")) return;
  if (e.target.closest(".nav-multi__contact")) return;
  closeContactMenu();
};

const openContactMenu = () => {
  if (contactMenu.classList.contains("contact-menu--active")) return;

  const rect = navContactBtn.getBoundingClientRect();
  if (window.innerWidth > 768) {
    contactMenu.style.left = `${rect.left - 140}px`;
  } else {
    contactMenu.style.left = `1rem`;
  }

  contactMenu.classList.add("contact-menu--active");
  navContactBtn.firstChild.classList.add("nav-menu--contact--active");
  window.addEventListener("mousemove", contactMousemove);
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
  navContactBtn.addEventListener("touchstart", toggleContactMenu);
};

export default initHover;