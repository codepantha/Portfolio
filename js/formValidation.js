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


 //****Saving oninput fields****//
let localData = {name: "", email: "", message: ""}

const onChangeInputHandler = (event) => {
  // console.log(event.target.value)
  // console.log("input:",event.value)
  // console.log(event.name)

  switch(event.name){
    case "name":
    localData = {...localData, name: event.value}
    break;
    case "email":
      localData = {...localData, email: event.value}
      break;
    case "message":
      localData = {...localData, message: event.value}
      break;

    default:
    
    break;
  }

  localStorage.setItem("data", JSON.stringify(localData))

}

//***When page reloads ***/

let reloadData = JSON.parse(localStorage.getItem("data"))

if(reloadData){
  email.value = reloadData.email
  nameInput.value = reloadData.name
  messageInput.value = reloadData.message
}





