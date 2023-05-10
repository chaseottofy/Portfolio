const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header-logo');
const navMenuLinks = document.querySelectorAll('.nav-menu--link');

const projectsCont = document.querySelector('.projects-container');
const skillsCont = document.querySelector('.skills-container');
const aboutCont = document.querySelector('.about-container');
const contactCont = document.querySelector('.contact-container');
const sectionContainers = [
  projectsCont, skillsCont, aboutCont, contactCont,
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const handleHrefScroll = (e) => {
  sectionContainers[
    Number(e.target.getAttribute('data-scroll-to'))
  ].scrollIntoView({ behavior: 'smooth' });
};

const handlePageScroll = () => {
  if (window.pageYOffset > window.innerHeight) {
    header.classList.add('header-filter');
  } else {
    header.classList.remove('header-filter');
  }
};

const initScroll = () => {
  handlePageScroll();
  window.addEventListener('scroll', handlePageScroll, { passive: true });

  // click nav list item links to scroll to section
  for (const link of navMenuLinks) {
    link.addEventListener('click', handleHrefScroll, { passive: true });
  }

  // click header logo to scroll to top of page
  headerLogo.addEventListener('click', () => {
    scrollToTop();
  }, { passive: true });
};

export default initScroll;
