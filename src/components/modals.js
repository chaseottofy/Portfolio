import createLHModal from '../template/createLHModal';

import getScrollBarWidth from '../utilities/getScrollbarWidth';

const body = document.querySelector('.body');
const header = document.querySelector('.header');

const handleLHModal = () => {
  // buttons to trigger lighthouse modal
  const LHBtns = document.querySelectorAll('.lh-btn');
  const handleClose = () => {
    const lhwrapper = document.querySelector('.lighthouse-modal--wrapper');
    if (lhwrapper) {
      lhwrapper.remove();
      body.onclick = null;
      body.onkeydown = null;
      body.removeAttribute('style');
      body.classList.remove('body-prevent-scroll');
      header.removeAttribute('style');
    }
  };

  const closeLH = (e) => {
    if (e.target.closest('.lh-btn')) return;
    if (e.target.closest('.lighthouse-modal--wrapper')
      || e.target.closest('.close-lh-btn')) {
      handleClose();
    }
  };

  const closeLHOnEsc = (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  const openLH = (e) => {
    if (document.querySelector('.lighthouse-modal--wrapper')) return;
    e.target.classList.add('project-cell--lhbtn-active');
    const proj = e.target.getAttribute('data-lh-proj');
    body.appendChild(createLHModal(proj));
    body.onclick = closeLH;
    body.onkeydown = closeLHOnEsc;
    body.classList.add('body-prevent-scroll');
    body.style.paddingRight = `${getScrollBarWidth()}px`;
    header.style.paddingRight = `${getScrollBarWidth()}px`;
  };

  LHBtns.forEach((btn) => btn.addEventListener('click', openLH));
};

const initModals = () => {
  handleLHModal();
};

export default initModals;
