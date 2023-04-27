const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const initProjectImages = () => {
  const tabnames = {
    calendar: ['day', 'week', 'month', 'year', 'list'],
    markdown: ['one', 'two', 'three'],
    vanilla: ['one', 'two', 'three'],
    react: ['one', 'two', 'three'],
  };

  /**
   * handleTab
   * @param {string} nth - idx of tab
   * @param {string} prefix - prefix of class ( cal / mark / etc )
   * @param {string} tabname - name of tab : use to set the last value of search bar to reflect current image
   */
  const handleTab = (nth, prefix, tabname) => {
    const currentClass = `${prefix}-current`;
    const activeImg = $(`.${currentClass}`);
    const activeIdx = activeImg.getAttribute("data-tab-idx");

    if (nth === activeIdx) return;
    activeImg.classList.remove(currentClass);
    activeImg.classList.add("hide-img");

    const newActiveImg = $(`.${prefix}-cell__image--${nth}`);
    newActiveImg.classList.remove("hide-img");
    newActiveImg.classList.add(currentClass);

    $(`.${prefix}-search`).setAttribute("data-search-after", tabname);
  };

  const initTabs = () => {
    const setTabs = (tabs, prefix, arr) => {
      tabs[0].previousElementSibling.checked = true;
      tabs.forEach((tab, idx) => {
        const handleClick = () => handleTab(idx + 1, prefix, arr[idx]);
        tab.onclick = handleClick;
      });
    };


    // set Calendar Tabs
    setTabs($$(".proj-cal--tab"), 'cal', tabnames.calendar);
  };
  initTabs();
};

const initProjects = () => {
  initProjectImages();
};

export default initProjects;