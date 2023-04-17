const $ = document.querySelector.bind(document);
const contactMenuTime = $(".cm-left--time");

const getTime = () => {
  return new Date().toLocaleString("en-US", {
    timeZone: "America/Denver",
    hour: "numeric",
    minute: "numeric",
    hour12: true
  });
};

const initDefaults = () => {
  contactMenuTime.textContent = `MST: ${getTime()}`;
};

export default initDefaults;