import { useParams, Link } from 'react-router-dom'
import { blogContent } from '../data/blogContent'
import Icon from '../components/Icon'
import './BlogPost.css'

function BlogPost() {
  const { id } = useParams()
  const post = blogContent[id]
  
  const iconMap = {
    'valu-rule-engine': 'lightning',
    'payment-optimization': 'creditCard',
    'saga-pattern': 'workflow',
    'database-optimization': 'database',
    'maskan-architecture': 'realEstate'
  }

  if (!post) {
    return (
      <div className="blog-post page-enter">
        <div className="section-container">
          <h1 className="page-title gradient-text">Blog Post Not Found</h1>
          <Link to="/blogs" className="cosmic-button">← Back to Blogs</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-post page-enter">
      <div className="blog-post-container">
        <Link to="/blogs" className="back-button">← Back to Blogs</Link>
        
        <div className="post-header">
          <div className="post-icon">
            <Icon name={iconMap[id] || post.icon} size={80} />
          </div>
          <div className="post-meta">
            <span className="post-category">{post.category}</span>
            <span className="post-date">{post.date}</span>
            <span className="post-read-time">⏱ {post.readTime}</span>
          </div>
          <h1 className="post-title gradient-text">{post.title}</h1>
          <div className="post-tags">
            {post.tags.map((tag, i) => (
              <span key={i} className="post-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="post-content cosmic-card">
          {post.sections.map((section, index) => (
            <div key={index} className="content-section">
              <h2>{section.heading}</h2>
              {section.content.map((item, i) => {
                if (item.type === 'paragraph') {
                  return <p key={i}>{item.text}</p>
                } else if (item.type === 'list') {
                  return (
                    <ul key={i}>
                      {item.items.map((listItem, j) => (
                        <li key={j}>{listItem}</li>
                      ))}
                    </ul>
                  )
                } else if (item.type === 'code') {
                  return (
                    <pre key={i} className="code-block">
                      <code>{item.text}</code>
                    </pre>
                  )
                } else if (item.type === 'quote') {
                  return (
                    <blockquote key={i} className="quote-block">
                      {item.text}
                    </blockquote>
                  )
                } else if (item.type === 'metrics') {
                  return (
                    <div key={i} className="metrics-grid">
                      {item.items.map((metric, j) => (
                        <div key={j} className="metric-card cosmic-card">
                          <div className="metric-value">{metric.value}</div>
                          <div className="metric-label">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )
                }
                return null
              })}
            </div>
          ))}
        </div>

        <div className="post-footer">
          <Link to="/blogs" className="cosmic-button">← Back to All Blogs</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
