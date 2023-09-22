import initDisableOnLoadElements from './set-disableonload-elements';
import initCloseOnEscElements from './set-closeonesc-elements';
import initDateTimeElements from './set-date-time-elements';
import initTooltipElements from './set-tooltip-elements';
import initMailtoElements from './set-mailto-elements';
import initCopyElements from './set-copy-elements';
import initTheme from './set-theme';

/**
 * The majority of content is already in the DOM on page load.
 * However, some of that content needs JavaScript to be fully functional.
 * None of these elements are critical to the user experience, all of them
 * are essentially enhancements.
 *
 * Funcionality set here:
 * - Disable transition effects and smooth scrolling on page load
 * - Allow modals to be closed by pressing escape key
 * - Contact section will reflect my local time and update on the minute
 * - Mail to links receive additional attributes that allow me to set the subject line
 * - Check if browser supports clipboard API, if so, add copy to clipboard functionality
 * - Set theme to 'dark' and allow user to toggle between 'dark' and 'light'
 */
const initDefaults = () => {
  initDisableOnLoadElements();
  initCloseOnEscElements();
  initDateTimeElements();
  initTooltipElements();
  initMailtoElements();
  initCopyElements();
  initTheme();
};

export default initDefaults;
