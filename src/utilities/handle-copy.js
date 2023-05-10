import createToast from '../template/create-toast';

const copyEmailBtns = document.querySelectorAll('.cm-copy--email');
const copyPhoneBtns = document.querySelectorAll('.cm-copy--phone');

const copyToClipboard = (text) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  /* eslint-disable prefer-promise-reject-errors */
  return Promise.reject('The Clipboard API is not available.');
};

const setCopy = (text) => {
  copyToClipboard(text);
  createToast(text);
};

const copyEmail = () => setCopy('ottofy@zohomail.com');
const copyPhone = () => setCopy('9709882548');
const initCopyElements = () => {
  for (const btn of copyEmailBtns) {
    btn.addEventListener('click', copyEmail);
  }

  for (const btn of copyPhoneBtns) {
    btn.addEventListener('click', copyPhone);
  }
};
export default initCopyElements;
