import resume from '../assets/resume.pdf';

const handlePDF = () => {
  fetch(resume)
    .then((response) => response.blob())
    .then((blob) => {
      const blobLink = document.createElement('a');
      blobLink.href = window.URL.createObjectURL(blob);
      blobLink.download = 'chaseottofy_resume.pdf';
      blobLink.click();
      URL.revokeObjectURL(blobLink.href);
      URL.revo;
      blobLink.remove();
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.assert(error, 'error downloading resume');
    });
};

const initPDF = () => {
  const resumeBtn = document.querySelector('.resume-btn');
  resumeBtn.addEventListener('click', handlePDF);
};

export default initPDF;
