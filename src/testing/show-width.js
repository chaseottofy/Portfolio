/**
 * createShowWidthElement
 * @description creates div in upper right corner that shows window width
 * **not for production**
 */
const createShowWidthElement = () => {
  const showWidth = document.createElement('div');
  showWidth.classList.add('show-screen--width');
  showWidth.setAttribute('style', 'position:fixed;top:0;right:5%;pointer-events: none;z-index:9999;font-size:.75rem;width:100%;text-align:right;color:#0761d1;font-weight:500;');
  showWidth.textContent = window.innerWidth;
  document.body.append(showWidth);
  window.addEventListener('resize', () => {
    showWidth.textContent = window.innerWidth;
  });
};

export default createShowWidthElement;