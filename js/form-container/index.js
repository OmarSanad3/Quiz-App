const DOM = document.getElementById("form-container");

const signInForm = DOM.querySelector(".sign-in");
const signUpForm = DOM.querySelector(".sign-up");

const goSignUp = signInForm.querySelector("a");
const goSignIn = signUpForm.querySelector("a");

const cover = DOM.querySelector(".cover");

/* go to sign up form */
goSignUp.addEventListener("click", function (event) {
  event.preventDefault();
  let moveSignIn = signInForm.style;
  moveSignIn.transform = "translateY(150%)";
  moveSignIn.transitionDelay = "0s";

  let showSignUp = signUpForm.style;
  showSignUp.transform = "translateX(0)";
  showSignUp.transitionDelay = "0.5s";

  let toggleCover = cover.querySelector(".sign-in-img").style;
  toggleCover.transform = "translateY(200%)";

  let toggleCover2 = cover.querySelector(".sign-up-img").style;
  toggleCover2.transform = "translateY(-100%)";
});

/*go to sign in form*/
goSignIn.addEventListener("click", function (event) {
  event.preventDefault();
  let moveSignUp = signUpForm.style;
  moveSignUp.transform = "translateX(-130%)";
  moveSignUp.transitionDelay = "0s";

  let showSignIn = signInForm.style;
  showSignIn.transform = "translateY(0)";
  showSignIn.transitionDelay = "0.7s";

  let toggleCover = cover.querySelector(".sign-in-img").style;
  toggleCover.transform = "translateY(0)";

  let toggleCover2 = cover.querySelector(".sign-up-img").style;
  toggleCover2.transform = "translateY(-210%)";
});

/* Button to show starting page */
const signInButton = DOM.querySelector(".sign-in button");

/* this function work in big screen only to show successful page */
function showSuccessPageBigScreen(event) {
  event.preventDefault();

  cover.style.transform = "translateX(40%) scale(1.1)";

  let moveForm = DOM.querySelector(".form").style;
  moveForm.transform = "translateX(-60%)";

  let signInImg = cover.querySelector(".sign-in-img").style;
  signInImg.transitionDelay = "1s";
  signInImg.transform = "translateY(-100%)";

  let showSuccessImg = cover.querySelector(".success-img").style;
  showSuccessImg.transitionDelay = "0.8s";
  showSuccessImg.transform = "translate(30%,-200%)";
}

/* to handle transition in mobile screens to show successful page */
function showSuccessPageMobile(event) {
  event.preventDefault();
  console.log("mobile");

  let signInImg = cover.querySelector(".sign-in-img").style;
  signInImg.transform = "translateY(-100%)";

  styleCover = cover.style;
  styleCover.transform = "translateY(40%)";
  styleCover.height = "435px";
  styleCover.transitionDelay = "0.5s";

  let moveForm = DOM.querySelector(".form").style;
  moveForm.opacity = "0";

  let showSuccessImg = cover.querySelector(".success-img").style;
  showSuccessImg.transitionDelay = "0.5s";
  showSuccessImg.transform = "translate(0%,-200%)";
}

function showErrorMessages(messages, inputBox, label) {
  if (!label.querySelector("span")) {
    const error = document.createElement("span");
    error.textContent = messages;
    error.style.color = "red";
    error.style.fontSize = "9px";
    error.style.margin = "0";
    error.style.padding = "0";
    error.style.display = "inline-block";
    error.style.marginLeft = "10px"; // Adjust the spacing as needed
    error.style.position = "absolute";
    inputBox.style.border = "1px solid red";
    label.appendChild(error);
  }
}

function removeErrorMessages(lable, inputBox) {
  inputBox.addEventListener("input", function () {
    inputBox.style.border = "1px solid rgb(171, 171, 171)";
    if (lable.querySelector("span")) lable.querySelector("span").remove();
  });
}

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
      if (InMobileScreen.matches) {
        showSuccessPageMobile(event);
      } else {
        showSuccessPageBigScreen(event);
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

signInButton.addEventListener("click", checkUserCredentials);

function processImage(ImageUrl) {
  let imagebase64 = "";
  ImageUrl.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      imagebase64 = reader.result;
    });
    reader.readAsDataURL(ImageUrl.files[0]);
  });
  return imagebase64;
}

/* Add user to local storage when sign up*/
function addUser(event) {
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
  const getimage = document.getElementById("image-url");
  if (localStorage.getItem(email.value)) {
    showErrorMessages(
      "*User already exists. Please sign in.",
      email,
      emailLabel
    );
  } else {
    let imagebase64 = processImage(getimage);
    const userData = {
      password: Password.value,
      image: imagebase64,
    };
    localStorage.setItem(email.value, JSON.stringify(userData));
    Swal.fire({
      title: "You registered successfully.",
      text: "Please sign in to continue.",
      icon: "success",
    });
    goSignIn.click(); // Move to sign-in form after successful registration
  }
}

const signUpButton = signUpForm.querySelector("button");
signUpButton.addEventListener("click", addUser);

/* go to quiz page */
const goQuiz = DOM.querySelector(".success-img button");
goQuiz.addEventListener("click", function (event) {
  event.preventDefault();
  DOM.style.transform = "translate(-50% , -190%)";
  DOM.style.opacity = "0";
});
