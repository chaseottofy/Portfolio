const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const body = $(".body");
const colorSchemeMeta = $('meta[name="color-scheme"]');
const themeInputs = $$(".theme-input");
const themeLabels = $$(".theme-label");

const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

const setTheme = (theme) => {
  localStorage.setItem("portfolio-theme", theme);
  colorSchemeMeta.setAttribute("content", theme);
  body.setAttribute("class", `body theme__${theme}`);
};

// if local storage has theme, set it
// otherwise, set theme to system theme which will default to "light" if for whatever reason the system theme can't be retrieved
const initDefaultTheme = () => {
  console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const localTheme = localStorage.getItem("portfolio-theme");
  const systemTheme = getSystemTheme();
  // themeInputs[2] == system theme input
  themeInputs[2].setAttribute("value", systemTheme);
  themeLabels[2].setAttribute("data-system-theme", systemTheme);
  if (!localTheme || (localTheme !== "dark" && localTheme !== "light")) {
    setTheme(systemTheme);
    themeInputs[2].checked = true;
    return;
  } else {
    setTheme(localTheme);
    themeInputs[localTheme === "dark" ? 0 : 1].checked = true;
    return;
  }
};

const handleThemeChange = e => {
  const theme = e.target.getAttribute("value");
  setTheme(theme === "system" ? e.target.getAttribute("data-system-theme") : theme);
};

const initThemeOptions = () => {
  themeInputs.forEach(input => input.addEventListener("change", handleThemeChange));
};

const initTheme = () => {
  initDefaultTheme();
  initThemeOptions();
  $(".header").classList.add("header-animate");
};

export default initTheme;