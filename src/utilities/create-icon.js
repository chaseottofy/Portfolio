const createIcon = (iconClassName, src, alt) => {
  const icon = new Image();
  if (iconClassName) icon.classList.add(iconClassName);
  if (iconClassName !== 'icn-svg') icon.classList.add('icn-svg');

  icon.alt = alt || 'icon';
  icon.src = src || 'img-icon';
  icon.type = 'image/svg+xml';
  return icon;
};

export default createIcon;
