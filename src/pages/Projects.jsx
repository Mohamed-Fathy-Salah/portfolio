import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "🛒",
      highlights: [
        "Built scalable microservices architecture",
        "Integrated Stripe payment gateway",
        "Implemented real-time notifications"
      ]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Interactive analytics platform using machine learning for predictive insights and data visualization.",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
      image: "📊",
      highlights: [
        "ML models for trend prediction",
        "Real-time data visualization",
        "Custom chart components"
      ]
    },
    {
      title: "Social Media Application",
      description: "Feature-rich social platform with real-time messaging, media sharing, and recommendation engine.",
      technologies: ["React", "GraphQL", "Node.js", "Redis", "Socket.io"],
      image: "💬",
      highlights: [
        "Real-time chat with WebSockets",
        "Content recommendation algorithm",
        "Scalable architecture for 100k+ users"
      ]
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with kanban boards, time tracking, and team analytics.",
      technologies: ["Vue.js", "Express", "MongoDB", "Docker"],
      image: "📋",
      highlights: [
        "Drag-and-drop interface",
        "Team collaboration features",
        "Advanced reporting system"
      ]
    },
    {
      title: "IoT Monitoring Platform",
      description: "Real-time monitoring dashboard for IoT devices with alerts, analytics, and device management.",
      technologies: ["React", "MQTT", "Node.js", "InfluxDB", "Grafana"],
      image: "🌐",
      highlights: [
        "Real-time device monitoring",
        "Custom alert system",
        "Historical data analysis"
      ]
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application with workout plans, nutrition tracking, and progress analytics.",
      technologies: ["React Native", "Firebase", "Redux", "Charts"],
      image: "💪",
      highlights: [
        "Cross-platform development",
        "Offline-first architecture",
        "Integration with health APIs"
      ]
    }
  ]

  return (
    <div className="projects page-enter">
      <div className="section-container">
        <h1 className="page-title gradient-text">Featured Projects</h1>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card cosmic-card">
              <div className="project-icon">{project.image}</div>
              <h2>{project.title}</h2>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-highlights">
                <h4>Key Features:</h4>
                <ul>
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
