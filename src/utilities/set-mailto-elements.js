import contactData from '../data/json/contact.json';

/**
 * configMailto
 * @description config mailto links to open email client with subject already filled out
*/
const initMailtoElements = () => {
  const { mailto } = contactData;
  const mailtoLinks = document?.querySelectorAll('.mailto-link');
  const mailToSubject = mailto;
  if (mailtoLinks === null) return;
  for (const link of mailtoLinks) {
    link.setAttribute('href', mailToSubject);
  }
};

export default initMailtoElements;
