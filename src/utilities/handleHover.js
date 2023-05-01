import contactMenuLazy from './handleImages';

const navContactBtn = document.querySelector('.nav-multi__contact');
const contactMenu = document.querySelector('.contact-menu');

const initContactMenu = () => {
  const closeContactMenu = () => {
    contactMenu.classList.remove('contact-menu--active');
    navContactBtn.firstChild.classList.remove('nav-menu--contact--active');
    window.onmousemove = null;
  };

  const contactMousemove = (e) => {
    // if e === #text or null, return
    if (!e || !e.target) return;
    // only allow contact button & menu to be hovered over.
    if (
      e.target.closest('.contact-menu')
      || e.target.closest('.nav-multi__contact')
    ) return;

    closeContactMenu();
  };

  const openContactMenu = () => {
    if (window.innerWidth <= 768) return;
    contactMenuLazy();
    if (contactMenu.classList.contains('contact-menu--active')) return;

    contactMenu.classList.add('contact-menu--active');
    navContactBtn.firstChild.classList.add('nav-menu--contact--active');
    window.onmousemove = contactMousemove;
  };

  navContactBtn.onmouseenter = openContactMenu;
};

const initHover = () => {
  initContactMenu();
};

export default initHover;
