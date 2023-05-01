const body = document.querySelector('.body');
const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
const themeInputs = document.querySelectorAll('.theme-input');
const themeLabels = document.querySelectorAll('.theme-label');

const getSystemTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

const setTheme = (theme) => {
  localStorage.setItem('portfolio-theme', theme);
  colorSchemeMeta.setAttribute('content', theme);
  body.classList.remove('theme__dark');
  body.classList.remove('theme__light');
  body.classList.add(`theme__${theme}`);
};

const initDefaultTheme = () => {
  const localTheme = localStorage.getItem('portfolio-theme');
  const systemTheme = getSystemTheme();
  themeInputs[2].setAttribute('value', systemTheme);
  themeLabels[2].setAttribute('data-system-theme', systemTheme);
  if (!localTheme
    || (localTheme !== 'dark' && localTheme !== 'light')) {
    setTheme(systemTheme);
    themeInputs[2].checked = true;
  } else {
    setTheme(localTheme);
    themeInputs[localTheme === 'dark' ? 0 : 1].checked = true;
  }
};

const handleThemeChange = (e) => {
  const theme = e.target.getAttribute('value');
  setTheme(theme === 'system' ? e.target.getAttribute('data-system-theme') : theme);
};

const initThemeOptions = () => {
  themeInputs.forEach((input) => input.addEventListener('change', handleThemeChange));
};

const initTheme = () => {
  initDefaultTheme();
  initThemeOptions();
  document.querySelector('.header').classList.add('header-animate');
};

export default initTheme;
