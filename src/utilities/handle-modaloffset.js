import getScrollBarWidth from './get-scrollbarwidth';

/**
 * handleModalOffset
 * @param {Element} body document.body
 * @param {Element} header <header>
 * @description Prevents scrolling while modal is open.
 * Adds padding to body and header to prevent page from shifting.
 */
const handleModalOffset = (element) => {
  const body = document.querySelector('.body');
  const header = document.querySelector('.header');
  if (body.classList.contains('body-prevent-scroll')) {
    body.dataset.activeModal = 'false';
    body.classList.remove('body-prevent-scroll');
    body.removeAttribute('style');
    header.removeAttribute('style');
  } else {
    const offsetscroll = `${getScrollBarWidth()}px`;
    body.dataset.activeModal = 'true';
    body.classList.add('body-prevent-scroll');
    body.style.paddingRight = offsetscroll;
    header.style.paddingRight = offsetscroll;
    if (element) {
      // eslint-disable-next-line no-param-reassign
      element.style.paddingRight = offsetscroll;
    }
  }
};

export default handleModalOffset;
