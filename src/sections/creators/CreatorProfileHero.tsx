"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import GridBackground from "@/components/ui/GridBackground";
import { gsap, runMotionSafe } from "@/lib/gsap";

export default function CreatorProfileHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(
    () =>
      runMotionSafe(sectionRef, () => {
        gsap.fromTo(
          "[data-reveal]",
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          },
        );
      }),
    [],
  );

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden bg-brand-blue pt-24 pb-16 md:pt-40 md:pb-20">
      <GridBackground className="opacity-100" />

      <div className="relative z-10 mx-auto flex max-w-300 items-center justify-center px-4 md:px-6 xl:px-0">
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div data-reveal className="flex items-start gap-4 md:gap-5 motion-safe:opacity-0">
            <div className="relative shrink-0 overflow-hidden rounded-full border-4 border-white/50 bg-[#f5d7d1] shadow-[0_18px_40px_rgba(8,12,25,0.12)]">
              <Image
                src="/images/avatars/avatar-02.svg"
                alt="PurePearl Studio avatar"
                width={92}
                height={92}
                className="h-[92px] w-[92px] object-cover md:h-[104px] md:w-[104px]"
              />
            </div>

            <div className="pt-1">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-[-0.03em] text-white md:text-[42px] md:leading-[1.1]">
                  PurePearl Studio
                </h1>
                <span className="inline-flex items-center justify-center rounded-full bg-[#c6e227] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.02em] text-[#111827]">
                  Creator
                </span>
              </div>

              <p className="mt-2 text-base text-[#dfe7ff] md:text-[22px] md:leading-[1.5]">
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          <div data-reveal className="flex items-center gap-3 self-start lg:ml-auto lg:self-center motion-safe:opacity-0">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#f5f6f8] px-5 py-2.5 text-sm font-medium text-[#1b1f2a] transition-colors hover:bg-white"
            >
              3 Products
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#f5f6f8] px-5 py-2.5 text-sm font-medium text-[#1b1f2a] transition-colors hover:bg-white"
            >
              12 Followers
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-[#c6e227] px-5 py-2.5 text-sm font-semibold text-[#111827] shadow-[0_10px_24px_rgba(198,226,39,0.32)] transition-transform hover:scale-[1.01] active:scale-95"
            >
              Follow
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 max-w-300 px-4 md:px-6 xl:px-0">
        <p data-reveal className="max-w-[1070px] text-base leading-8 text-[#edf0ff] md:text-[18px] md:leading-8 motion-safe:opacity-0">
          Welcome to the creative world of <span className="font-semibold text-white">Creator&apos;s Name</span>. Here,
          you&apos;ll discover my passion, expertise, and inspiration that drive my creative journey. Let&apos;s
          explore and learn together!
        </p>

        <p data-reveal className="mt-3 max-w-[1070px] text-base leading-8 text-[#edf0ff] md:text-[18px] md:leading-8 motion-safe:opacity-0">
          I&apos;ve spent years crafting meaningful digital experiences that seamlessly blend aesthetics and purpose.
          From product design to visual storytelling, I bring thoughtful ideas to life with a focus on clarity,
          emotion, and functionality.
        </p>
      </div>
    </section>
  );
}
