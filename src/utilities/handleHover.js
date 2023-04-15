const $ = document.querySelector.bind(document);
const navContactBtn = $(".nav-multi__contact");
const contactMenu = $(".contact-menu");

const closeContactMenu = e => {
  contactMenu.classList.remove("contact-menu--active");
  contactMenu.style.left = "0";
  document.removeEventListener("mousemove", contactMousemove);
  return;
};

const contactMousemove = e => {
  if (!e || !e.target) return;
  if (e.target.closest(".contact-menu")) return;
  if (e.target.closest(".nav-multi__contact")) return;
  closeContactMenu();
};

// write a helper function to get the right position of the contact menu, 

const openContactMenu = e => {
  if (contactMenu.classList.contains("contact-menu--active")) return;
  const rect = navContactBtn.getBoundingClientRect();
  if (window.innerWidth > 768) {
    contactMenu.style.left = `${rect.left - 140}px`;
  } else {
    contactMenu.style.left = `0px`;
  }

  contactMenu.classList.add("contact-menu--active");
  document.addEventListener("mousemove", contactMousemove);
};

const toggleContactMenu = e => {
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