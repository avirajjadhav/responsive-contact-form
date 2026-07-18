let NameError = document.getElementById("name-error");
let ContactError = document.getElementById("contact-error");
let EmailError = document.getElementById("email-error");
let MessageError = document.getElementById("message-error");
let SubmitError = document.getElementById("submit-error");

function NameValidate() {
  let name = document.getElementById("contact-name").value;

  if (name == 0) {
    NameError.innerHTML = "Name is required.";
    return false;
  } else if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
    NameError.innerHTML = "Enter Full Name.";
    return false;
  } else {
    NameError.innerHTML = "valid";
    return true;
  }
}
