export default class Quiz {
  constructor(questions, questionDom, answersDom) {
    this.questions = questions;
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.isFirstQuestion = true;
    this.isLastQuestion = false;
    this.questionDom = questionDom;
    this.answersDom = answersDom;
  }

  _handleFirstOrLastQuestion() {
    this.isFirstQuestion = this.currentQuestionIndex === 0;
    this.isLastQuestion =
      this.currentQuestionIndex === this.questions.length - 1;
  }

  renderQuestion() {
    this.questionDom.innerHTML = `
      <h3>Question ${this.currentQuestionIndex + 1}</h3>
      <p>${this.questions[this.currentQuestionIndex].question}</p>
    `;

    for (let i = 0; i < 4; i++)
      this.answersDom[i].textContent =
        this.questions[this.currentQuestionIndex].answers[i];
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this._handleFirstOrLastQuestion();
    this.renderQuestion();
  }

  prevQuestion() {
    this.currentQuestionIndex--;
    this._handleFirstOrLastQuestion();
    this.renderQuestion();
  }
}
