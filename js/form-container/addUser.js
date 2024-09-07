import { removeErrorMessages, showErrorMessages } from "./handleError.js";

const userData = {};
const DOM = document.getElementById("form-container");
const signUpForm = DOM.querySelector(".sign-up");
const goSignIn = signUpForm.querySelector("a");

export function addUser(event) {
  event.preventDefault();
  const email = signUpForm.querySelector("input[type='email']");
  const Password = signUpForm.querySelector("input[id='set-password']");
  const confirmPassword = signUpForm.querySelector(
    "input[id='confirm-password']"
  );
  const emailLabel = signUpForm.querySelector("label[for='email']");
  const passwordLabel = signUpForm.querySelector("label[for='set-password']");
  const confirmPasswordLabel = signUpForm.querySelector(
    "label[for='confirm-password']"
  );

  // Remove error message when user starts typing
  removeErrorMessages(emailLabel, email);
  // Remove error message when user starts typing
  removeErrorMessages(passwordLabel, Password);
  // Remove error message when user starts typing
  removeErrorMessages(confirmPasswordLabel, confirmPassword);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    showErrorMessages(
      "*Please enter a valid email address.",
      email,
      emailLabel
    );
    return;
  }
  if (!Password.value) {
    showErrorMessages("*Please enter password.", Password, passwordLabel);
    return;
  }
  if (Password.value.length < 8) {
    showErrorMessages(
      "*Password must be at least 8 characters long.",
      Password,
      passwordLabel
    );
    return;
  }
  if (!email.value) {
    showErrorMessages("*Please enter email.", email, emailLabel);
    return;
  }
  if (Password.value !== confirmPassword.value) {
    showErrorMessages(
      "*Passwords don't match.",
      confirmPassword,
      confirmPasswordLabel
    );
    return;
  }
  if (localStorage.getItem(email.value)) {
    showErrorMessages(
      "*User already exists. Please sign in.",
      email,
      emailLabel
    );
  } else {
    userData.password = Password.value;
    Swal.fire({
      title: "You registered successfully.",
      text: "Please sign in to continue.",
      icon: "success",
    });
    goSignIn.click(); // Move to sign-in form after successful registration
  }
  fetchImage(email);
}

function fetchImage(email) {
  const getimage = document.getElementById("image-url");
  if(!getimage.files[0]){
    userData.image = "";
    localStorage.setItem(email.value, JSON.stringify(userData));
    return;
  }
  const reader = new FileReader();
  reader.onloadend = function () {
    userData.image = reader.result;
    localStorage.setItem(email.value, JSON.stringify(userData));
  };
  reader.readAsDataURL(getimage.files[0]);
}
