"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "view" | "explore" | "drag" | "open" | "text";

const LABELS: Record<CursorState, string> = {
  default: "",
  view: "VIEW",
  explore: "EXPLORE",
  drag: "DRAG",
  open: "OPEN",
  text: "",
};

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const stateRef = useRef<CursorState>("default");

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop with mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
      if (!visible) setVisible(true);
    };

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    // Fast, lightweight event delegation - ZERO DOM mutation observer needed!
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorEl = target.closest<HTMLElement>("[data-cursor]");
      if (cursorEl) {
        const val = cursorEl.getAttribute("data-cursor") as CursorState;
        if (val && LABELS[val] !== undefined) {
          setState(val);
          return;
        }
      }

      if (target.closest("a, button, [role='button'], .clickable")) {
        setState("explore");
        return;
      }

      if (target.closest("input, textarea, [contenteditable='true']")) {
        setState("text");
        return;
      }

      setState("default");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    document.documentElement.addEventListener("mouseenter", onMouseEnter);

    let rafId: number;
    const loop = () => {
      // Smooth interpolation (lerp) for the outer ring
      const lerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
        labelRef.current.textContent = LABELS[stateRef.current] || "";
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [visible]);

  if (!mounted) return null;

  const isExpanded = state === "view" || state === "explore" || state === "drag" || state === "open";
  const isText = state === "text";

  return (
    <>
      {/* Center Dot */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          opacity: visible && !isText ? 1 : 0,
          width: isExpanded ? "6px" : "10px",
          height: isExpanded ? "6px" : "10px",
          backgroundColor: isExpanded ? "#0a0a0a" : "var(--bc-lime)",
        }}
      />

      {/* Trailing Ring */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          opacity: visible && !isText ? 1 : 0,
          width: isExpanded ? "76px" : "36px",
          height: isExpanded ? "76px" : "36px",
          borderColor: isExpanded ? "var(--bc-lime)" : "rgba(200, 241, 53, 0.45)",
          backgroundColor: isExpanded ? "var(--bc-lime)" : "transparent",
        }}
      />

      {/* Center Label (VIEW, EXPLORE, etc.) */}
      <div
        ref={labelRef}
        className="cursor-label"
        style={{
          opacity: isExpanded && visible && LABELS[state] ? 1 : 0,
          color: "#0a0a0a",
          fontSize: "9px",
          fontWeight: 800,
          letterSpacing: "0.15em",
        }}
      />
    </>
  );
}
