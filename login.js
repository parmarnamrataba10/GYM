

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value;

    let members = JSON.parse(localStorage.getItem("members")) || [];

    let user = members.find(member =>
        member.email === email &&
        member.password === password
    );

    if(user){

        // Save Logged-in User

        localStorage.setItem("loggedInUser", JSON.stringify(user));

        alert("Login Successful!");

        window.location.href = "member.html";

    }

    else{

        alert("Invalid Email or Password!");

    }

});