/**
 * getScrollbBarWidth
 * @description - append temp div to body & measure offset (scrollbar width)
 * Doing this because some guy told me its best practice on a youtube comment
 * @returns {number} - The width of the scrollbar
 */
const getScrollBarWidth = () => {
  const temp = document.createElement('div');
  temp.classList.add('scrollbar-measure');
  document.body.append(temp);
  const width = temp.offsetWidth - temp.clientWidth;
  temp.remove();
  return width;
};

export default getScrollBarWidth;
