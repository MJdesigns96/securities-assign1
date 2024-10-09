window.onsubmit = submitForm;

function submitForm() {
    "use strict";
    //get form elements
    const loginForm = document.querySelector(".login__form");
    const username = document.querySelector(".login__username");
    const usernameValue = document.querySelector(".login__username").value;
    const password = document.querySelector(".login__password");
    const passwordValue = document.querySelector(".login__password").value;
    const outputDiv = document.querySelector(".output");
    const outputUser = document.querySelector(".output__user");
    const outputPass = document.querySelector(".output__pass");
    let correctForm = true;

    //create a funciton to check if the inputs are valid
    function checkValidity() {
        if (usernameValue === "") {
            correctForm = false;
            username.focus();
            username.classList.add("login__txtbox_error");
            return false;
        } else {
            if (username.classList.contains("login__txtbox_error")) {
                username.classList.remove("login__txtbox_error");
            }
        } 
        if (passwordValue === "") {
            correctForm = false;
            password.focus();
            password.classList.add("login__txtbox_error");
            return false;
        } else {
            if (password.classList.contains("login__txtbox_error")) {
                password.classList.remove("login__txtbox_error");
            }
        }
    }
    //check validity of form
    checkValidity();

    //if correct show output
    if (correctForm) {
        checkValidity();
        loginForm.reset();
        outputDiv.style.display = "block";
        outputUser.innerHTML = usernameValue;
        outputPass.innerHTML = passwordValue;
    }

    return false;
}