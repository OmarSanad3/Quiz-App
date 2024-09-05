let theResultsObject = null;

export function passResultsObject(resultsObject) {
  theResultsObject = resultsObject;
}

export function previewResults() {
  /* Access the DOM elements for the results screen */
  const sideBar = document.querySelector("#quiz-container .side-bar");
  const prgBar = document.querySelector("#quiz-container #questions-progress");
  const questionBox = document.querySelector("#quiz-container .question-box");
  const openSideBarBtn = document.querySelector(
    "#quiz-container #open-side-bar"
  );
  const quizContainerContent = document.querySelector(
    "#quiz-container .content"
  );
  const quizContainer = document.querySelector("#quiz-container");
  /* ========================================================================================== */

  function hideProgressBar() {
    prgBar.classList.add("hide");
  }

  function hideSideBar() {
    sideBar.classList.add("hide");
  }

  function hideQuestionBox() {
    questionBox.classList.add("hide");
  }

  function hideOpenSideBarBtn() {
    openSideBarBtn.classList.add("hide");
  }

  hideProgressBar();
  hideSideBar();
  hideQuestionBox();
  hideOpenSideBarBtn();

  setTimeout(() => {
    quizContainerContent.style.transform = "translateY(200%)";
    quizContainer.style.display = "none";
    /* ============================== render the results screen ============================== */
    const resultsScreen = document.getElementById("results");
    resultsScreen.classList.add("active");

    setTimeout(() => {
      resultsScreen.style.transform = "translateY(0)";
      document.querySelector("body").style.setProperty("overflow", "auto");
      const showScore = resultsScreen.querySelector(".show-score");
      const showAnswers = resultsScreen.querySelector(".show-answers");

      showScore.innerHTML = `Your score is: ${theResultsObject.score} / 10`;

      function getAnswerClass(result, answer) {
        if (
          result.userAnswer === result.correctAnswer &&
          result.userAnswer === answer
        ) {
          return "correct";
        }
        if (
          result.userAnswer !== result.correctAnswer &&
          result.userAnswer === answer
        ) {
          return "wrong";
        }
        if (result.correctAnswer === answer) {
          return "correct";
        }
        return "";
      }
      theResultsObject.resultsArray.forEach((result, i) => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        resultDiv.innerHTML = `
            <div class="question">
              <h3>Question ${i + 1} <span> </span> </h3>
              <p>${result.question}</p>
            </div>
            <div class = "options">
              ${result.answers
                .map(
                  (answer) =>
                    `<button class="option ${getAnswerClass(
                      result,
                      answer
                    )}"> ${answer}</button>`
                )
                .join("")}
            </div>`;
        // Ensure the span element exists before setting its content

        const point = resultDiv.querySelector(".question h3 span");
        if (point) {
          // it does not work without this (if statement) I don't know why
          // Update the span content based on the answer correctness
          if (getAnswerClass(result, result.userAnswer) === "wrong") {
            point.textContent = "0 / 1 point";
          } else {
            point.textContent = "1 / 1 point";
          }
        }
        showAnswers.appendChild(resultDiv);
      });
    }, 1000);

    /* ============================== done rendered the results screen ============================== */
  }, 2000);
  /* 
  theResultsObject = {
    resultsArray: [
      {
        question:,
        answers: (arr) aka options,
        userAnswer: (string),
        correctAnswer: (string),
      },
      {
        question:,
        answers: (arr) aka options,
        userAnswer: (string),
        correctAnswer: (string),
      }
    ]
    ,
    score: (number),
    timeIsOut: (bool),
  }
*/
  /* ============================== */
}
