import setDateTime from './set-datetime';
import createAscii from '../template/create-ascii';
import configMailto from './config-mailto';

const initDefaults = () => {
  setDateTime();
  createAscii();
  configMailto();
};

export default initDefaults;
