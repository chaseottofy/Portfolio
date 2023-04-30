const contactMenu = document.querySelector(".contact-menu");
const contactMenuArrows = document.querySelectorAll(".cm-bent--arrow");

/**
 * Load assets from contact-menu__body into contact-menu__header only when the contact menu is opened. 
 * Use data attribute 
*/
const contactMenuLazy = () => {
  if (contactMenu.getAttribute("cm-loaded") === "true") return;

  const setImg = (img, idx) => {
    img.src = document.querySelectorAll(".cm-body--img")[idx].src;
    img.removeAttribute("disabled");
  
    contactMenuArrows[idx].src = document.querySelector(".img-bent-arrowsrc").src;
    contactMenuArrows[idx].removeAttribute("disabled");
  }

  document.querySelectorAll(".cm-header--img").forEach((img, idx) => setImg(img, idx));
  contactMenu.setAttribute("cm-loaded", "true");
};

export default contactMenuLazy;