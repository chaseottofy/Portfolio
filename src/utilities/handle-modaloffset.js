import getScrollBarWidth from './get-scrollbarwidth';

/**
 * handleModalOffset
 * @param {Element} body document.body
 * @param {Element} header <header>
 * @description Prevents scrolling while modal is open.
 * Adds padding to body and header to prevent page from shifting.
 */
const handleModalOffset = () => {
  const body = document.querySelector('.body');
  const header = document.querySelector('.header');
  const offsetscroll = `${getScrollBarWidth()}px`;
  body.classList.add('body-prevent-scroll');
  body.style.paddingRight = offsetscroll;
  header.style.paddingRight = offsetscroll;
};

export default handleModalOffset;
