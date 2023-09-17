import createContactMenu from '../template/create-contactmenu';

const configContactMenu = () => {
  const navContactBtn = document.querySelector('.nav-multi__contact');

  const contactMousemove = (e) => {
    if (
      !e
      || !e.target
      || e.target.closest('.contact-menu__header')
      || e.target.closest('.nav-multi__contact')
    ) return;

    document?.querySelector('.contact-menu__header')?.remove();
    navContactBtn?.firstElementChild?.classList.remove('nav-menu--contact--active');
    window.removeEventListener('mousemove', contactMousemove);
  };

  const openContactMenu = () => {
    if (window.innerWidth <= 640) return;

    if (navContactBtn?.firstElementChild?.classList.contains('nav-menu--contact--active')) return;

    createContactMenu();
    navContactBtn?.firstElementChild?.classList.add('nav-menu--contact--active');
    window.addEventListener('mousemove', contactMousemove);
  };

  navContactBtn.addEventListener('mouseenter', openContactMenu);
};

const initHover = () => {
  configContactMenu();
};

export default initHover;
