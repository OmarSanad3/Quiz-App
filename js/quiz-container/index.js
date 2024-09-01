import Quiz from "./quiz-class.js";
import QUESTIONS from "../data/QUESTIONS_JS.js";

/* Access DOM Elements */
const question = document.querySelector("#quiz-container #question");
const answers = document.querySelectorAll("#quiz-container .options .option");
const nextBtn = document.querySelector("#quiz-container #nextBtn");
const prevBtn = document.querySelector("#quiz-container #prevBtn");

/* create a quiz instance */
const quiz = new Quiz(QUESTIONS, question, answers);

function handleDisabledBtns() {
  if (quiz.isFirstQuestion) prevBtn.disabled = true;
  else prevBtn.disabled = false;

  if (quiz.isLastQuestion) nextBtn.disabled = true;
  else nextBtn.disabled = false;
}

handleDisabledBtns();

/* render the first question */
quiz.renderQuestion();

/* Event Listeners */
nextBtn.addEventListener("click", () => {
  quiz.nextQuestion();
  handleDisabledBtns();
});

prevBtn.addEventListener("click", () => {
  quiz.prevQuestion();
  handleDisabledBtns();
});
