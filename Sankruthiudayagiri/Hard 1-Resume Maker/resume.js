function generateResume() {
    const template = document.getElementById('templateSelector').value;
    const fullName = document.getElementById('fullName').value;
    const contactInfo = document.getElementById('contactInfo').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const certifications = document.getElementById('certifications').value;

    let resumeContent = `# ${fullName}\n\n`;

    resumeContent += `## Contact Information\n${contactInfo}\n\n`;
    resumeContent += `## Experience\n${experience}\n\n`;
    resumeContent += `## Education\n${education}\n\n`;
    resumeContent += `## Skills\n${skills}\n\n`;
    resumeContent += `## Certifications\n${certifications}\n\n`;

    document.getElementById('resumePreview').innerText = resumeContent;
}

function exportToPDF() {
    const resumeContent = document.getElementById('resumePreview').innerText;
    const element = document.createElement('a');
    const file = new Blob([resumeContent], {type: 'application/pdf'});
    element.href = URL.createObjectURL(file);
    element.download = 'resume.pdf';
    document.body.appendChild(element);
    element.click();
}

function exportToHTML() {
    const resumeContent = document.getElementById('resumePreview').innerText;
    const element = document.createElement('a');
    const file = new Blob([resumeContent], {type: 'text/html'});
    element.href = URL.createObjectURL(file);
    element.download = 'resume.html';
    document.body.appendChild(element);
    element.click();
}
