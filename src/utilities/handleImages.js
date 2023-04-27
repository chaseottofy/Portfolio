const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const contactMenuImages = $$(".cm-header--img");
const contactBodyImages = $$(".cm-body--img");
const contactMenuArrows = $$(".cm-bent--arrow");
const contactArrowSrc = $(".img-bent-arrowsrc");
const contactMenu = $(".contact-menu");

const initImages = () => { };

/**
 * The contact menu revealed on hover in the header shares the same images as the contact menu in the body.
 * This implements a fake lazy load to prevent the images from laoding twice on init.
 */
const contactMenuLazy = () => {
  if (contactMenu.getAttribute("cm-loaded") === "true") return;
  const arrowsrc = contactArrowSrc.src;
  contactMenuImages.forEach((img, idx) => {
    img.src = contactBodyImages[idx].src;
    img.removeAttribute("disabled");
    contactMenuArrows[idx].src = arrowsrc;
    contactMenuArrows[idx].removeAttribute("disabled");
  });
  contactMenu.setAttribute("cm-loaded", "true");
};

export default initImages;
export { contactMenuLazy };