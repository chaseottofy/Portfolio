import useHandleModalOffset from '../../hooks/handle-modal-offset';

const createFullImagePopup = (img) => {
  const popup = document.createElement('div');
  popup.classList.add('popup-picture', 'act-modal');
  const popupHeader = document.createElement('div');
  popupHeader.classList.add('popup-picture__header');
  const popupHeaderContent = document.createElement('div');
  popupHeaderContent.classList.add('popup-picture__header-content');
  const imageInfo = document.createElement('span');
  imageInfo.classList.add('popup-picture__info');
  imageInfo.textContent = 'click anywhere to close';

  const imgWrapper = document.createElement('div');
  imgWrapper.classList.add('popup-picture__imgwrapper');

  popupHeaderContent.append(imageInfo);
  popupHeader.append(popupHeaderContent);
  imgWrapper.append(img);
  popup.append(popupHeader, imgWrapper);
  document.body.append(popup);
  useHandleModalOffset(popup);
  popup.addEventListener('click', () => {
    popup.remove();
    useHandleModalOffset();
  });
};

export default createFullImagePopup;
