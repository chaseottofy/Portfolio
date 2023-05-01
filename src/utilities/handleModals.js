import createLHModal from '../factory/createLHModal';

const body = document.querySelector('.body');

// Lighthouse modal
const handleLHModal = () => {
  // buttons to trigger lighthouse modal
  const LHBtns = document.querySelectorAll('.lh-btn');
  const handleClose = () => {
    const lhwrapper = document.querySelector('.lighthouse-modal--wrapper');
    if (lhwrapper) {
      lhwrapper.remove();
      // body.removeEventListener('click', closeLH);
      // body.removeEventListener('keydown', closeLHOnEsc);
      body.onclick = null;
      body.onkeydown = null;
      body.removeAttribute('style');
    }
  };

  const closeLH = (e) => {
    if (e.target.closest('.lh-btn')) return;
    if (e.target.closest('.lighthouse-modal--wrapper') || e.target.closest('.close-lh-btn')) {
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
    body.appendChild(createLHModal(e.target.getAttribute('data-app-idx')));
    // body.addEventListener('click', closeLH);
    // body.addEventListener('keydown', closeLHOnEsc);
    body.onclick = closeLH;
    body.onkeydown = closeLHOnEsc;
    body.style.overflow = 'hidden';
  };

  LHBtns.forEach((btn) => btn.addEventListener('click', openLH));
};

const initModals = () => {
  handleLHModal();
};

export default initModals;
