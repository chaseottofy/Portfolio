const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const initScroll = () => {
  const header = document.querySelector('.header');
  const headerLogo = document.querySelector('.header-logo');
  const navMenuLinks = document.querySelectorAll('.nav-menu--link');
  const introSection = document.querySelector('.intro-container');
  const sectionContainers = document.querySelectorAll('.section-container');

  const handleHeaderFilter = () => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.intersectionRatio <= 0) {
          header.classList.add('header-filter');
        } else {
          header.classList.remove('header-filter');
        }
      }
    }, observerOptions);

    observer.observe(introSection);
  };

  const handleHrefScroll = (e) => {
    sectionContainers[
      Number.parseInt(e.target.getAttribute('data-scroll-to'), 10)
    ].scrollIntoView({
      behavior: 'smooth',
    });
  };

  const handlePageScroll = () => {
    if (window.scrollY > window.innerHeight) {
      header.classList.add('header-filter');
    } else {
      header.classList.remove('header-filter');
    }
  };

  const configScroll = () => {
    handlePageScroll();
    handleHeaderFilter();
    // click nav list item links to scroll to section
    for (const link of navMenuLinks) {
      link.addEventListener('click', handleHrefScroll, {
        passive: true,
      });
    }
    // click header logo to scroll to top of page
    headerLogo.addEventListener('click', scrollToTop, {
      passive: true,
    });
  };

  configScroll();
};

export default initScroll;
