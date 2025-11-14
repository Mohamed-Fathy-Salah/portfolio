import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Leading development of cutting-edge web applications using modern technologies. Architecting scalable solutions and mentoring junior developers.",
      achievements: [
        "Developed microservices architecture serving 1M+ users",
        "Reduced application load time by 60%",
        "Led team of 5 developers in agile environment"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      period: "2019 - 2021",
      description: "Built responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality products.",
      achievements: [
        "Implemented CI/CD pipelines improving deployment efficiency",
        "Created reusable component library used across projects",
        "Optimized database queries reducing server costs by 30%"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2018 - 2019",
      description: "Contributed to various projects, learning best practices and modern development workflows.",
      achievements: [
        "Developed features for mobile-responsive web applications",
        "Participated in code reviews and testing processes",
        "Learned and applied TDD and BDD methodologies"
      ]
    }
  ]

  return (
    <div className="experience page-enter">
      <div className="section-container">
        <h1 className="page-title gradient-text">Professional Experience</h1>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content cosmic-card">
                <div className="exp-header">
                  <div>
                    <h2>{exp.title}</h2>
                    <h3>{exp.company}</h3>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="exp-description">{exp.description}</p>
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
