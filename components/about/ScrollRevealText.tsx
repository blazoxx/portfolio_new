"use client";

import { useEffect, useState } from "react";

type ScrollRevealTextProps = {
  text: string;
};

export default function ScrollRevealText({
  text,
}: ScrollRevealTextProps) {
  const words = text.split(" ");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");

      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollDistance = section.offsetHeight - window.innerHeight;

      const rawProgress =
        (window.scrollY - sectionTop) / scrollDistance;

      setProgress(Math.max(0, Math.min(1, rawProgress)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <p className="text-5xl font-semibold leading-[1.15] tracking-tight">
      {words.map((word, index) => {
        const wordProgress = index / words.length;
        const revealed = progress >= wordProgress;

        return (
          <span
            key={`${word}-${index}`}
            className={
              revealed ? "text-white" : "text-white/25"
            }
          >
            {word}{" "}
          </span>
        );
      })}
    </p>
  );
}