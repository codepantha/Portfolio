/* eslint-disable no-unused-vars */
const email = document.getElementById('email');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');

function validateForm(form) {
  const emailError = document.getElementById('emailError');

  if (email.value === email.value.toLowerCase()) {
    return true;
  }
  const errorMessage = 'Email should be lowercase.';
  emailError.innerHTML = errorMessage;
  emailError.style.display = 'block';
  form.email.focus();
  email.style.border = '1px solid red';
  email.style.boxShadow = '0 0 2pt 1pt #ff0000';
  return false;
}

let localData = { name: '', email: '', message: '' };

const onChangeInputHandler = (event) => {
  switch (event.name) {
    case 'name':
      localData = { ...localData, name: event.value };
      break;
    case 'email':
      localData = { ...localData, email: event.value };
      break;
    case 'message':
      localData = { ...localData, message: event.value };
      break;

    default:

      break;
  }

  localStorage.setItem('userData', JSON.stringify(localData));
};

// When page loads fetch and display user data if it exists
const fetchUserData = JSON.parse(localStorage.getItem('userData'));

if (fetchUserData) {
  email.value = fetchUserData.email;
  nameInput.value = fetchUserData.name;
  messageInput.value = fetchUserData.message;
}
