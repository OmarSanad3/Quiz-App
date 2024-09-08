// ---------------importing modules----------------------------------
import { goToSignUp, goToSignIn , goToQuiz , showSuccessPageMobile  , showSuccessPageBigScreen } from "./transition.js";
import { showErrorMessages, removeErrorMessages } from "./handleError.js";
import { addUser } from "./addUser.js";

// ---------------defining variables----------------------------------
const DOM = document.getElementById("form-container");
const signInForm = DOM.querySelector(".sign-in");
const signUpForm = DOM.querySelector(".sign-up");

const goSignUp = signInForm.querySelector("a");
const goSignIn = signUpForm.querySelector("a");

const cover = DOM.querySelector(".cover");

// ---------------defining functions---------------------------------
document.querySelector(".custom-file-label").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("image-url").click();
});

goSignIn.addEventListener("click", (event) => goToSignIn(event , signUpForm , signInForm , cover));
goSignUp.addEventListener("click", (event) => goToSignUp(event , signUpForm , signInForm , cover));

const InMobileScreen = window.matchMedia("(max-width: 768px)");

/* Check if user exists in local storage */
function checkUserCredentials(event) {
  event.preventDefault();
  const email = signInForm.querySelector("input[type='email']");
  const password = signInForm.querySelector("input[type='password']");
  const emailLabel = signInForm.querySelector("label[for='email']");
  const passwordLabel = signInForm.querySelector("label[for='password']");

  const storedPassword = localStorage.getItem(email.value); // string of user data

  // Remove error message when user starts typing
  removeErrorMessages(emailLabel, email);
  // Remove error message when user starts typing
  removeErrorMessages(passwordLabel, password);

  if (storedPassword) {
    // User exists
    const userData = JSON.parse(storedPassword); // convert string to object
    if (userData.password === password.value) {
      // Set the profile image
      if (userData.image !== "") {
        let setProfileImage = document
          .getElementById("quiz-container")
          .querySelector(".user-info img");
        setProfileImage.src = userData.image;
      }
      document.querySelector("#quiz-container .user-info h3").textContent = userData.userName;
      if (InMobileScreen.matches) {
        showSuccessPageMobile(event , cover , DOM);
      } else {
        showSuccessPageBigScreen(event , cover , DOM);
      }
    } else {
      // User exists but password is incorrect
      showErrorMessages("*Password is incorrect.", password, passwordLabel);
    }
  } else {
    // User does not exist
    showErrorMessages(
      "*User does not exist. Please sign up.",
      email,
      emailLabel
    );
  }
}

/* Button to show starting page */
const signInButton = DOM.querySelector(".sign-in button");
signInButton.addEventListener("click", checkUserCredentials);

// ---------------Add New User ----------------------------------
const imgURL = signUpForm.querySelector("input[type='file']");
const imageLabel = signUpForm.querySelector(".custom-file-label");
imgURL.addEventListener("change", () => {
  if(!imgURL.files.length){
    return;
  }
  console.log( typeof imgURL.files[0].name);
  imageLabel.textContent = imgURL.files[0].name;
});
const signUpButton = signUpForm.querySelector("button");
signUpButton.addEventListener("click",  addUser );

/* go to quiz page */
goToQuiz(DOM);