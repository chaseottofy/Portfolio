import useHasLocalStorage from '../hooks/has-local-storage';

const initTheme = () => {
  const localEnabled = useHasLocalStorage();
  const body = document.querySelector('.body');
  const themeInputs = document.querySelectorAll('.theme-input');
  const themeLabels = document.querySelectorAll('.theme-label');
  const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  const setTheme = (theme) => {
    themeColorMeta.setAttribute('content', theme === 'light' ? '#fff' : '#000');
    colorSchemeMeta.setAttribute('content', theme);
    body.setAttribute('class', `body theme__${theme}`);
    const idx = theme === 'light' ? 1 : 0;
    themeInputs[idx].setAttribute('value', theme);
    themeLabels[idx].dataset.systemTheme = theme;
    themeInputs[idx].checked = true;
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
      setTheme('dark');
      localStorage.setItem('portfolio-theme', 'dark');
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
