// !!REMINDER
// reverb thing fl studio
// set svgs to reasonable inline size
import "./styles/root.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";

import "./styles/gradientElements/headerGradient.css";
import "./styles/gradientElements/dividerGradient.css";

import "./styles/sections/intro.css";
import "./styles/sections/projects.css";
import "./styles/sections/skills.css";
import "./styles/sections/about.css";
import "./styles/sections/contact.css";

import "./styles/aside/scrolltop.css";
import "./styles/aside/themeMenu.css";
import "./styles/aside/contactMenu.css";
import "./styles/aside/toast.css";

import handleTheme, { setInitialTheme } from "./utilities/handleTheme";
import handleScroll from "./utilities/handleScroll";
import setCopyElements from "./utilities/handleCopy";
import setMenuLinks from "./utilities/handleMenuLinks";

const $ = document.querySelector.bind(document);

setInitialTheme();
handleTheme();
setCopyElements();
setMenuLinks();
window.addEventListener("scroll", handleScroll);
$(".scroll-top--btn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});