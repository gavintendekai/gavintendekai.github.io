// Projects showcase data
const projects = [
    {
        id: 1,
        title: "Home Lab Helpdesk Simulation & Knowledge Base - In Progress",
        description: "Built a functional home IT environment and create a comprehensive documentation/knowledge base of common support scenarios, troubleshooting guides, and solutions.",
        category: "Infrastructure",
        technologies: ["Active Directory", "Windows Server", "Group Policy", "PowerShell"],
        impact: "Managed 500+ user accounts with 99.9% uptime",
        icon: "fa-users-cog"
    }
];

// Function to render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <i class="fas ${project.icon}"></i>
                <span class="project-category">${project.category}</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-impact">
                <i class="fas fa-trophy"></i> ${project.impact}
            </div>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderProjects);

// Export for console access
window.projects = projects;
