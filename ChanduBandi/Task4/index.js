function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var course = document.getElementById("course").value;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var courseError = document.getElementById("courseError");

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^\S+@\S+\.\S+$/;
    var phoneRegex = /^[0-9]{10}$/;

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    courseError.innerHTML = "";

    if (!name.match(nameRegex)) {
        nameError.innerHTML = "Please enter a valid name.";
        return false;
    }
    if (!email.match(emailRegex)) {
        emailError.innerHTML = "Please enter a valid email address.";
        return false;
    }
    if (!phone.match(phoneRegex)) {
        phoneError.innerHTML = "Please enter a valid 10-digit phone number.";
        return false;
    }
    if (course === "") {
        courseError.innerHTML = "Please select a course.";
        return false;
    }
    return true;
}

document.getElementById("enrollmentForm").onsubmit = function(event) {
    event.preventDefault();
    if (validateForm()) {
        document.getElementById("enrollmentForm").style.display = 'none';
        document.getElementById("successMessage").style.display = 'block';
    }
};
