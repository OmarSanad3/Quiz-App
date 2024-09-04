let theResultsObject = null;

export function passResultsObject(resultsObject) {
  theResultsObject = resultsObject;
  console.log("Results passed to results screen: ", theResultsObject);
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
    // TODO: ((((display the results screen div))))
    // TODO: 
    // TODO:
    // TODO:

    /* ============================== done rendered the results screen ============================== */
  }, 2000);

  /* ============================== */
}
