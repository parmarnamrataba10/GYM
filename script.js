
// ================================
// Welcome Message
// ================================

console.log("Welcome to FitZone Gym Management System");

// ================================
// Smooth Button Click
// ================================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        alert("Thank you for choosing FitZone Gym!");

    });

});

// ================================
// Contact Form
// ================================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been submitted.");

form.reset();

});

}