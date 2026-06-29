

// Get logged-in user
const user = JSON.parse(localStorage.getItem("loggedInUser"));

// If no user is logged in
if (!user) {

    alert("Please login first!");

    window.location.href = "login.html";
}

// Display member details
document.getElementById("memberId").textContent = user.memberId;
document.getElementById("fullName").textContent = user.fullName;
document.getElementById("email").textContent = user.email;
document.getElementById("phone").textContent = user.phone;
document.getElementById("age").textContent = user.age;
document.getElementById("gender").textContent = user.gender;
document.getElementById("height").textContent = user.height;
document.getElementById("weight").textContent = user.weight;
document.getElementById("plan").textContent = user.plan;
document.getElementById("joinDate").textContent = user.joinDate;

// Logout
document.getElementById("logoutBtn").addEventListener("click", function(){

    localStorage.removeItem("loggedInUser");

    alert("Logged out successfully!");

    window.location.href = "login.html";

});