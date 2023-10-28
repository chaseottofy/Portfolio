import closeOnEscManager from '../../hooks/handle-closeonesc';
import useHandleModalOffset from '../../hooks/handle-modal-offset';

/**
 * Allows images in the project section to be clicked on and
 * viewed in their full size as a popup
 *
 * @param {HTMLImageElement} img
 * @returns {void}
 */
const configCreateFullImagePopup = (img) => {
  const popupPicture = document.querySelector('.popup-picture');
  const popupPictureImgWrapper = popupPicture.querySelector('.popup-picture__imgwrapper');

  const removePopup = () => {
    popupPictureImgWrapper?.querySelector('img')?.remove();
    popupPicture.dataset.activePopup = 'false';
    useHandleModalOffset();
    // eslint-disable-next-line no-use-before-define
    popupPicture.removeEventListener('click', handleClosePopupOnClick);
    closeOnEscManager.forceCleanup();
  };

  const handleClosePopupOnClick = (e) => {
    const { target } = e;
    if (target && target.nodeType === 1 && target.closest('.popup-picture')) {
      removePopup();
    }
  };

  popupPictureImgWrapper.append(img);
  popupPicture.dataset.activePopup = 'true';
  useHandleModalOffset(popupPicture);
  popupPicture.addEventListener('click', handleClosePopupOnClick);
  closeOnEscManager.useCloseOnEsc(
    popupPicture.dataset.activePopup === 'true',
    removePopup,
  );
};

const createFullImagePopup = (img) => {
  configCreateFullImagePopup(img);
};

export default createFullImagePopup;
