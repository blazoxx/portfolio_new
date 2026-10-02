"use client";

import { useEffect, useRef, useState } from "react";

export default function PlaygroundPage() {
  const parts = [
    "Face",
    "Eyes",
    "Hair",
    "Hat",
    "Glasses",
    "Mouth",
    "Accessory",
    "Shape",
  ];

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

  const options = ["01", "02", "03", "04", "05", "06"];

  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});

  const [previewOptions, setPreviewOptions] = useState<Record<string, string>>(
    {},
  );

  const [useBadgeAsCursor, setUseBadgeAsCursor] = useState(false);

  const [badgeSaved, setBadgeSaved] = useState(false);

  const customizeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbTop, setThumbTop] = useState(0);

  const dragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartScroll = useRef(0);

  const [isDrawing, setIsDrawing] = useState(false);
  const [isEraser, setIsEraser] = useState(false);
  const [brushSize, setBrushSize] = useState(3);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const updateScrollbar = () => {
      const content = customizeRef.current;
      const track = trackRef.current;

      if (!content || !track) return;

      const visibleHeight = content.clientHeight;
      const scrollHeight = content.scrollHeight;
      const trackHeight = track.clientHeight;

      if (scrollHeight <= visibleHeight) {
        setThumbHeight(trackHeight);
        setThumbTop(0);
        return;
      }

      const height = Math.max(40, (visibleHeight / scrollHeight) * trackHeight);

      const maxTop = trackHeight - height;

      const top = (content.scrollTop / (scrollHeight - visibleHeight)) * maxTop;

      setThumbHeight(height);
      setThumbTop(top);
    };

    updateScrollbar();

    const content = customizeRef.current;

    content?.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);

    return () => {
      content?.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
    };
  }, []);

  const handleThumbPointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    const content = customizeRef.current;

    if (!content) return;

    dragging.current = true;
    dragStartY.current = event.clientY;
    dragStartScroll.current = content.scrollTop;

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleThumbPointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (!dragging.current) return;

    const content = customizeRef.current;
    const track = trackRef.current;

    if (!content || !track) return;

    const trackHeight = track.clientHeight;
    const maxThumbTop = trackHeight - thumbHeight;

    if (maxThumbTop <= 0) return;

    const deltaY = event.clientY - dragStartY.current;

    const scrollableHeight = content.scrollHeight - content.clientHeight;

    const scrollDelta = (deltaY / maxThumbTop) * scrollableHeight;

    content.scrollTop = dragStartScroll.current + scrollDelta;
  };

  const handleThumbPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = false;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handleTrackPointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.target !== event.currentTarget) return;

    const content = customizeRef.current;
    const track = trackRef.current;

    if (!content || !track) return;

    const rect = track.getBoundingClientRect();

    const clickPosition = event.clientY - rect.top;

    const maxThumbTop = rect.height - thumbHeight;

    const targetTop = clickPosition - thumbHeight / 2;

    const clampedTop = Math.max(0, Math.min(targetTop, maxThumbTop));

    const scrollableHeight = content.scrollHeight - content.clientHeight;

    if (maxThumbTop <= 0) return;

    content.scrollTop = (clampedTop / maxThumbTop) * scrollableHeight;
  };

  const handleOptionSelect = (part: string, option: string) => {
    setSelectedOptions((current) => ({
      ...current,
      [part]: option,
    }));
  };

  /*
   * selectedOptions = permanently selected options
   * previewOptions = temporary hover state
   * activeOptions = what the avatar currently renders
   */
  const activeOptions = {
    ...selectedOptions,
    ...previewOptions,
  };

  const saveBadge = () => {
    localStorage.setItem(
      "casii-visitor-badge",
      JSON.stringify(selectedOptions),
    );

    if (useBadgeAsCursor) {
      window.dispatchEvent(
        new CustomEvent("badge-cursor-change", {
          detail: {
            active: true,
            avatar: selectedOptions,
          },
        }),
      );
    }

    setBadgeSaved(true);

    setTimeout(() => {
      setBadgeSaved(false);
    }, 1500);
  };

  const cursorAvatar = useBadgeAsCursor ? (
    <div className="pointer-events-none fixed left-0 top-0 z-[10000] -translate-x-1/2 -translate-y-1/2">
      <div className="relative h-10 w-10 rounded-full border border-white bg-black">
        {activeOptions.Face && (
          <div
            className={`absolute inset-1 rounded-full ${
              avatarParts.Face[
                activeOptions.Face as keyof typeof avatarParts.Face
              ]
            }`}
          />
        )}

        {activeOptions.Eyes && (
          <div className="absolute inset-0">
            <div
              className={`absolute left-2 top-3 ${
                avatarParts.Eyes[
                  activeOptions.Eyes as keyof typeof avatarParts.Eyes
                ]
              }`}
            />
            <div
              className={`absolute right-2 top-3 ${
                avatarParts.Eyes[
                  activeOptions.Eyes as keyof typeof avatarParts.Eyes
                ]
              }`}
            />
          </div>
        )}

        {activeOptions.Mouth && (
          <div
            className={`absolute bottom-2 left-1/2 -translate-x-1/2 scale-50 ${
              avatarParts.Mouth[
                activeOptions.Mouth as keyof typeof avatarParts.Mouth
              ]
            }`}
          />
        )}
      </div>
    </div>
  ) : null;

  const POINTER_OFFSET_X = 0;
  const POINTER_OFFSET_Y = -50;

  const getCanvasPoint = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;

    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();

    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (event.clientX - rect.left + POINTER_OFFSET_X) * scaleX,

      y: (event.clientY - rect.top + POINTER_OFFSET_Y) * scaleY,
    };
  };

  const startDrawing = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const point = getCanvasPoint(event);

    if (!canvas || !point) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    setIsDrawing(true);

    ctx.beginPath();
    ctx.moveTo(point.x, point.y);

    canvas.setPointerCapture(event.pointerId);
  };

  const draw = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const point = getCanvasPoint(event);

    if (!canvas || !point) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.strokeStyle = isEraser ? "#000000" : "#ffffff";

    ctx.lineTo(point.x, point.y);
    ctx.stroke();
  };

  const stopDrawing = (event: React.PointerEvent<HTMLCanvasElement>) => {
    setIsDrawing(false);

    const canvas = canvasRef.current;

    if (canvas && canvas.hasPointerCapture(event.pointerId)) {
      canvas.releasePointerCapture(event.pointerId);
    }
  };

  const clearBoard = () => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <main className="bg-black text-white">
      {/* Slide 01 */}
      <section className="min-h-screen snap-start px-6 py-16">
        <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-[1400px] items-center gap-24 md:grid-cols-[minmax(0,1fr)_620px]">
          {/* Intro */}
          <div className="max-w-5xl">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Playground
            </p>

            <h1 className="mt-6 text-7xl font-bold tracking-tight md:text-9xl">
              THINGS
              <br />
              I&apos;M
              <br />
              TRYING.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/40">
              A space to draw, experiment, play, and leave something behind.
            </p>
          </div>

          {/* Visitor Badge Builder */}
          <div className="w-full">
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Visitor Badge
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              CREATE YOUR AVATAR.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/40">
              Pick different pieces and build your own little visitor.
            </p>

            {/* Builder */}
            <div className="mt-10 grid h-[42vh] min-h-0 grid-cols-1 gap-5 md:grid-cols-[minmax(0,1fr)_280px]">
              {/* Avatar Preview */}
              <div className="relative flex min-h-0 items-center justify-center overflow-hidden border border-white/10 bg-black">
                <div className="relative h-40 w-40 rounded-full border border-white/20">
                  {/* Face */}
                  {activeOptions.Face && (
                    <div
                      className={`absolute inset-5 rounded-full ${
                        avatarParts.Face[
                          activeOptions.Face as keyof typeof avatarParts.Face
                        ]
                      }`}
                    />
                  )}

                  {/* Eyes */}
                  {activeOptions.Eyes && (
                    <div className="absolute inset-0">
                      <div
                        className={`absolute left-10 top-14 ${
                          avatarParts.Eyes[
                            activeOptions.Eyes as keyof typeof avatarParts.Eyes
                          ]
                        }`}
                      />

                      <div
                        className={`absolute right-10 top-14 ${
                          avatarParts.Eyes[
                            activeOptions.Eyes as keyof typeof avatarParts.Eyes
                          ]
                        }`}
                      />
                    </div>
                  )}

                  {/* Hair */}
                  {activeOptions.Hair && (
                    <div
                      className={`absolute left-5 right-5 top-2 ${
                        avatarParts.Hair[
                          activeOptions.Hair as keyof typeof avatarParts.Hair
                        ]
                      }`}
                    />
                  )}

                  {/* Hat */}
                  {activeOptions.Hat && (
                    <div
                      className={`absolute left-7 right-7 ${
                        avatarParts.Hat[
                          activeOptions.Hat as keyof typeof avatarParts.Hat
                        ]
                      }`}
                    />
                  )}

                  {/* Glasses */}
                  {activeOptions.Glasses && (
                    <div
                      className={`absolute left-7 right-7 top-12 flex justify-between ${
                        avatarParts.Glasses[
                          activeOptions.Glasses as keyof typeof avatarParts.Glasses
                        ]
                      }`}
                    >
                      <span className="h-5 w-8 border border-white" />
                      <span className="h-5 w-8 border border-white" />
                    </div>
                  )}

                  {/* Mouth */}
                  {activeOptions.Mouth && (
                    <div
                      className={`absolute bottom-10 left-1/2 -translate-x-1/2 ${
                        avatarParts.Mouth[
                          activeOptions.Mouth as keyof typeof avatarParts.Mouth
                        ]
                      }`}
                    />
                  )}

                  {/* Accessory */}
                  {activeOptions.Accessory && (
                    <div
                      className={`absolute ${
                        avatarParts.Accessory[
                          activeOptions.Accessory as keyof typeof avatarParts.Accessory
                        ]
                      }`}
                    />
                  )}

                  {/* Shape */}
                  {activeOptions.Shape && (
                    <div
                      className={`absolute bottom-[-3px] left-1/2 -translate-x-1/2 ${
                        avatarParts.Shape[
                          activeOptions.Shape as keyof typeof avatarParts.Shape
                        ]
                      }`}
                    />
                  )}
                </div>

                <p className="absolute bottom-5 left-0 right-0 text-center text-[10px] uppercase tracking-[0.25em] text-white/20">
                  Preview
                </p>
              </div>

              {/* Parts Panel */}
              <div className="relative min-h-0 border border-white/10 bg-white/[0.02]">
                <div
                  ref={customizeRef}
                  className="h-full overflow-y-auto overscroll-contain p-5 pr-7"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                    Customize
                  </p>

                  <div className="mt-5 flex flex-col">
                    {parts.map((part, index) => {
                      const opensAbove = index >= 4;
                      const isSelected = selectedPart === part;

                      return (
                        <div key={part} className="group relative">
                          {/* Part Button */}
                          <button
                            type="button"
                            onClick={() => setSelectedPart(part)}
                            className={`relative z-10 flex w-full items-center justify-between border px-4 py-4 text-left text-xs uppercase tracking-[0.15em] transition ${
                              isSelected
                                ? "border-white/40 bg-white/[0.06] text-white"
                                : "border-white/10 bg-black text-white/45 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            <span>{part}</span>

                            <span
                              className={`transition ${
                                isSelected
                                  ? "translate-x-1 text-white"
                                  : "text-white/20"
                              }`}
                            >
                              →
                            </span>
                          </button>

                          {/* Options */}
                          <div
                            className={`pointer-events-none absolute left-0 z-50 w-full border border-white/10 bg-black p-4 opacity-0 shadow-2xl transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 ${
                              opensAbove ? "bottom-full" : "top-full"
                            }`}
                          >
                            <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-white/25">
                              Choose {part}
                            </p>

                            <div className="grid grid-cols-3 gap-1">
                              {options.map((option) => {
                                const selected =
                                  selectedOptions[part] === option;

                                return (
                                  <button
                                    key={option}
                                    type="button"
                                    onMouseEnter={() =>
                                      setPreviewOptions((current) => ({
                                        ...current,
                                        [part]: option,
                                      }))
                                    }
                                    onMouseLeave={() =>
                                      setPreviewOptions((current) => {
                                        const next = {
                                          ...current,
                                        };

                                        delete next[part];

                                        return next;
                                      })
                                    }
                                    onClick={() =>
                                      handleOptionSelect(part, option)
                                    }
                                    className={`aspect-square border text-[10px] transition ${
                                      selected
                                        ? "border-white bg-white text-black"
                                        : "border-white/10 bg-white/[0.03] text-white/30 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
                                    }`}
                                  >
                                    {option}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Custom Scrollbar */}
                <div
                  ref={trackRef}
                  onPointerDown={handleTrackPointerDown}
                  className="absolute bottom-5 right-2 top-5 w-1.5 rounded-full bg-white/[0.04]"
                >
                  <div
                    onPointerDown={handleThumbPointerDown}
                    onPointerMove={handleThumbPointerMove}
                    onPointerUp={handleThumbPointerUp}
                    onPointerCancel={handleThumbPointerUp}
                    className="absolute left-0 w-full touch-none rounded-full bg-white/20 transition-colors hover:bg-white/40"
                    style={{
                      height: `${thumbHeight}px`,
                      top: `${thumbTop}px`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="relative z-10 mt-3 flex gap-3">
              <button
                type="button"
                onClick={saveBadge}
                className={`flex-1 border px-5 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${
                  badgeSaved
                    ? "border-white bg-white text-black"
                    : "border-white/20 text-white/60 hover:border-white hover:text-white"
                }`}
              >
                {badgeSaved ? "Saved!" : "Save Badge"}
              </button>

              <button
                type="button"
                onClick={() => {
                  const next = !useBadgeAsCursor;

                  setUseBadgeAsCursor(next);

                  localStorage.setItem("casii-badge-cursor", String(next));

                  window.dispatchEvent(
                    new CustomEvent("badge-cursor-change", {
                      detail: {
                        active: next,
                        avatar: selectedOptions,
                      },
                    }),
                  );
                }}
                className={`flex-1 border px-5 py-4 text-xs uppercase tracking-[0.2em] transition ${
                  useBadgeAsCursor
                    ? "border-white bg-white text-black"
                    : "border-white/10 text-white/30 hover:border-white/30 hover:text-white"
                }`}
              >
                {useBadgeAsCursor ? "Cursor Active" : "Use as Cursor"}
              </button>
            </div>

            <p className="mt-4 text-center text-[10px] uppercase tracking-[0.25em] text-white/20">
              Saved locally in your browser
            </p>
          </div>
        </div>
      </section>

      {/* Slide 02 */}
      <section className="min-h-screen snap-start px-6 py-24">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                Interactive
              </p>

              <h2 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
                DRAW SOMETHING.
              </h2>
            </div>

            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-white/30 md:block">
              Leave your mark on the playground.
            </p>
          </div>

          {/* Whiteboard */}
          <div className="mt-12 overflow-hidden border border-white/10 bg-white/[0.02]">
            <canvas
              ref={canvasRef}
              width={1600}
              height={900}
              onPointerDown={startDrawing}
              onPointerMove={draw}
              onPointerUp={stopDrawing}
              onPointerCancel={stopDrawing}
              className="block h-[60vh] w-full touch-none bg-black"
            />

            <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsEraser(false)}
                  className={`border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition ${
                    !isEraser
                      ? "border-white bg-white text-black"
                      : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                  }`}
                >
                  Pen
                </button>

                <button
                  type="button"
                  onClick={() => setIsEraser(true)}
                  className={`border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition ${
                    isEraser
                      ? "border-white bg-white text-black"
                      : "border-white/10 text-white/40 hover:border-white/30 hover:text-white"
                  }`}
                >
                  Eraser
                </button>

                <input
                  type="range"
                  min="1"
                  max="60"
                  value={brushSize}
                  onChange={(event) => setBrushSize(Number(event.target.value))}
                  className="w-20"
                />
              </div>

              <button
                type="button"
                onClick={clearBoard}
                className="border border-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-white/40 transition hover:border-white/30 hover:text-white"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
