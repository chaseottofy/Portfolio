// !!REMINDER
// reverb thing fl studio
// set svgs to reasonable inline size
import "./styles/root.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";
import "./styles/aside/scrolltop.css";
import "./styles/aside/themeMenu.css";
import "./styles/aside/contactMenu.css";
import "./styles/aside/toast.css";
import "./styles/gradientElements/headerGradient.css";
import "./styles/gradientElements/dividerGradient.css";

import delegateTheme, { initTheme } from "./utilities/handleTheme";
import handleScroll from "./utilities/handleScroll";
import initCopy from "./utilities/copyToClipboard";
import setMenuLinks from "./utilities/handleMenuLinks";


const $ = document.querySelector.bind(document);

window.addEventListener("load", initTheme, { once: true });
window.addEventListener("scroll", handleScroll);

$(".theme-switch").addEventListener("click", delegateTheme);

$(".scroll-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

initCopy();
setMenuLinks();