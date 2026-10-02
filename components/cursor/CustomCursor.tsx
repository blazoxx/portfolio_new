"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "poem" | "sketch";

type AvatarOptions = {
  Face?: string;
  Eyes?: string;
  Hair?: string;
  Hat?: string;
  Glasses?: string;
  Mouth?: string;
  Accessory?: string;
  Shape?: string;
};

const avatarParts = {
  Face: {
    "01": "border-2 border-white",
    "02": "border-2 border-white/50",
    "03": "border-2 border-dashed border-white",
    "04": "rounded-none border-2 border-white",
    "05": "border-4 border-double border-white",
    "06": "border-[3px] border-white/30",
  },

  Eyes: {
    "01": "h-2 w-2 rounded-full bg-white",
    "02": "h-3 w-1 bg-white",
    "03": "h-1 w-4 bg-white",
    "04": "h-3 w-3 rotate-45 bg-white",
    "05": "h-2 w-5 rounded-full border border-white",
    "06": "h-4 w-1 rounded-full bg-white",
  },

  Hair: {
    "01": "h-4 rounded-full bg-white/30",
    "02": "h-7 rounded-t-full border-2 border-white",
    "03": "h-3 border-t-4 border-dashed border-white",
    "04": "h-8 rotate-3 bg-white/20",
    "05": "h-2 rounded-full bg-white",
    "06": "h-5 rounded-b-full border-b-4 border-white/50",
  },

  Hat: {
    "01": "top-0 h-3 bg-white",
    "02": "top-1 h-6 border border-white",
    "03": "top-0 h-2 rotate-6 bg-white/50",
    "04": "top-2 h-4 rounded-full border border-white",
    "05": "top-0 h-1 bg-white",
    "06": "top-1 h-5 border-b-2 border-white",
  },

  Glasses: {
    "01": "gap-2",
    "02": "gap-0",
    "03": "gap-4",
    "04": "gap-1 rotate-3",
    "05": "gap-3",
    "06": "gap-5 -rotate-2",
  },

  Mouth: {
    "01": "h-1 w-8 bg-white",
    "02": "h-3 w-8 rounded-full border border-white",
    "03": "h-1 w-5 border-b border-white",
    "04": "h-4 w-4 rotate-45 border border-white",
    "05": "h-2 w-10 rounded-full bg-white/30",
    "06": "h-1 w-6 bg-white/50",
  },

  Accessory: {
    "01": "bottom-2 left-2 h-5 w-5 rounded-full bg-white",
    "02": "bottom-2 right-2 h-5 w-5 border border-white",
    "03": "left-1 top-1/2 h-8 w-2 bg-white/50",
    "04": "right-1 top-1/2 h-8 w-2 bg-white",
    "05": "bottom-0 left-1/2 h-2 w-10 -translate-x-1/2 bg-white",
    "06": "right-3 top-3 h-3 w-3 rotate-45 bg-white/60",
  },

  Shape: {
    "01": "h-4 w-20 rounded-full border border-white",
    "02": "h-8 w-16 border border-white",
    "03": "h-3 w-24 bg-white/10",
    "04": "h-10 w-10 rotate-45 border border-white",
    "05": "h-5 w-24 rounded-full bg-white/10",
    "06": "h-2 w-16 bg-white",
  },
} as const;

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const position = useRef({
    x: 0,
    y: 0,
  });

  const [mode, setMode] = useState<CursorMode>("default");

  const [badgeActive, setBadgeActive] = useState(false);

  const [avatar, setAvatar] =
    useState<AvatarOptions>({});

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    /* ---------------- Saved Badge ---------------- */

    const savedAvatar =
      localStorage.getItem("casii-visitor-badge");

    const savedCursor =
      localStorage.getItem("casii-badge-cursor") ===
      "true";

    if (savedAvatar) {
      try {
        setAvatar(
          JSON.parse(savedAvatar) as AvatarOptions,
        );
      } catch {
        setAvatar({});
      }
    }

    setBadgeActive(savedCursor);

    /* ---------------- Mouse ---------------- */

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.opacity = "1";
      }
    };

    /* ---------------- Section ---------------- */

    const handleSectionChange = (event: Event) => {
      const customEvent =
        event as CustomEvent<string>;

      setMode(
        customEvent.detail === "about"
          ? "poem"
          : "default",
      );
    };

    /* ---------------- Badge Cursor ---------------- */

    const handleBadgeCursor = (event: Event) => {
      const customEvent =
        event as CustomEvent<{
          active: boolean;
          avatar: AvatarOptions;
        }>;

      setBadgeActive(customEvent.detail.active);

      setAvatar(customEvent.detail.avatar ?? {});
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
    );

    window.addEventListener(
      "home-section-change",
      handleSectionChange,
    );

    window.addEventListener(
      "badge-cursor-change",
      handleBadgeCursor,
    );

    /* ---------------- Animation ---------------- */

    let animationFrame: number;

    const animate = () => {
      position.current.x +=
        (mouse.current.x - position.current.x) *
        0.15;

      position.current.y +=
        (mouse.current.y - position.current.y) *
        0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(
            ${position.current.x}px,
            ${position.current.y}px,
            0
          )`;
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      window.removeEventListener(
        "home-section-change",
        handleSectionChange,
      );

      window.removeEventListener(
        "badge-cursor-change",
        handleBadgeCursor,
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  /* Prevent hydration mismatch */

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        opacity: 0,
      }}
    >
      {badgeActive ? (
        /* ============================
           AVATAR CURSOR
           ============================ */
        <div className="relative h-14 w-14 -translate-x-1/2 -translate-y-1/2">
          {/* Face */}
          {avatar.Face && (
            <div
              className={`absolute inset-1 rounded-full ${
                avatarParts.Face[
                  avatar.Face as keyof typeof avatarParts.Face
                ]
              }`}
            />
          )}

          {/* Hair */}
          {avatar.Hair && (
            <div
              className={`absolute left-2 right-2 top-0 ${
                avatarParts.Hair[
                  avatar.Hair as keyof typeof avatarParts.Hair
                ]
              }`}
            />
          )}

          {/* Hat */}
          {avatar.Hat && (
            <div
              className={`absolute left-3 right-3 ${
                avatarParts.Hat[
                  avatar.Hat as keyof typeof avatarParts.Hat
                ]
              }`}
            />
          )}

          {/* Eyes */}
          {avatar.Eyes && (
            <div className="absolute inset-0">
              <div
                className={`absolute left-4 top-5 ${
                  avatarParts.Eyes[
                    avatar.Eyes as keyof typeof avatarParts.Eyes
                  ]
                }`}
              />

              <div
                className={`absolute right-4 top-5 ${
                  avatarParts.Eyes[
                    avatar.Eyes as keyof typeof avatarParts.Eyes
                  ]
                }`}
              />
            </div>
          )}

          {/* Glasses */}
          {avatar.Glasses && (
            <div
              className={`absolute left-2 right-2 top-4 flex justify-between ${
                avatarParts.Glasses[
                  avatar.Glasses as keyof typeof avatarParts.Glasses
                ]
              }`}
            >
              <span className="h-4 w-5 border border-white" />
              <span className="h-4 w-5 border border-white" />
            </div>
          )}

          {/* Mouth */}
          {avatar.Mouth && (
            <div
              className={`absolute bottom-4 left-1/2 -translate-x-1/2 scale-[0.6] ${
                avatarParts.Mouth[
                  avatar.Mouth as keyof typeof avatarParts.Mouth
                ]
              }`}
            />
          )}

          {/* Accessory */}
          {avatar.Accessory && (
            <div
              className={`absolute ${
                avatarParts.Accessory[
                  avatar.Accessory as keyof typeof avatarParts.Accessory
                ]
              }`}
            />
          )}

          {/* Shape */}
          {avatar.Shape && (
            <div
              className={`absolute bottom-[-3px] left-1/2 -translate-x-1/2 scale-[0.6] ${
                avatarParts.Shape[
                  avatar.Shape as keyof typeof avatarParts.Shape
                ]
              }`}
            />
          )}
        </div>
      ) : (
        /* ============================
           NORMAL CURSOR
           ============================ */
        <>
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
        </>
      )}
    </div>
  );
}