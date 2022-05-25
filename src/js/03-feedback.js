import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector(".feedback-form"),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
 
};

const formData = {};


const LOCALSTORAGE_KEY = "feedback-form-state";

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onTextareaInput, 500));

window.addEventListener('load', onPageLoad)


function onFormSubmit(e) {
  e.preventDefault();

  const formDataObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  console.log(formDataObj);

  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}


function onTextareaInput(e) {

  const { name, value } = e.target;

  formData[name] = value;
 

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}



function onPageLoad() {
  try {
    const formDataObj = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    refs.input.value = formDataObj.email;
    refs.textarea.value = formDataObj.message;

  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}


