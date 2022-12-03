/* Contact Form */

const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullname");
const fullNameError = document.querySelector("#fullnameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 4)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (submitEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(subject.value, 4)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(message.value, 9)) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

// function submitForm(event) {
//   event.preventDefault();
//   messageContainer.innerHTML = `<p class="messageSent">Your contact form has been sent!</p>`;
//   form.reset();
// }

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function submitEmail(email) {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
