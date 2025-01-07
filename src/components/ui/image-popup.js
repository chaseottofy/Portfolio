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
  const body = document.querySelector('.body');
  const popupPicture = document.querySelector('.popup-picture');
  const popupPictureImgWrapper = popupPicture.querySelector('.popup-picture__imgwrapper');
  const clickHandler = {
    current: null,
  };

  const removePopup = () => {
    popupPictureImgWrapper?.querySelector('img')?.remove();
    popupPicture.dataset.activePopup = 'false';
    useHandleModalOffset();
    popupPicture.removeEventListener('click', clickHandler.current);
    closeOnEscManager.forceCleanup();
  };

  clickHandler.current = (e) => {
    const { target } = e;
    if (target && target.nodeType === 1 && target.closest('.popup-picture')) {
      removePopup();
    }
  };

  popupPictureImgWrapper.append(img);
  popupPicture.dataset.activePopup = 'true';
  useHandleModalOffset();
  if (body.style && body.style.paddingRight) {
    popupPicture.style.paddingRight = body.style.paddingRight;
  }
  popupPicture.addEventListener('click', clickHandler.current);
  closeOnEscManager.useCloseOnEsc(
    popupPicture.dataset.activePopup === 'true',
    removePopup,
  );
};

const createFullImagePopup = (img) => {
  configCreateFullImagePopup(img);
};

export default createFullImagePopup;
