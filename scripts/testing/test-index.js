import measureWidth from './measure-width';
import measureShift from './measure-shift';
import measureMemory from './measure-memory';
import measureFocus from './measure-focus';

/**
 * enableTesting - DEV ONLY
 * @param {boolean} focus 
 * @param {boolean} memory 
 * @param {boolean} shift 
 * @param {boolean} width 
 */
const enableTesting = (focus, memory, shift, width) => {
  if (focus) {
    measureFocus();
  }

  if (memory) {
    measureMemory();
  }

  if (shift) {
    measureShift();
  }

  if (width) {
    measureWidth();
  }
};

export default enableTesting;