const body = document.querySelector('.body');
const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
const themeInputs = document.querySelectorAll('.theme-input');
const themeLabels = document.querySelectorAll('.theme-label');

const setTheme = (theme) => {
  const idx = theme === 'light' ? 1 : 0;
  themeInputs[idx].setAttribute('value', theme);
  themeLabels[idx].dataset.systemTheme = theme;
  themeInputs[idx].checked = true;
  colorSchemeMeta.setAttribute('content', theme);
  body.setAttribute('class', `body theme__${theme}`);
};

const initDefaultTheme = () => {
  const localTheme = localStorage.getItem('portfolio-theme');
  if (localTheme) {
    setTheme(localTheme);
  } else {
    localStorage.setItem('portfolio-theme', 'dark');
    setTheme('dark');
  }
};

const handleThemeChange = (e) => {
  const theme = e.target.value;
  localStorage.setItem('portfolio-theme', theme);
  setTheme(theme);
};

const initThemeOptions = () => {
  for (const input of themeInputs) {
    input.addEventListener('change', handleThemeChange);
  }
};

const initTheme = () => {
  initDefaultTheme();
  initThemeOptions();
};

export default initTheme;
