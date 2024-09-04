import Quiz from "./quiz-class.js";
import QUESTIONS from "../data/QUESTIONS_JS.js";
import selectRandomQuestions from "../util/selectRandomQuestions.js";
import { passQuizInstance } from "./start-timer.js";
import { passResultsObject, previewResults } from "../results-screen/results-screen.js"

/* ==================== Access DOM Elements ==================== */
const questionElement = document.querySelector("#quiz-container #question");
const answersElements = document.querySelectorAll(
  "#quiz-container .options .option"
);
const nextBtn = document.querySelector("#quiz-container #nextBtn");
const prevBtn = document.querySelector("#quiz-container #prevBtn");
const prgBarElement = document.querySelector(
  "#quiz-container #questions-progress"
);
const submitBtn = document.querySelector("#quiz-container #submit-quiz");
const timerElement = document.querySelector("#quiz-container #timer-element");
const savedQuestionsContainerElement = document.querySelector(
  "#quiz-container .saved-questions"
);
const saveQuestionBtn = document.querySelector(
  "#quiz-container #save-question-btn"
);
const numOfSavedQuestionsElement = document.querySelector(
  "#quiz-container #num-of-saved-question"
);

/* ==================== Select only 10 questions randomly ==================== */
const selectedQuestions = selectRandomQuestions(QUESTIONS, 10);

/* ==================== create a quiz instance ==================== */
const quiz = new Quiz(
  selectedQuestions,
  questionElement,
  answersElements,
  prgBarElement,
  timerElement,
  savedQuestionsContainerElement,
  numOfSavedQuestionsElement,
  nextBtn,
  prevBtn,
  submitBtn,
  addEventListenersToSavedQuestions,
  addEventListenerToOptions,
);

/* ==================== Pass the quiz instance to handle triggering the start time ==================== */
passQuizInstance(quiz);

/* ==================== Functions to be called from inside the quiz class ==================== */
function addEventListenerToOptions() {
  /* converting nodelist to array */
  const answersArr = Array.from(answersElements);

  answersArr.forEach((answer, i) => {
    answer.addEventListener("click", () => {
      quiz.checkAnswer(i);
    });
  });
}

function addEventListenersToSavedQuestions() {
  const savedQuestions =
    savedQuestionsContainerElement.querySelectorAll("button");

  savedQuestions.forEach((btn, i) => {
    const questionIndex = btn.getAttribute("data-index");
    btn.addEventListener("click", () => {
      quiz.goToQuestion(+questionIndex);
      addEventListenersToSavedQuestions();
    });
  });
}

/* ==================== render the first question ==================== */
quiz.renderQuestion();

/* ==================== Event Listeners ==================== */
nextBtn.addEventListener("click", () => {
  quiz.nextQuestion();
});

prevBtn.addEventListener("click", () => {
  quiz.prevQuestion();
});

submitBtn.addEventListener("click", () => {
  passResultsObject(quiz.getResultObject());
  previewResults();
});

saveQuestionBtn.addEventListener("click", () => {
  quiz.toggleSaveQuestion();
});

/* ==================================================================================================== */
