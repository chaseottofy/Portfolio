/**
 *
 * @param {string} title
 * @param {object} identifiers
 * @param {number} tabIdx
 * @param {boolean} checked
 * @param {function} listener
 */
const createProjectTabs = (title, identifiers, tabIdx, checked, listener) => {
  const { tabId, projName, suffix } = identifiers;
  const labSm = title[0];
  const labelTxt = `${title} ${suffix}`;
  const wrapper = document.createElement('span');
  const input = document.createElement('input');
  input.classList.add('proj-header__tabinput');
  input.id = tabId;
  input.type = 'radio';
  input.name = `proj-${projName}--radio`;
  input.value = title;
  input.checked = checked;
  const label = document.createElement('label');
  label.dataset.labAfter = 'view';
  label.dataset.labSm = labSm;
  label.dataset.tabIdx = tabIdx;
  label.setAttribute('for', tabId);
  label.ariaLabel = labelTxt;
  label.textContent = `${title}`;
  wrapper.append(input, label);

  input.addEventListener('change', () => {
    listener(tabIdx);
  });

  return wrapper;
};

export default createProjectTabs;
