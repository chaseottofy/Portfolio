// eslint-disable-next-line arrow-body-style
const checkEmailValidity = (email) => {
  return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email));
};

const checkPhoneValidity = (phone) => phone && phone.length >= 10;

const checkValidNameMessage = (sanitizedMessage, min, max) => {
  if (!sanitizedMessage) {
    return false;
  }

  if (sanitizedMessage.length < min) {
    return false;
  }

  if (sanitizedMessage.length > max) {
    return false;
  }

  return true;
};

const sanitizeInput = (str) => {
  const textarea = document.createElement('textarea');
  textarea.textContent = str;
  return textarea.innerHTML;
};

export {
  checkEmailValidity,
  checkPhoneValidity,
  checkValidNameMessage,
  sanitizeInput,
};
