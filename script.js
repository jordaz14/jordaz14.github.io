let formPrompt = document.querySelector("#form-prompt");
let formButton = document.querySelector("form button");
let formInput = document.querySelector("#form-email-input");

formButton.addEventListener("click", (e) => {
  e.preventDefault();

  // If valid email, perform send email to user
  if (validateEmail(formInput)) {
    let params = {
      from_name: "Too Serious",
      email_id: formInput.value,
    };
    emailjs.send("service_3spwn2m", "template_115bpeu", params).then(() => {
      formPrompt.textContent = `welcome to my thoughts`;
      formInput.value = "";
    });
  }
  // Else, prompt user to try again
  else {
    formPrompt.textContent = `oops... try again`;
    formInput.value = "";
  }
});

// Validate user input as email
function validateEmail(input) {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
