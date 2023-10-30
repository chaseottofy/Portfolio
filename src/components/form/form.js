import handleState from '../../hooks/handle-state';
import createSpinner from '../ui/spinner';
import createToast from '../ui/toast';
import {
  checkEmailValidity,
  checkPhoneValidity,
  checkValidNameMessage,
  googleSheetsFormId,
  sanitizeInput,
} from './form-utilities';

const initForm = () => {
  const [formDisabled, setFormDisabled] = handleState(true);
  const [invalidElements, setInvalidElements] = handleState([]);

  const formInputs = document.querySelectorAll('.fmi');
  const form = document.querySelector('.contact-form');
  const nameInput = document.querySelector('.form-name--input');
  const contactValueInput = document.querySelector('.form-contact--input');
  const messageInput = document.querySelector('.form-message--input');
  const submitBtn = document.querySelector('.submit-form--btn');
  const contactOptions = document.querySelectorAll('.contact-option--input');
  const formWrapper = document.querySelector('.contact-form--wrapper');

  const handleSelectedContactMethod = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption === 'phone') {
      contactValueInput.type = 'tel';
    } else if (selectedOption === 'email') {
      contactValueInput.type = 'email';
    }
  };

  const handleFormChange = () => {
    if (nameInput.value && contactValueInput.value && messageInput.value) {
      setFormDisabled(false);
      submitBtn.disabled = false;
      submitBtn.classList.add('btn-allow');
      submitBtn.removeAttribute('tabindex');
    } else {
      setFormDisabled(true);
      submitBtn.disabled = true;
      submitBtn.classList.remove('btn-allow');
      submitBtn.setAttribute('tabindex', '-1');
    }
  };

  const disableForm = () => {
    submitBtn.blur();
    setFormDisabled(true);
    submitBtn.disabled = true;
    submitBtn.classList.remove('btn-allow');
    formWrapper.classList.add('disable-form');
    form.classList.add('disable-form');
  };

  const enableForm = () => {
    formWrapper.classList.remove('disable-form');
    form.classList.remove('disable-form');
  };

  const createSuccessMessage = () => {
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.append(createSpinner());
    formWrapper.prepend(successMessage);
  };

  const toggleSkeleton = () => {
    if (nameInput.classList.contains('skeleton')) {
      nameInput.classList.remove('skeleton');
      contactValueInput.classList.remove('skeleton');
      messageInput.classList.remove('skeleton');
    } else {
      nameInput.classList.add('skeleton');
      contactValueInput.classList.add('skeleton');
      messageInput.classList.add('skeleton');
    }
  };

  const resetForm = () => {
    form.reset();
    submitBtn.classList.remove('btn-allow');
    setFormDisabled(true);
    submitBtn.disabled = true;
    enableForm();
    setInvalidElements([]);
  };

  const ensureDisableOnLoad = () => {
    submitBtn.classList.remove('btn-allow');
    setFormDisabled(true);
    setInvalidElements([]);
    submitBtn.disabled = true;
  };

  const invalidSwitch = () => {
    if (invalidElements().length > 0) {
      for (const element of invalidElements()) {
        switch (element) {
          case 'name': {
            nameInput.classList.add('invalid');
            nameInput.focus();
            break;
          }
          case 'email': {
            contactValueInput.classList.add('invalid');
            contactValueInput.focus();
            break;
          }
          case 'phone': {
            contactValueInput.classList.add('invalid');
            contactValueInput.focus();
            break;
          }
          case 'message': {
            messageInput.classList.add('invalid');
            messageInput.focus();
            break;
          }
          default: {
            break;
          }
        }
      }
    }
  };

  const handleInvalidInputs = () => {
    invalidSwitch();
    submitBtn.blur();
    submitBtn.disabled = true;
    submitBtn.classList.remove('btn-allow');
  };

  const checkValidity = () => {
    const formData = new FormData(form);
    const contactName = formData.get('messageName');
    const contactMethod = formData.get('contactMethod');
    const contactVal = formData.get('messageContactVal');
    const message = formData.get('messageVal');

    if (contactMethod === 'email' && !checkEmailValidity(contactVal)) {
      setInvalidElements([...invalidElements(), 'email']);
    } else if (contactMethod === 'phone' && !checkPhoneValidity(contactVal)) {
      setInvalidElements([...invalidElements(), 'phone']);
    }

    const sanitizedName = sanitizeInput(contactName);
    if (checkValidNameMessage(sanitizedName, 2, 100)) {
      nameInput.value = sanitizedName;
    } else {
      setInvalidElements([...invalidElements(), 'name']);
    }

    const sanitizedMessage = sanitizeInput(message);
    if (checkValidNameMessage(sanitizedMessage, 2, 2000)) {
      messageInput.value = message;
    } else {
      setInvalidElements([...invalidElements(), 'message']);
    }
  };

  const removeSuccessMessage = () => {
    const tempSuccessMessage = document?.querySelector('.success-message');
    if (tempSuccessMessage) { tempSuccessMessage.remove(); }
  };

  const handleFormError = () => {
    createToast('Fetch failed', 'Error: ', 'error', 2);
    toggleSkeleton();
    removeSuccessMessage();
    resetForm();
    console.warn('Form is not properly configured.');
  };

  const handleFormSuccess = () => {
    createToast('Message Sent!', null, 'success', 2);
    removeSuccessMessage();
    resetForm();
    toggleSkeleton();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkValidity();
    handleInvalidInputs();

    if (formDisabled() || invalidElements().length > 0) {
      setInvalidElements([]);
      return;
    }

    disableForm();
    toggleSkeleton();

    if (googleSheetsFormId === undefined || googleSheetsFormId == null) {
      handleFormError();
      return;
    }

    createSuccessMessage();

    fetch(`https://script.google.com/macros/s/${googleSheetsFormId}/exec`, {
      method: 'POST',
      body: new FormData(form),
    })
      .then((res) => res.text())
      .then(() => {
        handleFormSuccess();
      })
      .catch(() => {
        handleFormError();
      });
  };

  const initFormFunc = () => {
    ensureDisableOnLoad();
    for (const option of contactOptions) {
      option.addEventListener('change', handleSelectedContactMethod);
    }

    for (const input of formInputs) {
      input.addEventListener('focus', (e) => {
        if (e.target.classList.contains('invalid')) {
          setTimeout(() => {
            e.target.classList.remove('invalid');
          }, 1500);
        }
      });
    }
    form.addEventListener('input', handleFormChange);
    form.addEventListener('submit', handleFormSubmit);
  };

  initFormFunc();
};

export default initForm;
