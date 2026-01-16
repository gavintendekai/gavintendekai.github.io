// Projects data - Easy to add, remove, or modify projects here
const projects = [
    {
        id: 1,
        title: "Ticketing System Management",
        description: "Implementation and management of enterprise ticketing systems for incident and request tracking, ensuring efficient resolution and SLA compliance.",
        emoji: "🎫",
        tags: ["Jira", "ServiceNow", "ITIL", "Incident Management"],
        github: "https://github.com",
        demo: "https://demo.example.com"
    },
    {
        id: 2,
        title: "Hardware Support & Maintenance",
        description: "End-to-end hardware support including diagnostics, repairs, replacements, and preventative maintenance for desktops, laptops, and peripherals.",
        emoji: "🖥️",
        tags: ["Diagnostics", "Troubleshooting", "Maintenance", "Asset Management"],
        github: "https://github.com",
        demo: "https://demo.example.com"
    },
    {
        id: 3,
        title: "Network Administration",
        description: "Network configuration, monitoring, and troubleshooting including VPN setup, firewall management, and network security implementation.",
        emoji: "🌐",
        tags: ["Network Config", "VPN", "Firewalls", "Monitoring"],
        github: "https://github.com",
        demo: "https://demo.example.com"
    },
    {
        id: 4,
        title: "Active Directory Management",
        description: "User account provisioning, group policy management, access control, and security policies implementation in enterprise Active Directory environments.",
        emoji: "🔐",
        tags: ["Active Directory", "Group Policy", "User Management", "Security"],
        github: "https://github.com",
        demo: "https://demo.example.com"
    },
    {
        id: 5,
        title: "Software Support & Deployment",
        description: "Software installation, licensing, updates, and support across multiple platforms. Remote and on-site deployment and troubleshooting.",
        emoji: "💾",
        tags: ["Software Deployment", "Licensing", "Updates", "Technical Support"],
        github: "https://github.com",
        demo: "https://demo.example.com"
    },
    {
        id: 6,
        title: "User Training & Documentation",
        description: "Creating comprehensive technical documentation, user guides, and conducting training sessions to enhance user proficiency and reduce support tickets.",
        emoji: "📚",
        tags: ["Documentation", "Training", "User Support", "Knowledge Base"],
        github: "https://github.com",
        demo: "https://demo.example.com"
    }
];

// Function to render projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">${project.emoji}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer">
                        GitHub →
                    </a>
                    <a href="${project.demo}" class="project-link" target="_blank" rel="noopener noreferrer">
                        Demo →
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderProjects);

// Helper function to add a new project
// Usage: addProject({ title: "New Project", description: "...", emoji: "🚀", tags: ["..."], github: "...", demo: "..." })
function addProject(newProject) {
    const maxId = Math.max(...projects.map(p => p.id), 0);
    projects.push({ ...newProject, id: maxId + 1 });
    renderProjects();
    console.log('Project added!', newProject);
}

// Helper function to remove a project by ID
// Usage: removeProject(1)
function removeProject(projectId) {
    const index = projects.findIndex(p => p.id === projectId);
    if (index > -1) {
        projects.splice(index, 1);
        renderProjects();
        console.log('Project removed!');
    }
}

// Helper function to update a project
// Usage: updateProject(1, { title: "Updated Title" })
function updateProject(projectId, updates) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
        Object.assign(project, updates);
        renderProjects();
        console.log('Project updated!', updates);
    }
}

// Export functions for use in console
window.addProject = addProject;
window.removeProject = removeProject;
window.updateProject = updateProject;
window.projects = projects;
