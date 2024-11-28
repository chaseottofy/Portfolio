const createTooltip = (text, el) => {
  // constant values for tooltip
  const [tooltipWidth, tooltipHeight, tooltipPadding] = [220, 35, 20];
  const caretPositions = {
    leftPos: 'left:25%;top:0;',
    middlePos: 'left:0;top:0;right:0;margin:0 auto;',
    topPos: 'transform:translateY(-10px);',
    rightPos: 'left:60%;top:0;',
    bottomPos: 'transform:translateY(-10px) rotate(180deg);top:100% !important;',
  };

  const {
    innerWidth, innerHeight, scrollY, scrollX,
  } = window;
  // rect of element that tooltip refers to,
  // note that the tooltip itself is positioned absolutely to the body, not the element
  // still, we need the element's position to determine where to place the tooltip
  const {
    left: elLeft, top: elTop, bottom: elBottom, width: elWidth,
  } = el.getBoundingClientRect();

  const tooltip = document.querySelector('.tooltip');
  const tooltipCaret = tooltip.querySelector('.tooltip-caret');
  const tooltipContent = tooltip.querySelector('.tooltip-content');
  tooltip.dataset.tooltipActive = 'true';
  tooltipCaret.setAttribute('style', '');

  let top = elBottom + scrollY + tooltipPadding;
  let left = elLeft + scrollX + elWidth / 2 - tooltipWidth / 2;
  let [caretX, caretY] = ['middlePos', 'topPos'];

  // place tooltip on top and change caret position to bottom
  if (top + tooltipHeight > innerHeight + scrollY) {
    top = elTop + scrollY - tooltipHeight - tooltipPadding;
    caretY = 'bottomPos';
    // isCaretBottom = true;
  }

  // check if going off screen either side, change position of tooltip and caret accordingly
  // will default to middle if neither condition is met
  if (left < 0) {
    left = tooltipPadding / 2;
    caretX = 'leftPos';
  } else if (left + tooltipWidth > innerWidth) {
    left = innerWidth - tooltipWidth;
    caretX = 'rightPos';
  }

  tooltipCaret.setAttribute(
    'style',
    `${caretPositions[caretX]}${caretPositions[caretY]}`,
  );
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${top}px`;
  tooltipContent.textContent = text;
  return tooltip;
};

export default createTooltip;
