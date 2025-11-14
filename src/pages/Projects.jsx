import './Projects.css'

function Projects() {
  const projects = [
    {
      title: "Maskan - Real Estate Platform",
      description: "Multi-tenant real estate management web application for brokers, featuring role-based access control, browser caching strategies, CDN integration, and OWASP security compliance. Supports 5,000+ unique visitors per month with real-time notifications.",
      technologies: [".NET", "C#", "PostgreSQL", "ReactJS", "Tailwind", "AWS EC2", "CI/CD"],
      image: "🏢",
      highlights: [
        "Multi-tenant architecture with role-based access control",
        "Real-time property matching notifications",
        "CDN integration and browser caching strategies",
        "OWASP security best practices implementation",
        "Supports 5,000+ monthly unique visitors"
      ]
    },
    {
      title: "Circle - Expense Management",
      description: "Cross-platform expense management application for personal and group use, featuring an optimized algorithm for minimal settlement plans with interactive reports and visual charts for financial insights.",
      technologies: ["TypeScript", "ReactJS", "Expo", "React Native"],
      image: "💰",
      highlights: [
        "Optimized settlement algorithm for group expenses",
        "Cross-platform (iOS & Android) support",
        "Interactive financial reports and charts",
        "Personal and group expense tracking",
        "Real-time expense synchronization"
      ]
    },
    {
      title: "E-Commerce VTON Platform",
      description: "Event-driven microservice platform for virtual garment shopping, integrating machine learning for virtual try-on capabilities and 3D modeling for realistic garment visualization.",
      technologies: ["TypeScript", "Express", "Python", "FastAPI", "ML", "MongoDB", "Next.js", "NATS", "Kubernetes"],
      image: "👔",
      highlights: [
        "Event-driven microservices architecture",
        "Machine learning-powered virtual try-on",
        "3D garment modeling and visualization",
        "Kubernetes orchestration for scalability",
        "NATS message broker for event streaming"
      ]
    },
    {
      title: "Healthy Meal Planner",
      description: "Intelligent meal planning system based on user preferences, available ingredients, and body composition goals using GraphQL API and OAuth authentication.",
      technologies: ["TypeScript", "Apollo GraphQL", "PostgreSQL", "OAuth", "Jest", "CI/CD"],
      image: "🥗",
      highlights: [
        "GraphQL API for flexible data queries",
        "Personalized meal recommendations",
        "OAuth 2.0 authentication integration",
        "Ingredient-based meal planning",
        "Comprehensive test coverage with Jest"
      ]
    },
    {
      title: "Payment Service Optimization",
      description: "Major performance optimization project at EFG Holding that dramatically reduced payment processing times through parallelization, race condition resolution, and algorithm optimization.",
      technologies: [".NET", "SQL Server", "Redis", "RabbitMQ", "Microservices"],
      image: "💳",
      highlights: [
        "Resolved race conditions in concurrent processing",
        "Parallelized client payments for throughput",
        "Optimized algorithm complexity to O(n log n)",
        "Limited database trips to two operations",
        "Achieved significant performance improvements"
      ]
    },
    {
      title: "Rule Engine Optimization (ValU)",
      description: "Complete rewrite of a critical rule engine system, achieving 350% performance improvement by separating business logic and dynamic configurations, reducing 95th percentile from 70s to 2s.",
      technologies: [".NET", "SQL Server", "Performance Optimization"],
      image: "⚡",
      highlights: [
        "350% performance improvement achieved",
        "Precompiled rules and formulas",
        "Lazy evaluation for conditional logic",
        "Database vertical slicing optimization",
        "Reduced P95 from 70 seconds to 2 seconds"
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
