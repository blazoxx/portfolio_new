# theB — Portfolio

A futuristic personal portfolio built to showcase software engineering, AI projects, experiments, and the person behind them.

The portfolio is designed as an interactive digital space rather than a traditional resume website.

---

## Overview

theB is a personal portfolio built with a dark, minimal, futuristic visual language.

The current version focuses on **Minimal Mode** — a structured portfolio experience with interactive sections, project case studies, a personal area, playground, resume, and contact page.

A more experimental **Story Mode** is planned as a future phase.

---

## Features

- Cinematic landing page
- Home page with proximity scroll snapping
- Interactive project showcase
- Detailed project case studies
- About section with scroll-based text reveal
- Skills overview
- Personal section
  - Music
  - Movies
  - Games
  - Books
- Interactive Playground
  - Visitor avatar builder
  - Custom visitor badge
  - Badge-as-cursor mode
  - Drawing board
- Resume page
- Contact page
- Custom global cursor
- Responsive layouts
- Global navigation with fullscreen-style menu
- Large experimental footer
- Dark futuristic visual system

---

## Pages

| Page | Description |
| --- | --- |
| `/` | Main portfolio experience |
| `/projects` | Project index |
| `/projects/appointment-scheduler` | AI Appointment Scheduler case study |
| `/projects/patheyatra-ai` | Pātheyātrā AI case study |
| `/projects/realm-of-six` | Realm of Six case study |
| `/about` | About and professional identity |
| `/skills` | Technical skills |
| `/personal` | Personal interests |
| `/personal/music` | Music |
| `/personal/movies` | Movies & TV |
| `/personal/games` | Games |
| `/personal/books` | Books |
| `/playground` | Interactive playground |
| `/resume` | Resume |
| `/contact` | Contact |

---

## Featured Projects

### AI Appointment Scheduler

An AI-powered appointment scheduling platform designed around availability management, bookings, rescheduling, cancellations, and intelligent slot selection.

**Stack**

- Next.js
- TypeScript
- Supabase
- PostgreSQL
- Gemini

---

### Pātheyātrā AI

A multi-agent AI travel planning system that orchestrates specialized agents for destination research, weather, budgeting, and itinerary generation.

**Stack**

- Python
- FastAPI
- Gemini API
- Multi-Agent AI
- Asynchronous orchestration

---

### Realm of Six

A Game of Thrones-themed live treasure hunt platform built for a college cultural fest.

The project combined a digital platform with a large offline event experience.

**Highlights**

- Event lead
- 11-member core team
- 20+ members involved in preparation
- 300+ online preliminary participants
- 100+ offline participants
- 2-day event
- 4 primary rounds

**Stack**

- React
- TypeScript
- Tailwind CSS

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend / APIs

- Node.js
- Express.js
- FastAPI
- Supabase

### AI / ML

- Python
- Gemini API
- Machine Learning
- Generative AI
- Agentic AI

### Tools

- Git
- GitHub
- Docker

---

## Project Structure

```text
portfolio_new/
│
├── app/
│   ├── about/
│   ├── contact/
│   ├── personal/
│   ├── playground/
│   ├── projects/
│   ├── resume/
│   ├── skills/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── about/
│   ├── cursor/
│   ├── home/
│   ├── layout/
│   ├── personal/
│   ├── playground/
│   ├── projects/
│   └── ui/
│
├── data/
├── hooks/
├── lib/
│
├── public/
│
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

Clone the repository:

```bash
git clone <repository-url>
cd portfolio_new
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Development

The portfolio is currently being developed in phases.

### Phase 1 — Minimal Mode

- Page architecture
- Navigation
- Home experience
- Project system
- Personal section
- Playground
- Resume
- Contact
- Custom cursor
- Responsive structure

### Phase 2 — Content & Assets

- Final project information
- Project screenshots
- Resume data
- Personal content
- Images and media
- Social links
- Live project links

### Phase 3 — Interaction & Polish

- Advanced animations
- Cursor refinement
- Page transitions
- Micro-interactions
- Mobile refinement
- Performance optimization
- Accessibility
- SEO

### Phase 4 — Story Mode

A separate interactive portfolio experience exploring the story behind the person, projects, ideas, and journey.

---

## Design Philosophy

The portfolio intentionally avoids looking like a conventional developer portfolio.

The goal is to combine:

- Minimalism
- Futuristic interfaces
- Editorial typography
- Motion
- Interactive elements
- Personal identity
- Experimental web experiences

The interface should feel like a **digital space** rather than a collection of resume sections.

---

## Status

**Current status:** Minimal Mode structure complete.

Content, assets, integrations, and final visual polish are being developed separately.

---

## Built With

Built using:

- Next.js
- React
- TypeScript
- Tailwind CSS

---

## Author

**theB**

Software Engineer · AI · Builder

This keeps the README **professional and honest**: it documents the architecture and current state without claiming that the future integrations/content are already finished.
