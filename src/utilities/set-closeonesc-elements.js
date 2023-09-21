import useHandleModalOffset from '../hooks/handle-modal-offset';

const closeModalsOnEsc = (e) => {
  const openModals = document?.querySelectorAll('.act-modal');
  if (openModals === null) return;

  if (e.key === 'Escape' && openModals.length > 0) {
    useHandleModalOffset();
    for (const modal of openModals) {
      modal.remove();
    }
  }
};

/**
 * @description Each modal/popup has close on esc functionality that is handled here.
 */
const initCloseOnEscElements = () => {
  window.addEventListener('keydown', closeModalsOnEsc);
};

export default initCloseOnEscElements;
