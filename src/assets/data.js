import {
  Database,
  Server,
  ShieldCheck,
  Cloud,
  Boxes,
  Workflow,
  Search,
  Cpu,
  Monitor,
  Layers,
} from 'lucide-react';
import { FaReact, FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';
import {
  SiMongodb,
  SiRedis,
  SiSocketdotio,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiMui,
  SiTypescript,
} from 'react-icons/si';

export const profile = {
  name: 'Durgesh Maurya',
  brand: 'Durgesh.dev',
  role: 'Full Stack Developer',
  email: 'durgeshmaurya0998@gmail.com',
  phone: '+91-6388876932',
  location: 'Noida, India',
  linkedin: 'https://linkedin.com/in/durgeshmaurya/',
  github: 'https://github.com/durgesh63',
};

export const typingWords = [
  'Building Scalable Web Apps',
  'Real-Time Systems Engineer',
  'Cloud-Optimized Backend Developer',
];

export const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: 'github' },
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
];

export const stats = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Delivered', value: 10, suffix: '+' },
  { label: 'Deployment Uptime', value: 99, suffix: '.9%' },
  { label: 'AWS S3 Cost Reduced', value: 40, suffix: '%' },
];

export const skills = [
  {
    category: 'Frontend',
    icon: Monitor,
    items: [
      { name: 'React.js', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'MUI', icon: SiMui },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'REST APIs', icon: Workflow },
      { name: 'JWT Authentication', icon: ShieldCheck },
      { name: 'Role-Based Access', icon: Layers },
    ],
  },
  {
    category: 'Database',
    icon: Database,
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Aggregation Pipelines', icon: Workflow },
      { name: 'Index Optimization', icon: Search },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: Cloud,
    items: [
      { name: 'AWS (S3, EC2)', icon: FaAws },
      { name: 'Docker', icon: FaDocker },
      { name: 'Redis', icon: SiRedis },
      { name: 'Socket.IO', icon: SiSocketdotio },
      { name: 'Elasticsearch', icon: Cpu },
      { name: 'SQS', icon: Boxes },
      { name: 'n8n Workflows', icon: Workflow },
    ],
  },
];

export const experiences = [
  {
    company: 'Hirring.com',
    role: 'Full Stack Developer',
    duration: 'May 2025 - Present',
    achievements: [
      'Used Redis caching to reduce database load by 45% and improved MongoDB query performance by 20%.',
      'Implemented JWT authentication for secure access across 5000+ users.',
      'Built AI-powered n8n automation workflows reducing manual effort by 50%.',
      'Implemented Elasticsearch indexing for 1M+ records with sub-100ms search responses.',
      'Developed distributed SQS email processing handling 10,000+ emails/day.',
    ],
  },
  {
    company: 'CyberCure Technologies Pvt. Ltd.',
    role: 'Full Stack Developer',
    duration: 'Jun 2024 - Apr 2025',
    achievements: [
      'Integrated payment APIs with HDFC, CCAvenue, and LoanTap, improving flow speed by 30%.',
      'Optimized MongoDB aggregation queries and secured APIs for 1000+ users with JWT.',
      'Shipped responsive UI using Tailwind CSS, PrimeReact, ShadCN, and MUI, accelerating delivery by 40%.',
      'Deployed on AWS EC2 and optimized S3 media assets to reduce size by 40% and EC2 load by 25%.',
      'Implemented Socket.IO notifications improving user engagement by 35%.',
    ],
  },
  {
    company: 'Mityung Infotech Pvt Ltd.',
    role: 'Associate Software Engineer',
    duration: 'Feb 2023 - Jun 2024',
    achievements: [
      'Developed a CCDA parsing library converting healthcare CCDA files into normalized JSON.',
      'Integrated Google/Facebook auth and SSO via cookie sharing to improve onboarding by 30%.',
      'Improved UI performance by 60% with React Hooks and Redux optimization.',
    ],
  },
];

export const projects = [
  {
    title: 'Image Licensing eCommerce Platform (Creative Stock)',
    summary:
      'Scalable full-stack image marketplace with licensing workflows, secure purchases, and production-ready cloud deployment.',
    features: [
      'Advanced image search with filtering, sorting, and pagination',
      'Stripe-secured checkout and licensed download fulfillment',
      'JWT authentication with role-based access control',
      'MongoDB indexing and REST API optimization for high-speed queries',
      'AWS S3 compression strategy reducing storage cost by 40%',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'AWS S3', 'AWS EC2'],
    github: profile.github,
    demo: 'https://imagecart-g6y2.onrender.com',
  },
  {
    title: 'Real-Time Talent Platform Search Infrastructure',
    summary:
      'Search and notification architecture designed for high-volume records and low-latency real-time interaction.',
    features: [
      'Elasticsearch indexing for 1M+ records with sub-100ms responses',
      'Socket.IO real-time notifications for engagement-critical updates',
      'Redis caching layer for lower API latency and reduced DB pressure',
      'JWT-based secure session management for thousands of users',
    ],
    tech: ['Express.js', 'Node.js', 'Elasticsearch', 'Redis', 'MongoDB'],
    github: profile.github,
    demo: '#',
  },
];
