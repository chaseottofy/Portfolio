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

const handleFormSubmit = e => {
  e.target.preventDefault();
  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    contactMethod: formData.get("contact-method"),
    contactValue: formData.get("contact-value"),
    message: formData.get("message"),
  };

  // handle mailto 
  const mailto = `mailto:
  ?subject=Contact%20from%20${data.name}
  &body=${data.message}
  %0D%0A%0D%0A
  Contact%20me%20at%20${data.contactValue}
  `;

  window.open(mailto, "_blank");
};


const initContactForm = () => {
  contactOptions.forEach((option) => {
    option.addEventListener("change", handleSelectedContactMethod);
  });
  form.addEventListener("input", handleFormChange);
  submitBtn.addEventListener("submit", (e) => handleFormSubmit(e));
};

export default initContactForm;