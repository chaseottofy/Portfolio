import initCopyElements from './set-copy-elements';
import initDateTimeElements from './set-date-time-elements';
import initMailtoElements from './set-mailto-elements';
import initTooltipElements from './set-tooltip-elements';

/**
 * This function calls a series of functions that give
 * elements already in the DOM their functionality or content
 *
 * @function initCopyElements - set copy to clipboard functionality
 * @function initDateTimeElements - set contact time to update on the minute and reflect my time
 * @function initMailtoElements - set mail to links to include subject line
 * @function initSectionExcerpts - set the content of the section excerpts
 * @function initTooltipElements - give elements with a data-tooltip attribute a custom tooltip
 */
const initDefaults = () => {
  initCopyElements();
  initDateTimeElements();
  initMailtoElements();
  initTooltipElements();

  // const header = document.querySelector('.header');
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       header.classList.remove('header-active');
  //     } else {
  //       header.classList.add('header-active');
  //     }
  //   });
  // }, { threshold: 0.5 });
  // observer.observe(document.querySelector('.intro-observer-ref'));
  // initDisableOnLoadElements();
};

export default initDefaults;
