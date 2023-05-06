import contactMenuLazy from './handle-images';

const navContactBtn = document.querySelector('.nav-multi__contact');
const contactMenu = document.querySelector('.contact-menu');

const configContactMenu = () => {
  const contactMousemove = (e) => {
    if (
      !e
      || !e.target
      || e.target.closest('.contact-menu')
      || e.target.closest('.nav-multi__contact')
    ) return;

    contactMenu.classList.remove('contact-menu--active');
    navContactBtn.firstChild.classList.remove('nav-menu--contact--active');
    window.removeEventListener('mousemove', contactMousemove);
  };

  const openContactMenu = () => {
    if (window.innerWidth <= 640) return;
    // load contact menu images
    contactMenuLazy();

    // contact menu is open
    if (contactMenu.classList.contains('contact-menu--active')) return;
    contactMenu.classList.add('contact-menu--active');
    navContactBtn.firstChild.classList.add('nav-menu--contact--active');
    window.addEventListener('mousemove', contactMousemove);
  };

  navContactBtn.addEventListener('mouseenter', openContactMenu);
};

const initHover = () => {
  configContactMenu();
};

export default initHover;
