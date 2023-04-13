/**
 * 
 * @param {string} text hard-coded text to copy to clipboard (phone #/email/etc.)
 * @returns 
 */
const copyToClipboard = (text) => {
  if (!navigator.clipboard || !text) return;
  return navigator.clipboard.writeText(text);
};
export default copyToClipboard;