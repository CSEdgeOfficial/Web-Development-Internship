function getResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    
    const resumeData = {
        name: name,
        email: email,
        phone: phone,
        summary: summary,
        experience: experience,
        education: education
    };

    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    window.location.href = 'resume.html';
}