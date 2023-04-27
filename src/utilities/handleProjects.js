const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const initProjectImages = () => {
  const tabnames = {
    calendar: ['day', 'week', 'month', 'year', 'list'],
    comparr: ['vanilla', 'react'],
    components: {
      ['vanilla']: 'https://codepen.io/chaseottofy/pens/public',
      ['react']: 'https://chaseottofy.github.io/react-boilerplate/'
    }
  };

  /**
   * handleTab
   * @param {string} nth - idx of tab
   * @param {string} prefix - prefix of class ( cal / mark / etc )
   * @param {string} tabname - name of tab : use to set the last value of search bar to reflect current image
   * @param {boolean} multi - true = multiple projects (tabnames.components) : requires slightly different search bar handling since the entire url is different;
   */
  const handleTab = (nth, prefix, tabname, multi) => {
    const currentClass = `${prefix}-current`;
    const activeImg = $(`.${currentClass}`);
    const activeIdx = activeImg.getAttribute("data-tab-idx");

    if (nth === activeIdx) return;
    activeImg.classList.remove(currentClass);
    activeImg.classList.add("hide-img");

    const newActiveImg = $(`.${prefix}-cell__image--${nth}`);
    newActiveImg.classList.remove("hide-img");
    newActiveImg.classList.add(currentClass);

    if (multi) {
      const url = tabnames.components[tabname];
      $(".component-search").setAttribute("href", url);
      $(".component-search--text").textContent = url;
    } else {
      $(`.${prefix}-search`).setAttribute("data-search-after", tabname);
    }
  };

  const initTabs = () => {
    const setTabs = (tabs, prefix, tabname, multi) => {
      tabs[0].previousElementSibling.checked = true;
      tabs.forEach((tab, idx) => {
        const handleClick = () => handleTab(
          idx + 1,
          prefix,
          tabname[idx],
          multi
        );
        tab.onclick = handleClick;
      });
    };

    // set Calendar Tabs
    setTabs($$(".proj-cal--tab"), 'cal', tabnames.calendar, false);
    // set Components Tabs
    setTabs($$(".proj-comp--tab"), 'comp', tabnames.comparr, true);
  };

  
  initTabs();
};

const initProjects = () => {
  initProjectImages();
};

export default initProjects;