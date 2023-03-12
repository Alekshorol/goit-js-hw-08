const formEl = document.querySelector('.feedback-form');

import throttle from 'lodash.throttle';
const FEEDBACK_KEY = 'feedback-form-state';

if (localStorage.getItem(FEEDBACK_KEY)) {
  formEl.email.value = getData(FEEDBACK_KEY).email;
  formEl.message.value = getData(FEEDBACK_KEY).message;
} else {
  formEl.email.value = '';
  formEl.message.value = '';
}

formEl.addEventListener(
  'input',
  throttle(onFormElInput, 500, { trailing: false })
);

formEl.addEventListener('submit', onFormElSubmit);

function onFormElInput(evt) {
  localStorage.setItem(
    FEEDBACK_KEY,
    JSON.stringify(
      createObject(
        evt.currentTarget.email.value,
        evt.currentTarget.message.value
      )
    )
  );
}

function onFormElSubmit(evt) {
  evt.preventDefault();
  const email = formEl.email.value;
  const message = formEl.message.value;

  console.log(createObject(email, message));

  localStorage.removeItem(FEEDBACK_KEY);
  formEl.email.value = '';
  formEl.message.value = '';
}

function getData(storageKey) {
  try {
    return JSON.parse(localStorage.getItem(storageKey));
  } catch (error) {
    console.log(`Missing data from this key ${storageKey} in Local Storage`);
  }
}

function createObject(email, message) {
  return { email: email, message: message };
}
