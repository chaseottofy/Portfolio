const $ = document.querySelector.bind(document);
const contactMenuTime = $(".cm-left--time");
const contactMenuHeader = $(".contact-menu__header");
const navContactBtn = $(".nav-multi__contact");

const getTime = () => {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/Denver",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
}

const initDefaults = () => {
  contactMenuTime.textContent = `MST: ${getTime()}`;

  contactMenuHeader.style.left = `${navContactBtn.getBoundingClientRect().left - 140}px`

  console.log(contactMenuHeader)
}

export default initDefaults;