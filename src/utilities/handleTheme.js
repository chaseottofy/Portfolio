/*
const $ = document.querySelector.bind(document);
const handleTheme = () => {
  const moon = $(".moon-icon");
  const sun = $(".sun-icon");
  const colorSchemeMeta = $('meta[name="color-scheme"]');
  if (sun.classList.contains("hide-svg")) {
    sun.classList.remove("hide-svg");
    moon.classList.add("hide-svg");
    document.body.setAttribute("class", "body theme__light");
    colorSchemeMeta.setAttribute("content", "light");
  } else {
    sun.classList.add("hide-svg");
    moon.classList.remove("hide-svg");
    document.body.setAttribute("class", "body theme__dark");
    colorSchemeMeta.setAttribute("content", "dark");
  }
};

const handleDefaultTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return;
  } else {
    handleTheme();
  }
};

export default handleTheme;
export { handleDefaultTheme };
import handleTheme, { handleDefaultTheme } from "./utilities/handleTheme";

// window.addEventListener("load", handleDefaultTheme, { once: true });
// $(".change-theme--btn").addEventListener("click", handleTheme);
*/