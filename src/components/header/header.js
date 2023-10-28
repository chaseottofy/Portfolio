const configHeaderTwo = () => {
  const header = document.querySelector('.header');
  if (!header) return;
  const introRef = document.querySelector('.intro-observer-ref');
  const options = {
    root: null, // using the viewport as the root
    rootMargin: '0px', // no margins
    threshold: 1, // 100% of the target's visibility
  };

  const introObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        header.classList.remove('header-has--background');
      } else {
        header.classList.add('header-has--background');
      }
    }
  }, options);

  introObserver.observe(introRef);
};

const initHeader = () => {
  configHeaderTwo();
};

export default initHeader;
