import personalContactData from '../data/json/contact/contact-personal.json';

/**
 * configMailto
 * @description config mailto links to open email client with subject already filled out
*/
const initMailtoElements = () => {
  const mailtoLinks = document?.querySelectorAll('.mailto-link');
  const mailToSubject = personalContactData.mailto;
  if (mailtoLinks === null) return;
  for (const link of mailtoLinks) {
    link.setAttribute('href', mailToSubject);
  }
};

export default initMailtoElements;
