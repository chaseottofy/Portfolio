import createToast from "./createToast";
const $ = document.querySelector.bind(document);

const copyToClipboard = (text) => {
  if (!navigator.clipboard || !text) return;
  return navigator.clipboard.writeText(text);
};

const handleCopyEmail = () => {
  const message = "ottofy@zohomail.com";
  copyToClipboard(message);
  createToast(message);
  return;
}

const handleCopyPhone = () => {
  const message = "9709882548";
  copyToClipboard(message);
  createToast(message);
  return;
}

const setCopyElements = () => {
  $(".copy-email").addEventListener("click", handleCopyEmail);
  // $(".copy-phone").addEventListener("click", handleCopyPhone);
}

export default setCopyElements;