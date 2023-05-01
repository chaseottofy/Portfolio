const getMyTime = () => new Date().toLocaleString('en-US', {
  timeZone: 'America/Denver',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});

const initDefaults = () => {
  document.querySelector('.cm-left--time').textContent = `MST: ${getMyTime()}`;
};
export default initDefaults;
