const initDisableOnLoadElements = () => {
  const body = document.querySelector('body');
  // const root = document.querySelector('html');
  setTimeout(() => {
    body.dataset.disableTransitions = false;
    // root.style.scrollBehavior = 'smooth';
  }, 200);
};

export default initDisableOnLoadElements;
