import { configPicture } from '../utilities/handle-images';

import getScrollBarWidth from '../utilities/get-scrollbarwidth';

import projectJSON from '../data/projectJSONMin.json';

// initProjectImages
const calendarTabs = document.querySelectorAll('.proj-cal--tab');
const componentTabs = document.querySelectorAll('.proj-comp--tab');
const overviewBtns = document.querySelectorAll('.open-overview--btn');
// initProjectOverviews
const poWrapper = document.querySelector('.project-overview--wrapper');
const body = document.querySelector('body');
const header = document.querySelector('.header');

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

const getHR = () => {
  const hr = document.createElement('hr');
  return hr;
};

const closeProjectOverview = (e) => {
  if (e.target.classList.contains('po-header--close')
    || e.target.classList.contains('project-overview--wrapper')) {
    poWrapper.classList.add('hide-po');
    poWrapper.removeEventListener('click', closeProjectOverview);
    poWrapper.firstElementChild.remove();
    body.classList.remove('body-prevent-scroll');
    body.removeAttribute('style');
    header.removeAttribute('style');
  }
};

const createProjectOverview = (data) => {
  const {
    title, github, live, features,
  } = data;

  const poModal = document.createElement('div');
  poModal.classList.add('project-overview--modal');

  const poModalHeader = document.createElement('div');
  poModalHeader.classList.add('po-header');

  const poModalTitle = document.createElement('h2');
  poModalTitle.classList.add('po-header--title');
  poModalTitle.textContent = title;

  const closePoBtn = document.createElement('button');
  closePoBtn.textContent = 'x';
  closePoBtn.classList.add('po-header--close');
  closePoBtn.setAttribute('title', 'Close Project Overview');
  closePoBtn.setAttribute('aria-label', 'button');
  closePoBtn.addEventListener('click', closeProjectOverview);

  poModalHeader.append(poModalTitle, closePoBtn);

  const poModalBody = document.createElement('div');
  poModalBody.classList.add('po-body');

  const linkTitle = document.createElement('div');
  linkTitle.classList.add('po-title');
  linkTitle.textContent = 'Links';

  const linkEl = document.createElement('div');
  linkEl.classList.add('proj-overview--links');

  const githubEl = document.createElement('a');
  githubEl.classList.add('proj-overview--link');
  githubEl.setAttribute('href', github);
  githubEl.setAttribute('target', '_blank');
  githubEl.setAttribute('rel', 'noopener noreferrer');
  githubEl.textContent = 'Github';

  const liveEl = document.createElement('a');
  liveEl.classList.add('proj-overview--link');
  liveEl.setAttribute('href', live);
  liveEl.setAttribute('target', '_blank');
  liveEl.setAttribute('rel', 'noopener noreferrer');
  liveEl.textContent = 'Live';
  linkEl.append(githubEl, liveEl);

  poModalBody.append(linkEl, getHR());

  // refactor the following to use a for of loop

  for (const [key, val] of Object.entries(features)) {
    const featureTitle = document.createElement('div');
    featureTitle.textContent = key;
    featureTitle.classList.add('po-title');

    const featureList = document.createElement('ul');
    featureList.classList.add('po-list');

    for (const feature of val) {
      const featureEl = document.createElement('li');
      featureEl.classList.add('po-list--item');
      featureEl.textContent = feature;
      featureList.append(featureEl);
    }

    poModalBody.append(featureTitle, featureList, getHR());
  }

  poModal.append(poModalHeader, poModalBody);
  poWrapper.append(poModal);
};

const setProjectOverview = (e) => {
  poWrapper.classList.remove('hide-po');
  body.classList.add('body-prevent-scroll');
  body.style.paddingRight = `${getScrollBarWidth()}px`;
  header.style.paddingRight = `${getScrollBarWidth()}px`;
  createProjectOverview(projectJSON[e.target.getAttribute('data-proj')]);
  poWrapper.addEventListener('click', closeProjectOverview);
  e.target.blur();
};

const initProjectOverviews = () => {
  for (const btn of overviewBtns) {
    btn.addEventListener('click', setProjectOverview);
  }
};

const initProjects = () => {
  initProjectImages();
  initProjectOverviews();
};

export default initProjects;
