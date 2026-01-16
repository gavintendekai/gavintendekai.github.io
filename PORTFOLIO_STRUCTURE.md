# Portfolio Website Structure

## Overview
Your portfolio has been transformed into a professional two-page website with a modern landing page showcasing your projects and a detailed resume page.

## Pages

### 1. **Landing Page** (`index.html`)
The main entry point featuring:
- **Hero Section**: Welcome message with CTAs to explore projects and view resume
- **Quick Stats**: 4-card display showing years of experience, major projects, certifications, and core skills
- **Featured Projects Section**: Dynamic 6-project grid (rendered from `projects-data.js`)
- **Key Competencies Section**: 4 skill categories with technology tags
- **Call-to-Action Section**: Contact and resume links

### 2. **Resume Page** (`resume.html`)
Detailed professional resume with:
- **Header**: Your name, title, and contact information
- **Navigation Bar**: Links between Portfolio and Resume pages
- **Professional Summary**: Career overview and objectives
- **Core Competencies**: 12 key skills with icons
- **Professional Experience**: 4 work positions (dynamically rendered)
- **Education**: 3 degrees with details
- **Certifications**: 4 professional certifications

## Data Files

### `resume-data.js`
Contains structured data objects:
- `experience[]` - 4 professional positions
- `education[]` - 3 educational qualifications  
- `certifications[]` - 4 professional certifications

### `projects-data.js`
Contains 6 featured projects with:
- id, title, description, category
- technologies array, impact statement
- Font Awesome icon class for visual representation

## Styling

### `styles.css` (995 lines)
Comprehensive styling featuring:
- **Color Palette**: 
  - Primary: #0066FF (Bright Blue)
  - Secondary: #FF6B35 (Vibrant Orange)
  - Background: #0A0E27 (Dark Navy)
  - Text: #F0F4FF (Light Blue)

- **Components Styled**:
  - Navigation bar with sticky positioning
  - Hero section with gradient text
  - Stat cards with hover effects
  - Project cards with shimmer animations
  - Skill tags and categories
  - Experience and education items
  - Certification badges
  - Call-to-action section

- **Responsive Design**:
  - Mobile (480px and below)
  - Tablet (768px and below)
  - Desktop (full width)

- **Animations**:
  - fadeInUp (entrance animation)
  - slideDown (header animation)
  - float (header decoration)
  - shimmer (project card hover effect)

## JavaScript Functionality

### `script.js`
- Smooth scroll behavior for anchor links
- Dynamic rendering of projects from `projects-data.js`
- Dynamic rendering of experience from `resume-data.js`
- Dynamic rendering of certifications from `resume-data.js`
- Automatic initialization on page load

## Navigation

**Navigation Bar** (appears on both pages):
- **Portfolio** link → index.html (main landing page)
- **Resume** link → resume.html (detailed resume)

## Font Awesome Icons
- Integrated via CDN (version 6.4.0)
- 100+ icons used throughout for visual enhancement
- Icons for categories: Users, Windows, Cloud, Code, Wrench, etc.

## Features

✅ **Easy Project Management**: Add/remove projects by editing `projects-data.js`
✅ **Dynamic Content**: Experience and certifications auto-render from data files
✅ **Modern Design**: Blue/orange color scheme with smooth animations
✅ **Responsive Layout**: Works perfectly on mobile, tablet, and desktop
✅ **Professional Look**: Clean, modern interface showcasing ICT support expertise
✅ **Print-Friendly**: CSS includes print styles for PDF export
✅ **Fast Loading**: Vanilla JavaScript, no heavy frameworks
✅ **SEO-Ready**: Semantic HTML5 structure

## How to Update Content

### Add a New Project:
Edit `projects-data.js` and add a new object to the `projects` array:
```javascript
{
    id: 7,
    title: "Your Project Title",
    description: "Project description...",
    category: "Category",
    technologies: ["Tech1", "Tech2"],
    impact: "Impact statement",
    icon: "fa-icon-name"
}
```

### Update Professional Information:
Edit `resume-data.js` to update:
- experience array
- education array
- certifications array

## Color Customization

To change colors, edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #0066FF;           /* Main color */
    --secondary: #FF6B35;         /* Accent color */
    --background: #0A0E27;        /* Background */
    --text: #F0F4FF;              /* Text color */
}
```

## Contact Information
- **Email**: gavin.tendekai@outlook.com
- **Phone**: 0777 017 9020
- **Location**: Birmingham

## Files Summary
- `index.html` - Main landing page
- `resume.html` - Detailed resume page
- `styles.css` - All styling (995 lines)
- `script.js` - Dynamic rendering and interactions
- `resume-data.js` - Professional data
- `projects-data.js` - Project showcase data
- `projects.js` - Legacy project management (can be removed)
- `README.md` - Original documentation
