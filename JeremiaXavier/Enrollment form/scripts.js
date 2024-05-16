function validateForm() {
    // Get form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var course = document.getElementById("course").value;

    // Regular expression for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for phone number validation
    var phonePattern = /^\d{10}$/;

    // Validation flags
    var isValid = true;
    var errorMessage = "";

    // Validate name
    if (!name) {
        isValid = false;
        errorMessage += "Name is required.<br>";
    }

    // Validate email
    if (!email || !email.match(emailPattern)) {
        isValid = false;
        errorMessage += "Valid email is required.<br>";
    }

    // Validate phone number
    if (!phone || !phone.match(phonePattern)) {
        isValid = false;
        errorMessage += "Valid phone number is required (10 digits).<br>";
    }

    // Validate course selection
    if (!course) {
        isValid = false;
        errorMessage += "Please select a course.<br>";
    }

    // Display error message if form is invalid
    if (!isValid) {
        document.getElementById("nameError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
        document.getElementById("phoneError").innerHTML = "";
        document.getElementById("nameError").innerHTML = errorMessage;
    }

    return isValid;
}