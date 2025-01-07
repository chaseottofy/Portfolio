// can you fix the following:
// error  Expected the Promise rejection reason to be an Error  prefer-promise-reject-errors
const useCopyToClipboard = (text) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }
  return Promise.reject(new Error('The current browser does not support the Clipboard API'));
};

export default useCopyToClipboard;
