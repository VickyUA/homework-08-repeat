import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(handleInput, 500));

function handleInput() {
  const feedbackForm = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
  console.log(feedbackForm);
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  feedbackForm = {};
}

const enterData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(enterData) || {};
form.elements.email.value = parsedData.email || '';
form.elements.message.value = parsedData.message || '';
