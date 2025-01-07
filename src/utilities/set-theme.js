import { LOCAL_STORAGE_THEME } from '../data/constants';
import useHasLocalStorage from '../hooks/has-local-storage';

const initTheme = () => {
  const localEnabled = useHasLocalStorage();
  const body = document.querySelector('.body');
  const themeSwitch = document.querySelector('.theme-switch');
  const themeLabels = themeSwitch.querySelectorAll('.theme-label');
  const themeInputs = themeSwitch.querySelectorAll('.theme-input');
  const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');

  const setTheme = (theme) => {
    if (localEnabled) localStorage.setItem(LOCAL_STORAGE_THEME, theme);
    themeColorMeta.setAttribute('content', theme === 'light' ? '#fff' : '#000');
    colorSchemeMeta.setAttribute('content', theme);
    body.setAttribute('class', `body theme__${theme}`);
    const idx = theme === 'light' ? 1 : 0;
    themeInputs[idx].setAttribute('value', theme);
    themeLabels[idx].dataset.systemTheme = theme;
    themeInputs[idx].checked = true;
  };

  const toggleTheme = () => {
    const { systemTheme } = themeSwitch.dataset;
    const nxt = systemTheme === 'dark' ? 'light' : 'dark';
    setTheme(nxt);
    themeSwitch.dataset.systemTheme = nxt;
  };

  const configTheme = () => {
    setTheme(localEnabled ? (localStorage.getItem(LOCAL_STORAGE_THEME) || 'dark') : 'dark');
    themeSwitch.addEventListener('click', toggleTheme);
  };

  configTheme();
};

export default initTheme;
