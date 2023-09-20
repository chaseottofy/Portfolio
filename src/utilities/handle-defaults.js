import initDateTime from './set-datetime';
import createAscii from '../template/create-ascii';
import configMailto from './config-mailto';

const initDefaults = () => {
  initDateTime();
  createAscii();
  configMailto();

  const body = document.querySelector('body');
  setTimeout(() => {
    body.dataset.disableTransitions = false;
  }, 200);
};

export default initDefaults;
