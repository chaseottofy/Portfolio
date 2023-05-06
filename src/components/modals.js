import createLHModal from '../template/create-lhmodal';

import getScrollBarWidth from '../utilities/get-scrollbarwidth';

const body = document.querySelector('.body');
const header = document.querySelector('.header');
// buttons to trigger lighthouse modal
const LHBtns = document.querySelectorAll('.lh-btn');
const lhWrapper = document.querySelector('.lighthouse-modal--wrapper');

const handleLHModal = () => {
  const closeLH = (e) => {
    if (e.target.classList.contains('lighthouse-modal--wrapper')
      || e.target.closest('.close-lh-btn')) {
      lhWrapper.firstElementChild.remove();
      lhWrapper.removeEventListener('click', closeLH);
      lhWrapper.classList.add('hide-lh-modal');
      body.removeAttribute('style');
      body.classList.remove('body-prevent-scroll');
      header.removeAttribute('style');
    }
  };

  const openLH = (e) => {
    if (!lhWrapper.classList.contains('hide-lh-modal')) return;
    const proj = e.target.getAttribute('data-lh-proj');
    createLHModal(proj);
    body.classList.add('body-prevent-scroll');
    lhWrapper.addEventListener('click', closeLH);
    body.style.paddingRight = `${getScrollBarWidth()}px`;
    header.style.paddingRight = `${getScrollBarWidth()}px`;
  };

  for (const btn of LHBtns) {
    btn.addEventListener('click', openLH);
  }
};

const initModals = () => {
  handleLHModal();
};

export default initModals;
