# Gavin Madanhi - ICT Support Resume

A clean, professional ICT Support resume website with sleek black and white design. Print-friendly and fully responsive.

## Features

✨ **Professional Design**
- Clean, minimalist black and white aesthetic
- Print-ready format (optimized for PDF export)
- Fully responsive design
- Fast loading and accessible

📋 **Resume Sections**
- Professional Summary
- Core Competencies
- Professional Experience
- Education
- Certifications

🎯 **Easy to Update**
- Update experience, education, and certifications via simple JavaScript
- Add achievements easily
- Manage all content from one file

## Quick Start

### Update Contact Information
Edit the contact info in the header section of `index.html`:
```html
<span>📧 your.email@example.com</span>
<span>📱 +27 (0) 123 456 789</span>
```

### Update Experience
Edit or add experience in `resume-data.js`:
```javascript
const experience = [
    {
        position: "Your Position",
        company: "Company Name",
        duration: "Jan 2024 - Present",
        description: "Your role description",
        achievements: [
            "Achievement 1",
            "Achievement 2"
        ]
    }
];
```

### Add Certifications
Update the certifications array in `resume-data.js`:
```javascript
const certifications = [
    "Your Certification 1",
    "Your Certification 2"
];
```

## Printing as PDF

1. Open the website in your browser
2. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
3. Select "Save as PDF"
4. The layout will automatically optimize for print

## File Structure

```
├── index.html          # Main resume structure
├── styles.css          # Black and white styling
├── resume-data.js      # Experience, education, certifications
├── script.js           # Basic interactions
└── README.md           # This file
```

## Customization

- **Colors**: Update CSS variables in `styles.css` (`:root`)
- **Fonts**: Change font-family in `styles.css`
- **Content**: Edit experience, education, and certifications in `resume-data.js`
- **Layout**: Adjust spacing and sizing in `styles.css`

## Deployment

Ready for GitHub Pages:

1. Push to your repository
2. Go to Settings → Pages
3. Select `main` branch as source
4. Your resume will be live at `gavin.tendekai.github.io`

## Technologies

- HTML5 (semantic markup)
- CSS3 (flexbox, grid, print styles)
- Vanilla JavaScript (no dependencies)

Perfect for sharing, printing, or posting online! 📄

## Features

✨ **Modern Design**
- Clean, contemporary aesthetic with gradient accents
- Dark mode theme with smooth animations
- Fully responsive (mobile, tablet, desktop)
- Smooth scrolling and interactive elements

🎨 **Easy Project Management**
- Simple JavaScript object structure for projects
- Add projects: `addProject({ ... })`
- Remove projects: `removeProject(projectId)`
- Update projects: `updateProject(projectId, { ... })`

📱 **Responsive & Accessible**
- Mobile-first design
- Fast performance
- Semantic HTML
- Accessibility-friendly

## Quick Start

1. Update the social links and contact information in `index.html`
2. Modify your skills in the About section
3. Update project details in `projects.js`

## Managing Projects

Projects showcase ICT Support work, achievements, and responsibilities. Easily update them as your experience grows.

### Adding an Achievement/Project

Open your browser console and run:

```javascript
addProject({
    title: "Your Project/Achievement Name",
    description: "Brief description of what was accomplished",
    emoji: "🎯",
    tags: ["Skill1", "Skill2", "Skill3"],
    github: "https://github.com/yourusername/project",
    demo: "https://project-url.com"
});
```

### Removing a Project

```javascript
removeProject(projectId); // projectId is shown in console
```

### Updating a Project

```javascript
updateProject(projectId, {
    title: "Updated Title",
    description: "Updated description"
});
```

## Project Structure

```
├── index.html      # Main HTML file
├── styles.css      # All styles and animations
├── projects.js     # Project data and management
├── script.js       # Interactive features
└── README.md       # This file
```

## Customization

- **Colors**: Update CSS variables in `styles.css` (`:root`)
- **Fonts**: Change font-family in `styles.css`
- **Content**: Edit text directly in `index.html`
- **Projects**: Modify `projects.js` array

## Deployment

This site is ready to deploy to GitHub Pages:

1. Push all files to your repository
2. Go to Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `gavin.tendekai.github.io`

## Technologies

- HTML5
- CSS3 (Grid, Flexbox, Gradients, Animations)
- Vanilla JavaScript (no frameworks needed)

Enjoy your new portfolio! 🚀
