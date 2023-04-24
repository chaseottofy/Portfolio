const $ = document.querySelector.bind(document);
// import createContext from "../factory/createContext";
const navContactBtn = $(".nav-multi__contact");
const contactMenu = $(".contact-menu");

const initContactMenu = () => {
  const closeContactMenu = () => {
    contactMenu.classList.remove("contact-menu--active");
    navContactBtn.firstChild.classList.remove("nav-menu--contact--active");
    window.removeEventListener("mousemove", contactMousemove);
    return;
  };

  const contactMousemove = e => {
    if (!e || !e.target) return;

    if (
      e.target.closest(".contact-menu") ||
      e.target.closest(".nav-multi__contact")
    ) return;
    
    if (
      e.clientX <= 0
      || e.clientY <= 0
      || e.clientX >= window.innerWidth
      || e.clientY >= window.innerHeight
    ) return closeContactMenu();

    closeContactMenu();
  };

  const openContactMenu = () => {
    if (window.innerWidth <= 560) return;
    if (contactMenu.classList.contains("contact-menu--active")) return;
    contactMenu.classList.add("contact-menu--active");
    navContactBtn.firstChild.classList.add("nav-menu--contact--active");
    window.addEventListener("mousemove", contactMousemove);
  };
  navContactBtn.addEventListener("mouseenter", openContactMenu);
};

// const initEmailContext = () => {
// const introMailtoBtn = $(".intro-mailto");
//   const openEmailContext = e => {
//     const { top, left } = e.target.getBoundingClientRect();
//     createContext(top - 40, left, "ottofy@zohomail.com");
//   };

//   const closeEmailContext = () => {
//     const ctx = $(".hover-context--wrapper");
//     if (ctx) {
//       $(".hover-context--wrapper").remove();
//     }
//   };

//   introMailtoBtn.addEventListener("mouseenter", openEmailContext);
//   introMailtoBtn.addEventListener("mouseout", closeEmailContext);
// };
// initEmailContext();

const initHover = () => {
  initContactMenu();
};
export default initHover;