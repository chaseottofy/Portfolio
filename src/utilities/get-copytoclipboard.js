const copyToClipboard = (text) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  /* eslint-disable prefer-promise-reject-errors */
  return Promise.reject('The Clipboard API is not available.');
};

export default copyToClipboard;
