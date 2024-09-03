const switchingObj = {
  sideBar: document.querySelector("#quiz-container .side-bar"),
  prgBar: document.querySelector("#quiz-container #questions-progress"),
  questionBox: document.querySelector("#quiz-container .question-box"),
  openSideBarBtn: document.querySelector("#quiz-container #open-side-bar"),
  quizContainer: document.querySelector("#quiz-container"),
  formsContainer: document.querySelector("#form-container"),
  startQuizBtn: document.querySelector("#start-quiz-btn"),
};

switchingObj.quizContainer.style.display = "none";

function displayProgressBar() {
  switchingObj.prgBar.classList.remove("hide");
}

function displaySideBar() {
  switchingObj.sideBar.classList.remove("hide");
}

function displayQuestionBox() {
  switchingObj.questionBox.classList.remove("hide");
}

function displayOpenSideBarBtn() {
  switchingObj.openSideBarBtn.classList.remove("hide");
}

function startQuiz() {
  switchingObj.formsContainer.style.display = "none";
  switchingObj.quizContainer.style.display = "block";
  displayProgressBar();
  displaySideBar();
  displayQuestionBox();
  displayOpenSideBarBtn();

  /* Start Quiz Timer */
}

// setTimeout(() => {
//   startQuiz();
// }, 2000);

/* Get the btn that will start the quiz */
switchingObj.startQuizBtn.addEventListener("click", () => {
  startQuiz();
});
