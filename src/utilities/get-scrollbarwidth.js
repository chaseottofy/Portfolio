const getScrollBarWidth = () => {
  const temp = document.createElement('div');
  temp.classList.add('scrollbar-measure');
  document.body.append(temp);
  const width = temp.offsetWidth - temp.clientWidth;
  temp.remove();
  return width;
};

export default getScrollBarWidth;
