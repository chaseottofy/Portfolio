// remake of vercel spinner
// https://vercel.com/design/spinner

const createSpinner = () => {
  const spinnerWrapper = document.createElement('div');
  spinnerWrapper.classList.add('spinner-wrapper');

  const spinner = document.createElement('div');
  spinner.classList.add('spinner');

  for (let i = 0; i < 12; i++) {
    const cell = document.createElement('div');
    cell.classList.add('spinner-cell');
    spinner.appendChild(cell);
  }

  spinnerWrapper.appendChild(spinner);
  return spinnerWrapper;
};

export default createSpinner;
