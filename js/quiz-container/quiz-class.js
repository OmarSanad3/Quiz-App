export default class Quiz {
  constructor(questions, questionDom, answersDom, prgBar, timerDom) {
    this.questions = questions;
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.isFirstQuestion = true;
    this.isLastQuestion = false;
    this.questionDom = questionDom;
    this.answersDom = answersDom;
    this.timerDom = timerDom;
    this.prgBar = prgBar;
    this.userAnswers = {};
  }

  startTimer() {
    let time = 60 * 5 * 1000;
    const timer = setInterval(() => {
      time -= 1000;
      let minutes = Math.floor(time / 60000);
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      let seconds = Math.floor((time % 60000) / 1000);
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      this.timerDom.textContent = `${minutes}:${seconds}`;

      if (time <= 0) {
        clearInterval(timer);
        
        this._quizTimeout();
        this.calculateScore();
      }
    }, 1000);
  }

  checkAnswer(answerIndex) {
    this.userAnswers[this.currentQuestionIndex] = answerIndex;
    this.renderQuestion();
  }

  _quizTimeout() {
    // render the screen of the quiz time out
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
