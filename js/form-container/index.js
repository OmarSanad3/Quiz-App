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

/* show starting page */
const signInButton = DOM.querySelector(".sign-in button");

/* this function work in big screen only */
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

/* to handle transition in mobile screens */
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

const InMobileScreen = window.matchMedia("(max-width: 768px)");

/* Validate email and password in sign up*/
function validateEmailAndPassword(email, password) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  if (!password) {
    alert("Please enter password ");
    return false;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }
  if (!email) {
    alert("Please enter email ");
    return false;
  }
  return true;
}

function showErrorMessages(messages, inputBox) {
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

  return error;
}

function removeErrorMessages(lable, inputBox) {
  inputBox.style.border = "1px solid rgb(171, 171, 171)";
  if (lable.querySelector("span")) lable.querySelector("span").remove();
}

/* Check if user exists in local storage */
function checkUserCredentials(event) {
  event.preventDefault();
  const email = signInForm.querySelector("input[type='email']");
  const password = signInForm.querySelector("input[type='password']");
  const emailLabel = signInForm.querySelector("label[for='email']");
  const passwordLabel = signInForm.querySelector("label[for='password']");

  const storedPassword = localStorage.getItem(email.value);

  email.addEventListener("input", function () {
    // Remove error message when user starts typing
    removeErrorMessages(emailLabel, email);
  });
  password.addEventListener("input", function () {
    // Remove error message when user starts typing
    removeErrorMessages(passwordLabel, password);
  });

  if (storedPassword && storedPassword === password.value) {
    // User exists
    if (InMobileScreen.matches) {
      showSuccessPageMobile(event);
    } else {
      showSuccessPageBigScreen(event);
    }
  } else if (storedPassword && storedPassword !== password.value) {
    // User exists but password is incorrect
    if (!passwordLabel.querySelector("span")) {
      // Insert the error message inside the label only if it does not exist
      passwordLabel.appendChild(
        showErrorMessages("*Password is incorrect", password)
      );
    }
  } else {
    if (!emailLabel.querySelector("span")) {
      // Insert the error message inside the label only if it does not exist
      emailLabel.appendChild(
        showErrorMessages("*User does not exist. Please sign up.", email)
      );
    }
  }
}
signInButton.addEventListener("click", checkUserCredentials);

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

  email.addEventListener("input", function () {
    // Remove error message when user starts typing
    removeErrorMessages(emailLabel, email);
  });
  Password.addEventListener("input", function () {
    // Remove error message when user starts typing
    removeErrorMessages(passwordLabel, Password);
  });
  confirmPassword.addEventListener("input", function () {
    // Remove error message when user starts typing
    removeErrorMessages(confirmPasswordLabel, confirmPassword);
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    if (!emailLabel.querySelector("span")) {
      emailLabel.appendChild(
        showErrorMessages("*Please enter a valid email address.", email)
      );
    }
    return;
  }
  if (!Password.value) {
    if (!passwordLabel.querySelector("span")) {
      passwordLabel.appendChild(
        showErrorMessages("*Please enter password.", Password)
      );
    }
    return;
  }
  if (Password.value.length < 8) {
    if (!passwordLabel.querySelector("span")) {
      passwordLabel.appendChild(
        showErrorMessages("*Password must be at least 8 digit.", Password)
      );
    }
    return;
  }
  if (!email.value) {
    if (!emailLabel.querySelector("span")) {
      emailLabel.appendChild(showErrorMessages("*Please enter email.", email));
    }
    return;
  }
  if (Password.value !== confirmPassword.value) {
    if (!confirmPasswordLabel.querySelector("span")) {
      confirmPasswordLabel.appendChild(
        showErrorMessages("*Passwords do not match.", confirmPassword)
      );
    }
    return;
  }
  // const getimage = signUpForm.getElementById("image");
  if (localStorage.getItem(email.value)) {
    if (!emailLabel.querySelector("span")) {
      emailLabel.appendChild(
        showErrorMessages("*User already exists. Please sign in.", email)
      );
    }
  } else {
    // let imagebase64 = "";
    // getimage.addEventListener("change", function () {
    // const reader = new FileReader();
    // reader.addEventListener("load", function () {
    //   imagebase64 = reader.result;
    // });
    // reader.readAsDataURL(getimage.files[0]);
    // });

    // const userData = {
    //   password: Password,
    //   image: imagebase64
    // };
    // localStorage.setItem(email, JSON.stringify(userData));
    localStorage.setItem(email.value, Password.value);
    alert("User registered successfully.");
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
