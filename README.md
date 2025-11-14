# 🌌 Cosmic Portfolio

A stunning dark cosmic-themed portfolio website built with React and Vite, showcasing your professional journey through the universe of technology.

## ✨ Features

- **Dark Cosmic Theme**: Beautiful space-inspired design with animated star field background
- **Multiple Pages**: 
  - Home - Landing page with profile and quick links
  - About - Professional summary and values
  - Experience - Detailed work history with timeline
  - Skills - Technical skills with visual progress bars
  - Projects - Featured projects with descriptions
  - Education - Academic background and certifications
  - Contact - Contact information and message form

- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Page transitions and hover effects
- **Interactive Elements**: Animated orbits, glowing effects, and more

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the repository
```bash
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Customization

### Update Your Information

1. **Profile Picture**: Replace `/public/me.jpg` with your photo
2. **Resume**: Replace `/public/cv.pdf` with your resume
3. **Personal Info**: Update the following files with your information:
   - `src/pages/Home.jsx` - Hero section
   - `src/pages/About.jsx` - About content
   - `src/pages/Experience.jsx` - Work experience
   - `src/pages/Skills.jsx` - Technical skills
   - `src/pages/Projects.jsx` - Your projects
   - `src/pages/Education.jsx` - Education and certifications
   - `src/pages/Contact.jsx` - Contact information

### Color Customization

Edit the CSS variables in `src/styles/index.css`:
```css
:root {
  --cosmic-purple: #9d4edd;
  --cosmic-pink: #ff006e;
  --cosmic-blue: #3a0ca3;
  --cosmic-dark: #0a0a0f;
  --cosmic-darker: #050508;
  --cosmic-cyan: #00f5ff;
  --cosmic-yellow: #ffd60a;
}
```

## 🛠️ Technologies Used

- React 18
- Vite 5
- React Router DOM 6
- CSS3 with custom animations
- Canvas API for star field effect

## 📱 Pages Overview

- **/** - Home page with profile and navigation
- **/about** - About me and professional summary
- **/experience** - Work experience timeline
- **/skills** - Technical skills with progress bars
- **/projects** - Featured projects showcase
- **/education** - Academic background and certifications
- **/contact** - Contact information and social links

## 🎭 Design Features

- Animated star field background
- Gradient text effects
- Glowing cosmic cards
- Smooth page transitions
- Interactive hover effects
- Responsive navigation
- Custom scrollbar styling
- Orbital animations

## 📄 License

Feel free to use this template for your own portfolio!

## 🌟 Acknowledgments

Built with passion for the cosmic aesthetic and modern web technologies.
