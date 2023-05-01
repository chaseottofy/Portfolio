import createToast from '../factory/createToast';
import createSpinner from '../factory/createSpinner';

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
    contactValueInput.placeholder = 'Enter your phone number';
  } else if (selectedOption === 'email') {
    contactValueInput.type = 'email';
    contactValueInput.placeholder = 'Enter your email address';
  }
};

const handleFormChange = () => {
  if (nameInput.value && contactValueInput.value && messageInput.value) {
    console.log('form is valid');
    submitBtn.disabled = false;
    submitBtn.classList.add('btn-allow');
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove('btn-allow');
  }
};

const createSuccessMessage = () => {
  const successMessage = document.createElement('div');
  successMessage.classList.add('success-message');
  successMessage.appendChild(createSpinner());
  formWrapper.classList.add('disable-form');
  formWrapper.appendChild(successMessage);
};

const toggleSkeleton = () => {
  nameInput.classList.toggle('skeleton');
  contactValueInput.classList.toggle('skeleton');
  messageInput.classList.toggle('skeleton');
};

const resetForm = () => {
  form.reset();
  document.querySelector('.success-message').remove();
  submitBtn.classList.remove('btn-allow');
  formWrapper.classList.remove('disable-form');
  toggleSkeleton();
};

// still need some kind of authentication to prevent my google sheet from turning into garbage.
const handleFormSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(form);

  toggleSkeleton();
  createSuccessMessage();

  fetch(`https://script.google.com/macros/s/${process.env.SHEET_ID}/exec`, {
    method: 'POST',
    body: data,
  })
    .then((res) => res.text())
    .then((formd) => console.log(formd))
    .then(() => {
      createToast('Message Sent!');
      resetForm();
    });
};

const initContactForm = () => {
  contactOptions.forEach((option) => option.addEventListener('change', handleSelectedContactMethod));
  form.addEventListener('input', handleFormChange);
  form.addEventListener('submit', handleFormSubmit);
};

export default initContactForm;
