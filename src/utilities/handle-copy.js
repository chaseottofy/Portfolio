import createToast from '../template/create-toast';
import copyToClipboard from './get-copytoclipboard';

const setCopy = (text) => {
  copyToClipboard(text);
  createToast(text, 'copied!');
};

const copyEmail = () => setCopy('ottofy@zohomail.com');
const copyPhone = () => setCopy('9709882548');

const initCopyElements = () => {
  const copyEmailBtns = document?.querySelectorAll('.cm-copy--email');
  const copyPhoneBtns = document?.querySelectorAll('.cm-copy--phone');

  if (copyEmailBtns) {
    for (const btn of copyEmailBtns) {
      btn.addEventListener('click', copyEmail);
    }
  }

  if (copyPhoneBtns) {
    if (copyPhoneBtns === null) return;
    for (const btn of copyPhoneBtns) {
      btn.addEventListener('click', copyPhone);
    }
  }
};
export default initCopyElements;
