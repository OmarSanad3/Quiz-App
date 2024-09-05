const SideBarObj = {
  closeSideBarBtn: document.querySelector("#quiz-container #close-side-bar"),
  openSideBarBtn: document.querySelector("#quiz-container #open-side-bar"),
  sideBar: document.querySelector("#quiz-container .side-bar"),
  prgBar: document.querySelector("#quiz-container #questions-progress"),
  lastView: "big",
};

function handleSideBar() {
  if (window.innerWidth > 768 && SideBarObj.lastView === "small") {
    SideBarObj.sideBar.classList.remove("is-hidden");
    SideBarObj.lastView = "big";
  } else if (window.innerWidth <= 768 && SideBarObj.lastView === "big") {
    SideBarObj.sideBar.classList.add("is-hidden");
    SideBarObj.openSideBarBtn.classList.remove("is-hidden");
    SideBarObj.sideBar.style["transition-delay"] = "0s";
    SideBarObj.lastView = "small";
  }
}

if (SideBarObj.sideBar !== null) {
  handleSideBar();
}

if (SideBarObj.closeSideBarBtn !== null) {
  SideBarObj.closeSideBarBtn.addEventListener("click", () => {
    SideBarObj.sideBar.style["transition-delay"] = "0s";
    SideBarObj.sideBar.classList.add("is-hidden");
    SideBarObj.openSideBarBtn.classList.remove("is-hidden");
  });
}

if (SideBarObj.openSideBarBtn !== null) {
  SideBarObj.openSideBarBtn.addEventListener("click", () => {
    SideBarObj.sideBar.style["transition-delay"] = "0s";
    SideBarObj.sideBar.classList.remove("is-hidden");
    SideBarObj.openSideBarBtn.classList.add("is-hidden");
  });
}

function setTransitionDelayToZero() {
  SideBarObj.sideBar.style["transition-delay"] = "0s";
  SideBarObj.openSideBarBtn.style["transition-delay"] = "0s";  
}

window.addEventListener("resize", () => {
  setTransitionDelayToZero();
  handleSideBar();
});
