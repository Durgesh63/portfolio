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
  // Shown only when there's no github/live link, to explain why.
  note?: string;
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
  current: "Currently at Vigility Technologies",
  // Shown in the hero and contact section — recruiters screen on these first.
  availability: {
    noticePeriod: "30 days",
    locations: ["Gurgaon", "Pune"],
    workModes: ["Remote", "Hybrid"],
  },
  email: "durgeshmaurya0998@gmail.com",
  phone: "+91-6388876932",
  github: "https://github.com/Durgesh63",
  linkedin: "https://www.linkedin.com/in/durgeshmaurya/",
  resume: "/Durgesh_Maurya_Resume.pdf",
  avatar: "/avatar.jpg",
  headline:
    "I build Java & Spring Boot microservices, Kafka pipelines and React / Next.js frontends — most recently a banking report system for Saraswat Bank.",
  about: [
    "I'm a Java Full Stack Developer with nearly 4 years of experience building production systems end to end — from Spring Boot microservices and Kafka-based messaging to React and Next.js frontends. Domain experience: BFSI (Saraswat Bank), payment gateways and healthcare data (CCDA).",
    "I spent my first year and a half in the MERN stack at Mityung Infotech and the last two years in Java and Spring Boot at Hirring.com and Vigility Technologies, so I'm comfortable across both ecosystems. I've shipped a Kafka-driven report pipeline for Saraswat Bank, payment integrations with HDFC, CCAvenue and Razorpay, JWT/RBAC security for 5,000+ users, and Elasticsearch search over 1M+ records.",
  ],
};

// Hero highlight cards — the strongest, most specific wins from real work.
// `where` names the employer so a client name (Saraswat Bank) isn't read as one.
export const highlights: { title: string; where?: string; detail: string }[] = [
  {
    title: "Saraswat Bank",
    where: "Vigility Technologies",
    detail: "Kafka-driven PDF report generation in Java & Spring Boot, producing the bank's large reports asynchronously.",
  },
  {
    title: "< 300 ms search",
    where: "Hirring.com",
    detail: "Elasticsearch indexing across 1M+ records.",
  },
  {
    title: "HDFC · CCAvenue · Razorpay",
    detail: "Integrated payment gateways for secure, reliable online transactions.",
  },
  {
    title: "CI/CD on AWS",
    where: "Vigility Technologies",
    detail: "GitHub Actions pipelines deploying to AWS EC2 & S3, with 99.9% uptime.",
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
      { name: "Apache Kafka", icon: "kafka" },
      { name: "REST APIs", icon: "rest" },
      { name: "JWT", icon: "jwt" },
      { name: "Maven", icon: "maven" },
      { name: "JUnit", icon: "junit" },
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
    group: "Frontend & Node.js",
    wide: true,
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Redux", icon: "redux" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "MUI", icon: "mui" },
      { name: "shadcn/ui", icon: "shadcn" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "Socket.IO", icon: "socketio" },
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
      "Built a Kafka-driven PDF report generation system in Java and Spring Boot for Saraswat Bank, generating large reports asynchronously.",
      "Automated CI/CD with GitHub Actions, deploying to AWS EC2 and S3; production runs at 99.9% uptime.",
      "Reduced media storage by 40% and EC2 load by 25% on AWS.",
      "Implemented Socket.IO real-time notifications, cutting notification delivery time by 40%.",
    ],
    stack: ["Java", "Spring Boot", "Kafka", "AWS", "GitHub Actions", "Socket.IO"],
  },
  {
    company: "Hirring.com",
    role: "Full Stack Developer",
    location: "Noida, India",
    start: "Aug 2024",
    end: "Mar 2026",
    highlights: [
      "Implemented Spring Security with JWT authentication and role-based access control (RBAC) for 5,000+ users.",
      "Added Redis caching that reduced database load by 45%, and tuned queries to improve API response times by 20%.",
      "Implemented Elasticsearch indexing for 1M+ records with search responses under 300 ms.",
      "Built an asynchronous email pipeline on AWS SQS handling 10,000+ emails/day with priority-based delivery.",
      "Designed communication across 3+ microservices, including encrypted API-to-API data exchange.",
      "Built AI-powered automation workflows in n8n, reducing manual effort by 50%.",
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "Redis", "Elasticsearch", "AWS SQS", "Microservices"],
  },
  {
    company: "Mityung Infotech Pvt Ltd",
    role: "Associate Software Engineer",
    location: "Noida, India",
    start: "Feb 2023",
    end: "Jul 2024",
    highlights: [
      "Integrated HDFC and CCAvenue payment gateways and LoanTap APIs for secure, reliable transaction processing.",
      "Implemented Google / Facebook social login and cookie-based SSO, cutting login time by 35%.",
      "Developed a CCDA parsing library converting healthcare CCDA files to JSON for downstream integration.",
      "Improved UI performance with Redux and React Hooks; accelerated delivery with Tailwind CSS, PrimeReact, shadcn/ui and MUI.",
    ],
    stack: ["React", "Redux", "Node.js", "MongoDB", "Tailwind CSS"],
  },
];

export const projects: Project[] = [
  {
    name: "Creative Stock",
    tagline: "Image-licensing e-commerce platform",
    description:
      "A full-stack marketplace for buying and licensing images — with cart, wishlist, search, Stripe payments, and compressed image delivery from AWS S3.",
    stack: ["Spring Boot", "React", "MongoDB", "Stripe", "AWS S3", "AWS EC2"],
    // Remove the note once the github / live link is added.
    note: "Source code: private repository, being made public soon.",
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
    tagline: "CCDA-to-JSON converter",
    description:
      "A Next.js app that converts CCDA (Consolidated Clinical Document Architecture) healthcare XML files into clean JSON for easy integration.",
    stack: ["JavaScript", "Next.js", "React", "XML"],
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
