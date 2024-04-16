let formPrompt = document.querySelector("#form-prompt");
let formButton = document.querySelector("form button");

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hi");
  formPrompt.textContent = "oops... try again later";
});
