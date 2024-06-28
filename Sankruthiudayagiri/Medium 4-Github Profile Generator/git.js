function generateReadme() {
    const template = document.getElementById('templateSelector').value;
    const profilePicture = document.getElementById('profilePicture').value;
    const bio = document.getElementById('bio').value;
    const socialLinks = document.getElementById('socialLinks').value.split(',').map(link => link.trim());
    const projects = document.getElementById('projects').value.split(',').map(proj => proj.trim());

    let readmeContent = '';

    switch (template) {
        case 'basic':
            readmeContent = `# My GitHub Profile\n\n`;
            break;
        case 'projectShowcase':
            readmeContent = `# Projects\n\n`;
            projects.forEach(project => {
                const [title, description] = project.split(':');
                readmeContent += `## ${title.trim()}\n${description.trim()}\n\n`;
            });
            break;
        case 'skillsShowcase':
            readmeContent = `# Skills\n\n`;
            bio.split(',').forEach(skill => {
                readmeContent += `- ${skill.trim()}\n`;
            });
            break;
    }

    if (profilePicture) {
        readmeContent += `![Profile Picture](${profilePicture})\n\n`;
    }
    
    if (bio) {
        readmeContent += `${bio}\n\n`;
    }

    if (socialLinks.length > 0) {
        readmeContent += `## Social Media\n\n`;
        socialLinks.forEach(link => {
            const [platform, url] = link.split(':');
            readmeContent += `- [${platform.trim()}](${url.trim()})\n`;
        });
    }

    document.getElementById('readmePreview').innerText = readmeContent;
}
