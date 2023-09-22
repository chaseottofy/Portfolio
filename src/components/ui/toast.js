import handleState from '../../hooks/handle-state';
import createButton from './button';

const toastWrapper = document.querySelector('.toast-wrapper');

const handleToasts = () => {
  if (toastWrapper.children.length >= 4) {
    toastWrapper.lastElementChild.remove();
  }

  for (let i = 0; i < toastWrapper.children.length; i += 1) {
    const toast = toastWrapper.children[i];
    const idx = +toast.getAttribute('toast-idx');
    if (idx === 4) {
      toast.classList.add('hide-toast');
    }
    toast.setAttribute('class', `toast toast--${i + 1}`);
    toast.style.zIndex = 9000 - i;
    toast.style.bottom = `${i + 2}rem`;
  }
};

/**
 *
 * @param {string} text Message to display in toast
 * @param {string} pre Optional prefix to display before message
 */
const createToast = (text, pre, type = 'default', time = 2) => {
  const [toastIndex, setToastIndex] = handleState(0);
  const parseType = ['default', 'success', 'error'].includes(type) ? type : 'default';

  if (toastIndex() <= 3) {
    setToastIndex(toastIndex() + 1);
  }

  let width = 0;
  const wrapper = document.createElement('aside');
  wrapper.classList.add('toast');
  wrapper.dataset.toastType = parseType;
  wrapper.style.zIndex = 9000;
  wrapper.style.bottom = '2rem';
  wrapper.setAttribute('toast-idx', toastIndex());

  const progressbar = document.createElement('span');
  progressbar.classList.add('toast-progress');
  progressbar.style.width = `${width}%`;

  const progresstrack = document.createElement('span');
  progresstrack.classList.add('toast-progress--length');

  const toastBody = document.createElement('div');
  toastBody.classList.add('toast-body');

  const message = document.createElement('span');
  message.classList.add('toast-message');
  message.textContent = pre ? `${pre} ${text}` : `${text}`;

  const closeBtn = createButton('x', 'toast-close', 'close toast', 'button');
  closeBtn.addEventListener('click', () => {
    wrapper.remove();
    if (toastIndex() > 0) {
      setToastIndex(toastIndex() - 1);
    }
  });

  toastBody.append(message, closeBtn);
  wrapper.append(progressbar, progresstrack, toastBody);
  toastWrapper.prepend(wrapper);
  handleToasts();

  setInterval(() => {
    width += 1;
    progressbar.style.width = `${width}%`;
    if (width === 100) {
      wrapper.remove();
      if (toastIndex() > 0) {
        setToastIndex(toastIndex() - 1);
      }
      clearInterval();
    }
  }, 10 * time);
};

export default createToast;
