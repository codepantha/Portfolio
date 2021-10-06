function validateForm(e) {
  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");

  console.log(email.value);

  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    const errorMessage = "Email should be lowercase.";
    emailError.innerHTML = errorMessage;
    form.email.focus();
    console.log('false')
    return false;
  } else {
    console.log('true')
    return true;
  }
  return false;
}

