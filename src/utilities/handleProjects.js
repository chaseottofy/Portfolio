import { setCalendarImg, setComponentImg } from './handleImages';

const calendarTabs = document.querySelectorAll('.proj-cal--tab');
const componentTabs = document.querySelectorAll('.proj-comp--tab');

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

    activeImg.classList.remove(currentClass);
    activeImg.classList.add('hide-img');

    const newActive = document.querySelector(`.${prefix}-cell__image--${nth}`);
    newActive.classList.remove('hide-img');
    newActive.classList.add(currentClass);

    // import new calendar image if not already loaded
    if (prefix === 'cal' && nth > 1) {
      setCalendarImg(nth - 1);
    }
    // import new component image if not already loaded
    if (prefix === 'comp' && nth === 2) {
      setComponentImg();
    }

    if (isMulti) {
      const url = tabnames[tabname];
      document.querySelector('.component-search').setAttribute('href', url);
      document.querySelector('.component-search--text').textContent = url;
    } else {
      document.querySelector(`.${prefix}-search`).setAttribute('data-search-after', tabname);
    }
  };

  const initTabs = () => {
    const setTabs = (tabs, prefix, tabname, isMulti) => {
      // set first tab to checked if not already on page load
      tabs.forEach((tab, idx) => {
        tab.addEventListener('click', () => {
          handleTab(idx + 1, prefix, tabname[idx], isMulti);
        });
      });
    };

    // set Calendar Tabs
    calendarTabs[0].previousElementSibling.checked = true;
    setTabs(calendarTabs, 'cal', tabnames.calendar, false);
    // set Components Tabs
    componentTabs[0].previousElementSibling.checked = true;
    setTabs(componentTabs, 'comp', tabnames.comparr, true);
  };

  initTabs();
};

const initProjects = () => {
  initProjectImages();
};

export default initProjects;
