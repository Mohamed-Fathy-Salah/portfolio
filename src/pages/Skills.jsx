import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "C# / .NET", level: 95 },
        { name: "ASP.NET Core", level: 95 },
        { name: "Entity Framework Core", level: 90 },
        { name: "Microservices", level: 90 },
        { name: "RESTful APIs", level: 95 }
      ]
    },
    {
      category: "Databases & Caching",
      icon: "💾",
      skills: [
        { name: "SQL Server", level: 92 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 88 },
        { name: "Database Optimization", level: 90 }
      ]
    },
    {
      category: "Message Brokers & Architecture",
      icon: "🔄",
      skills: [
        { name: "RabbitMQ", level: 90 },
        { name: "MassTransit", level: 88 },
        { name: "Event-Driven Architecture", level: 90 },
        { name: "Clean Architecture", level: 92 },
        { name: "SOLID Principles", level: 95 }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: "🛠️",
      skills: [
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 82 },
        { name: "Git & GitHub", level: 92 },
        { name: "CI/CD (GitHub Actions)", level: 85 },
        { name: "Linux & Bash", level: 85 }
      ]
    },
    {
      category: "Additional Technologies",
      icon: "💻",
      skills: [
        { name: "Python", level: 80 },
        { name: "TypeScript / JavaScript", level: 85 },
        { name: "React", level: 82 },
        { name: "GraphQL & gRPC", level: 80 },
        { name: "WebSockets & SignalR", level: 85 }
      ]
    },
    {
      category: "Soft Skills & Security",
      icon: "🎯",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Code Review & Mentoring", level: 90 },
        { name: "OWASP Security Practices", level: 88 },
        { name: "Team Collaboration", level: 92 },
        { name: "Communication", level: 90 }
      ]
    }
  ]

  return (
    <div className="skills page-enter">
      <div className="section-container">
        <h1 className="page-title gradient-text">Technical Skills</h1>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category cosmic-card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h2>{category.category}</h2>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
