const progressBarObj = {
  prgBar: document.querySelector("#quiz-container #questions-progress"),
  questionsSide: document.querySelector("#quiz-container .questions-side"),
};

function setProgressBarWidth() {
  let questionsSideWidth = progressBarObj.questionsSide.offsetWidth;
  let prgBarWidth = questionsSideWidth * 0.8;
  progressBarObj.prgBar.style.width = prgBarWidth + "px";
  progressBarObj.prgBar.style.left =
    (questionsSideWidth - prgBarWidth) / 2 + "px";
}

setProgressBarWidth();
window.addEventListener("resize", () => {
  progressBarObj.prgBar.style.transition = "none";
  setProgressBarWidth();
});
