const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const body = $(".body");
const header = $(".header");
const colorSchemeMeta = $('meta[name="color-scheme"]');
const themeBtns = $$(".theme-btn");

const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";

const resetThemeBtns = () => themeBtns.forEach(btn => btn.classList.remove("active-theme"));

const handleTheme = (theme, element) => {
  resetThemeBtns();
  header.classList.remove("header-animate");
  element.classList.add("active-theme");
  localStorage.setItem("portfolio-theme", theme);
  colorSchemeMeta.setAttribute("content", theme);
  body.setAttribute("class", `body theme__${theme}`);
  setTimeout(() => header.classList.add("header-animate"), 150);
};

const swap = (target) => {
  resetThemeBtns();
  target.classList.add("active-theme");
};

const delegateTheme = e => {
  if (e.target.closest(".theme-btn")) {
    if (e.target.classList.contains("active-theme")) {
      return;
    }

    const systemTheme = getSystemTheme();
    const currentTheme = localStorage.getItem("portfolio-theme");
    const targetTheme = e.target.getAttribute("data-theme");
    if (targetTheme === "system") {
      if (e.target.getAttribute("data-system-theme") === currentTheme) {
        swap(e.target);
        return;
      } else {
        handleTheme(systemTheme, e.target);
        return;
      }
    } else {
      if (targetTheme === currentTheme) {
        swap(e.target);
        return;
      } else {
        handleTheme(targetTheme, e.target);
        return;
      }
    }
  }
};

const initTheme = () => {
  const localTheme = localStorage.getItem("portfolio-theme");
  const systemTheme = getSystemTheme();
  // append a new attribute to system theme button to refer to system theme
  themeBtns[2].setAttribute("data-system-theme", systemTheme);

  if (!localTheme || (localTheme !== "dark" && localTheme !== "light")) {
    handleTheme(systemTheme, $(`[data-theme="${systemTheme}"]`));
    return;
  } else {
    handleTheme(localTheme, $(`[data-theme="${localTheme}"]`));
    return;
  }
};

export default delegateTheme;
export { initTheme };