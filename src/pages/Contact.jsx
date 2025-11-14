import SocialIcon from '../components/SocialIcon'
import Icon from '../components/Icon'
import './Contact.css'

function Contact() {
  return (
    <div className="contact page-enter">
      <div className="section-container">
        <h1 className="page-title gradient-text">Get In Touch</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card cosmic-card">
              <div className="info-icon">
                <Icon name="email" size={50} />
              </div>
              <h3>Email</h3>
              <p>mohamedfathy29908@gmail.com</p>
            </div>
            
            <div className="info-card cosmic-card">
              <div className="info-icon">
                <Icon name="phone" size={50} />
              </div>
              <h3>Phone</h3>
              <p>+20 114 319 1824</p>
            </div>
            
            <div className="info-card cosmic-card">
              <div className="info-icon">
                <Icon name="location" size={50} />
              </div>
              <h3>Location</h3>
              <p>Cairo, Egypt</p>
            </div>
          </div>
          
          <div className="social-links">
            <h2>Connect With Me</h2>
            <div className="social-grid">
              <a href="https://github.com/mofasa" target="_blank" rel="noopener noreferrer" className="social-card cosmic-card">
                <div className="social-icon">
                  <SocialIcon platform="github" />
                </div>
                <span>GitHub</span>
              </a>
              
              <a href="https://linkedin.com/in/mohamed-fathy-b30047202" target="_blank" rel="noopener noreferrer" className="social-card cosmic-card">
                <div className="social-icon">
                  <SocialIcon platform="linkedin" />
                </div>
                <span>LinkedIn</span>
              </a>
              
              <a href="https://leetcode.com/mofasa" target="_blank" rel="noopener noreferrer" className="social-card cosmic-card">
                <div className="social-icon">
                  <SocialIcon platform="leetcode" />
                </div>
                <span>LeetCode</span>
              </a>
              
              <a href="mailto:mohamedfathy29908@gmail.com" className="social-card cosmic-card">
                <div className="social-icon">
                  <Icon name="email" size={40} />
                </div>
                <span>Email</span>
              </a>
            </div>
          </div>
          
          <div className="contact-form-section cosmic-card">
            <h2>Send Me a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="6" required></textarea>
              </div>
              
              <button type="submit" className="cosmic-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
