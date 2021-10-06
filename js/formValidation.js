/* eslint-disable no-unused-vars */
function validateForm(form) {
  const email = document.getElementById('email');
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
