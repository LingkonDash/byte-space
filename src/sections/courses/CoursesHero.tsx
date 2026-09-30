"use client";

import { useEffect, useRef } from "react";
import { HiChevronDown, HiMagnifyingGlass } from "react-icons/hi2";
import GridBackground from "@/components/ui/GridBackground";
import { gsap, runMotionSafe } from "@/lib/gsap";

export default function CoursesHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(
    () =>
      runMotionSafe(sectionRef, () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(".courses-hero-grid", { opacity: 0 }, { opacity: 1, duration: 1.2 }).fromTo(
          ".courses-hero-reveal",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
          0.2,
        );
      }),
    [],
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-brand-blue pt-32 pb-16 md:pt-44 md:pb-24"
    >
      <GridBackground className="courses-hero-grid motion-safe:opacity-0" />

      <div className="relative z-10 mx-auto max-w-300 px-4 md:px-6 xl:px-0 text-center">
        <h1 className="courses-hero-reveal text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-[44px] motion-safe:opacity-0">
          Find Your Next Course
        </h1>

        <form
          onSubmit={(e) => e.preventDefault()}
          role="search"
          className="courses-hero-reveal mt-8 mx-auto flex w-full max-w-[620px] flex-col gap-3 sm:flex-row sm:items-center motion-safe:opacity-0"
        >
          <label className="flex h-12 p-3 min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-5 shadow-sm focus-within:ring-2 focus-within:ring-secondary">
            <HiMagnifyingGlass className="h-5 w-5 shrink-0 text-gray-400" />
            <input
              type="search"
              name="q"
              placeholder="Search"
              aria-label="Search courses"
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-gray-400 md:text-base"
            />
          </label>

          <button
            type="button"
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-secondary px-6 text-sm font-medium text-foreground transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
          >
            <span>Courses</span>
            <HiChevronDown className="h-4 w-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
