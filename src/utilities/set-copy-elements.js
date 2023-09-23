import createToast from '../components/ui/toast';
import useCopyToClipboard from '../hooks/handle-copy';

const setCopy = (text) => {
  useCopyToClipboard(text);
  createToast(text, 'Copied!', 'success', 2);
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
