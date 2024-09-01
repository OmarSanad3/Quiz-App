const closeSideBarBtn = document.querySelector(
  "#quiz-container #close-side-bar"
);
const openSideBarBtn = document.querySelector("#quiz-container #open-side-bar");
const sideBar = document.querySelector("#quiz-container .content .side-bar");

if (closeSideBarBtn !== null) {
  closeSideBarBtn.addEventListener("click", () => {
    sideBar.classList.add("hide");
  });
}

if (openSideBarBtn !== null) {
  openSideBarBtn.addEventListener("click", () => {
    sideBar.classList.remove("hide");
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    sideBar.classList.remove("hide");
  } else {
    sideBar.classList.add("hide");
  }
});
