const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const body = $(".body");
const header = $(".header");
const colorSchemeMeta = $('meta[name="color-scheme"]');
const themeInputs = $$(".theme-input");
const themeLabels = $$(".theme-label");

const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

const setTheme = (theme) => {
  header.classList.remove("header-animate");
  localStorage.setItem("portfolio-theme", theme);
  colorSchemeMeta.setAttribute("content", theme);
  body.setAttribute("class", `body theme__${theme}`);
  setTimeout(() => header.classList.add("header-animate"), 150);
};

const initDefaultTheme = () => {
  const localTheme = localStorage.getItem("portfolio-theme");
  const systemTheme = getSystemTheme();
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

const initThemeOptions = () => {
  themeInputs.forEach((input) => {
    input.addEventListener("change", () => {
      const theme = input.getAttribute("value");
      setTheme(theme === "system" ? input.getAttribute("data-system-theme") : theme);
    });
  });
};

const initTheme = () => {
  initDefaultTheme();
  initThemeOptions();
}

export default initTheme;