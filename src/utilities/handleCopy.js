import createToast from '../factory/createToast';

const copyToClipboard = (text) => {
  try {
    return navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
  return false;
};

const setCopy = (text) => {
  copyToClipboard(text);
  createToast(text);
};

const copyEmail = () => setCopy('copied! – ottofy@zohomail.com');
const copyPhone = () => setCopy('copied! – 9709882548');
const initCopyElements = () => {
  document.querySelectorAll('.cm-copy--email').forEach((el) => {
    el.addEventListener('click', copyEmail);
  });
  document.querySelectorAll('.cm-copy--phone').forEach((el) => {
    el.addEventListener('click', copyPhone);
  });
};
export default initCopyElements;
