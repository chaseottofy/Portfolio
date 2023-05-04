// const tooltipElements = document.querySelectorAll('[data-tooltip]');

// const createTooltip = (title, x, y) => {
//   const tooltip = document.createElement('aside');
//   tooltip.classList.add('tooltip');
//   tooltip.style.top = `${y}px`;
//   tooltip.style.left = `${x}px`;
//   tooltip.textContent = title;
//   document.body.prepend(tooltip);
// };

// const initTooltips = () => {
//   tooltipElements.forEach((element) => {
//     element.addEventListener('mousemove', (event) => {
//       const { title } = event.target.dataset;
//       const { clientX, clientY } = event;
//       createTooltip(title, clientX, clientY);
//     });
//     element.addEventListener('mouseout', (event) => {
//       const { target } = event;
//       const tooltip = document.querySelector('.tooltip');
//       if (target === element) {
//         tooltip.remove();
//       }
//     });
//   });
// };

// export default initTooltips;
