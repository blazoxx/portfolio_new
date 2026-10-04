export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "FastAPI"],
  },
  {
    category: "AI / ML",
    skills: ["Machine Learning", "GenAI", "Agentic AI"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Docker"],
  },
];