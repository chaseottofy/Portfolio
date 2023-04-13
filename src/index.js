// !!REMINDER
// reverb thing fl studio
// set svgs to reasonable inline size
import "./styles/root.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";
import "./styles/aside/scrolltop.css";
import "./styles/gradientElements/headerGradient.css";
import "./styles/gradientElements/dividerGradient.css";

import delegateTheme, { initTheme } from "./utilities/handleTheme";
import handleScroll from "./utilities/handleScroll";
import copyToClipboard from "./utilities/copyToClipboard";
const $ = document.querySelector.bind(document);

window.addEventListener("load", initTheme, { once: true });
window.addEventListener("scroll", handleScroll);
$(".theme-switch").addEventListener("click", delegateTheme);
$(".copy-email").addEventListener("click", () => {
  copyToClipboard('ottofy@zohomail.com');
});
$(".copy-phone").addEventListener("click", () => {
  copyToClipboard('9709882548');
});
$(".scroll-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});