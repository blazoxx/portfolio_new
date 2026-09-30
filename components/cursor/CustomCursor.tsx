"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "poem" | "sketch";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  const scrollbarDragging = useRef(false);

  const [mode, setMode] = useState<CursorMode>("default");

  useEffect(() => {
    const setCursorVisible = (visible: boolean) => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = visible ? "1" : "0";
      }
    };

    const isOverScrollbar = (event: MouseEvent) => {
      const element = document.elementFromPoint(
        event.clientX,
        event.clientY,
      );

      const scrollbar = element?.closest(
        ".custom-scrollbar",
      );

      if (!scrollbar) return false;

      const rect = scrollbar.getBoundingClientRect();

      // Small zone on the right side reserved for the scrollbar.
      return event.clientX >= rect.right - 10;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      if (scrollbarDragging.current) {
        setCursorVisible(false);
        return;
      }

      setCursorVisible(!isOverScrollbar(event));
    };

    const handleMouseDown = (event: MouseEvent) => {
      if (isOverScrollbar(event)) {
        scrollbarDragging.current = true;
        setCursorVisible(false);
      }
    };

    const handleMouseUp = () => {
      scrollbarDragging.current = false;
      setCursorVisible(true);
    };

    const handleSectionChange = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      const section = customEvent.detail;

      setMode(section === "about" ? "poem" : "default");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    window.addEventListener(
      "home-section-change",
      handleSectionChange,
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

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      window.removeEventListener(
        "mousedown",
        handleMouseDown,
      );

      window.removeEventListener(
        "mouseup",
        handleMouseUp,
      );

      window.removeEventListener(
        "home-section-change",
        handleSectionChange,
      );

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