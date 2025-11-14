import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import './Blogs.css'

function Blogs() {
  const blogPosts = [
    {
      id: 'valu-rule-engine',
      title: "ValU Rule Engine Optimization: From 70s to 2s",
      category: "Performance",
      date: "Apr 2024",
      readTime: "8 min read",
      excerpt: "How we achieved a 350% performance improvement by completely rewriting the rule engine, reducing P95 latency from 70 seconds to 2 seconds.",
      tags: [".NET", "Performance", "Optimization", "Architecture"],
      icon: "lightning"
    },
    {
      id: 'payment-optimization',
      title: "Payment Service Race Condition Resolution",
      category: "Microservices",
      date: "May 2024",
      readTime: "6 min read",
      excerpt: "Deep dive into identifying and resolving race conditions in concurrent payment processing while parallelizing operations for better throughput.",
      tags: [".NET", "Concurrency", "SQL Server", "Optimization"],
      icon: "creditCard"
    },
    {
      id: 'saga-pattern',
      title: "Implementing Saga Pattern for Distributed Transactions",
      category: "Architecture",
      date: "Jun 2024",
      readTime: "10 min read",
      excerpt: "How we ensured data consistency across 17 microservices using the Saga pattern with RabbitMQ and MassTransit.",
      tags: ["Microservices", "RabbitMQ", "MassTransit", "Saga Pattern"],
      icon: "workflow"
    },
    {
      id: 'database-optimization',
      title: "Database Optimization: 70% Load Reduction",
      category: "Database",
      date: "Jul 2024",
      readTime: "7 min read",
      excerpt: "Strategies for eliminating N+1 queries, implementing Redis caching, and database vertical slicing that cut our DB load by 70%.",
      tags: ["SQL Server", "Redis", "Caching", "Query Optimization"],
      icon: "database"
    },
    {
      id: 'maskan-architecture',
      title: "Building Maskan: Multi-Tenant Real Estate Platform",
      category: "Project",
      date: "Aug 2023",
      readTime: "12 min read",
      excerpt: "Architecting a scalable multi-tenant platform with role-based access control, real-time notifications, and OWASP security compliance.",
      tags: [".NET", "PostgreSQL", "React", "Multi-Tenancy", "AWS"],
      icon: "realEstate"
    },
    {
      id: 'circle-settlement',
      title: "Circle App: Optimizing Group Expense Settlement",
      category: "Algorithms",
      date: "Mar 2023",
      readTime: "5 min read",
      excerpt: "Designing an efficient algorithm for minimal transaction settlement in group expenses using graph theory.",
      tags: ["TypeScript", "Algorithms", "React Native", "Expo"],
      icon: "money"
    },
    {
      id: 'data-migration',
      title: "Migrating 100K+ Records from Excel to Relational DB",
      category: "Data Engineering",
      date: "Sep 2024",
      readTime: "6 min read",
      excerpt: "Automating the transformation of unstructured Excel and Word documents into structured relational data before system go-live.",
      tags: ["Python", ".NET", "SQL Server", "ETL"],
      icon: "chart"
    },
    {
      id: 'clean-architecture',
      title: "Clean Architecture in .NET Microservices",
      category: "Architecture",
      date: "Feb 2024",
      readTime: "9 min read",
      excerpt: "Implementing Clean Architecture principles across 17 microservices for maintainability and testability.",
      tags: [".NET", "Clean Architecture", "SOLID", "Design Patterns"],
      icon: "architecture"
    },
    {
      id: 'ecommerce-vton',
      title: "E-Commerce VTON: ML-Powered Virtual Try-On",
      category: "Project",
      date: "Jan 2023",
      readTime: "10 min read",
      excerpt: "Building an event-driven microservices platform with ML integration for virtual garment try-on and 3D visualization.",
      tags: ["TypeScript", "Python", "ML", "Kubernetes", "NATS"],
      icon: "shirt"
    },
    {
      id: 'owasp-security',
      title: "OWASP Security Best Practices in Microservices",
      category: "Security",
      date: "Oct 2024",
      readTime: "8 min read",
      excerpt: "Implementing security best practices across microservices architecture following OWASP guidelines.",
      tags: ["Security", "OWASP", ".NET", "Authentication"],
      icon: "security"
    }
  ]

  return (
    <div className="blogs page-enter">
      <div className="section-container">
        <h1 className="page-title gradient-text">Tech Blog</h1>
        <p className="blogs-subtitle">
          Deep dives into performance optimization, architecture decisions, and real-world problem solving
        </p>
        
        <div className="blogs-grid">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`} 
              className="blog-card cosmic-card"
            >
              <div className="blog-icon">
                <Icon name={post.icon} size={60} />
              </div>
              <div className="blog-meta">
                <span className="blog-category">{post.category}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h2>{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-tags">
                {post.tags.map((tag, i) => (
                  <span key={i} className="blog-tag">{tag}</span>
                ))}
              </div>
              <div className="blog-footer">
                <span className="read-time">⏱ {post.readTime}</span>
                <span className="read-more">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
