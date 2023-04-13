const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const handleMenuLink = (e) => {
  e.preventDefault();
  $(`${e.target.getAttribute("href")}`).scrollIntoView({
    behavior: "smooth"
  });
};
const setMenuLinks = () => {
  $$(".nav-menu--link").forEach(link => {
    link.addEventListener("click", handleMenuLink);
  });
};
export default setMenuLinks;