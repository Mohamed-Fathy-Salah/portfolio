import './About.css'

function About() {
  return (
    <div className="about page-enter">
      <div className="section-container">
        <h1 className="page-title gradient-text">About Me</h1>
        
        <div className="about-content">
          <div className="about-intro cosmic-card">
            <h2>Professional Summary</h2>
            <p>
              Welcome to my cosmic corner of the web! I'm a passionate developer 
              exploring the vast universe of technology. With a strong foundation 
              in software development and a keen interest in innovative solutions, 
              I bring creativity and technical expertise to every project.
            </p>
            <p>
              My journey in technology has been driven by curiosity and a desire 
              to create meaningful digital experiences. From crafting elegant code 
              to solving complex problems, I thrive on challenges that push the 
              boundaries of what's possible.
            </p>
          </div>
          
          <div className="about-details">
            <div className="detail-card cosmic-card">
              <h3>🎯 Mission</h3>
              <p>
                To leverage cutting-edge technologies and innovative thinking to 
                build solutions that make a difference in people's lives.
              </p>
            </div>
            
            <div className="detail-card cosmic-card">
              <h3>💡 Vision</h3>
              <p>
                Constantly evolving and learning, staying at the forefront of 
                technology while maintaining a human-centered approach to development.
              </p>
            </div>
            
            <div className="detail-card cosmic-card">
              <h3>⚡ Values</h3>
              <p>
                Innovation, continuous learning, collaboration, and creating 
                impactful solutions with clean, maintainable code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
