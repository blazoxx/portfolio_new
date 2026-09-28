"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "poem" | "sketch";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  const [mode, setMode] = useState<CursorMode>("default");

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    document.documentElement.addEventListener(
      "mouseenter",
      handleMouseEnter,
    );

    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave,
    );

    let animationFrame: number;

    const animate = () => {
      position.current.x +=
        (mouse.current.x - position.current.x) * 0.15;

      position.current.y +=
        (mouse.current.y - position.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(
          ${position.current.x - 6}px,
          ${position.current.y - 6}px,
          0
        )`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    const sections = document.querySelectorAll(
      "[data-cursor]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          );

        if (!visible[0]) {
          setMode("default");
          return;
        }

        const sectionMode =
          visible[0].target.getAttribute("data-cursor");

        if (
          sectionMode === "poem" ||
          sectionMode === "sketch"
        ) {
          setMode(sectionMode);
        } else {
          setMode("default");
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );

      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden transition-opacity duration-200 md:block"
    >
      <div className="cursor-dot h-3 w-3 rounded-full bg-white transition-transform duration-200" />

      {mode === "poem" && (
        <span className="absolute left-4 top-0 whitespace-nowrap text-xs italic text-white/60">
          keep building
        </span>
      )}

      {mode === "sketch" && (
        <span className="absolute left-4 top-0 whitespace-nowrap text-xs text-white/60">
          ✎
        </span>
      )}
    </div>
  );
}