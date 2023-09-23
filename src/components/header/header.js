import handleState from '../../hooks/handle-state';
import useThrottle from '../../hooks/throttle';

// fade the header background in until the bottom of the intro section is reached
// fade out the header background until the top of the intro section is reached
const configHeader = () => {
  const [desiredOpacity, throttleLimit] = [0.9, 80];
  const [hasBackground, setHasBackground] = handleState(false);
  const header = document.querySelector('.header');
  const intro = document.querySelector('.intro-container');
  const { offsetHeight: introHeight } = intro;
  const { offsetHeight: headerHeight } = header;
  if (!header) return;

  const { innerHeight } = window;
  const fadeThreshold = Number.parseFloat(
    (((introHeight - headerHeight) / innerHeight) * innerHeight).toFixed(2),
  );

  const setHeaderBackground = () => {
    const { scrollY } = window;
    if (scrollY > fadeThreshold) {
      // use a flag to prevent unnecessary style changes
      if (hasBackground()) return;
      // eslint-disable-next-line unicorn/consistent-destructuring
      header.style.backgroundColor = `rgba(0,0,0,${desiredOpacity})`;
      setHasBackground(true);
      return;
    }
    const opacity = +(((scrollY / fadeThreshold) * desiredOpacity).toFixed(2));
    // eslint-disable-next-line unicorn/consistent-destructuring
    header.style.backgroundColor = `rgba(0,0,0,${opacity})`;
    setHasBackground(false);
  };

  setHeaderBackground();
  const throttledSetHeaderBackground = useThrottle(setHeaderBackground, throttleLimit);
  window.addEventListener('scroll', throttledSetHeaderBackground, { passive: true });
};

const initHeader = () => {
  configHeader();
};

export default initHeader;
