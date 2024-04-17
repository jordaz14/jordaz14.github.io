let formPrompt = document.querySelector("#form-prompt");
let formButton = document.querySelector("form button");
let formInput = document.querySelector("#form-email-input");

formButton.addEventListener("click", (e) => {
  e.preventDefault();
  let params = {
    from_name: "Too Serious",
    email_id: formInput.value,
  };
  emailjs.send("service_3spwn2m", "template_115bpeu", params).then(() => {
    formPrompt.textContent = `Welcome ${formInput.value}.`;
    formInput.value = "";
  });
});
