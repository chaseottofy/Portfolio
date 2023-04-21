const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const modalOverlay = $(".modal-ov");
const body = $(".body");

const LHModal = $(".lighthouse-modal");
const LHBody = $(".lighthouse-modal__body");
const LHBtns = $$(".project-cell--lhbtn");
const openLHBtns = $$(".project-cell--lhbtn");
const closeLHBtn = $(".close-lh-btn");

const SMBtns = $$(".project-writeup__toggle--btn");
const SMMore = $$(".project-writeup__more");

const handleLHModal = () => {

  const closeLH = e => {
    if (e.target.closest(".project-cell--lhbtn")) return;
    if (e.target.closest(".modal-ov") || e.target.closest(".close-lh-btn")) {
      LHModal.setAttribute("class", "lighthouse-modal");
      LHBody.setAttribute("class", "lighthouse-modal__body");
      modalOverlay.classList.add("modal-ov--hide");
      openLHBtns.forEach(btn => btn.classList.remove("project-cell--lhbtn-active"));
      closeLHBtn.disabled = true;
      body.onclick = null;
    }
  };

  const openLH = e => {
    LHModal.classList.add("lighthouse-modal--active");
    modalOverlay.classList.remove("modal-ov--hide");
    LHBody.classList.add(e.target.getAttribute("data-img-class"));
    e.target.classList.add("project-cell--lhbtn-active");
    closeLHBtn.disabled = false;
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