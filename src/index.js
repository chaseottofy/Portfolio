import "./styles/root.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";
import copyToClipboard from "./utilities/copyToClipboard";


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $(".header");
// reverb thing fl studio
const handleCopyEmail = () => copyToClipboard('ottofy@zohomail.com');
const handleCopyPhone = () => copyToClipboard('9709882548');
const handlescroll = () => {
  window.pageYOffset > 0 ? header.classList.add("header-filter") : header.classList.remove("header-filter");
};

window.addEventListener("scroll", handlescroll);
$(".copy-email").onclick = handleCopyEmail;
$(".copy-phone").onclick = handleCopyPhone;