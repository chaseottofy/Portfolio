import createToast from "../factory/createToast";

const copyToClipboard = (text) => {
  if (!navigator.clipboard || !text) return;
  return navigator.clipboard.writeText(text);
};

const setCopy = (text) => {
  copyToClipboard(text);
  createToast(text);
  return;
};

const copyEmail = () => setCopy("copied! – ottofy@zohomail.com");
const copyPhone = () => setCopy("copied! – 9709882548");
const initCopyElements = () => {
  document.querySelectorAll(".cm-copy--email").forEach(el => el.addEventListener("click", copyEmail));
  document.querySelectorAll(".cm-copy--phone").forEach(el => el.addEventListener("click", copyPhone));
};
export default initCopyElements;