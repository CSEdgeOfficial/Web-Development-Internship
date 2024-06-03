function validateForm(event) {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const courseField = document.getElementById('course');

    const phonePattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;

    if (!phonePattern.test(phoneField.value)) {
        alert('Please enter a valid phone number in the format: 123-456-7890');
        event.preventDefault();
    }

    // Additional validations can be added for name, email, course, etc.

}