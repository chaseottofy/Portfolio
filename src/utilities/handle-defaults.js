import initCopyElements from './set-copy-elements';
import initDateTimeElements from './set-date-time-elements';
import initDisableOnLoadElements from './set-disableonload-elements';
import initMailtoElements from './set-mailto-elements';
import initTheme from './set-theme';
import initTooltipElements from './set-tooltip-elements';

/**
 * The majority of content is already in the DOM on page load.
 * However, some of that content needs JavaScript to be fully functional.
 * None of these elements are critical to the user experience, all of them
 * are essentially enhancements.
 *
 * Funcionality set here:
 * - Disable transition effects and smooth scrolling on page load
 * - Contact section will reflect my local time and update on the minute
 * - Mail to links receive additional attributes that allow me to set the subject line
 * - Check if browser supports clipboard API, if so, add copy to clipboard functionality
 * - Set theme to 'dark' and allow user to toggle between 'dark' and 'light'
 */
const initDefaults = () => {
  initDisableOnLoadElements();
  initDateTimeElements();
  initTooltipElements();
  initMailtoElements();
  initCopyElements();
  initTheme();
};

export default initDefaults;
