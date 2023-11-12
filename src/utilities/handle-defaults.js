import initCopyElements from './set-copy-elements';
import initDateTimeElements from './set-date-time-elements';
import initDisableOnLoadElements from './set-disableonload-elements';
import initMailtoElements from './set-mailto-elements';
import initSectionExcerpts from './set-section-excerpts';
import initTooltipElements from './set-tooltip-elements';

/**
 * This function calls a series of functions that give
 * elements already in the DOM their functionality or content
 *
 * @function initCopyElements - set copy to clipboard functionality
 * @function initDisableOnLoadElements - disable transition effects and smooth scrolling on load
 * @function initDateTimeElements - set contact time to update on the minute and reflect my time
 * @function initMailtoElements - set mail to links to include subject line
 * @function initSectionExcerpts - set the content of the section excerpts
 * @function initTooltipElements - give elements with a data-tooltip attribute a custom tooltip
 */
const initDefaults = () => {
  initCopyElements();
  initDisableOnLoadElements();
  initDateTimeElements();
  initMailtoElements();
  initSectionExcerpts();
  initTooltipElements();
};

export default initDefaults;
