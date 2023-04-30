const toastWrapper = document.querySelector(".toast-wrapper");

let toastIndex = 0;
const handleToasts = () => {
  if (toastWrapper.children.length >= 4) {
    toastWrapper.removeChild(toastWrapper.children[toastWrapper.children.length - 1]);
  }

  for (let i = 0; i < toastWrapper.children.length; i++) {
    const toast = toastWrapper.children[i];
    const idx = +toast.getAttribute("toast-idx");
    if (idx === 4) {
      toast.classList.add("hide-toast");
    }
    toast.setAttribute("class", `toast toast--${i + 1}`);
    toast.style.zIndex = 9000 - i;
    toast.style.bottom = `${i + 2}rem`;
  }
};

const createToast = (text) => {
  if (toastIndex <= 3) { toastIndex++; }

  let width = 0;
  const wrapper = document.createElement("aside");
  wrapper.classList.add("toast");
  wrapper.style.zIndex = 9000;
  wrapper.style.bottom = '2rem';
  wrapper.setAttribute("toast-idx", toastIndex);

  const progressbar = document.createElement("span");
  progressbar.classList.add("toast-progress");
  progressbar.style.width = `${width}%`;

  const progresstrack = document.createElement("span");
  progresstrack.classList.add("toast-progress--length");

  const message = document.createElement("span");
  message.classList.add("toast-message");
  message.textContent = `${text}`;

  wrapper.append(progressbar, progresstrack, message);
  toastWrapper.prepend(wrapper);
  handleToasts();

  setInterval(() => {
    width++;
    progressbar.style.width = `${width}%`;
    if (width === 100) {
      wrapper.remove();
      if (toastIndex > 0) { toastIndex--; }
      clearInterval();
    }
  }, 10);
};

export default createToast;