import createFullImagePopup from '../ui/image-popup';

const handlePopupImage = (e) => {
  const imgWrapper = e.target.closest('picture');
  if (!imgWrapper) return;
  const targetImg = imgWrapper?.lastElementChild;
  if (!targetImg) return;

  const swapImg = new Image();
  swapImg.src = targetImg.currentSrc;
  swapImg.alt = targetImg.alt || 'project image';
  swapImg.loading = 'eager';
  createFullImagePopup(swapImg);
};

export default handlePopupImage;
