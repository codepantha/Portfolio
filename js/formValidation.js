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
    emailError.style.display = "block";
    form.email.focus();
    email.style.border = "1px solid red";
    email.style.boxShadow = '0 0 2pt 1pt #ff0000';
    return false;
  }
}

