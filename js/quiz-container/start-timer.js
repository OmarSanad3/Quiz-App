let quizInstance = null;

export function passQuizInstance(inst) {
  quizInstance = inst;
}

export function triggerStartTimer() {
  quizInstance.startTimer();
}