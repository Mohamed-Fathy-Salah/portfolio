import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home page-enter">
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-image-container">
            <img src="/me.jpg" alt="Profile" className="profile-image" />
            <div className="image-glow"></div>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Mohamed Fathy</span>
          </h1>
          
          <p className="hero-subtitle">
            Backend Engineer | Problem solver | Minimalist | Linux enthusiastic
          </p>
          
          <div className="hero-buttons">
            <Link to="/about" className="cosmic-button">
              Explore My Journey
            </Link>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="cosmic-button secondary">
              Download CV
            </a>
          </div>
        </div>
        
        <div className="floating-elements">
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="orbit orbit-3"></div>
        </div>
      </div>
      
      <div className="quick-links">
        <Link to="/experience" className="quick-link-card cosmic-card">
          <div className="icon">💼</div>
          <h3>Experience</h3>
          <p>Explore my professional journey</p>
        </Link>
        
        <Link to="/skills" className="quick-link-card cosmic-card">
          <div className="icon">⚡</div>
          <h3>Skills</h3>
          <p>Discover my technical expertise</p>
        </Link>
        
        <Link to="/projects" className="quick-link-card cosmic-card">
          <div className="icon">🚀</div>
          <h3>Projects</h3>
          <p>View my creative works</p>
        </Link>
        
        <Link to="/blogs" className="quick-link-card cosmic-card">
          <div className="icon">📝</div>
          <h3>Blog</h3>
          <p>Read technical deep dives</p>
        </Link>
        
        <Link to="/contact" className="quick-link-card cosmic-card">
          <div className="icon">📬</div>
          <h3>Contact</h3>
          <p>Let's connect and collaborate</p>
        </Link>
      </div>
    </div>
  )
}

export default Home
