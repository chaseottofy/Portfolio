const createSpinner = () => {
  const spinnerWrapper = document.createElement('div');
  spinnerWrapper.classList.add('spinner-wrapper');

  const spinner = document.createElement('div');
  spinner.classList.add('spinner');

  for (let i = 0; i < 12; i += 1) {
    const cell = document.createElement('div');
    cell.classList.add('spinner-cell');
    cell.style.animationDelay = `${-1.2 + (i / 10)}s`;
    cell.style.transform = i === 0
      ? 'rotate(.0001deg) translate(146%)'
      : `rotate(${i * 30}deg) translate(146%)`;
    spinner.append(cell);
  }

  spinnerWrapper.append(spinner);
  return spinnerWrapper;
};

export default createSpinner;
