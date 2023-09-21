/**
 * DEV
 * measureWidth
 * @description creates div in upper right corner that shows window width
 * **not for production**
 */
const measureWidth = () => {
  const showWidth = document.createElement('div');
  showWidth.classList.add('show-screen--width');
  showWidth.setAttribute('style', 'position:fixed;top:0;right:5%;pointer-events: none;z-index:9999;font-size:.8rem;width:100%;text-align:right;color:#0761d1;font-weight:600;');
  showWidth.textContent = window.innerWidth;
  document.body.append(showWidth);
  window.addEventListener('resize', () => {
    showWidth.textContent = window.innerWidth;
  });
};

export default measureWidth;