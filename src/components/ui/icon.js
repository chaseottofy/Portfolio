const createIcon = (iconClassName, src, alt) => {
  const icon = new Image();
  if (iconClassName) icon.classList.add(iconClassName);
  icon.alt = alt || 'icon';
  icon.src = src || 'img-icon';
  icon.type = 'image/svg+xml';
  return icon;
};

export default createIcon;
