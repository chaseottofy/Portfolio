const useCopyToClipboard = (text) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject('The current browser does not support the Clipboard API');
};

export default useCopyToClipboard;
