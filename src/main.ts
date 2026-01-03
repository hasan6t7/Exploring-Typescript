const form = document.querySelector<HTMLFormElement>("#register-form");
const username = document.querySelector<HTMLInputElement>("#username");
const email = document.querySelector<HTMLInputElement>("#email");
const msg = document.querySelector<HTMLParagraphElement>("#msg");

if (!form || !username || !email || !msg) {
  throw new Error("Required elements not found");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();

  if (!usernameValue || !emailValue) {
    msg.textContent = "All fields are required ";
    msg.style.color = "red";
    return;
  }

  msg.textContent = `Email: ${emailValue}  Name: ${usernameValue}`;
  msg.style.color = "green";

  console.log({
    usernameValue,
    emailValue,
  });

});
