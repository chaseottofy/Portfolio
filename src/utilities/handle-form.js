import createToast from '../template/create-toast';
import handleState from './handle-state';
import createSpinner from '../template/create-spinner';

// eslint-disable-next-line arrow-body-style
const checkEmailValidity = (email) => {
  return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email));
};

const checkPhoneValidity = (phone) => phone && phone.length >= 10;

const checkValidNameMessage = (sanitizedMessage, min, max) => {
  if (!sanitizedMessage) {
    return false;
  }

  if (sanitizedMessage.length < min) {
    return false;
  }

  if (sanitizedMessage.length > max) {
    return false;
  }

  return true;
};

const initContactForm = () => {
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
  const hpone = document.querySelector('.form-hp--one');

  const sanitizeInput = (str) => {
    const textarea = document.createElement('textarea');
    textarea.textContent = str;
    return textarea.innerHTML;
  };

  const handleSelectedContactMethod = (e) => {
    const selectedOption = e.target.value;
    if (selectedOption === 'phone') {
      contactValueInput.type = 'tel';
      contactValueInput.placeholder = 'Enter your phone number';
    } else if (selectedOption === 'email') {
      contactValueInput.type = 'email';
      contactValueInput.placeholder = 'Enter your email address';
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
    nameInput.classList.toggle('skeleton');
    contactValueInput.classList.toggle('skeleton');
    messageInput.classList.toggle('skeleton');
  };

  const resetForm = () => {
    form.reset();
    formWrapper.firstElementChild.remove();
    submitBtn.classList.remove('btn-allow');
    setFormDisabled(true);
    submitBtn.disabled = true;
    enableForm();
    toggleSkeleton();
    setInvalidElements([]);
  };

  const checkHP = () => {
    if (hpone.value !== '1') {
      resetForm();
      formWrapper.classList.add('disable-form');
      /* eslint-disable no-alert */
      alert('WW91IGFyZSBhIGJvdA==');
    }
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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkHP();
    checkValidity();
    handleInvalidInputs();

    if (formDisabled() || invalidElements().length > 0) {
      setInvalidElements([]);
      return;
    }

    const formData = new FormData(form);
    disableForm();
    toggleSkeleton();
    createSuccessMessage();
    fetch(`https://script.google.com/macros/s/${process.env.SHEET_ID}/exec`, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.text())
      .then(() => {
        createToast('Message Sent!', null, 'success', 2);
        resetForm();
      })
      .catch(() => {
        createToast('Something went wrong!', 'Error: ', 'error', 2);
        resetForm();
      });
  };

  const initFormFunc = () => {
    ensureDisableOnLoad();
    for (const option of contactOptions) {
      option.addEventListener('change', handleSelectedContactMethod);
    }

    formInputs.forEach((input) => {
      input.addEventListener('focus', (e) => {
        if (e.target.classList.contains('invalid')) {
          setTimeout(() => {
            e.target.classList.remove('invalid');
          }, 1500);
        }
      });
    });
    form.addEventListener('input', handleFormChange);
    form.addEventListener('submit', handleFormSubmit);
  };

  initFormFunc();
};

export default initContactForm;
