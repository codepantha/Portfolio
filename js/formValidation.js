function validateForm(form) {
  console.log("iamreaching")
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  console.log(email.value);

  if (email.value === email.value.toLowerCase()) {
    console.log('true')
    return true;
  } else {
    const errorMessage = "Email should be lowercase.";
    emailError.innerHTML = errorMessage;
    form.email.focus();
    console.log('false')
    return false;
    
  }
}

