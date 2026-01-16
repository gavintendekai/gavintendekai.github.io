// Set active navigation link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Render projects on page load
document.addEventListener('DOMContentLoaded', () => {
    const projectsGrid = document.getElementById('projectsGrid');
    const experienceList = document.getElementById('experienceList');
    const certificationsList = document.getElementById('certificationsList');

    // Render projects if grid exists
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => `
            <div class="project-card">
                <div class="project-header">
                    <div class="project-icon"><i class="fas ${project.icon}"></i></div>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <span class="project-category">${project.category}</span>
                <p class="project-description">${project.description}</p>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <p class="project-impact">💡 ${project.impact}</p>
            </div>
        `).join('');
    }

    // Render experience if list exists
    if (experienceList) {
        experienceList.innerHTML = experience.map(exp => `
            <div class="experience-item">
                <div class="experience-header">
                    <h3>${exp.position}</h3>
                    <span class="duration"><i class="fas fa-calendar"></i> ${exp.duration}</span>
                </div>
                <p class="company"><i class="fas fa-building"></i> ${exp.company}</p>
                <p class="description">${exp.description}</p>
                <ul class="achievements">
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
            </div>
        `).join('');
    }

    // Render certifications if list exists
    if (certificationsList) {
        certificationsList.innerHTML = certifications.map(cert => `
            <div class="certification-item">
                <div class="cert-header">
                    <i class="fas fa-certificate cert-icon"></i>
                    <div class="cert-content">
                        <h3>${cert.name}</h3>
                        <p class="issuer">${cert.issuer}</p>
                    </div>
                </div>
                <p class="cert-date"><i class="fas fa-calendar"></i> ${cert.date}</p>
            </div>
        `).join('');
    }
});

