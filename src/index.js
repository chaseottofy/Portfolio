import "./styles/root.css";
import "./styles/header.css";
import "./styles/main.css";
import "./styles/footer.css";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const header = $(".header");

const handlescroll = () => {
  if (window.pageYOffset > 0) {
    header.classList.add("header-filter");
  } else {
    header.classList.remove("header-filter");
  }
}
window.addEventListener("scroll", handlescroll);