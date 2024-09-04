import Quiz from "./quiz-class.js";
import QUESTIONS from "../data/QUESTIONS_JS.js";
import selectRandomQuestions from "../util/selectRandomQuestions.js";
import { passQuizInstance } from "./start-timer.js";

/* Access DOM Elements */
const question = document.querySelector("#quiz-container #question");
const answers = document.querySelectorAll("#quiz-container .options .option");
const nextBtn = document.querySelector("#quiz-container #nextBtn");
const prevBtn = document.querySelector("#quiz-container #prevBtn");
const prgBar = document.querySelector("#quiz-container #questions-progress");
const submitBtn = document.querySelector("#quiz-container #submit-quiz");
const timerElement = document.querySelector("#quiz-container #timer-element");
const savedQuestionsContainer = document.querySelector(
  "#quiz-container .saved-questions"
);
const saveQuestionBtn = document.querySelector(
  "#quiz-container #save-question-btn"
);
const numOfSavedQuestionsElement = document.querySelector(
  "#quiz-container #num-of-saved-question"
);

/* Select only 10 questions randomly */
const selectedQuestions = selectRandomQuestions(QUESTIONS, 10);

/* create a quiz instance */
const quiz = new Quiz(
  selectedQuestions,
  question,
  answers,
  prgBar,
  timerElement,
  savedQuestionsContainer,
  numOfSavedQuestionsElement
);

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

/* render the first question */
quiz.renderQuestion();

/* Event Listeners */
nextBtn.addEventListener("click", () => {
  quiz.nextQuestion();
  handleDisabledBtns();
  addEventListenersToSavedQuestions();
});

prevBtn.addEventListener("click", () => {
  quiz.prevQuestion();
  handleDisabledBtns();
  addEventListenersToSavedQuestions();
});

submitBtn.addEventListener("click", () => {
  quiz.getResultObject();
  /* go to results screen */
});

saveQuestionBtn.addEventListener("click", () => {
  quiz.toggleSaveQuestion();
  addEventListenersToSavedQuestions();
});

function addEventListenersToSavedQuestions() {
  const savedQuestions = savedQuestionsContainer.querySelectorAll("button");
  
  savedQuestions.forEach((btn, i) => {
    const questionIndex = btn.getAttribute("data-index");
    btn.addEventListener("click", () => {
      quiz.goToQuestion(+questionIndex);
    });
  });
}

/* Pass Start Timer Function */
passQuizInstance(quiz);
