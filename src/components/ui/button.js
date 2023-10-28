const createButton = (
  textContent,
  btnClass,
  title = '',
  ariaLabel = 'button',
) => {
  const btn = document.createElement('button');

  if (btnClass) {
    btn.setAttribute('class', btnClass);
  }

  if (textContent) {
    btn.textContent = textContent;
  }

  if (title) {
    btn.title = title;
  }

  btn.ariaLabel = ariaLabel;

  return btn;
};

export default createButton;
