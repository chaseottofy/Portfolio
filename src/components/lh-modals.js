import createLHModal from '../template/create-lhmodal';

import getScrollBarWidth from '../utilities/get-scrollbarwidth';

const body = document.querySelector('.body');
const header = document.querySelector('.header');
// buttons to trigger lighthouse modal (project card "View Full Overview")
const LHBtns = document.querySelectorAll('.open-lh--btn');
const lhWrapper = document.querySelector('.lighthouse-modal--wrapper');

const handleLHModal = () => {
  const handleLHClose = () => {
    lhWrapper.firstElementChild.remove();
    lhWrapper.classList.add('hide-lh-modal');

    // eslint-disable-next-line no-use-before-define
    lhWrapper.removeEventListener('click', closeLH);
    // eslint-disable-next-line no-use-before-define
    window.removeEventListener('keydown', closeLHOnEsc);

    body.removeAttribute('style');
    body.classList.remove('body-prevent-scroll');
    header.removeAttribute('style');
  };

  const closeLH = (e) => {
    if (e.target.classList.contains('lighthouse-modal--wrapper')
      || e.target.closest('.close-lh-btn')) {
      handleLHClose();
    }
  };

  const closeLHOnEsc = (e) => {
    if (e.key === 'Escape') {
      handleLHClose();
    }
  };

  const openLH = (e) => {
    if (!lhWrapper.classList.contains('hide-lh-modal')) return;

    createLHModal(e.target.getAttribute('data-lh-proj'));

    lhWrapper.addEventListener('click', closeLH);
    window.addEventListener('keydown', closeLHOnEsc);

    body.classList.add('body-prevent-scroll');
    body.style.paddingRight = `${getScrollBarWidth()}px`;
    header.style.paddingRight = `${getScrollBarWidth()}px`;
  };

  for (const btn of LHBtns) {
    btn.addEventListener('click', openLH);
  }
};

const initLHModal = () => {
  handleLHModal();
};

export default initLHModal;
