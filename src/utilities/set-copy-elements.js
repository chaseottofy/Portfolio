import createToast from '../components/ui/toast';
import contactPersonal from '../data/json/contact/contact-personal.json';
import useCopyToClipboard from '../hooks/handle-copy';

const setCopy = (text) => {
  useCopyToClipboard(text);
  createToast(text, 'Copied!', 'success', 2);
};

const copyHandler = {
  email: () => setCopy(contactPersonal.email),
  phone: () => setCopy(contactPersonal.phone),
};

const initCopyElements = () => {
  const copyEmailBtns = document?.querySelectorAll('.cm-copy--email');
  const copyPhoneBtns = document?.querySelectorAll('.cm-copy--phone');

  if (copyEmailBtns) {
    for (const btn of copyEmailBtns) {
      btn.addEventListener('click', copyHandler.email);
    }
  }

  if (copyPhoneBtns) {
    if (copyPhoneBtns === null) return;
    for (const btn of copyPhoneBtns) {
      btn.addEventListener('click', copyHandler.phone);
    }
  }
};

export default initCopyElements;
