import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "RESTful APIs", level: 92 },
        { name: "GraphQL", level: 80 }
      ]
    },
    {
      category: "Database & Cloud",
      icon: "☁️",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "AWS", level: 78 },
        { name: "Docker", level: 85 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      category: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 92 },
        { name: "CI/CD", level: 85 },
        { name: "Agile/Scrum", level: 88 },
        { name: "Testing (Jest, Cypress)", level: 85 },
        { name: "Linux", level: 80 }
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
