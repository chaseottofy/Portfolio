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

const setTheme = (theme, themeClass) => {
  localStorage.setItem('portfolio-theme', theme);
  colorSchemeMeta.setAttribute('content', theme);
  if (!body.classList.contains(themeClass)) {
    body.classList.remove('theme__dark');
    body.classList.remove('theme__light');
    body.classList.add(themeClass);
  }
};

const initDefaultTheme = () => {
  const localTheme = localStorage.getItem('portfolio-theme');
  const systemTheme = getSystemTheme();
  themeInputs[2].setAttribute('value', systemTheme);
  themeLabels[2].dataset.systemTheme = systemTheme;
  if (!localTheme
    || (localTheme !== 'dark' && localTheme !== 'light')) {
    setTheme(systemTheme, `theme__${systemTheme}`);
    themeInputs[2].checked = true;
  } else {
    setTheme(localTheme, `theme__${localTheme}`);
    themeInputs[localTheme === 'dark' ? 0 : 1].checked = true;
  }
};

const handleThemeChange = (e) => {
  const theme = e.target.value;
  if (theme === 'system') {
    const systemDataTheme = e.target.getAttribute('data-system-theme');
    setTheme(systemDataTheme, `theme__${systemDataTheme}`);
  } else {
    setTheme(theme, `theme__${theme}`);
  }
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
