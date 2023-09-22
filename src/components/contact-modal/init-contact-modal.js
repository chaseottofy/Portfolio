import createContactMenu from './contact-menu';
import useIsTouchDevice from '../../hooks/is-touch-device';

const initContactModal = () => {
  const navContactBtn = document.querySelector('.nav-multi__contact');
  const contactModal = document.querySelector('.contact-menu__header');

  const isUsingTouchDevice = useIsTouchDevice();
  if (isUsingTouchDevice) {
    return;
  }

  const contactMousemove = (e) => {
    if (e.target && e.target.nodeType === 1) {
      if (e.target.closest('.contact-menu__header') || e.target.closest('.nav-multi__contact')) return;

      if (contactModal.firstElementChild) {
        contactModal.firstElementChild.remove();
      }

      contactModal.dataset.contactMenuDisabled = 'true';
      navContactBtn.dataset.contactMenuOpen = 'false';
      window.removeEventListener('mousemove', contactMousemove);
    }
  };

  const openContactMenu = () => {
    if (window.innerWidth <= 720) return;
    const isContactMenuOpen = contactModal.dataset.contactMenuDisabled === 'false';
    if (isContactMenuOpen) return;

    const { bottom } = navContactBtn.getBoundingClientRect();
    const modalTop = Number.parseFloat(bottom.toFixed(2)) - 10;
    contactModal.style.top = `${modalTop}px`;
    contactModal.append(createContactMenu());
    contactModal.dataset.contactMenuDisabled = 'false';
    navContactBtn.dataset.contactMenuOpen = 'true';
    window.addEventListener('mousemove', contactMousemove);
  };

  navContactBtn.addEventListener('mouseenter', openContactMenu);
};

export default initContactModal;
