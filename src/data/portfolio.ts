export type DetailLine = {
    type: 'text' | 'image';
    content: string; // text content or image URL
    detailedContent?: DetailLine[];
};

export type DetailItem = {
    summary: string;
    detailedContent?: DetailLine[];
};

export type Experience = {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    details: DetailItem[];
    skills: string[];
};

export type Project = {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    techStack: string[];
    link?: string;
    image?: string;
    icon?: string;
};

export type AwardItem = {
    id: string;
    title: string;
    date: string;
    description: string;
    issuer: string;
};

export type Education = {
    id: string;
    title: string;
    degree: string;
    institution: string;
    period: string;
    description: string;
    details?: DetailItem[];
};

export type CourseOrBook = {
    id: string;
    title: string;
    description?: string;
    link?: string;
};

export const education: Education[] = [
    {
        id: 'benha',
        title: 'Benha University',
        degree: 'Bachelor of Science in Computer Engineering',
        institution: 'Benha University',
        period: '2017 – 2022',
        description: 'Graduated with highest honors, ranked 1st in the class.',
        details: [
            {
                summary: 'Cumulative GPA: 4.0 / 4.0 (Grade: Distinction with Honors)',
            },
            {
                summary: 'Ranked 1st out of the entire graduating class.',
            },
        ]
    }
];

export const experiences: Experience[] = [
    {
        id: 'luciq',
        role: 'Backend Engineer',
        company: 'Luciq / Instabug',
        period: 'Feb 2026 - Present',
        description: '',
        details: [],
        skills: ['Ruby', 'Go', 'MySql', 'Redis', 'ClickHouse', 'Elastic Search', 'Kubernetes', 'Docker', 'AWS', 'Jenkins']
    },
    {
        id: 'efg',
        role: 'Backend Engineer',
        company: 'EFG Holding – AFKAR Technology',
        period: 'Apr 2024 – Feb 2026',
        description: 'Maintained and enhanced 17 microservices with a strong focus on performance, scalability, security, and consistency.',
        details: [
            {
                summary: 'Payment Service Optimization.',
                detailedContent: [
                    {
                        type: 'text',
                        content: 'The payment service was experiencing significant performance issues due to sequential processing and race conditions when handling multiple concurrent payment requests.'
                    },
                    {
                        type: 'text',
                        content: 'Key improvements implemented:',
                        detailedContent: [
                            {
                                type: 'text',
                                content: 'Identified and resolved race conditions by implementing proper locking mechanisms and transaction isolation levels'
                            },
                            {
                                type: 'text',
                                content: 'Limiting database interactions to two trips, one for read and the other for update'
                            },
                            {
                                type: 'text',
                                content: 'Parallelized independent payment operations using async/await patterns and Task.WhenAll for concurrent processing'
                            },
                            {
                                type: 'text',
                                content: 'Optimized the payment algorithm from O(n²) to O(n log n) by using a priority queue'
                            }
                        ]
                    },
                    {
                        type: 'text',
                        content: 'Result: Reduced average payment processing time from 3.5 seconds to under 500ms for batches of 100+ payments.'
                    }
                ]
            },
            {
                summary: 'ValU Rule Engine Optimization.',
                detailedContent: [
                    {
                        type: 'text',
                        content: 'What is it?',
                        detailedContent: [
                            {
                                type: 'text',
                                content: 'A .NET service that calculates a user’s credit limit based on attributes (location, car, phone, etc.) using a database-driven rule engine.'
                            },
                            {
                                type: 'image',
                                content: '../../public/rule-engine-tables.png'
                            },
                            {
                                type: 'image',
                                content: '../../public/rule-engine-tree.png'
                            }
                        ]
                    }, {
                        type: 'text',
                        content: 'Problem',
                        detailedContent: [
                            {
                                type: 'text',
                                content: 'Each request took ~75s due to heavy network round trips and complex DB joins. Under peak load (e.g., Black Friday), this caused severe latency and manual firefighting.'
                            }
                        ]
                    }, {
                        type: 'text',
                        content: '1st Proposed Solution: Precompiled Rules (network bottleneck)',
                        detailedContent: [
                            {
                                type: 'text',
                                content: 'Built a compiler for the T-SQL–like rules using ANTLR and regex and implemented lazy condition evaluation.'
                            },
                            {
                                type: 'text',
                                content: 'Compiled each rule tree into a single stored procedure.'
                            },
                            {
                                type: 'text',
                                content: 'Result: ~30 seconds per request'
                            },
                        ]
                    }, {
                        type: 'text',
                        content: '2nd Proposed Solution: In-code rule execution (DB bottleneck)',
                        detailedContent: [
                            {
                                type: 'text',
                                content: 'Rewrote the engine to execute rules in code; kept only configurations in the DB.'
                            },
                            {
                                type: 'text',
                                content: 'Result: ~3 seconds per request'
                            },
                        ]
                    }, {
                        type: 'text',
                        content: '3rd Proposed Solution: Simplified architecture (unnecessary complexity)',
                        detailedContent: [
                            {
                                type: 'text',
                                content: 'Analyzed rule trees; found they were effectively linear (linked lists), not real trees.'
                            },
                            {
                                type: 'text',
                                content: 'Rebuilt as a simple n-tier service with confiurations in the database.'
                            },
                            {
                                type: 'text',
                                content: 'Result: ~1.5 seconds per request, much lower complexity'
                            },
                        ]
                    }
                ]
            },
            {
                summary: 'Distributed Transactions: Implemented Saga Pattern for consistent distributed transaction management.',
            },
            {
                summary: 'Database Optimization: Replaced N+1 queries, added Redis caching, and applied table slicing (70% load reduction).',
            },
            {
                summary: 'Data & Workflow Migration: Automated migration of 100,000+ records and old workflows prior to go-live.',
            },
            {
                summary: 'Mentorship & Leadership: Led code reviews, mentored juniors, and authored automation scripts.'
            }
        ],
        skills: ['.NET', 'SQL Server', 'MongoDB', 'Redis', 'RabbitMQ', 'Python', 'Microservices']
    },
    {
        id: 'self',
        role: 'Backend Engineer',
        company: 'Self Employed',
        period: 'Jun 2022 – Apr 2024',
        description: 'Developed scalable backend solutions for freelance projects and automation scripts.',
        details: [
            {
                summary: 'Developed JavaScript automation scripts to streamline repetitive tasks.',
            },
            {
                summary: 'Built and deployed scalable backend architectures for various clients.'
            }
        ],
        skills: ['.NET', 'PostgreSQL', 'React', 'TypeScript']
    },
    {
        id: 'ta',
        role: 'Teaching Assistant',
        company: 'Shoubra Faculty of Engineering',
        period: 'Oct 2022 – Jan 2023',
        description: 'Teaching Assistant in Computer Engineering, Department of Electrical Engineering.',
        details: [],
        skills: ['Teaching', 'Computer Engineering']
    }
];

export const projects: Project[] = [
    {
        id: 'maskan',
        title: 'Maskan',
        description: 'Multi-tenant real estate management platform.',
        longDescription: 'Multi-tenant real estate management web application for brokers, featuring role-based access control, browser caching strategies, CDN integration, and compliance with OWASP security best practices; supports 5,000+ unique visitors per month.',
        techStack: ['.NET', 'C#', 'PostgreSQL', 'ReactJS', 'Tailwind', 'TypeScript', 'AWS EC2', 'CI/CD'],
        link: 'https://maskan.site',
        icon: '/maskan.svg'
    },
    {
        id: 'circle',
        title: 'Circle',
        description: 'Cross-platform expense management application.',
        longDescription: 'Cross-platform expense management application for personal and group use, featuring an easy way for tracking expense/income/transfer/group expense/group income, optimized algorithm for minimal settlement plans, and interactive reports.',
        techStack: ['TypeScript', 'React Native', 'sqlite', 'Expo'],
        link: 'https://circle0.netlify.app',
        icon: '/circle.svg'
    },
    {
        id: 'vton',
        title: 'E-Commerce VTON',
        description: 'Event-driven microservice platform for virtual garment shopping.',
        longDescription: 'Event-driven microservice platform for virtual garment shopping using Machine Learning and 3D Modeling.',
        techStack: ['TypeScript', 'Express', 'Python', 'FastAPI', 'MongoDB', 'Next.js', 'Kubernetes']
    },
    {
        id: 'healthymeal',
        title: 'Healthy Meal',
        description: 'Meal planning system based on preferences.',
        longDescription: 'Meal planning system based on preferences, ingredients, and body shape.',
        techStack: ['TypeScript', 'Apollo GraphQL', 'PostgreSQL', 'OAuth', 'Jest']
    }
];

export const awards: AwardItem[] = [
    {
        id: 'rank1',
        title: 'Ranked 1st in Bachelor',
        date: '2022',
        description: 'Achieved 1st rank in Bachelor\'s degree (GPA: 4.0 / 91%) at Benha University.',
        issuer: 'Benha University'
    },
    {
        id: 'ecpc22',
        title: 'National & Regional Contests',
        date: '2022',
        description: 'Ranked 21st in ECPC Qualification and 30th in ACPC Qualification.',
        issuer: 'ICPC'
    },
    {
        id: 'ecpc21',
        title: 'ECPC Qualification',
        date: '2021',
        description: 'Ranked 118th in ECPC Qualification.',
        issuer: 'ICPC'
    }
];

export const coursesAndBooks: CourseOrBook[] = [
    {
        id: 'dotnet-microservices',
        title: '.NET 8 Microservices',
        description: 'ASP.NET Web API, Docker, RabbitMQ, gRPC, YARP Gateway',
    },
    {
        id: 'network-engineering',
        title: 'Network Engineering',
        description: 'Low latency and high throughput backend design',
    },
    {
        id: 'node-react-microservices',
        title: 'Node.js + React Microservices',
        description: 'E-Commerce microservice app',
    },
    {
        id: 'database-systems-cmu',
        title: 'Database Systems (CMU)',
        description: 'Advanced database internals and systems design',
    },
    {
        id: 'performance-engineering-mit',
        title: 'Performance Engineering (MIT)',
        description: 'Software performance optimization and engineering',
    },
    {
        id: 'clean-code',
        title: 'Clean Code',
        description: 'A Handbook of Agile Software Craftsmanship',
    },
    {
        id: 'code-refactoring',
        title: 'Code Refactoring',
        description: 'Improving the Design of Existing Code',
    },
    {
        id: 'design-patterns',
        title: 'Design Patterns',
        description: 'Elements of Reusable Object-Oriented Software',
    },
    {
        id: 'ds-algo-made-easy',
        title: 'DS & Algo Made Easy',
        description: 'Data Structures and Algorithmic Puzzles',
    },
    {
        id: 'awesome-low-level-design',
        title: 'Awesome Low Level Design',
        link: 'https://github.com/ashishps1/awesome-low-level-design',
        description: 'Curated list of low level design resources',
    },
    {
        id: 'awesome-system-design',
        title: 'Awesome System Design',
        link: 'https://github.com/ashishps1/awesome-system-design-resources',
        description: 'Curated list of system design resources',
    }
];
