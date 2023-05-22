import initDateTime from './set-datetime';
import createAscii from '../template/create-ascii';
import configMailto from './config-mailto';

const initDefaults = () => {
  initDateTime();
  createAscii();
  configMailto();
};

export default initDefaults;
