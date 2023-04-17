const $$ = document.querySelectorAll.bind(document);

const speed = 40;
const fillmode = "both";
const introHeaders = $$(".intro-header__subtitle--text");

const glitch = (target) => {
  target.setAttribute("data-filling", "true");
  const text = target.getAttribute("data-text");
  const len = text.length;
  const randomArr = Array.from({ length: len }, (_, i) =>
    text[i] === " " ? "_" : ['X', '$', 'Y', '#', '?', '*', '0', '1', '+'][Math.floor(Math.random() * 9)]
  );
  const isEven = len % 2 === 0;
  for (let i = 0; i < len; i++) {
    setTimeout(() => {
      randomArr.splice(
        isEven ? len - i : len - i - 1,
        1,
        isEven ? text[len - i] : text[len - i - 1]
      );
      target.textContent = randomArr.join("");
    }, (i + 1) * 40);
  }
};

const initGlitch = () => {
  // introHeaders.forEach((el) => {
  //   el.setAttribute("data-filling", "false");
  //   el.setAttribute("data-text", el.textContent);
  //   glitch(el);
  // });
};

export default initGlitch;