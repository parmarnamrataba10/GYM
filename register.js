
// Get Register Form
const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get Values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const plan = document.getElementById("plan").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Password Check
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Get Existing Members
    let members = JSON.parse(localStorage.getItem("members")) || [];

    // Check Duplicate Email
    let emailExists = members.some(member => member.email === email);

    if (emailExists) {
        alert("This email is already registered.");
        return;
    }

    // Generate Member ID
    let memberId = "FF" + (1001 + members.length);

    // Registration Date
    let joinDate = new Date().toLocaleDateString();

    // Member Object
    let member = {

        memberId: memberId,
        fullName: fullName,
        email: email,
        phone: phone,
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        plan: plan,
        password: password,
        joinDate: joinDate

    };

    // Save Member
    members.push(member);

    localStorage.setItem("members", JSON.stringify(members));

    alert("Registration Successful!\n\nYour Member ID is " + memberId);

    registerForm.reset();

    // Redirect
    window.location.href = "login.html";

});