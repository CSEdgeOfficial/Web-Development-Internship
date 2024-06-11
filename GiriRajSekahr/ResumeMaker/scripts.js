document.getElementById("resume-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const careerLevel = document.getElementById("career-level").value;
  const industry = document.getElementById("industry").value;
  const experience = document.getElementById("experience").value;
  const education = document.getElementById("education").value;
  const skills = document.getElementById("skills").value;
  const certifications = document.getElementById("certifications").value;
  generateResume(
    name,
    email,
    phone,
    careerLevel,
    industry,
    experience,
    education,
    skills,
    certifications
  );
});

function generateResume(
  name,
  email,
  phone,
  careerLevel,
  industry,
  experience,
  education,
  skills,
  certifications
) {
  const resumePreview = document.getElementById("resume-preview");
  resumePreview.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <h3>Career Level: ${capitalize(careerLevel)}</h3>
        <h3>Industry: ${capitalize(industry)}</h3>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Certifications</h3>
        <p>${certifications}</p>
    `;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

document.getElementById("download-pdf").addEventListener("click", function () {
  const { jsPDF } = window.jspdf;
  const resumeContent = document.getElementById("resume-preview");

  // Use HTML2Canvas to capture the resume content
  html2canvas(resumeContent).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0); // Adjust the width and height
    pdf.save("resume.pdf");
  });
});

document.getElementById("download-html").addEventListener("click", function () {
  const resumeContent = document.getElementById("resume-preview").innerHTML;
  const blob = new Blob([resumeContent], { type: "text/html" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "resume.html";
  link.click();
});
