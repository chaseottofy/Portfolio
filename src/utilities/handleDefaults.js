const getMyTime = () => new Date().toLocaleString('en-US', {
  timeZone: 'America/Denver',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});

// const getYourTime = () => {
//   const date = new Date();
//   const [h, m] = [date.getHours(), date.getMinutes()];
//   console.log(`${h > 12 ? h % 12 : h}:${m < 10 ? '0' + m : m} ${h >= 12 ? "PM" : "AM"}`);
// };

const initDefaults = () => {
  // display my current time in contact section
  document.querySelector('.cm-left--time').textContent = `MST: ${getMyTime()}`;
};
export default initDefaults;
