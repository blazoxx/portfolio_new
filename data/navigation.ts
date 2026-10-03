export type NavigationItem = {
  label: string;
  href: string;
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Personal", href: "/personal" },
  { label: "Playground", href: "/playground" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];