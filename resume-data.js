// Professional Experience Data
const experience = [
    {
        id: 1,
        position: "Team Leader",
        company: "Morrisons, Stirchley",
        duration: "Feb 2025 – Mar 2025",
        description: "Leadership and team management in retail operations",
        achievements: [
            "Led a team of 6+ colleagues on the shop floor to ensure smooth daily operations, excellent customer service, and timely task completion",
            "Delegated responsibilities, monitored performance, and provided on-the-job training to support team development and maintain productivity targets",
            "Ensured stock levels, merchandising standards, and cleanliness were consistently upheld in line with company expectations",
            "Handled escalated customer queries and resolved issues effectively to enhance satisfaction and maintain store reputation",
            "Collaborated with senior management to implement promotions, manage deliveries, and support audits and compliance checks"
        ]
    },
    {
        id: 2,
        position: "Administrative Assistant",
        company: "Flagler College, Health and Wellness Centre",
        duration: "Aug 2022 – Nov 2022",
        description: "Administrative support and data management",
        achievements: [
            "Supported smooth delivery of services by managing student data and maintaining documentation with high accuracy",
            "Compiled and analysed quarterly departmental data, supporting reporting and identifying areas for service improvement",
            "Coordinated meetings, took minutes, and ensured accurate dissemination of action points",
            "Trained in and utilised MS Excel and Outlook for organising schedules, tracking data, and internal communications",
            "Maintained confidentiality and adhered to information security protocols while handling student data"
        ]
    },
    {
        id: 3,
        position: "Library Assistant",
        company: "Flagler College, Library Services",
        duration: "Oct 2021 – Apr 2022",
        description: "Library operations and student support services",
        achievements: [
            "Responded to daily inquiries and assisted students and staff with accessing and using digital and physical resources",
            "Assisted in organising events and liaised with departments regarding access to library materials",
            "Maintained and updated databases, managed circulation data, and supported the team in monitoring resource usage trends"
        ]
    },
    {
        id: 4,
        position: "Admissions Assistant",
        company: "Flagler College, Admissions",
        duration: "Aug 2019 – Feb 2021",
        description: "Admissions support and CRM management",
        achievements: [
            "Managed applicant data using Salesforce CRM, maintaining over 100 records daily with precision and timeliness",
            "Prepared documentation, supported onboarding, and collaborated across departments to improve applicant experiences",
            "Contributed to a data-driven approach in improving conversion rates through detailed tracking and reporting",
            "Developed excellent working relationships across teams, supporting business goals and service continuity"
        ]
    }
];

// Education Data
const education = [
    {
        degree: "MSc Computer Science (Conversion)",
        institution: "University of Sussex",
        year: "2023 – 2025"
    },
    {
        degree: "BA Business Administration",
        institution: "Flagler College",
        year: "2017 – 2022"
    },
    {
        degree: "BA Philosophy",
        institution: "Flagler College",
        year: "2017 – 2022"
    }
];

// Certifications Data
const certifications = [
    {
        name: "Python for Data Science, AI & Development",
        issuer: "IBM",
        date: "2023"
    },
    {
        name: "Business Analytics Specialization",
        issuer: "University of Pennsylvania",
        date: "2024"
    },
    {
        name: "Azure Fundamentals",
        issuer: "Microsoft",
        date: "2025"
    },
    {
        name: "Technical Support Fundamentals",
        issuer: "Google",
        date: "2023"
    }
];

// Function to render experience
function renderExperience() {
    const experienceList = document.getElementById('experienceList');
    
    experienceList.innerHTML = experience.map(exp => `
        <div class="experience-item">
            <div class="experience-header">
                <div>
                    <h3>${exp.position}</h3>
                    <p class="company">${exp.company}</p>
                </div>
                <span class="date-range">${exp.duration}</span>
            </div>
            <p class="experience-description">${exp.description}</p>
            <ul class="achievement-list">
                ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Function to render certifications
function renderCertifications() {
    const certificationsList = document.getElementById('certificationsList');
    
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderExperience();
    renderCertifications();
});

// Helper functions for easy updating
function addExperience(newExperience) {
    const maxId = Math.max(...experience.map(e => e.id), 0);
    experience.push({ ...newExperience, id: maxId + 1 });
    renderExperience();
}

function addCertification(cert) {
    certifications.push(cert);
    renderCertifications();
}

// Export for console access
window.addExperience = addExperience;
window.addCertification = addCertification;
window.experience = experience;
window.certifications = certifications;
