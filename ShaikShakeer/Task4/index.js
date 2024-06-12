document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting immediately
    
    // Validate form
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var course = document.getElementById('course').value;
    
    if (firstName === '' || lastName === '' || email === '' || phone === '' || course === '') {
        alert('Please fill out all fields.');
        return;
    }
    
    // You can add more validation here if needed (e.g., email format, phone number format, etc.)
    
    // If validation passes, submit the form or perform other actions
    alert('Enrollment Successful!\n' +
          'Name: ' + firstName + ' ' + lastName + '\n' +
          'Email: ' + email + '\n' +
          'Phone: ' + phone + '\n' +
          'Course: ' + course);
    
    // Clear the form
    document.getElementById('enrollmentForm').reset();
});
