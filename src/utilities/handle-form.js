import createToast from '../template/create-toast';

import createSpinner from '../template/create-spinner';

const contactFormSection = document.querySelector('.contact-form--container');
const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('.form-name--input');
const contactValueInput = document.querySelector('.form-contact--input');
const messageInput = document.querySelector('.form-message--input');
const submitBtn = document.querySelector('.submit-form--btn');
const contactOptions = document.querySelectorAll('.contact-option--input');
const formWrapper = document.querySelector('.contact-form--wrapper');
const hpone = document.querySelector('.form-hp--one');

const RL = {
  lastSubmit: localStorage.getItem('RL')
    ? JSON.parse(localStorage.getItem('RL')).lastSubmit
    : 0,
  submitCount: localStorage.getItem('RL')
    ? JSON.parse(localStorage.getItem('RL')).submitCount
    : 0,
  isDisabled: localStorage.getItem('RL')
    ? JSON.parse(localStorage.getItem('RL')).isDisabled
    : false,
  tempBlock: true,
};

const handleRL = () => {
  const now = Date.now();
  RL.submitCount += 1;

  if (now - RL.lastSubmit < 3000) {
    RL.isDisabled = true;
  }

  if (RL.submitCount > 10) {
    RL.isDisabled = true;
  }

  RL.lastSubmit = now;
  localStorage.setItem('RL', JSON.stringify(RL));
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
    submitBtn.disabled = false;
    submitBtn.classList.add('btn-allow');
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove('btn-allow');
  }
};

const disableForm = () => {
  submitBtn.blur();
  submitBtn.disabled = true;
  formWrapper.classList.add('disable-form');
  form.classList.add('disable-form');
};

const checkRLOnLoad = () => {
  if (RL.isDisabled) {
    disableForm();
    contactFormSection.classList.add('disable-contact-form');
  } else {
    setTimeout(() => { RL.tempBlock = false; }, 3000);
  }
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
  formWrapper.classList.remove('disable-form');
  form.classList.remove('disable-form');
  toggleSkeleton();
};

const checkHP = () => {
  if (RL.tempBlock || hpone.value !== '1') {
    resetForm();
    formWrapper.classList.add('disable-form');
    RL.isDisabled = true;
    /* eslint-disable no-alert */
    alert('WW91IGFyZSBhIGJvdA==');
  }
};

const runFormCheckForSubmit = () => {
  disableForm();
  handleRL();
  checkHP();
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  runFormCheckForSubmit();

  const formData = new FormData(form);
  toggleSkeleton();
  createSuccessMessage();
  fetch(`https://script.google.com/macros/s/${process.env.SHEET_ID}/exec`, {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.text())
    .then(() => {
      createToast('Message Sent!');
      resetForm();
    })
    .catch(() => {
      createToast('Something went wrong!');
      resetForm();
    });
};

const initContactForm = () => {
  checkRLOnLoad();

  for (const option of contactOptions) {
    option.addEventListener('change', handleSelectedContactMethod);
  }

  form.addEventListener('input', handleFormChange);
  form.addEventListener('submit', handleFormSubmit);
};

export default initContactForm;
