import { setCalendarImg, setComponentImg } from '../utilities/handleImages';

import getScrollBarWidth from '../utilities/getScrollbarWidth';

import projectJSON from '../data/projectJSONMin.json';

const calendarTabs = document.querySelectorAll('.proj-cal--tab');
const componentTabs = document.querySelectorAll('.proj-comp--tab');

const poWrapper = document.querySelector('.project-overview--wrapper');
const overviewBtns = document.querySelectorAll('.open-overview--btn');

const body = document.querySelector('body');

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
      const compSearch = document.querySelector('.component-search');
      compSearch.setAttribute('href', url);

      const compSearchInput = compSearch.lastElementChild;
      compSearchInput.innerText = `${tabname} components`;
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

const initProjectOverviews = () => {
  const getHR = () => {
    const hr = document.createElement('hr');
    return hr;
  };

  const closeProjectOverview = (e) => {
    if (e.target.classList.contains('po-header--close')
      || e.target.classList.contains('project-overview--wrapper')) {
      poWrapper.classList.add('hide-po');
      poWrapper.onclick = null;
      poWrapper.innerText = '';
      body.classList.remove('body-prevent-scroll');
    }
  };

  const createProjectOverview = (data) => {
    const {
      title, description, github, live, features,
    } = data;

    const poModal = document.createElement('div');
    poModal.classList.add('project-overview--modal');

    const poModalHeader = document.createElement('div');
    poModalHeader.classList.add('po-header');

    const poModalTitle = document.createElement('h2');
    poModalTitle.classList.add('po-header--title');
    poModalTitle.innerText = title;

    const closePoBtn = document.createElement('button');
    closePoBtn.textContent = 'x';
    closePoBtn.classList.add('po-header--close');
    closePoBtn.setAttribute('title', 'Close Project Overview');
    closePoBtn.setAttribute('aria-label', 'button');
    closePoBtn.onclick = closeProjectOverview;

    poModalHeader.append(poModalTitle, closePoBtn);

    const poModalBody = document.createElement('div');
    poModalBody.classList.add('po-body');

    const descEl = document.createElement('p');
    descEl.classList.add('proj-overview--desc');
    descEl.textContent = description;

    const linkTitle = document.createElement('div');
    linkTitle.classList.add('po-title');
    linkTitle.textContent = 'Links';

    const linkEl = document.createElement('div');
    linkEl.classList.add('proj-overview--links');

    const githubEl = document.createElement('a');
    githubEl.classList.add('proj-overview--link');
    githubEl.setAttribute('href', github);
    githubEl.textContent = 'Github';

    const liveEl = document.createElement('a');
    liveEl.classList.add('proj-overview--link');
    liveEl.setAttribute('href', live);
    liveEl.textContent = 'Live';
    linkEl.append(githubEl, liveEl);

    poModalBody.append(descEl, linkEl, getHR());

    Object.entries(features).forEach(([key, val]) => {
      const featureTitle = document.createElement('div');
      featureTitle.textContent = key;
      featureTitle.classList.add('po-title');

      const featureList = document.createElement('ul');
      featureList.classList.add('po-list');

      val.forEach((feature) => {
        const featureEl = document.createElement('li');
        featureEl.classList.add('po-list--item');
        featureEl.textContent = feature;
        featureList.append(featureEl);
      });

      poModalBody.append(featureTitle, featureList, getHR());
    });

    poModal.append(poModalHeader, poModalBody);
    poWrapper.append(poModal);
  };

  const setProjectOverview = (e) => {
    poWrapper.classList.remove('hide-po');
    body.classList.add('body-prevent-scroll');
    console.log(getScrollBarWidth());
    poWrapper.innerText = '';
    createProjectOverview(projectJSON[e.target.getAttribute('data-proj')]);
    poWrapper.onclick = closeProjectOverview;
    e.target.blur();
  };

  overviewBtns.forEach((btn) => {
    btn.addEventListener('click', setProjectOverview);
  });
};

const initProjects = () => {
  initProjectImages();
  initProjectOverviews();
};

export default initProjects;
