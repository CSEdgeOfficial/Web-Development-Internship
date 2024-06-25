function validateForm(event) {
  event.preventDefault();
  
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var course = document.getElementById('course').value;
  
  var errorMessage = document.getElementById('error-message');
  errorMessage.textContent = '';

  // Basic validation
  if (name === '' || email === '' || phone === '' || course === '') {
    errorMessage.textContent = 'Please fill out all required fields.';
    return false;
  }

  // Email validation using regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    return false;
  }

  // Phone number validation using regex
  var phoneRegex = /^\d{10}$/; // Basic check for 10 digits
  if (!phoneRegex.test(phone)) {
    errorMessage.textContent = 'Please enter a valid 10-digit phone number.';
    return false;
  }

  // If all validations pass, the form is considered valid
  // You can proceed with form submission here if needed
  alert('Form submitted successfully!');
  // Here you can add code to submit the form to a server, etc.

  return true;
}
