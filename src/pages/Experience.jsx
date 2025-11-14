import './Experience.css'

function Experience() {
  const experiences = [
    {
      title: "Backend Engineer",
      company: "EFG Holding – AFKAR Technology",
      period: "Apr 2024 - Present",
      description: "Maintaining and enhancing 17 microservices with a strong focus on performance, scalability, security, and consistency. Tech Stack: .NET, SQL Server, MongoDB, Redis, RabbitMQ, Python, Microservices, Clean and Layered Architecture.",
      achievements: [
        "Optimized payment service execution time by resolving race conditions and parallelizing client payments",
        "Improved Rule Engine performance by 350% through precompilation and lazy evaluation",
        "Reduced 95th percentile execution time from 70 seconds to 2 seconds by rewriting service architecture",
        "Implemented Saga Pattern for consistent distributed transaction management",
        "Cut database load by 70% and reduced API response time by 40% through query optimization and Redis caching",
        "Automated migration of 100,000+ unstructured records from Excel/Word to structured relational data",
        "Led code reviews and mentored junior developers on architecture and OWASP security practices"
      ]
    },
    {
      title: "Backend Engineer",
      company: "Self Employed (Freelance)",
      period: "Jun 2022 - Present",
      description: "Developed freelance projects focusing on scalable backend solutions. Tech Stack: .NET, PostgreSQL, React, TypeScript.",
      achievements: [
        "Built multi-tenant real estate management platform (Maskan) supporting 5,000+ monthly visitors",
        "Implemented role-based access control, CDN integration, and OWASP security best practices",
        "Developed JavaScript automation scripts to streamline tasks during military service",
        "Created real-time notification systems for property matching"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "Shoubra Faculty of Engineering",
      period: "Oct 2022 - Jan 2023",
      description: "Teaching Assistant in Computer Engineering, Department of Electrical Engineering.",
      achievements: [
        "Assisted in teaching computer engineering fundamentals",
        "Mentored students in programming and system design concepts",
        "Contributed to curriculum development and student assessments"
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
