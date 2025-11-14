import Icon from '../components/Icon'
import './Education.css'

function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Engineering",
      institution: "Benha University - Shoubra Faculty of Engineering",
      period: "Sep 2017 - Jun 2022",
      description: "Graduated with distinction, focusing on software engineering, algorithms, and system design.",
      achievements: [
        "GPA: 4.0 / 91% (Excellent with Honors)",
        "Ranked 1st in Bachelor's Class (2022)",
        "Teaching Assistant in Computer Engineering (Oct 2022 - Jan 2023)",
        "Active member of programming competitions and clubs"
      ]
    }
  ]

  const certifications = [
    {
      name: ".NET 8 Microservices Course",
      issuer: "Professional Development",
      year: "2024",
      icon: "certificate"
    },
    {
      name: "Network Engineering: Low Latency Design",
      issuer: "Professional Development",
      year: "2024",
      icon: "code"
    },
    {
      name: "Node.js + React Microservices",
      issuer: "E-Commerce Architecture",
      year: "2023",
      icon: "workflow"
    },
    {
      name: "Database Systems (CMU)",
      issuer: "Carnegie Mellon University",
      year: "2023",
      icon: "database"
    },
    {
      name: "Performance Engineering (MIT)",
      issuer: "Massachusetts Institute of Technology",
      year: "2023",
      icon: "lightning"
    },
    {
      name: "EF SET C2 English Certificate",
      issuer: "EF Standard English Test",
      year: "2022",
      icon: "education"
    }
  ]

  const awards = [
    {
      name: "Ranked 1st in Bachelor's Class",
      issuer: "Benha University",
      year: "2022",
      icon: "trophy"
    },
    {
      name: "ECPC Qualification - 21st Place",
      issuer: "Egyptian Collegiate Programming Contest",
      year: "2022",
      icon: "code"
    },
    {
      name: "ACPC Qualification - 30th Place",
      issuer: "Arab Collegiate Programming Contest",
      year: "2022",
      icon: "mission"
    },
    {
      name: "ECPC Qualification - 118th Place",
      issuer: "Egyptian Collegiate Programming Contest",
      year: "2021",
      icon: "chart"
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
          <h2 className="section-heading">Professional Certifications & Courses</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card cosmic-card">
                <div className="cert-icon">
                  <Icon name={cert.icon} size={50} />
                </div>
                <h3>{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <span className="cert-year">{cert.year}</span>
              </div>
            ))}
          </div>
        </section>
        
        <section className="certifications-section">
          <h2 className="section-heading">Awards & Achievements</h2>
          <div className="certifications-grid">
            {awards.map((award, index) => (
              <div key={index} className="cert-card cosmic-card">
                <div className="cert-icon">
                  <Icon name={award.icon} size={50} />
                </div>
                <h3>{award.name}</h3>
                <p className="cert-issuer">{award.issuer}</p>
                <span className="cert-year">{award.year}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Education
