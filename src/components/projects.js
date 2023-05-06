import { configPicture } from '../utilities/handle-images';

import createProjectModal from '../template/create-projmodal';

// initProjectImages
const calendarTabs = document.querySelectorAll('.proj-cal--tab');
const componentTabs = document.querySelectorAll('.proj-comp--tab');
const overviewBtns = document.querySelectorAll('.open-overview--btn');

/**
 * initProjectImages
 * @description sets up project image tabs for dynamic image imports and switching
 * @scopes : get-image.js -- handle-images.js
 */
const initProjectImages = () => {
  const tabnames = {
    calendar: ['day', 'week', 'month', 'year', 'list'],
    comparr: ['vanilla', 'react'],
    'vanilla': 'https://codepen.io/chaseottofy/pens/public',
    'react': 'https://chaseottofy.github.io/react-boilerplate/',
  };

  /**
   * handleTab
   * @param {string} nth : idx of tab
   * @param {string} prefix : prefix of class ( cal / mark / etc )
   * @param {string} tabname : tab name (add to end of search url)
   * @param {boolean} isMulti : true = multiple projects
   *
   * (tabnames.components) : requires slightly different
   * search bar handling since the entire url is different;
   */
  const handleTab = (nth, prefix, tabname, isMulti) => {
    const currentClass = `${prefix}-current`;
    const activeImg = document.querySelector(`.${currentClass}`);
    const activeIdx = +activeImg.getAttribute(`data-${prefix}-nth`);

    if (nth === activeIdx) return;

    const nowActiveClass = `${prefix}-cell__image--${nth}`;
    const nowActive = document.querySelector(`.${nowActiveClass}`);

    if (nowActive === null) {
      const isCalendar = prefix === 'cal';
      const tempClass = [
        nowActiveClass,
        `${prefix}-current`,
        isCalendar
          ? 'project-image__calendar'
          : 'project-image__components',
      ];

      configPicture(
        activeImg.parentElement,
        `data-${prefix}-nth`,
        tempClass,
        +nth,
        isCalendar,
      );

      activeImg.classList.remove(currentClass);
      activeImg.classList.add('fade-img--out');
      setTimeout(() => {
        activeImg.classList.add('hide-img');
        activeImg.classList.remove('fade-img--out');
      }, 200);
    } else {
      activeImg.classList.remove(currentClass);
      activeImg.classList.add('hide-img');
      nowActive.classList.remove('hide-img');
      nowActive.classList.add(currentClass);
    }

    if (isMulti) {
      const url = tabnames[tabname];
      const compSearch = document.querySelector('.component-search');
      compSearch.setAttribute('href', url);
      const compSearchInput = compSearch.lastElementChild;
      compSearchInput.textContent = `${tabname} components`;
    }
  };

  const setTabs = (tabs, prefix, tabname, isMulti) => {
    for (const [index, tab] of tabs.entries()) {
      tab.addEventListener('click', () => {
        handleTab(index + 1, prefix, tabname[index], isMulti);
      });
    }
  };

  const initTabs = () => {
    // set Calendar Tabs
    calendarTabs[0].previousElementSibling.checked = true;
    setTabs(calendarTabs, 'cal', tabnames.calendar, false);
    // set Components Tabs
    componentTabs[0].previousElementSibling.checked = true;
    setTabs(componentTabs, 'comp', tabnames.comparr, true);
  };

  initTabs();
};

const initProjectOverviews = () => {
  for (const btn of overviewBtns) {
    // create project overview modal when
    // "View Full Overview is clicked" on Project card
    btn.addEventListener('click', createProjectModal);
  }
};

const initProjectCards = () => {
  initProjectImages();
  initProjectOverviews();
};

export default initProjectCards;
