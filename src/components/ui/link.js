const createLink = (
  href,
  title,
  cName,
  text,
  target = '_blank',
  rel = 'noreferrer',
) => {
  const link = document.createElement('a');
  if (cName) link.classList.add(cName);
  if (text) link.textContent = text;
  link.title = title;
  link.href = href;
  link.target = target;
  link.rel = rel;
  return link;
};

export default createLink;
