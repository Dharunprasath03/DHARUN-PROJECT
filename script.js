

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();  
    let isValid = true;  
    clearErrors();
    const username = document.getElementById("username").value;
    if (username.length < 3) {
        showError("username", "Username must be at least 3 characters long.");
        isValid = false;
    }
    const email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        showError("email", "Please enter a valid email address.");
        isValid = false;
    }
    const password = document.getElementById("password").value;
    if (password.length < 6) {
        showError("password", "Password must be at least 6 characters long.");
        isValid = false;
    }
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
        showError("confirmPassword", "Passwords do not match.");
        isValid = false;
    }
    if (isValid) {
        alert("Form submitted successfully!");
        // You can submit the form here (if no server-side validation is required).
        // e.g., document.getElementById("re0gistrationForm").submit();
    }
});

// Function to show error message
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + "Error");
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

// Function to clear previous error messages
function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function(element) {
        element.textContent = "";
        element.style.display = "none";
    });
}
