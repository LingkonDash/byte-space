"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap, runMotionSafe } from "@/lib/gsap";

type RevealSectionProps = {
  className?: string;
  children: ReactNode;
};

/** A <section> that fades up all its <Reveal> children once, when scrolled into view. */
export default function RevealSection({ className = "", children }: RevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(
    () =>
      runMotionSafe(sectionRef, () => {
        gsap.fromTo(
          "[data-reveal]",
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          },
        );
      }),
    [],
  );

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
}