import createTooltip from '../components/ui/tooltip';
import { aspectSmallWidth } from '../data/constants';
import useIsTouchDevice from '../hooks/is-touch-device';

const configTooltipElements = () => {
  const tooltip = document.querySelector('.tooltip');

  const handleMouseEnter = (e) => {
    const { target } = e;
    const { tooltipActive } = tooltip.dataset;
    if (!target || tooltipActive === 'true') return;

    const { tooltipText } = target.dataset;
    createTooltip(tooltipText, target);
  };

  const handleMouseLeave = () => {
    tooltip.dataset.tooltipActive = 'false';
  };

  const tooltipElements = document.querySelectorAll('[data-tooltip-text]');
  const isTouchDevice = useIsTouchDevice();

  // disable on touch devices
  if (
    tooltipElements.length === 0
    || isTouchDevice
    || window.innerWidth < aspectSmallWidth
  ) return;

  for (const element of tooltipElements) {
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('click', handleMouseLeave);
  }
};

const initTooltipElements = () => {
  configTooltipElements();
};

export default initTooltipElements;
