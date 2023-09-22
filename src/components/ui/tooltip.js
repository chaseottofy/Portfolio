const createTooltip = (text, element) => {
  const tooltip = document.querySelector('.tooltip');
  const tooltipCaret = tooltip.querySelector('.tooltip-caret');
  const tooltipContent = tooltip.querySelector('.tooltip-content');
  tooltip.dataset.tooltipActive = 'true';

  const [tooltipWidth, tooltipHeight, tooltipPadding] = [220, 40, 20];

  const {
    innerWidth, innerHeight, scrollY, scrollX,
  } = window;

  const {
    left: elementLeft,
    top: elementTop,
    bottom: elementBottom,
    width: elementWidth,
  } = element.getBoundingClientRect();

  let top = elementBottom + scrollY + tooltipPadding;
  let left = elementLeft + scrollX + elementWidth / 2 - tooltipWidth / 2;
  tooltipCaret.style = '';

  if (top + tooltipHeight > innerHeight + scrollY) {
    top = elementTop + scrollY - tooltipHeight - tooltipPadding;
  }

  if (left < 0) {
    left = 10;
    tooltipCaret.style.left = '25%';
  } else if (left + tooltipWidth > innerWidth) {
    left = innerWidth - tooltipWidth;
    tooltipCaret.style.left = '60%';
  } else {
    tooltipCaret.setAttribute('style', 'left:0;right:0;margin:auto;');
  }

  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  tooltipContent.textContent = text;
  return tooltip;
};

export default createTooltip;
