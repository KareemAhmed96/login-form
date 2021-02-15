let userData = {};

let loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", verifyLogin);

function verifyLogin() {
    //Take input from user
    fetchUserInput();

    //Check if username and password match the correct ones
    if (userData.username == "admin" && userData.password == "123") {
        changeUserMessage("Welcome");
        hideLoginForm();
        showMessage();
    }
    else {
        hideLoginForm();
        showMessage();
    }
}

function fetchUserInput() {
    userData.username = document.getElementById("username").value;
    userData.password = document.getElementById("password").value;
}

function hideLoginForm() {
    document.getElementById("login-form").style.visibility = "hidden";
}

function showMessage() {
    document.getElementById("userMsg").style.visibility = "visible";
}

function changeUserMessage(message) {
    document.getElementById("userMsg").innerHTML = message;
}