document
  .getElementById("enrollment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value.trim();

  resetErrors();

  if (name === "") {
    showError("name", "Name is required");
    return;
  }

  if (email === "") {
    showError("email", "Email is required");
    return;
  }

  if (!isValidEmail(email)) {
    showError("email", "Please enter a valid email address");
    return;
  }

  if (phone === "") {
    showError("phone", "Phone number is required");
    return;
  }

  if (!isValidPhone(phone)) {
    showError("phone", "Please enter a valid phone number");
    return;
  }

  if (course === "") {
    showError("course", "Please select a course");
    return;
  }

  // Form is valid, you can submit the data to the server or perform further actions
  alert("Form submitted successfully!");
}

function resetErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach((error) => {
    error.textContent = "";
  });
}

function showError(inputId, errorMessage) {
  const errorElement = document.getElementById(inputId + "-error");
  errorElement.textContent = errorMessage;
}

function isValidEmail(email) {
  // Regular expression for validating email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  // Regular expression for validating phone number format (simple validation)
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
