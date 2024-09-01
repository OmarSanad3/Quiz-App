const DOM = document.getElementById("form-container");

const signInForm = DOM.querySelector(".sign-in");
const goSignUp = signInForm.querySelector("a");

const signUpForm = DOM.querySelector(".sign-up");
const goSignIn = signUpForm.querySelector("a");
const cover = DOM.querySelector(".cover");

/* move SIGN IN form */
goSignUp.addEventListener("click", function (event) {
  event.preventDefault();
  let moveSignIn = signInForm.style;
  moveSignIn.transitionDelay = "0s";
  moveSignIn.transform = "translateY(150%)";

  let showSignUp = signUpForm.style;
  showSignUp.transform = "translateX(0)";
  showSignUp.transitionDelay = "0.5s";

  let toggleCover = cover.querySelector(".sign-in-img").style;
  toggleCover.transform = "translateY(200%)";

  let toggleCover2 = cover.querySelector(".sign-up-img").style;
  toggleCover2.transform = "translateY(-100%)";
});

/* move SIGN UP form */
goSignIn.addEventListener("click", function (event) {
  event.preventDefault();
  let moveSignUp = signUpForm.style;
  moveSignUp.transitionDelay = "0s";
  moveSignUp.transform = "translateX(-130%)";

  let showSignIn = signInForm.style;
  showSignIn.transform = "translateY(0)";
  showSignIn.transitionDelay = "0.7s";

  let toggleCover = cover.querySelector(".sign-in-img").style;
  toggleCover.transform = "translateY(0)";

  let toggleCover2 = cover.querySelector(".sign-up-img").style;
  toggleCover2.transform = "translateY(-210%)";
});

/* show starting page */
const signButton = DOM.querySelector(".sign-in button");

/* this function work in big screen only */
function showSuccessPage(event) {
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
  moveForm.transitionDelay = "0s";
  moveForm.opacity = "0";

  let showSuccessImg = cover.querySelector(".success-img").style;
  showSuccessImg.transitionDelay = "0.5s";
  showSuccessImg.transform = "translate(0%,-200%)";
}

const InMobileScreen = window.matchMedia("(max-width: 768px)");
if (!InMobileScreen.matches) {
  signButton.addEventListener("click", showSuccessPage);
} else {
  signButton.addEventListener("click", showSuccessPageMobile);
}
