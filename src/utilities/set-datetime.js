const contactDateTime = document.querySelector('.cm-left--time');

const getMyTime = () => new Date().toLocaleString('en-US', {
  timeZone: 'America/Denver',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});

const setDateTime = () => {
  contactDateTime.textContent = `MST: ${getMyTime()}`;
};

export default setDateTime;
