const form = document.querySelector("#register-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
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
export {};
//# sourceMappingURL=main.js.map