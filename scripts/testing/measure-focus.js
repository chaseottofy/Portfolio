/**
 * DEV
 * Measure focus
 * @description log any focus events to the console (includes tabbing/clicking)
 */
const measureFocus = () => {
  document.addEventListener('focusin', function () {
    console.log('focused: ', document.activeElement);
  }, true);
};

export default measureFocus;