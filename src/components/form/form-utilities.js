const googleSheetsFormId = process.env.SHEET_ID;

const checkEmailValidity = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
  googleSheetsFormId,
  sanitizeInput,
};
