import './About.css'

function About() {
  return (
    <div className="about page-enter">
      <div className="section-container">
        <h1 className="page-title gradient-text">About Me</h1>
        
        <div className="about-content">
          <div className="about-intro cosmic-card">
            <h2>Backend Engineer & Microservices Expert</h2>
            <p>
              Passionate Backend Engineer with expertise in building high-performance, 
              scalable microservices architectures. Currently at EFG Holding – AFKAR Technology, 
              where I maintain and enhance 17 microservices with a strong focus on performance, 
              scalability, security, and consistency.
            </p>
            <p>
              My journey in software engineering has been marked by significant achievements 
              in optimization and system design. I've reduced payment service execution times 
              dramatically, improved rule engine performance by 350%, and cut database loads by 70%. 
              I believe in writing clean, maintainable code that follows SOLID principles and 
              industry best practices.
            </p>
            <p>
              With a Bachelor's degree in Computer Engineering (GPA: 4.0 / 91%) and ranked 1st 
              in my class, I combine strong theoretical foundations with practical expertise in 
              .NET, SQL Server, MongoDB, Redis, RabbitMQ, and microservices architecture.
            </p>
          </div>
          
          <div className="about-details">
            <div className="detail-card cosmic-card">
              <h3>🎯 Mission</h3>
              <p>
                To build robust, high-performance backend systems that solve real-world 
                problems at scale, while mentoring teams and promoting best practices 
                in software architecture and security.
              </p>
            </div>
            
            <div className="detail-card cosmic-card">
              <h3>💡 Expertise</h3>
              <p>
                Microservices architecture, performance optimization, distributed systems, 
                clean architecture, and event-driven design. Proficient in .NET ecosystem, 
                SQL/NoSQL databases, and DevOps practices.
              </p>
            </div>
            
            <div className="detail-card cosmic-card">
              <h3>⚡ Impact</h3>
              <p>
                Reduced API response times by 40%, database load by 70%, and rule engine 
                execution from 70 seconds to 2 seconds. Led code reviews and mentored 
                junior developers on architecture best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
