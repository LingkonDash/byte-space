"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, runMotionSafe } from "@/lib/gsap";

type FloatProps = {
  distance?: number; // px
  duration?: number; // seconds per swing
  className?: string;
  children: ReactNode;
};

/** Makes its children drift slowly up and down, forever. */
export default function Float({ distance = 14, duration = 4, className = "", children }: FloatProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    () =>
      runMotionSafe(ref, () => {
        gsap.to(ref.current, { y: distance, rotation: 2, duration, ease: "sine.inOut", yoyo: true, repeat: -1 });
      }),
    [distance, duration],
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
