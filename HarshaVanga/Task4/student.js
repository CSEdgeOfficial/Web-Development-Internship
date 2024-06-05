document.getElementById('enhancedEnrollmentForm').addEventListener('submit', function(event) {
    // Clear all error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('courseError').textContent = '';

    let isValid = true;

    // Validate name
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Validate phone
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits.';
        isValid = false;
    }

    // Validate course selection
    const course = document.getElementById('course').value;
    if (course === '') {
        document.getElementById('courseError').textContent = 'Please select a course.';
        isValid = false;
    }

    // Prevent form submission if validation fails
    if (!isValid) {
        event.preventDefault();
    }
});