import "./styles/root.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";
import copyToClipboard from "./utilities/copyToClipboard";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const header = $(".header");
const lines = $(".lines");
const scrollTop = $(".scroll-top");
// reverb thing fl studio
const handleCopyEmail = () => copyToClipboard('ottofy@zohomail.com');
const handleCopyPhone = () => copyToClipboard('9709882548');

const handlescroll = () => {
  if (window.pageYOffset > 0) {
    header.classList.add("header-filter");
    scrollTop.classList.remove("hide-scroll-top");
  } else {
    header.classList.remove("header-filter");
    scrollTop.classList.add("hide-scroll-top");
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
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

    lines.style.opacity = `.${opac}`;
  }, 50);
};

window.addEventListener("scroll", handlescroll);
$(".copy-email").onclick = handleCopyEmail;
$(".copy-phone").onclick = handleCopyPhone;
scrollTop.onclick = scrollToTop;
animateLines();