import { LOCAL_STORAGE_THEME } from '../data/constants';
import useHasLocalStorage from '../hooks/has-local-storage';

const initTheme = () => {
  const root = document.documentElement;
  const localEnabled = useHasLocalStorage();
  const themeSwitch = document.querySelector('.theme-switch');
  const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  const setTheme = () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;
    if (localEnabled) localStorage.setItem(LOCAL_STORAGE_THEME, theme);
    themeColorMeta.setAttribute('content', theme === 'dark' ? '#000' : '#fff');
    colorSchemeMeta.setAttribute('content', theme);
  };
  themeSwitch.addEventListener('click', setTheme);
};

export default initTheme;
