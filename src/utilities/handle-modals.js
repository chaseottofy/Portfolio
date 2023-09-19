import handleModalOffset from './handle-modaloffset';

const closeModalsOnEsc = (e) => {
  const cname = 'act-modal';
  const modalC = document?.querySelectorAll(`.${cname}`);
  console.log(modalC);
  if (e.key === 'Escape' && modalC.length !== 0) {
    handleModalOffset();
    modalC.forEach((modal) => {
      modal.remove();
    });
  }
};

/**
 * @description Each modal/popup has close on esc functionality that is handled here.
 */
const initHandleModals = () => {
  window.addEventListener('keydown', closeModalsOnEsc);
}

export default initHandleModals;
