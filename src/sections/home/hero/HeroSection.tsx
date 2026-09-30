"use client";

import { useEffect, useRef } from "react";
import GridBackground from "@/components/ui/GridBackground";
import { gsap, runMotionSafe } from "@/lib/gsap";
import HeroOrnaments from "./HeroOrnaments";
import HeroSearchBar from "./HeroSearchBar";
import HeroStage from "./HeroStage";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(
    () =>
      runMotionSafe(sectionRef, () => {
        // Intro: one calm timeline, everything fades up into place
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

        intro
          .fromTo(".hero-grid", { opacity: 0 }, { opacity: 1, duration: 1.4 })
          .fromTo(
            ".hero-reveal",
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 },
            0.3,
          )
          .fromTo(
            ".hero-circle",
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 1.2 },
            0.4,
          )
          .fromTo(
            ".hero-student",
            { opacity: 0, y: 48 },
            { opacity: 1, y: 0, duration: 1 },
            0.7,
          )
          .fromTo(
            ".hero-ornament",
            { opacity: 0, scale: 0.85 },
            { opacity: 1, scale: 1, duration: 1.1, stagger: 0.12 },
            0.5,
          )
          .fromTo(
            ".hero-card",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 },
            1.1,
          )
          .fromTo(
            ".progress-fill",
            { scaleX: 0 },
            { scaleX: 1, duration: 1.2, ease: "power2.out" },
            1.5,
          );

        // Ornaments drift slowly up and down, each at its own pace
        gsap.utils.toArray<HTMLElement>(".hero-float").forEach((element, index) => {
          const direction = index % 2 === 0 ? 1 : -1;

          gsap.to(element, {
            y: 14 * direction,
            rotation: 3 * direction,
            duration: 3.5 + index * 0.4,
            delay: 1.2,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      }),
    [],
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-brand-blue"
    >
      <GridBackground className="hero-grid motion-safe:opacity-0" />
      <HeroOrnaments />

      <div className="relative z-30 mx-auto flex w-full max-w-[935px] flex-col items-center px-4 pt-28 text-center md:pt-[169px]">
        <h1 className="hero-reveal text-[2.5rem] font-semibold leading-[1.2] text-white motion-safe:opacity-0 sm:text-6xl lg:text-[72px]">
          Get Access to Hundreds Courses Available
        </h1>

        <p className="hero-reveal mt-4 max-w-[819px] text-base text-[#dde1e5] motion-safe:opacity-0 md:mt-8 md:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>

        <HeroSearchBar />
      </div>

      <HeroStage />
    </section>
  );
}