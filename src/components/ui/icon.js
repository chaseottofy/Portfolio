const createIcon = (iconClassName, src, alt) => {
  const icon = new Image();
  if (iconClassName) icon.setAttribute('class', iconClassName);
  icon.classList.add('icn-svg');
  icon.alt = alt || '';
  icon.src = src || 'img-icon';
  icon.type = 'image/svg+xml';
  return icon;
};

export default createIcon;
