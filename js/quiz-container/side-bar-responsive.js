const closeSideBarBtn = document.querySelector(
  "#quiz-container #close-side-bar"
);
const openSideBarBtn = document.querySelector("#quiz-container #open-side-bar");
const sideBar = document.querySelector("#quiz-container .content .side-bar");

function handleSideBar() {
  if (window.innerWidth > 768) {
    if (sideBar.classList.contains("hide")) {
      sideBar.classList.remove("hide");
    }
  } else {
    if (!sideBar.classList.contains("hide")) {
      sideBar.classList.add("hide");
    }
  }
}

if (sideBar !== null) {
  handleSideBar();
}

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
  handleSideBar();
});
