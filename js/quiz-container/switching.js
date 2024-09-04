import { triggerStartTimer } from "./start-timer.js";

const switchingObj = {
  sideBar: document.querySelector("#quiz-container .side-bar"),
  prgBar: document.querySelector("#quiz-container #questions-progress"),
  questionBox: document.querySelector("#quiz-container .question-box"),
  openSideBarBtn: document.querySelector("#quiz-container #open-side-bar"),
  formsContainer: document.querySelector("#form-container"),
  startQuizBtn: document.querySelector("#start-quiz-btn"),
  quizContainerContent: document.querySelector("#quiz-container .content"),
};


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
  switchingObj.quizContainerContent.style.transform = "translateY(0)";
  
  displayProgressBar();
  displaySideBar();
  displayQuestionBox();
  displayOpenSideBarBtn();

  /* Start Quiz Timer */
  triggerStartTimer();
}

// setTimeout(() => {
//   startQuiz();
// }, 2000);

/* Get the btn that will start the quiz */
switchingObj.startQuizBtn.addEventListener("click", () => {
  startQuiz();
});