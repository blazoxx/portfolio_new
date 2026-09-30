export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  role: string;
  href: string;
};

export const projects: Project[] = [
  {
    id: "appointment-scheduler",
    number: "01",
    title: "AI APPOINTMENT SCHEDULER",
    category: "SaaS / AI",
    description:
      "An AI-powered scheduling platform for managing availability, bookings, rescheduling, cancellations, and intelligent slot selection.",
    stack: ["Next.js", "TypeScript", "Supabase", "Gemini"],
    role: "Designed · Built · Deployed",
    href: "/projects/appointment-scheduler",
  },
  {
    id: "patheyatra-ai",
    number: "02",
    title: "PĀTHEYĀTRĀ AI",
    category: "AI / MULTI-AGENT",
    description:
      "A multi-agent AI travel planner that researches destinations, weather, budgets, and itineraries through an orchestrated workflow.",
    stack: ["Python", "FastAPI", "Gemini", "Multi-Agent AI"],
    role: "Designed · Built · Deployed",
    href: "/projects/patheyatra-ai",
  },
  {
    id: "realm-of-six",
    number: "03",
    title: "REALM OF SIX",
    category: "EVENT / PLATFORM",
    description:
      "A live treasure hunt built for a college cultural fest, where I designed and developed the digital platform powering the experience alongside the offline event.",
    stack: ["Next.js", "React", "Node.js", "Real-Time Web"],
    role: "Designed · Developed · Event Lead",
    href: "/projects/realm-of-six",
  },
];