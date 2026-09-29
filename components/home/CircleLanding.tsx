"use client";

import { useEffect, useState } from "react";

export default function CircleLanding() {
  const [entered, setEntered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (!entered) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [entered]);

  useEffect(() => {
    const shouldLock = !entered && window.scrollY < window.innerHeight * 0.5;

    document.body.style.overflow = shouldLock ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [entered]);

  const viewport = typeof window !== "undefined" ? window.innerHeight : 1;

  // Tagline flies in during the first 50% of the Landing scroll.
  const introProgress = Math.min(1, scrollY / (viewport * 0.4));

  const projectProgress = Math.min(1, scrollY / viewport);

  // Circle:
  // 0–40%  → fully visible
  // 40–80% → fades
  // 80%+   → invisible
  let circleOpacity = 1;

  if (projectProgress >= 0.4 && projectProgress <= 0.8) {
    circleOpacity = 1 - (projectProgress - 0.4) / 0.4;
  } else if (projectProgress > 0.8) {
    circleOpacity = 0;
  }

  return (
    <section
      id="landing"
      className="sticky top-0 z-0 flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Circle */}
      <div
        className="relative flex h-[min(70vw,70vh)] w-[min(70vw,70vh)] items-center justify-center rounded-full border border-white/20"
        style={{
          opacity: entered ? circleOpacity : 1,
          transition: "opacity 100ms linear",
        }}
      >
        <div className="absolute inset-3 rounded-full bg-white/[0.03] backdrop-blur-sm" />

        <div className="relative text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            CASII
          </p>

          <p className="mt-3 text-sm text-white/50">
            {entered ? "ENTERED" : "ENTER"}
          </p>
        </div>
      </div>

      {/* Tagline */}
      <div
        className="pointer-events-none absolute bottom-16 text-center"
        style={{
          opacity: entered ? Math.min(1, scrollY / (viewport * 0.15)) : 0,
          transform: `translateY(${
            entered
              ? Math.max(-180, 80 - (scrollY / (viewport * 0.5)) * 260)
              : 80
          }px)`,
        }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-white/50">
          SOFTWARE ENGINEER · AI · BUILDER
        </p>
      </div>

      {/* Enter */}
      {!entered && (
        <button
          type="button"
          onClick={() => setEntered(true)}
          className="absolute inset-0 cursor-pointer"
          aria-label="Enter portfolio"
        />
      )}
    </section>
  );
}
