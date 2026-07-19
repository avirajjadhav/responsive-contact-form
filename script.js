// let NameError = document.getElementById("name-error");
// let ContactError = document.getElementById("contact-error");
// let EmailError = document.getElementById("email-error");
// let MessageError = document.getElementById("message-error");
// let SubmitError = document.getElementById("submit-error");

function NameValidate() {
    let nameInput = document.getElementById("contact-name");
    let name = nameInput.value;
    let NameError = document.getElementById("name-error");

    if (name === "") {
        NameError.innerHTML = "Name is required.";
        nameInput.classList.remove("success-border");
        return false;
    }else if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        NameError.innerHTML = "Enter Full Name.";
        nameInput.classList.remove("success-border");
        return false;
    }

    NameError.innerHTML = "";
    nameInput.classList.add("success-border");
    return true;
}

function ContactValidate(){
 let ContactInput=document.getElementById("contact-phone")
 let contact=ContactInput.value;
 let ContactError = document.getElementById("contact-error");

 if (contact === "") {
  ContactError.innerHTML="Contact number is required."
  ContactInput.classList.remove("success-border")
  return false;
  
 }else if (!contact.match(/^[0-9]{10}$/)) {
        ContactError.innerHTML = "Enter a valid 10-digit number.";
        ContactInput.classList.remove("success-border");
        return false;
     }
    ContactError.innerHTML="";
    ContactInput.classList.add("success-border")
    return true;
}

function EmailValidate(){
  let EmailInput=document.getElementById("contact-email")
  let email=EmailInput.value;
  let EmailError = document.getElementById("email-error");
  
  if (email=== "") {
    EmailError.innerHTML="Email is required.";
    EmailInput.classList.remove("success-border");
    return false;

  }else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    EmailError.innerHTML = "Enter a valid email address.";
    EmailInput.classList.remove("success-border");
    return false;
  }
   
  
    EmailError.innerHTML = "";
    EmailInput.classList.add("success-border");
    return true;

}

function MessageValidate(){
 let MessageInput=document.getElementById("contact-message");
 let message=MessageInput.value;
 let MessageError = document.getElementById("message-error");

  if(message=== ""){
  MessageError.innerHTML="Message is required";
  MessageInput.classList.remove("success-border")
  return false;

  }else if (message.length< 10) {
        MessageError.innerHTML = "Message must contain at least 10 characters.";
        MessageInput.classList.remove("success-border");
        return false;
    }
    MessageError.innerHTML = "";
    MessageInput.classList.add("success-border");
    return true;
}

function ValidateForm() {

    let submitError = document.getElementById("submit-error");

    if (
        !NameValidate() ||
        !ContactValidate() ||
        !EmailValidate() ||
        !MessageValidate()
    ) {
        submitError.innerHTML = "Please fix all errors.";
        return false; // Prevent form submission
    }

    submitError.innerHTML = "";
    return true; // Allow form submission
}