"use client";

import { useEffect, useRef } from "react";
import TestimonialCard from "@/components/cards/TestimonialCard";
import GlowBackground from "@/components/ui/GlowBackground";
import { testimonialsData } from "@/data/testimonials";
import { gsap, runMotionSafe } from "@/lib/gsap";

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(
    () =>
      runMotionSafe(sectionRef, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        tl.fromTo(
          ".testimonial-reveal",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
        ).fromTo(
          ".testimonial-card",
          { opacity: 0, y: 32 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
          "-=0.4",
        );
      }),
    [],
  );

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-background py-20 md:py-28 lg:py-36"
    >
      <GlowBackground />

      <div className="mx-auto max-w-300 px-4 md:px-6 xl:px-0">
        {/* Header grid */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <h2 className="testimonial-reveal text-3xl font-bold tracking-tight text-foreground motion-safe:opacity-0 sm:text-4xl md:text-[44px] md:leading-[1.15]">
              Discover What Our Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6 lg:pt-2">
            <p className="testimonial-reveal text-base leading-relaxed text-foreground-muted motion-safe:opacity-0 md:text-lg">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we
              do. Hear directly from those who have experienced the transformative journey of
              learning and creating on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
