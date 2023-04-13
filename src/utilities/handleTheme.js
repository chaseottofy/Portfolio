/*
const $ = document.querySelector.bind(document);
const colorSchemeMeta = $('meta[name="color-scheme"]');

const getMediaMatch = () => window.matchMedia('(prefers-color-scheme: dark)').matches

const handleTheme = () => {
  const moon = $(".moon-icon");
  const sun = $(".sun-icon");
  if (sun.classList.contains("hide-svg")) {
    sun.classList.remove("hide-svg");
    moon.classList.add("hide-svg");
    document.body.setAttribute("class", "body theme__light");
    colorSchemeMeta.setAttribute("content", "light");
    localStorage.setItem("theme", "light");
  } else {
    sun.classList.add("hide-svg");
    moon.classList.remove("hide-svg");
    document.body.setAttribute("class", "body theme__dark");
    colorSchemeMeta.setAttribute("content", "dark");
    localStorage.setItem("theme", "dark");
  }
};

const handleDefaultTheme = () => {
  const localTheme = localStorage.getItem("theme");
  if (localTheme) {
    if (colorSchemeMeta.getAttribute("content") === localTheme) {
      return;
    } else {
      handleTheme();
      return;
    }
  } else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem("theme", "dark");
      return;
    } else {
      handleTheme();
    }
  }
};

const delegateThemeBtns = e => {
  const getThemeBtn = e.target.closest(".theme-btn")
  if (getThemeBtn) {
    const localTheme = localStorage.getItem("theme");
    const theme = e.target.getAttribute("data-theme");
    if (t)
  }
}

export default handleTheme;
export { handleDefaultTheme };
import handleTheme, { handleDefaultTheme } from "./utilities/handleTheme";

// window.addEventListener("load", handleDefaultTheme, { once: true });
// $(".change-theme--btn").addEventListener("click", handleTheme);
*/