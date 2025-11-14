export const blogContent = {
  'valu-rule-engine': {
    title: "ValU Rule Engine Optimization: From 70s to 2s",
    category: "Performance",
    date: "Apr 2024",
    readTime: "8 min read",
    icon: "⚡",
    tags: [".NET", "Performance", "Optimization", "Architecture"],
    sections: [
      {
        heading: "The Challenge",
        content: [
          {
            type: "paragraph",
            text: "When I joined the ValU project, we were facing a critical performance issue. The rule engine that powered our financial calculations was taking an average of 70 seconds at the 95th percentile to process requests. This wasn't just slow—it was affecting customer experience and system reliability."
          },
          {
            type: "metrics",
            items: [
              { value: "70s", label: "P95 Before" },
              { value: "2s", label: "P95 After" },
              { value: "350%", label: "Improvement" }
            ]
          }
        ]
      },
      {
        heading: "Root Cause Analysis",
        content: [
          {
            type: "paragraph",
            text: "After thorough profiling and analysis, I identified several critical bottlenecks:"
          },
          {
            type: "list",
            items: [
              "Rules, keys, and formulas were being interpreted at runtime on every request",
              "No lazy evaluation—all conditional logic was being executed regardless of necessity",
              "Multiple database round trips for key resolution",
              "Large tables containing both frequently and infrequently accessed columns",
              "Business logic tightly coupled with dynamic configurations in code"
            ]
          }
        ]
      },
      {
        heading: "The Solution: Complete Architecture Overhaul",
        content: [
          {
            type: "paragraph",
            text: "I proposed and implemented a complete rewrite of the service with the following key optimizations:"
          },
          {
            type: "list",
            items: [
              "Precompiled Rules & Formulas: Changed from runtime interpretation to compile-time compilation of all rules and formulas",
              "Lazy Evaluation: Implemented lazy evaluation for conditional logic, only executing what's necessary",
              "Single Execution Path: Replaced multiple key resolutions with a single compiled execution path",
              "Database Optimization: Rewrote stored procedures and vertically sliced large tables",
              "Separation of Concerns: Moved business logic to .NET code and dynamic configurations to database"
            ]
          }
        ]
      },
      {
        heading: "Implementation Details",
        content: [
          {
            type: "paragraph",
            text: "The most impactful change was separating business logic from configuration. Here's the approach:"
          },
          {
            type: "code",
            text: `// Before: Rules interpreted at runtime
var result = InterpretRule(ruleDefinition, context);

// After: Precompiled expression trees
Expression<Func<Context, decimal>> compiledRule = 
    CompileRule(ruleDefinition);
var result = compiledRule.Compile()(context);`
          },
          {
            type: "paragraph",
            text: "For database optimization, we vertically sliced tables to separate hot and cold data:"
          },
          {
            type: "list",
            items: [
              "Frequently accessed columns → Hot table (90% of queries)",
              "Rarely used columns → Cold table (10% of queries)",
              "Reduced table scan overhead by 60%"
            ]
          }
        ]
      },
      {
        heading: "Results & Impact",
        content: [
          {
            type: "paragraph",
            text: "The results exceeded expectations:"
          },
          {
            type: "metrics",
            items: [
              { value: "97%", label: "Latency Reduction" },
              { value: "60%", label: "DB Load ↓" },
              { value: "100%", label: "SLA Compliance" }
            ]
          },
          {
            type: "quote",
            text: "The rewrite not only solved our performance issues but also made the codebase significantly more maintainable and testable."
          }
        ]
      },
      {
        heading: "Key Takeaways",
        content: [
          {
            type: "list",
            items: [
              "Profiling first: Don't optimize blindly—measure and identify actual bottlenecks",
              "Separate concerns: Business logic and configuration should live in different layers",
              "Compile when possible: Pre-compilation can provide massive performance gains",
              "Database design matters: Vertical slicing and proper indexing are crucial",
              "Test at scale: Performance improvements should be validated under production-like loads"
            ]
          }
        ]
      }
    ]
  },

  'payment-optimization': {
    title: "Payment Service Race Condition Resolution",
    category: "Microservices",
    date: "May 2024",
    readTime: "6 min read",
    icon: "💳",
    tags: [".NET", "Concurrency", "SQL Server", "Optimization"],
    sections: [
      {
        heading: "The Problem",
        content: [
          {
            type: "paragraph",
            text: "Our payment service was experiencing intermittent failures during high-traffic periods. Investigation revealed a classic concurrency issue: race conditions caused by multiple threads trying to insert payment records simultaneously."
          }
        ]
      },
      {
        heading: "Identifying the Race Condition",
        content: [
          {
            type: "paragraph",
            text: "The issue manifested in three ways:"
          },
          {
            type: "list",
            items: [
              "Duplicate payment records being created",
              "Deadlocks in the database during concurrent inserts",
              "Inconsistent balance updates for user accounts"
            ]
          },
          {
            type: "paragraph",
            text: "The root cause was inadequate transaction isolation and lack of proper locking mechanisms."
          }
        ]
      },
      {
        heading: "The Solution",
        content: [
          {
            type: "paragraph",
            text: "I implemented a multi-pronged approach:"
          },
          {
            type: "list",
            items: [
              "Optimistic Concurrency Control: Added row versioning to detect conflicts",
              "Idempotency Keys: Ensured payment requests could be safely retried",
              "Database Constraints: Added unique constraints to prevent duplicates",
              "Parallel Processing: Safely parallelized independent payment operations",
              "Algorithm Optimization: Reduced complexity from O(n²) to O(n log n)"
            ]
          }
        ]
      },
      {
        heading: "Parallelization Strategy",
        content: [
          {
            type: "paragraph",
            text: "After resolving the race condition, I parallelized payment processing for better throughput:"
          },
          {
            type: "code",
            text: `// Group payments by client to avoid conflicts
var paymentGroups = payments.GroupBy(p => p.ClientId);

// Process each group in parallel
await Parallel.ForEachAsync(
    paymentGroups, 
    new ParallelOptions { MaxDegreeOfParallelism = 10 },
    async (group, ct) => {
        await ProcessClientPayments(group, ct);
    });`
          }
        ]
      },
      {
        heading: "Results",
        content: [
          {
            type: "metrics",
            items: [
              { value: "0", label: "Race Conditions" },
              { value: "3x", label: "Throughput Increase" },
              { value: "45%", label: "Latency Reduction" }
            ]
          }
        ]
      }
    ]
  },

  'saga-pattern': {
    title: "Implementing Saga Pattern for Distributed Transactions",
    category: "Architecture",
    date: "Jun 2024",
    readTime: "10 min read",
    icon: "🔄",
    tags: ["Microservices", "RabbitMQ", "MassTransit", "Saga Pattern"],
    sections: [
      {
        heading: "Why Saga Pattern?",
        content: [
          {
            type: "paragraph",
            text: "With 17 microservices in our architecture, maintaining data consistency across service boundaries became a major challenge. Traditional distributed transactions (2PC) weren't viable due to tight coupling and performance issues."
          }
        ]
      },
      {
        heading: "Choosing the Right Approach",
        content: [
          {
            type: "paragraph",
            text: "We evaluated two Saga patterns:"
          },
          {
            type: "list",
            items: [
              "Choreography: Services publish events and subscribe to others—decentralized",
              "Orchestration: Central coordinator manages the workflow—easier to track and debug"
            ]
          },
          {
            type: "paragraph",
            text: "We chose orchestration using MassTransit's state machine for complex workflows requiring strict ordering and compensating transactions."
          }
        ]
      },
      {
        heading: "Implementation with MassTransit",
        content: [
          {
            type: "paragraph",
            text: "Here's a simplified example of an order processing saga:"
          },
          {
            type: "code",
            text: `public class OrderStateMachine : MassTransitStateMachine<OrderState>
{
    public OrderStateMachine()
    {
        Initially(
            When(OrderSubmitted)
                .PublishAsync(ctx => ctx.Init<ReserveInventory>(...))
                .TransitionTo(AwaitingInventory));

        During(AwaitingInventory,
            When(InventoryReserved)
                .PublishAsync(ctx => ctx.Init<ProcessPayment>(...))
                .TransitionTo(AwaitingPayment));

        During(AwaitingPayment,
            When(PaymentFailed)
                .PublishAsync(ctx => ctx.Init<ReleaseInventory>(...))
                .TransitionTo(Failed));
    }
}`
          }
        ]
      },
      {
        heading: "Handling Failures",
        content: [
          {
            type: "paragraph",
            text: "The key to Saga success is proper compensation logic:"
          },
          {
            type: "list",
            items: [
              "Each step has a corresponding compensation action",
              "Failures trigger rollback of completed steps",
              "State is persisted for recovery after crashes",
              "Idempotency ensures safe retries"
            ]
          }
        ]
      },
      {
        heading: "Results & Learnings",
        content: [
          {
            type: "paragraph",
            text: "The Saga pattern provided:"
          },
          {
            type: "list",
            items: [
              "99.9% data consistency across services",
              "Automatic compensation on failures",
              "Clear audit trail of all transactions",
              "Resilience to individual service failures"
            ]
          }
        ]
      }
    ]
  },

  'database-optimization': {
    title: "Database Optimization: 70% Load Reduction",
    category: "Database",
    date: "Jul 2024",
    readTime: "7 min read",
    icon: "💾",
    tags: ["SQL Server", "Redis", "Caching", "Query Optimization"],
    sections: [
      {
        heading: "The Database Bottleneck",
        content: [
          {
            type: "paragraph",
            text: "Our SQL Server database was becoming a bottleneck, with CPU consistently above 80% and query times increasing. The goal was to reduce database load by at least 50% while maintaining data consistency."
          }
        ]
      },
      {
        heading: "N+1 Query Problem",
        content: [
          {
            type: "paragraph",
            text: "The most impactful optimization was eliminating N+1 queries. Here's what we found:"
          },
          {
            type: "code",
            text: `// Before: N+1 queries
var orders = await db.Orders.ToListAsync();
foreach (var order in orders) {
    order.Items = await db.OrderItems
        .Where(i => i.OrderId == order.Id)
        .ToListAsync();
}

// After: Single query with proper includes
var orders = await db.Orders
    .Include(o => o.Items)
    .AsSplitQuery()
    .ToListAsync();`
          }
        ]
      },
      {
        heading: "Redis Caching Strategy",
        content: [
          {
            type: "paragraph",
            text: "We implemented a multi-layer caching strategy:"
          },
          {
            type: "list",
            items: [
              "Hot data (accessed > 100x/day) → Redis with 1-hour TTL",
              "Reference data (rarely changes) → Redis with 24-hour TTL",
              "User sessions → Redis with sliding expiration",
              "Cache invalidation on data updates via pub/sub"
            ]
          }
        ]
      },
      {
        heading: "Index Optimization",
        content: [
          {
            type: "paragraph",
            text: "Created targeted indexes based on query patterns:"
          },
          {
            type: "list",
            items: [
              "Covering indexes for frequently queried columns",
              "Filtered indexes for common WHERE clauses",
              "Removed unused indexes (reducing write overhead)",
              "Clustered index optimization for range queries"
            ]
          }
        ]
      },
      {
        heading: "Results",
        content: [
          {
            type: "metrics",
            items: [
              { value: "70%", label: "DB Load Reduction" },
              { value: "40%", label: "API Latency ↓" },
              { value: "95%", label: "Cache Hit Rate" }
            ]
          }
        ]
      }
    ]
  },

  'maskan-architecture': {
    title: "Building Maskan: Multi-Tenant Real Estate Platform",
    category: "Project",
    date: "Aug 2023",
    readTime: "12 min read",
    icon: "🏢",
    tags: [".NET", "PostgreSQL", "React", "Multi-Tenancy", "AWS"],
    sections: [
      {
        heading: "Project Overview",
        content: [
          {
            type: "paragraph",
            text: "Maskan is a multi-tenant real estate management platform designed for brokers to manage properties, clients, and deals. The platform needed to support thousands of brokers while maintaining data isolation and performance."
          },
          {
            type: "metrics",
            items: [
              { value: "5000+", label: "Monthly Visitors" },
              { value: "Multi-Tenant", label: "Architecture" },
              { value: "Real-time", label: "Notifications" }
            ]
          }
        ]
      },
      {
        heading: "Multi-Tenancy Strategy",
        content: [
          {
            type: "paragraph",
            text: "We chose a hybrid approach for tenant isolation:"
          },
          {
            type: "list",
            items: [
              "Shared database with tenant ID column (cost-effective)",
              "Row-level security policies (data isolation)",
              "Separate schema for each major client (enterprise tier)",
              "Global query filters in EF Core to prevent data leaks"
            ]
          },
          {
            type: "code",
            text: `// Automatic tenant filtering
modelBuilder.Entity<Property>()
    .HasQueryFilter(p => 
        p.TenantId == _tenantContext.CurrentTenantId);`
          }
        ]
      },
      {
        heading: "Role-Based Access Control",
        content: [
          {
            type: "paragraph",
            text: "Implemented flexible RBAC system:"
          },
          {
            type: "list",
            items: [
              "Custom roles per tenant (Broker, Agent, Admin)",
              "Fine-grained permissions (Create, Read, Update, Delete, Approve)",
              "Resource-level permissions (own properties vs all properties)",
              "Audit logging for compliance"
            ]
          }
        ]
      },
      {
        heading: "Real-Time Property Matching",
        content: [
          {
            type: "paragraph",
            text: "Built a notification system that matches client requirements with new properties:"
          },
          {
            type: "list",
            items: [
              "SignalR for real-time push notifications",
              "Background job processes property matches",
              "Smart filtering based on preferences (location, price, size)",
              "Email and in-app notifications"
            ]
          }
        ]
      },
      {
        heading: "Performance Optimizations",
        content: [
          {
            type: "list",
            items: [
              "CDN integration for images (CloudFront)",
              "Browser caching with versioned assets",
              "Lazy loading of property images",
              "Pagination and infinite scroll",
              "Database connection pooling"
            ]
          }
        ]
      },
      {
        heading: "Security Implementation",
        content: [
          {
            type: "paragraph",
            text: "Following OWASP best practices:"
          },
          {
            type: "list",
            items: [
              "Input validation and sanitization",
              "SQL injection prevention (parameterized queries)",
              "XSS protection (Content Security Policy)",
              "CSRF tokens for state-changing operations",
              "JWT authentication with refresh tokens",
              "Rate limiting and DDoS protection"
            ]
          }
        ]
      }
    ]
  }
}
