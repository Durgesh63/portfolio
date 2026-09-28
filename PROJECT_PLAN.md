# Portfolio Website — Project Plan

**Owner:** Durgesh Maurya · Java Full Stack Developer
**Repo:** [Durgesh63/portfolio](https://github.com/Durgesh63/portfolio) (reuse, replace contents)
**Status:** Plan approved for build

---

## 1. Problem Statement

Durgesh is a Java Full Stack Developer with ~4 years of experience (Feb 2023 – present) who wants to:

- **Switch jobs**, targeting service companies / MNCs first and established product companies second (no early-stage startups).
- **Build a personal brand** so recruiters find him through LinkedIn and GitHub.

Current gaps:

- No live, current portfolio website.
- Public GitHub has **no Java / Spring Boot code**, even though target roles are Java-focused. Making **Creative Stock** public (a real Spring Boot project) closes this gap.

## 2. Solution Statement

A **clean, light, corporate-style portfolio website** built with **Next.js only (no backend)**, hosted free on Vercel. It presents experience and impact clearly for MNC recruiters, loads instantly, and has nothing to maintain on a server.

---

## 3. Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router), static export |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Resume | PDF in `public/`, served directly by Vercel |
| Analytics | Vercel Analytics (page views + resume download count) |
| Hosting | Vercel free tier (`*.vercel.app`) |

## 4. Repository Structure

```
portfolio/
├── app/               # Next.js pages and layout
├── components/        # Hero, About, Skills, Experience, Projects, ...
├── data/              # profile, experience, projects, skills (static content)
├── public/            # resume PDF, avatar, icons
├── PROJECT_PLAN.md
└── README.md
```

All content lives in `data/`, so updating the site (new job, new project, certification) means editing one file.

---

## 5. Website Sections (in order)

| # | Section | Content |
|---|---|---|
| 1 | **Hero** | Name, "Java Full Stack Developer · ~4 years", GitHub avatar photo, **Download Resume** button, LinkedIn / GitHub / Email links |
| 2 | **About** | Short professional summary (Java, Spring Boot, microservices, React/Next.js, SQL & NoSQL) |
| 3 | **Skills** | Grouped: Backend · Frontend · Databases · Cloud / DevOps / Tools |
| 4 | **Experience** | Timeline with impact numbers (see §6) |
| 5 | **Projects** | 3 featured projects (see §7) |
| 6 | **Certifications** | Placeholder, filled in later |
| 7 | **Education & Achievements** | B.Tech CSE; open-source contribution |
| 8 | **Contact** | Links only: email, phone, LinkedIn, GitHub (no form) |

**Design:** clean corporate light theme, professional and minimal, responsive (mobile-first), fast loading, SEO meta tags (title, description, Open Graph).

---

## 6. Experience Content

| Company | Role | Dates | Highlights |
|---|---|---|---|
| **Vigility Technologies Pvt Ltd**, Noida | Full Stack Developer | Apr 2026 – Present | GitHub Actions CI/CD on AWS EC2/S3 (−70% manual deploy effort, 99.9% uptime); queue-based PDF report system for **Saraswat Bank** (−50% response time); Socket.IO real-time notifications |
| **Hirring.com**, Noida | Full Stack Developer | **Aug 2024** – Mar 2026 | Spring Security + JWT + RBAC for 5,000+ users; Redis caching (−45% DB load); Elasticsearch on 1M+ records (<100 ms); SQS email system (10,000+ emails/day); 3+ microservices with encrypted API-to-API exchange; n8n AI workflows |
| **Mityung Infotech Pvt Ltd**, Noida | Associate Software Engineer | Feb 2023 – Jul 2024 | Payment integrations (HDFC, CCAvenue, LoanTap); Google/Facebook login + SSO; CCDA → JSON parsing library; React/Redux UI performance (+60%) |

## 7. Featured Projects

| # | Project | Stack | Links |
|---|---|---|---|
| 1 | **Creative Stock**: image-licensing e-commerce (buy, cart, wishlist, search, compressed images) | React, Spring Boot, MongoDB, Stripe, AWS S3 + EC2 | GitHub: *pending, repo to be made public* |
| 2 | **HealthCare ChatBot**: answers health-related queries | Python, Jupyter | [GitHub](https://github.com/Durgesh63/HealthCare_ChatBot) (⭐ 58, 20 forks) |
| 3 | **ccda-reader**: parses CCDA healthcare files into JSON | JavaScript / Node | [GitHub](https://github.com/Durgesh63/ccda-reader) |

More projects (HRMS, IPAD, etc.) will be added later.

## 8. Skills Content

- **Backend:** Java, Spring Boot, Spring Security, Microservices, REST APIs, Node.js, Express
- **Frontend:** React, Next.js, JavaScript, TypeScript, Redux, Tailwind CSS
- **Databases:** PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch
- **Cloud / DevOps / Tools:** AWS (EC2, S3, SQS), Docker, GitHub Actions, Git, Socket.IO, n8n

## 9. Profile Details

- **Email:** durgeshmaurya0998@gmail.com
- **Phone:** +91-6388876932
- **LinkedIn:** linkedin.com/in/durgeshmaurya
- **GitHub:** github.com/Durgesh63
- **Photo:** GitHub avatar
- **Education:** B.Tech CSE, Veer Bahadur Singh Purvanchal University, Jaunpur (2018 – 2022)

---

## 10. Out of Scope (v1)

- Backend of any kind (Spring Boot, database, S3)
- Admin panel / CMS
- Blog / articles
- Contact form
- Custom domain (use `*.vercel.app` for now)
- Additional projects beyond the 3 featured

## 11. Pending Actions (Durgesh)

- [ ] Fix the Hirring.com start date on the resume: May 2025 → **Aug 2024**
- [ ] Make the **Creative Stock** repo public and share its link
- [ ] Share the **open-source contribution** link (placeholder until then)
- [ ] Share the updated resume PDF (goes into `public/`)
- [ ] Add certifications when available
- [ ] Add a bio to the GitHub profile (optional, helps personal brand)

## 12. Build Order

1. Scaffold the Next.js + TypeScript + Tailwind project
2. Add static content data files (`data/`)
3. Build all 8 sections, responsive and SEO-ready
4. Add the resume PDF and Vercel Analytics
5. Deploy to Vercel
6. README with setup and deployment instructions

---

## 13. Changes Made During the Build

- **Light / dark mode** toggle in the header (follows system setting, remembers the choice).
- **Glassmorphism** UI: translucent blurred cards over fixed color blobs.
- **Hero:** the stat tiles were replaced by highlight cards (Saraswat Bank, < 300 ms search, HDFC · CCAvenue · Razorpay, CI/CD on AWS); the "Open to opportunities" badge was removed.
- **Skills:** every technology has a logo (`public/tech/`); groups are Java & Spring Ecosystem, Frontend, Node.js Backend, Databases, Cloud/DevOps & Tools, AI & Automation.
- **Certifications** section stays hidden until the first entry is added in `data/portfolio.ts`.
- **Branding** (`branding/`): LinkedIn cover banner and LinkedIn Featured / link-preview banner (`public/og-image.png`).
- Elasticsearch figure changed to **< 300 ms**; several percentage claims removed from the Experience section.
