export function showErrorMessages(messages, inputBox, label) {
  if (!label.querySelector("span")) {
    const error = document.createElement("span");
    error.textContent = messages;
    error.style.color = "red";
    error.style.fontSize = "9px";
    error.style.margin = "0";
    error.style.padding = "0";
    error.style.display = "inline-block";
    error.style.marginLeft = "10px"; // Adjust the spacing as needed
    error.style.position = "absolute";
    inputBox.style.border = "1px solid red";
    label.appendChild(error);
  }
}

export function removeErrorMessages(lable, inputBox) {
  inputBox.addEventListener("input", function () {
    inputBox.style.border = "1px solid rgb(171, 171, 171)";
    if (lable.querySelector("span")) lable.querySelector("span").remove();
  });
}