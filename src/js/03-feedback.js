import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[type="email"]'),
  message: document.querySelector('[name="message"]'),
  submit: document.querySelector('[type="submit"]'),
};

const KEY = 'feedback-form-state';
let formData = {};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
// refs.submit.addEventListener('change', on);

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log(formData);
  evt.currentTarget.reset();
  localStorage.removeItem(KEY);
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const savedForm = localStorage.getItem(KEY);
  const parsedForm = JSON.parse(savedForm);

  if (parsedForm) {
    refs.email.value = parsedForm.email;
    refs.message.value = parsedForm.message;
  }
}

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });
