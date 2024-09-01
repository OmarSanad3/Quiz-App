export default class Quiz {
  constructor(questions, questionDom, answersDom, prgBar) {
    this.questions = questions;
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.isFirstQuestion = true;
    this.isLastQuestion = false;
    this.questionDom = questionDom;
    this.answersDom = answersDom;
    this.prgBar = prgBar;
    this.userAnswers = {};
  }

  checkAnswer(answerIndex) {
    this.userAnswers[this.currentQuestionIndex] = answerIndex;
    this.renderQuestion();
  }

  _handleProgressBar() {
    this.prgBar.value =
      ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  _handleFirstOrLastQuestion() {
    this.isFirstQuestion = this.currentQuestionIndex === 0;
    this.isLastQuestion =
      this.currentQuestionIndex === this.questions.length - 1;
  }

  renderQuestion() {
    this._handleProgressBar();
    this._handleFirstOrLastQuestion();

    this.questionDom.innerHTML = `
      <h3>Question ${this.currentQuestionIndex + 1}</h3>
      <p>${this.questions[this.currentQuestionIndex].question}</p>
    `;

    for (let i = 0; i < 4; i++) {
      this.answersDom[i].textContent =
        this.questions[this.currentQuestionIndex].answers[i];

      if (this.userAnswers[this.currentQuestionIndex] === i) {
        if (!this.answersDom[i].classList.contains("selected"))
          this.answersDom[i].classList.add("selected");
      } else this.answersDom[i].classList.remove("selected");
    }
  }

  calculateScore() {
    this.score = 0;
    this.questions.forEach((question, i) => {
      if (question.correctAnswer === question.answers[this.userAnswers[i]])
        this.score++;
    });
    return this.score;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.renderQuestion();
  }

  prevQuestion() {
    this.currentQuestionIndex--;
    this.renderQuestion();
  }
}
