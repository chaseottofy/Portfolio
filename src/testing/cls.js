/**
 * Cumulative Layout Shift (CLS)
 * @description log any layout shifts to the console 
 * **not on initial page load**
 * **not for production**
 */
const initCls = () => {
  let cls = 0;
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (!entry.hadRecentInput) {
        cls += entry.value;
        console.log('Current CLS value:', cls, entry);
      }
    }
  }).observe({ type: 'layout-shift', buffered: true });
};

export default initCls;