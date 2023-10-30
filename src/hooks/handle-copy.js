const useCopyToClipboard = (text) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  return Promise.reject('The current browser does not support the Clipboard API');
};

export default useCopyToClipboard;
