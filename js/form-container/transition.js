/* go to sign up form */
export function goToSignUp(event, signUpForm, signInForm, cover) {
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
}

/* go to sign in form */
export function goToSignIn(event, signUpForm, signInForm, cover) {
  event.preventDefault();
  let moveSignUp = signUpForm.style;
  moveSignUp.transform = "translateX(-150%)";
  moveSignUp.transitionDelay = "0s";

  let showSignIn = signInForm.style;
  showSignIn.transform = "translateY(0)";
  showSignIn.transitionDelay = "0.7s";

  let toggleCover = cover.querySelector(".sign-in-img").style;
  toggleCover.transform = "translateY(0)";

  let toggleCover2 = cover.querySelector(".sign-up-img").style;
  toggleCover2.transform = "translateY(-210%)";
}

export function goToQuiz(DOM) {
  const goQuiz = DOM.querySelector(".success-img button");
  goQuiz.addEventListener("click", function (event) {
    event.preventDefault();
    DOM.style.transform = "translate(-50% , -190%)";
    DOM.style.opacity = "0";
  });
}

/* to handle transition in big screens to show successful page */
export function showSuccessPageBigScreen(event, cover, DOM) {
  event.preventDefault();

  cover.style.transform = "translateX(40%) scale(1.1)";

  let moveForm = DOM.querySelector(".form").style;
  moveForm.transform = "translateX(-60%)";

  let signInImg = cover.querySelector(".sign-in-img").style;
  signInImg.transitionDelay = "1s";
  signInImg.transform = "translateY(-100%)";

  let showSuccessImg = cover.querySelector(".success-img").style;
  showSuccessImg.transitionDelay = "0.8s";
  showSuccessImg.transform = "translate(20%,-200%)";
}

/* to handle transition in mobile screens to show successful page */
export function showSuccessPageMobile(event, cover, DOM) {
  event.preventDefault();
  let signInImg = cover.querySelector(".sign-in-img").style;
  signInImg.transform = "translateY(-100%)";

  let styleCover = cover.style;
  styleCover.transform = "translateY(40%)";
  styleCover.height = "435px";
  styleCover.transitionDelay = "0.5s";

  let moveForm = DOM.querySelector(".form").style;
  moveForm.opacity = "0";

  let showSuccessImg = cover.querySelector(".success-img").style;
  showSuccessImg.transitionDelay = "0.5s";
  showSuccessImg.transform = "translate(0%,-200%)";
}