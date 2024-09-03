import Quiz from "./quiz-class.js";
import QUESTIONS from "../data/QUESTIONS_JS.js";
import selectRandomQuestions from "../util/selectRandomQuestions.js";

/* Access DOM Elements */
const question = document.querySelector("#quiz-container #question");
const answers = document.querySelectorAll("#quiz-container .options .option");
const nextBtn = document.querySelector("#quiz-container #nextBtn");
const prevBtn = document.querySelector("#quiz-container #prevBtn");
const prgBar = document.querySelector("#quiz-container #questions-progress");
const submitBtn = document.querySelector("#quiz-container #submit-quiz");

/* Select only 10 questions randomly */
const selectedQuestions = selectRandomQuestions(QUESTIONS, 10);

/* create a quiz instance */
const quiz = new Quiz(selectedQuestions, question, answers, prgBar);

/* converting nodelist to array */
const answersArr = Array.from(answers);
answersArr.forEach((answer, i) => {
  answer.addEventListener("click", () => {
    quiz.checkAnswer(i);
  });
});

function handleDisabledBtns() {
  if (quiz.isFirstQuestion) prevBtn.disabled = true;
  else prevBtn.disabled = false;

  if (quiz.isLastQuestion) nextBtn.disabled = true;
  else nextBtn.disabled = false;
}

handleDisabledBtns();

submitBtn.addEventListener("click", () => {
  quiz.calculateScore();
});

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
