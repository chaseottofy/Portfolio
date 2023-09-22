const useThrottle = (fn, wait) => {
  let inThrottle;
  let lastFn;
  let lastTime;

  return function throttled(...args) {
    // eslint-disable-next-line  unicorn/no-negated-condition
    if (!inThrottle) {
      fn.apply(this, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(this, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

export default useThrottle;
