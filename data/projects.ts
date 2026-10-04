export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  role: string;
  href: string;

  liveUrl?: string;
  githubUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "appointment-scheduler",
    number: "01",
    title: "AI APPOINTMENT SCHEDULER",
    category: "SaaS / AI",
    description:
      "A full-stack appointment scheduling platform combining public booking, host management, automated notifications, calendar integration, and AI-assisted scheduling.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "Supabase",
      "Resend",
      "Gemini API",
    ],
    role: "Designed · Built",
    href: "/projects/appointment-scheduler",
  },
  {
    id: "patheyatra-ai",
    number: "02",
    title: "PĀTHEYĀTRĀ AI",
    category: "AI / MULTI-AGENT",
    description:
      "An AI-powered multi-agent travel planner that generates personalized itineraries, destination insights, budget estimates, and weather information.",
    stack: [
      "React",
      "Vite",
      "FastAPI",
      "Python",
      "Gemini API",
      "OpenWeatherMap",
    ],
    role: "Designed · Built",
    href: "/projects/patheyatra-ai",
  },
  {
    id: "realm-of-six",
    number: "03",
    title: "REALM OF SIX",
    category: "EVENT / WEB",
    description:
      "A Game of Thrones–inspired, two-day campus treasure hunt built for ENYUGMA at IIIT Bhagalpur, combining live gameplay, puzzles, exploration, and a dedicated event website.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
    ],
    role: "Event Lead · Website",
    href: "/projects/realm-of-six",
  },
];
