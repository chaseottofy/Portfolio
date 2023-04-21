import createToast from "../factory/createToast";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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
  $$(".cm-copy--email").forEach(el => {
    el.addEventListener("click", copyEmail);
  });
  $$(".cm-copy--phone").forEach(el => {
    el.addEventListener("click", copyPhone);
  });
  // $(".intro-copy--phone").addEventListener("click", copyPhone);
};
export default initCopyElements;