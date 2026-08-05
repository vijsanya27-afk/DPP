document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let course = document.getElementById("course").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let message = document.getElementById("message");

    // Clear previous message
    message.style.color = "red";
    message.innerHTML = "";

    // Validation
    if (name === "") {
        message.innerHTML = "Student Name is required.";
        return;
    }

    if (email === "") {
        message.innerHTML = "Email is required.";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        message.innerHTML = "Enter a valid email address.";
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        message.innerHTML = "Enter a valid 10-digit phone number.";
        return;
    }

    if (course === "") {
        message.innerHTML = "Please select a course.";
        return;
    }

    if (password.length < 8) {
        message.innerHTML = "Password must be at least 8 characters.";
        return;
    }

    if (password !== confirmPassword) {
        message.innerHTML = "Passwords do not match.";
        return;
    }

    // Success message
    message.style.color = "green";
    message.innerHTML = "Registration Successful!";

    // Reset form
    document.getElementById("registrationForm").reset();
});