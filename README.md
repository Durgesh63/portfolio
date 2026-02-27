# Premium MERN Developer Portfolio

A high-end, Silicon Valley style portfolio built with React (Vite), Tailwind CSS, and Framer Motion.

## Stack

- React.js + Vite
- Tailwind CSS
- Framer Motion
- Lucide + React Icons

## Features

- Dark premium UI with glassmorphism and gradient accents
- Sticky blurred navbar with active indicator
- Smooth scrolling and section reveal animations
- Hero with typing effect and floating tech icons
- Animated stats counters and premium skill cards
- Alternating animated experience timeline
- Project cards with hover expansion and 3D tilt-style motion
- Contact form with floating labels + glowing focus states
- Loading screen, cursor glow, background particles, scroll progress bar
- Scroll-to-top action button
- SEO meta tags and custom favicon

## Folder Structure

```text
src/
  assets/
    data.js
  components/
    BackgroundBlobs.jsx
    Button.jsx
    Card.jsx
    CursorGlow.jsx
    LoadingScreen.jsx
    Navbar.jsx
    Particles.jsx
    ScrollProgress.jsx
    ScrollTopButton.jsx
    SectionHeading.jsx
  hooks/
    useActiveSection.js
    useCountUp.js
    useMouseGlow.js
    useTypingEffect.js
  sections/
    AboutSection.jsx
    ContactSection.jsx
    ExperienceSection.jsx
    Footer.jsx
    HeroSection.jsx
    ProjectsSection.jsx
    SkillsSection.jsx
  App.jsx
  index.css
  main.jsx
public/
  favicon.svg
  Durgesh-Maurya-Resume.pdf
index.html
postcss.config.js
tailwind.config.js
vite.config.js
eslint.config.js
```

## Run Locally

1. Install Node.js 18+.
2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Build production bundle:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

## Tailwind Setup Included

- `tailwind.config.js` with extended colors, glow shadows, animations, gradient utility, and font family setup.
- `postcss.config.js` configured with Tailwind and Autoprefixer.
- Tailwind directives loaded in `src/index.css`.

## Notes

- Resume download currently points to `public/Durgesh-Maurya-Resume.pdf`.
- Update social links in `src/assets/data.js`.
- Contact form includes an integration placeholder for Formspree/Resend/custom API.
