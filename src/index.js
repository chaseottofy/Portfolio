import "./styles/root.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";
import copyToClipboard from "./utilities/copyToClipboard";


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $(".header");
const lines = $(".lines");
// reverb thing fl studio
const handleCopyEmail = () => copyToClipboard('ottofy@zohomail.com');
const handleCopyPhone = () => copyToClipboard('9709882548');
const handlescroll = () => {
  window.pageYOffset > 0 ? header.classList.add("header-filter") : header.classList.remove("header-filter");
};

const animateLines = () => {
  let opac = 40;
  let subtract = true;
  setInterval(() => {
    if (subtract) {
      opac--;
      if (opac === 10) {
        subtract = false;
      }
    }

    if (!subtract) {
      opac++;
      if (opac === 40) {
        subtract = true;
      }
    }

    lines.style.opacity = `.${opac}`
  }, 50)
}

window.addEventListener("scroll", handlescroll);
$(".copy-email").onclick = handleCopyEmail;
$(".copy-phone").onclick = handleCopyPhone;
animateLines();