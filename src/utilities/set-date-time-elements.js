const getMyTime = (date) => date.toLocaleString('en-US', {
  timeZone: 'America/Denver',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});

const setDateTime = (timeString) => {
  const contactDateTime = document.querySelector('.cm-left--time');
  contactDateTime.textContent = `MST: ${timeString}`;
};

const initDateTimeElements = () => {
  setDateTime(getMyTime(new Date()));
  const currentTime = new Date();

  const firstInterval = new Promise((resolve) => {
    setTimeout(() => {
      setDateTime(getMyTime(new Date()));
      resolve();
    }, (60 - currentTime.getSeconds()) * 1000);
  });

  const updateInterval = () => {
    setDateTime(getMyTime(new Date()));
  };

  firstInterval.then(() => {
    updateInterval();
    setInterval(updateInterval, 60_000);
  });
};

export default initDateTimeElements;
