import createToast from "./createToast";
const $ = document.querySelector.bind(document);

const copyToClipboard = (text) => {
  if (!navigator.clipboard || !text) return;
  return navigator.clipboard.writeText(text);
};

const setCopy = (text) => {
  copyToClipboard(text);
  createToast(text);
  return;
}

const copyEmail = () => setCopy("ottofy@zohomail.com");
const copyPhone = () => setCopy("9709882548");
const initCopyElements = () => {
  $(".copy-email").addEventListener("click", copyEmail);
  // $(".copy-phone").addEventListener("click", copyPhone);
}
export default initCopyElements;