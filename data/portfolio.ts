// All site content lives here. Edit this file to update the portfolio —
// no component changes needed for a new job, project, or certification.

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
  stack: string[];
};

export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  badge?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  url?: string;
};

export const profile = {
  name: "Durgesh Maurya",
  role: "Java Full Stack Developer",
  experience: "~4 years",
  location: "Noida, India",
  email: "durgeshmaurya0998@gmail.com",
  phone: "+91-6388876932",
  github: "https://github.com/Durgesh63",
  linkedin: "https://www.linkedin.com/in/durgeshmaurya/",
  resume: "/Durgesh_Maurya_Resume.pdf",
  avatar: "/avatar.jpg",
  headline:
    "I build scalable, secure, high-performance web applications with Java, Spring Boot, microservices and React / Next.js.",
  about: [
    "I'm a Java Full Stack Developer with nearly 4 years of experience building production systems end to end — from Spring Boot microservices and message queues to React and Next.js frontends.",
    "I started in the MERN stack and moved into Java, so I'm comfortable across both ecosystems. I've shipped banking report pipelines for Saraswat Bank, payment integrations with HDFC and CCAvenue, JWT/RBAC security for thousands of users, and search over millions of records.",
    "I care about measurable impact: faster APIs, lower infrastructure load, reliable deployments, and code that the next developer can maintain.",
  ],
};

// Hero highlight cards — the strongest, most specific wins from real work.
export const highlights = [
  {
    title: "Saraswat Bank",
    detail: "Built a queue-based PDF report generation system for the bank's large reports.",
  },
  {
    title: "< 300 ms search",
    detail: "Elasticsearch indexing across 1M+ records for fast search results.",
  },
  {
    title: "HDFC · CCAvenue · Razorpay",
    detail: "Integrated payment gateways for secure, reliable online transactions.",
  },
  {
    title: "CI/CD on AWS",
    detail: "Automated GitHub Actions pipelines deploying to EC2 & S3 with 99.9% uptime.",
  },
];

// `icon` is a file name in public/tech/ (logos from Devicon / Simple Icons).
export type Skill = { name: string; icon: string };

export const skills: { group: string; wide?: boolean; items: Skill[] }[] = [
  {
    group: "Java & Spring Ecosystem",
    wide: true,
    items: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring" },
      { name: "Spring MVC", icon: "spring" },
      { name: "Spring Security", icon: "spring" },
      { name: "Spring Data JPA", icon: "spring" },
      { name: "Microservices", icon: "microservices" },
      { name: "REST APIs", icon: "rest" },
      { name: "JWT", icon: "jwt" },
      { name: "Maven", icon: "maven" },
      { name: "JUnit", icon: "junit" },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Redux", icon: "redux" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "MUI", icon: "mui" },
      { name: "shadcn/ui", icon: "shadcn" },
    ],
  },
  {
    group: "Node.js Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "Socket.IO", icon: "socketio" },
    ],
  },
  {
    group: "Databases",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "Elasticsearch", icon: "elasticsearch" },
    ],
  },
  {
    group: "Cloud, DevOps & Tools",
    items: [
      { name: "AWS (EC2, S3, SQS)", icon: "aws" },
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Git", icon: "git" },
      { name: "Postman", icon: "postman" },
    ],
  },
  {
    group: "AI & Automation",
    wide: true,
    items: [
      { name: "AI Agents", icon: "ai-agent" },
      { name: "AI Workflows", icon: "ai-workflow" },
      { name: "n8n", icon: "n8n" },
    ],
  },
];

export const experience: Experience[] = [
  {
    company: "Vigility Technologies Pvt Ltd",
    role: "Full Stack Developer",
    location: "Noida, India",
    start: "Apr 2026",
    end: "Present",
    highlights: [
      "Automated CI/CD with GitHub Actions and deployed on AWS EC2 and S3 — cut media storage by 40% and EC2 load by 25%, achieving 99.9% uptime.",
      "Built a queue-based PDF report generation system for Saraswat Bank, enabling large reports to be processed at scale.",
      "Implemented Socket.IO real-time notifications, increasing user engagement by 35% and cutting notification delivery time by 40%.",
    ],
    stack: ["AWS", "GitHub Actions", "Queues", "Socket.IO"],
  },
  {
    company: "Hirring.com",
    role: "Full Stack Developer",
    location: "Noida, India",
    start: "Aug 2024",
    end: "Mar 2026",
    highlights: [
      "Implemented Spring Security with JWT authentication and role-based access control for 5,000+ users; Redis caching reduced database load by 45% and query tuning improved API response times by 20%.",
      "Implemented Elasticsearch indexing for 1M+ records with search responses under 300 ms.",
      "Developed a distributed email processing system on AWS SQS handling 10,000+ emails/day with priority-based delivery.",
      "Designed communication across 3+ microservices, including encrypted API-to-API data exchange.",
      "Built AI-powered automation workflows in n8n, reducing manual effort by 50%.",
    ],
    stack: ["Spring Boot", "Spring Security", "Redis", "Elasticsearch", "SQS", "Microservices"],
  },
  {
    company: "Mityung Infotech Pvt Ltd",
    role: "Associate Software Engineer",
    location: "Noida, India",
    start: "Feb 2023",
    end: "Jul 2024",
    highlights: [
      "Integrated payment gateways — HDFC, CCAvenue and LoanTap — for secure, reliable transaction processing.",
      "Implemented Google / Facebook social login and cookie-based SSO, boosting onboarding by 30% and cutting login time by 35%.",
      "Developed a CCDA parsing library converting healthcare CCDA files to JSON, improving processing efficiency by 40%.",
      "Improved UI performance by 60% with Redux and React Hooks; accelerated delivery with Tailwind CSS, PrimeReact, ShadCN and MUI.",
    ],
    stack: ["React", "Redux", "Node.js", "MongoDB", "Payment APIs"],
  },
];

export const projects: Project[] = [
  {
    name: "Creative Stock",
    tagline: "Image-licensing e-commerce platform",
    description:
      "A full-stack marketplace for buying and licensing images — with cart, wishlist, search, Stripe payments, and compressed image delivery from AWS S3.",
    stack: ["Spring Boot", "React", "MongoDB", "Stripe", "AWS S3", "AWS EC2"],
    // TODO: add the GitHub link once the repo is public.
  },
  {
    name: "HealthCare ChatBot",
    tagline: "NLP-based disease prediction",
    description:
      "A desktop chatbot that predicts likely diseases from a patient's described symptoms, using spaCy for text processing and a Hugging Face NER model to extract medical entities.",
    stack: ["Python", "spaCy", "Hugging Face", "Tkinter"],
    github: "https://github.com/Durgesh63/HealthCare_ChatBot",
    badge: "58 ★ on GitHub",
  },
  {
    name: "ccda-reader",
    tagline: "Healthcare data parser",
    description:
      "A library that parses CCDA (Consolidated Clinical Document Architecture) healthcare files into clean JSON for easy integration.",
    stack: ["JavaScript", "Node.js", "XML"],
    github: "https://github.com/Durgesh63/ccda-reader",
  },
];

// Add certifications here — the section appears automatically once this list is non-empty.
export const certifications: Certification[] = [];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institute: "Veer Bahadur Singh Purvanchal University",
  location: "Jaunpur, India",
  years: "2018 – 2022",
};

export const achievements: { text: string; url?: string }[] = [
  {
    text: "Contributed to an open-source project — improved product search accuracy and implemented better filtering features.",
    // TODO: add the PR / repo link.
  },
];
