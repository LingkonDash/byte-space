"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, runMotionSafe } from "@/lib/gsap";

type TabPanelProps = {
  children: ReactNode;
};

/** Fades its content in. Give it a `key` so it replays whenever the tab changes. */
export default function TabPanel({ children }: TabPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(
    () =>
      runMotionSafe(panelRef, () => {
        gsap.fromTo(
          panelRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        );
      }),
    [],
  );

  return (
    <div ref={panelRef} className="motion-safe:opacity-0">
      {children}
    </div>
  );
}
