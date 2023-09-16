import configPicture from './handle-images';

const initCalendarMulit = () => {
  const calendarTabs = document.querySelectorAll('.proj-cal--tab');

  const handleTab = (nth) => {
    const currentClass = 'cal-current';
    const activeImg = document.querySelector('.cal-current');
    const activeIdx = +activeImg.getAttribute('data-cal-nth');

    if (nth === activeIdx) return;
    const nowActiveClass = `cal-cell__image--${nth}`;
    const nowActive = document.querySelector(`.${nowActiveClass}`);

    if (nowActive === null) {
      const tempClass = [nowActiveClass, 'cal-current', 'project-image__calendar'];
      configPicture(activeImg.parentElement, 'data-cal-nth', tempClass, +nth);
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
  };

  const initTabs = () => {
    calendarTabs[0].previousElementSibling.checked = true;
    for (const [index, tab] of calendarTabs.entries()) {
      tab.addEventListener('click', () => {
        handleTab(index + 1);
      });
    }
  };

  initTabs();
};

export default initCalendarMulit;
