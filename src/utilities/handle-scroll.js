const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const initScroll = () => {
  const headerLogo = document.querySelector('.header-logo');
  const navMenuLinks = document.querySelectorAll('.nav-menu--link');
  const sectionContainers = document.querySelectorAll('.section-container');

  const handleHrefScroll = (e) => {
    sectionContainers[
      Number.parseInt(e.target.getAttribute('data-scroll-to'), 10)
    ].scrollIntoView({
      behavior: 'smooth',
    });
  };

  const configScroll = () => {
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
// const header = document.querySelector('.header');
// const introSection = document.querySelector('.intro-container');
// const sectionTitleProjects = document.querySelector('.section-projects-title');
// const floatingMenu = document.querySelector('.floating-menu');
// const floatFixed = 'floating-menu--fixed';
// const baseheaderHeight = 72;
// const handleHeaderFilter = () => {
//   const observerOptions = {
//     root: null,
//     rootMargin: -baseheaderHeight + 'px',
//     threshold: 0,
//   };
//   const observer = new IntersectionObserver((entries) => {
//     for (const entry of entries) {
//       if (entry.intersectionRatio <= 0) {
//         floatingMenu.classList.add(floatFixed);
//       } else {
//         floatingMenu.classList.remove(floatFixed);
//       }
//     }
//   }, observerOptions);
//   observer.observe(introSection);
// };

// const handlePageScroll = () => {
//   const calcBottom = baseheaderHeight + window.scrollY;
//   if (calcBottom >= window.innerHeight) {

//     // header.classList.add('header-filter');
//     floatingMenu.classList.add(floatFixed);
//   } else {
//     floatingMenu.classList.remove(floatFixed);
//     // header.classList.remove('header-filter');
//   }
// };