import createToast from "../utilities/createToast";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const form = $(".contact-form");
const nameInput = $(".form-name--input");
const contactMethodGroup = $(".contact-method-group");
const contactValueInput = $(".form-contact--input");
const messageInput = $(".form-message--input");
const submitBtn = $(".submit-form--btn");
const contactOptions = $$(".contact-option--input");
const formContainer = $(".contact-form--container");

const handleSelectedContactMethod = e => {
  const selectedOption = e.target.value;
  if (selectedOption === "phone") {
    contactValueInput.type = "tel";
    contactValueInput.placeholder = "Enter your phone number";
  } else if (selectedOption === "email") {
    contactValueInput.type = "email";
    contactValueInput.placeholder = "Enter your email address";
  }
};

const handleFormChange = e => {
  if (nameInput.value && contactValueInput.value && messageInput.value) {
    console.log('form is valid');
    submitBtn.disabled = false;
    submitBtn.classList.add("btn-allow");
  } else {
    submitBtn.disabled = true;
    submitBtn.classList.remove("btn-allow");
  }
};

const createTimestamp = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};

const createSuccessMessage = () => {
  const successMessage = document.createElement("div");
  successMessage.classList.add("success-message");
  const sendingText = document.createElement("span");
  sendingText.textContent = "Sending Messgage...";
  formContainer.classList.add("disable-form");
  successMessage.appendChild(sendingText);
  form.appendChild(successMessage);
};

const handleFormSubmit = e => {
  e.preventDefault();
  createSuccessMessage();
  let data = new FormData(form);

  fetch(`https://script.google.com/macros/s/${process.env.SHEET_ID}/exec`, {
    method: "POST",
    body: data,
  })
    .then(res => res.text())
    .then(data => console.log(data))
    .then(() => {
      createToast("Message Sent!");
      form.reset();
      $(".success-message").remove();
      formContainer.classList.remove("disable-form");
    });
};

const initContactForm = () => {
  contactOptions.forEach((option) => {
    option.addEventListener("change", handleSelectedContactMethod);
  });
  form.addEventListener("input", handleFormChange);
  form.addEventListener("submit", (e) => handleFormSubmit(e));
};
export default initContactForm;

// console.log(
//   data.get("messageName"),
//   data.get("contactMethod"),
//   data.get("messageContactVal"),
//   data.get("messageVal"),
// );