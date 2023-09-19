const copyToClipboard = (text) => {
  return new Promise((resolve, reject) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        resolve("Text copied successfully!");
      }).catch(err => {
        reject("Failed to copy text using Clipboard API: " + err);
      });
    } else {
      reject("Clipboard API not supported. Please copy the text manually.");
    }
  });
};

export default copyToClipboard;
