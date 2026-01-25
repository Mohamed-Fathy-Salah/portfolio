export type DetailLine = {
    type: 'text' | 'image';
    content: string; // text content or image URL
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
    degree: string;
    institution: string;
    period: string;
    description: string;
    details?: DetailItem[];
};

export const education: Education[] = [
    {
        id: 'benha',
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
        id: 'efg',
        role: 'Backend Engineer',
        company: 'EFG Holding – AFKAR Technology',
        period: 'Apr 2024 – Present',
        description: 'Maintained and enhanced 17 microservices with a strong focus on performance, scalability, security, and consistency.',
        details: [
            {
                summary: 'Payment Service Optimization: Reduced execution time by resolving race conditions, parallelizing payments, and optimizing complexity to O(n log n).',
                detailedContent: [
                    {
                        type: 'text',
                        content: 'The payment service was experiencing significant performance issues due to sequential processing and race conditions when handling multiple concurrent payment requests.'
                    },
                    {
                        type: 'text',
                        content: 'Key improvements implemented:'
                    },
                    {
                        type: 'text',
                        content: '• Identified and resolved race conditions by implementing proper locking mechanisms and transaction isolation levels'
                    },
                    {
                        type: 'text',
                        content: '• Parallelized independent payment operations using async/await patterns and Task.WhenAll for concurrent processing'
                    },
                    {
                        type: 'text',
                        content: '• Optimized the payment validation algorithm from O(n²) to O(n log n) by replacing nested loops with efficient sorting and binary search'
                    },
                    {
                        type: 'text',
                        content: 'Result: Reduced average payment processing time from 3.5 seconds to under 500ms for batches of 100+ payments.'
                    }
                ]
            },
            {
                summary: 'Rule Engine Optimization (ValU): Improved execution time by 350x via precompiling rules, lazy evaluation, and vertical slicing.',
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
        period: 'Jun 2022 – Present',
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
        techStack: ['.NET', 'C#', 'PostgreSQL', 'ReactJS', 'Tailwind', 'AWS EC2', 'CICD']
    },
    {
        id: 'circle',
        title: 'Circle',
        description: 'Cross-platform expense management application.',
        longDescription: 'Cross-platform expense management application for personal and group use, featuring an optimized algorithm for minimal settlement plans, interactive reports, and visual charts.',
        techStack: ['TypeScript', 'ReactJS', 'Expo']
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
