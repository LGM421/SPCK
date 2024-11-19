// Sign Up Form Validation
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("verifyPasswordError").textContent = "";

    // Get input values
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const verifyPassword = document.getElementById("verifyPassword").value;

    let isValid = true;

    // Username validation: 6-18 characters
    if (username.length < 6 || username.length > 18) {
        document.getElementById("usernameError").textContent = "Username must be between 6 and 18 characters.";
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation: 8-20 characters
    if (password.length < 8 || password.length > 20) {
        document.getElementById("passwordError").textContent = "Password must be between 8 and 20 characters.";
        isValid = false;
    }

    // Verify password match
    if (password !== verifyPassword) {
        document.getElementById("verifyPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert("Form submitted successfully!");
        window.location.href = "Sign In.html";
    }

});