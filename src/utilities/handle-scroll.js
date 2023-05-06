const header = document.querySelector('.header');
const navMenuLinks = document.querySelectorAll('.nav-menu--link');

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const handleHrefScroll = (e) => {
  document.querySelector(`${e.target.getAttribute('href')}`).scrollIntoView({
    behavior: 'smooth',
  });
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
  document.querySelector('.header-logo').addEventListener('click', () => {
    scrollToTop();
  }, { passive: true });
};

export default initScroll;
