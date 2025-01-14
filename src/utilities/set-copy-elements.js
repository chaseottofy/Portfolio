import createToast from '../components/ui/toast';
import contactData from '../data/json/contact.json';
import useCopyToClipboard from '../hooks/handle-copy';

const setCopy = (text) => {
  useCopyToClipboard(text);
  createToast(text, 'Copied!', 'success', 2);
};

const initCopyElements = () => {
  const { phone, email } = contactData;
  const copyEmailBtns = document?.querySelectorAll('.cm-copy--email');
  const copyPhoneBtns = document?.querySelectorAll('.cm-copy--phone');

  if (copyEmailBtns) {
    if (copyEmailBtns === null) return;
    for (const btn of copyEmailBtns) {
      btn.addEventListener('click', () => setCopy(email));
    }
  }

  if (copyPhoneBtns) {
    if (copyPhoneBtns === null) return;
    for (const btn of copyPhoneBtns) {
      btn.addEventListener('click', () => setCopy(phone));
    }
  }
};

export default initCopyElements;
