const mailtoLinks = document.querySelectorAll('.mailto-link');

const configMailto = () => {
  const subject = `subject=${encodeURIComponent('Contacting you from your portfolio site')}`;
  const email = 'ottofy@zohomail.com';
  for (const link of mailtoLinks) {
    link.setAttribute('href', `mailto:${email}?${subject}`);
  }
};

export default configMailto;
