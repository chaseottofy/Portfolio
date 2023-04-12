const copyToClipboard = (text) => {
  if (!navigator.clipboard || !text) return;
  return navigator.clipboard.writeText(text);
}

export default copyToClipboard;