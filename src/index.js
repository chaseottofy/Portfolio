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

import copyToClipboard from "./utilities/copyToClipboard";
import handleScroll from "./utilities/handleScroll";
// import handleTheme, { handleDefaultTheme } from "./utilities/handleTheme";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const handleCopyEmail = () => copyToClipboard('ottofy@zohomail.com');
const handleCopyPhone = () => copyToClipboard('9709882548');
const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

$(".copy-email").addEventListener("click", handleCopyEmail);
$(".copy-phone").addEventListener("click", handleCopyPhone);
$(".scroll-top").addEventListener("click", handleScrollTop);
window.addEventListener("scroll", handleScroll);