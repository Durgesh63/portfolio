# Durgesh Maurya — Portfolio

Personal portfolio of **Durgesh Maurya**, Java Full Stack Developer (Java · Spring Boot · Microservices · React · Next.js).

Built with **Next.js 16**, **TypeScript** and **Tailwind CSS 4**, exported as a fully static site and hosted on **Vercel**.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # static site is written to out/
npm start          # serve out/ locally
npm run lint       # type-check
```

## Updating content

All content lives in [`data/portfolio.ts`](data/portfolio.ts): profile, stats, skills, experience, projects, certifications, education and achievements. Edit that file; no component changes needed.

| To change | Where |
|---|---|
| Resume PDF | Replace `public/Durgesh_Maurya_Resume.pdf` (keep the file name) |
| Profile photo | Replace `public/avatar.jpg` |
| Add a certification | Add an entry to `certifications`; the section and nav link appear automatically |
| Add a project link | Set `github` / `live` on the project |

## Project structure

```
app/                 layout (SEO, analytics), page, sitemap, robots
components/          Header, ResumeButton, Section, icons
components/sections/ Hero, About, Skills, Experience, Projects, Certifications, Education, Contact
data/portfolio.ts    all site content
lib/site.ts          site URL (from Vercel env, or localhost)
public/              resume PDF, avatar
```

## Deploy (Vercel)

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), choose **Add New → Project** and import the repo. Defaults work as is.
3. In the project, open **Analytics** and enable it to see page views.

Resume downloads are sent as a `resume_download` custom event. Vercel shows custom events on the **Pro** plan; on the free Hobby plan the button works normally but the event isn't reported.
