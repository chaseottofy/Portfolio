// reverb thing fl studio
import "./styles/root.css";
import "./styles/header.css";
import "./styles/main.css";
import copyToClipboard from "./utilities/copyToClipboard";
// import handleTheme, { handleDefaultTheme } from "./utilities/handleTheme";
import handleScroll from "./utilities/handleScroll";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const handleCopyEmail = () => copyToClipboard('ottofy@zohomail.com');
const handleCopyPhone = () => copyToClipboard('9709882548');
const handleScrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

$(".copy-email").addEventListener("click", handleCopyEmail);
$(".copy-phone").addEventListener("click", handleCopyPhone);
$(".scroll-top").addEventListener("click", handleScrollTop);
window.addEventListener("scroll", handleScroll);