import createButton from '../ui/button';
import createAuditModal from './project-modal-audit';
import createProjectModal from './project-modal-overview';

const createProjectFooterButton = (cName, attrName, dataText, text, callback) => {
  const projFooterBtn = createButton(text, cName, null, 'button');
  projFooterBtn.dataset.tooltipText = `Open ${text} Modal`;
  projFooterBtn.setAttribute(attrName, dataText);
  projFooterBtn.addEventListener('click', callback);
  return projFooterBtn;
};

const createProjectFooterButtons = (lighthouseKey) => {
  return [
    createProjectFooterButton(
      'open-lh--btn',
      'data-lh-proj',
      lighthouseKey,
      'Audits',
      createAuditModal,
    ),
    createProjectFooterButton(
      'open-overview--btn',
      'data-proj',
      lighthouseKey,
      'Overview',
      createProjectModal,
    ),
  ];
};

export default createProjectFooterButtons;
