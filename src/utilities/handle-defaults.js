import initDateTime from './set-datetime';
import createAscii from '../template/create-ascii';
import configMailto from './config-mailto';

const initDefaults = () => {
  initDateTime();
  createAscii();
  configMailto();

  const body = document.querySelector('body');
  const root = document.querySelector('html');
  setTimeout(() => {
    body.dataset.disableTransitions = false;
    root.style.scrollBehavior = 'smooth';
  }, 500);
};

export default initDefaults;
