const copyToClipboard = (text) => new Promise((resolve, reject) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      resolve('Text copied successfully!');
    }).catch((error) => {
      reject(`Failed to copy text using Clipboard API: ${error}`);
    });
  } else {
    reject('Clipboard API not supported. Please copy the text manually.');
  }
});

export default copyToClipboard;
