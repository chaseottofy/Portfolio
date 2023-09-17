import isLocalStorageEnabled from './localstore-enabled';

const initTheme = () => {
  const localEnabled = isLocalStorageEnabled();
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
    if (!localEnabled) {
      setTheme('dark');
      return;
    }

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
    setTheme(theme);
    if (localEnabled) {
      localStorage.setItem('portfolio-theme', theme);
    }
  };

  const initThemeOptions = () => {
    for (const input of themeInputs) {
      input.addEventListener('change', handleThemeChange);
    }
  };

  const configTheme = () => {
    initDefaultTheme();
    initThemeOptions();
  };

  configTheme();
};

export default initTheme;
