import './Education.css'

function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      period: "2016 - 2018",
      description: "Specialized in Software Engineering and Artificial Intelligence",
      achievements: [
        "GPA: 3.8/4.0",
        "Research in Machine Learning and Neural Networks",
        "Published paper on distributed systems"
      ]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Engineering College",
      period: "2012 - 2016",
      description: "Foundation in software development and computer systems",
      achievements: [
        "GPA: 3.7/4.0",
        "Dean's List all semesters",
        "Led university programming club"
      ]
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2022",
      icon: "☁️"
    },
    {
      name: "Professional Scrum Master",
      issuer: "Scrum.org",
      year: "2021",
      icon: "📋"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2021",
      icon: "🍃"
    },
    {
      name: "React Advanced Patterns",
      issuer: "Frontend Masters",
      year: "2020",
      icon: "⚛️"
    }
  ]

  return (
    <div className="education page-enter">
      <div className="section-container">
        <h1 className="page-title gradient-text">Education & Certifications</h1>
        
        <section className="education-section">
          <h2 className="section-heading">Academic Background</h2>
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-card cosmic-card">
                <div className="edu-header">
                  <div>
                    <h3>{edu.degree}</h3>
                    <h4>{edu.institution}</h4>
                  </div>
                  <span className="period">{edu.period}</span>
                </div>
                <p className="edu-description">{edu.description}</p>
                <div className="achievements">
                  <h5>Highlights:</h5>
                  <ul>
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="certifications-section">
          <h2 className="section-heading">Professional Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card cosmic-card">
                <div className="cert-icon">{cert.icon}</div>
                <h3>{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Education
