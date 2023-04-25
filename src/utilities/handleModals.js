const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modalOverlay = $(".modal-ov");
const body = $(".body");

const LHBtns = $$(".lh-btn");
const LHModal = $(".lighthouse-modal");
const LHBody = $(".lighthouse-modal__body");
const closeLHBtn = $(".close-lh-btn");

const SMBtns = $$(".project-writeup__toggle--btn");
const SMMore = $$(".project-writeup__more");

const handleLHModal = () => {
  const modalData = {
    "calendar": {
      "title": "Google Calendar 2.0 Lighthouse Report",
      "link": "https://flic.kr/p/2ovu1G4",
      "metric-a": "0.3",
      "metric-b": "0.3",
    },
    "markdown": {
      "title": "Markdown Lite Lighthouse Report",
      "link": "https://flic.kr/p/2ovsuhm",
      "metric-a": "0.4",
      "metric-b": "0.4",
    }
  };

  const closeLH = e => {
    if (e.target.closest(".lh-btn")) return;
    if (e.target.closest(".modal-ov") || e.target.closest(".close-lh-btn")) {
      LHModal.setAttribute("class", "lighthouse-modal");
      LHBody.setAttribute("class", "lighthouse-modal__body");
      modalOverlay.classList.add("modal-ov--hide");
      // LHBtns.forEach(btn => btn.classList.remove("project-cell--lhbtn-active"));
      closeLHBtn.disabled = true;
      body.onclick = null;
    }
  };

  const openLH = e => {
    const appname = e.target.getAttribute("data-app-name");
    LHModal.classList.add("lighthouse-modal--active");
    modalOverlay.classList.remove("modal-ov--hide");
    e.target.classList.add("project-cell--lhbtn-active");
    closeLHBtn.disabled = false;

    $(".lh-appname").textContent = modalData[appname]['title'];
    $(".lh-main__score-title").href = modalData[appname]['link'];
    $(".lh-metric-a").textContent = modalData[appname]['metric-a'];
    $(".lh-metric-b").textContent = modalData[appname]['metric-b'];
    $(".body").onclick = closeLH;
  };

  LHBtns.forEach((btn) => btn.addEventListener("click", openLH));
};

const handleProjectShowMore = () => {
  const toggleSM = e => {
    const idx = parseInt(e.target.getAttribute("data-proj-index"));
    const moreModal = SMMore[idx];
    moreModal.classList.toggle("writeup-hidden");
    e.target.classList.toggle("project-writeup__toggle--btn-active");
  };
  SMBtns.forEach(btn => btn.addEventListener("click", toggleSM));
};

const initModals = () => {
  handleLHModal();
  handleProjectShowMore();
};

export default initModals;