import sectionExcerptData from '../data/json/section-overviews-data.json';

const initSectionExcerpts = () => {
  const sectionExcerpts = document.querySelectorAll('.section-excerpt');

  for (const section of sectionExcerpts) {
    const sectionText = section.firstElementChild;
    const sectionName = section.dataset.sectionExcerpt;
    sectionText.textContent = sectionExcerptData[sectionName];
  }
};

export default initSectionExcerpts;
