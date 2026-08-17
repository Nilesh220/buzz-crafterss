"use client";

import { useEffect, useRef, useState } from "react";

type CursorState = "default" | "view" | "explore" | "drag" | "open";

const LABELS: Record<CursorState, string> = {
  default: "",
  view: "VIEW",
  explore: "EXPLORE",
  drag: "DRAG",
  open: "OPEN",
};

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    // Hover detection for interactive elements
    const addHover = (selector: string, cursorState: CursorState) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.addEventListener("mouseenter", () => setState(cursorState));
        el.addEventListener("mouseleave", () => setState("default"));
      });
    };

    const setupHovers = () => {
      addHover(".work-card, [data-cursor='view']", "view");
      addHover("a, button, [data-cursor='explore']", "explore");
      addHover("[data-cursor='drag']", "drag");
      addHover("[data-cursor='open']", "open");
    };

    setupHovers();

    // Observe DOM mutations to re-apply hover on dynamic content
    const observer = new MutationObserver(setupHovers);
    observer.observe(document.body, { childList: true, subtree: true });

    // RAF loop for smooth cursor
    const loop = () => {
      const lerpFactor = 0.12;
      ringPos.current.x += (pos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * lerpFactor;

      if (dotRef.current) {
        dotRef.current.style.left = `${pos.current.x}px`;
        dotRef.current.style.top = `${pos.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      if (labelRef.current) {
        labelRef.current.style.left = `${ringPos.current.x}px`;
        labelRef.current.style.top = `${ringPos.current.y}px`;
        labelRef.current.textContent = LABELS[state];
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, [visible, state]);

  const isExpanded = state !== "default";

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          opacity: visible ? 1 : 0,
          width: isExpanded ? "6px" : "12px",
          height: isExpanded ? "6px" : "12px",
          backgroundColor: isExpanded ? "var(--bc-lime)" : "var(--bc-lime)",
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          opacity: visible ? 1 : 0,
          width: isExpanded ? "72px" : "40px",
          height: isExpanded ? "72px" : "40px",
          borderColor: isExpanded ? "var(--bc-lime)" : "rgba(200,241,53,0.4)",
          backgroundColor: isExpanded ? "rgba(200,241,53,0.06)" : "transparent",
        }}
      />
      <div
        ref={labelRef}
        className="cursor-label"
        style={{
          opacity: isExpanded && visible ? 1 : 0,
          color: "var(--bc-lime)",
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "0.15em",
        }}
      />
    </>
  );
}
