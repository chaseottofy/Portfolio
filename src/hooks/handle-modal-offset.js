const getScrollBarWidth = () => {
  const temp = document.createElement('div');
  temp.classList.add('scrollbar-measure');
  document.body.append(temp);
  const width = temp.offsetWidth - temp.clientWidth;
  temp.remove();
  return width;
};

/**
 * handleModalOffset
 * @param {Element} body document.body
 * @param {Element} header <header>
 * @description Prevents scrolling while modal is open.
 * Adds padding to body and header to prevent page from shifting.
 */
const useHandleModalOffset = (element) => {
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
      element.style.paddingRight = offsetscroll;
    }
  }
};

export default useHandleModalOffset;
