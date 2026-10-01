import Image from "next/image";
import Link from "next/link";
import Float from "@/components/animations/Float";
import Reveal from "@/components/animations/Reveal";
import RevealSection from "@/components/animations/RevealSection";
import GridBackground from "@/components/ui/GridBackground";
import { CTA_ORNAMENTS } from "@/data/cta";

export default function CtaSection() {
  return (
    <RevealSection className="relative isolate overflow-hidden bg-brand-blue">
      <GridBackground />

      {/* Text sits above the ornaments (z-10) */}
      <div className="relative z-10 mx-auto flex max-w-[964px] flex-col items-center gap-6 px-4 py-24 text-center md:gap-10 md:px-6 md:py-[85px]">
        <Reveal
          as="h2"
          className="max-w-[710px] text-balance text-[2rem] font-medium leading-[1.15] text-white sm:text-5xl md:text-[52px] md:leading-[53px]"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </Reveal>

        <Reveal as="p" className="text-base text-[#ebecee] md:text-lg md:leading-7">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </Reveal>

        <Reveal>
          <Link
            href="/register"
            className="inline-flex h-[46px] items-center rounded-3xl bg-secondary px-6 text-base font-medium text-[#242528] transition-transform duration-300 hover:-translate-y-0.5 md:text-lg"
          >
            Join as Creator
          </Link>
        </Reveal>
      </div>

      {/* Decorative 3D shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {CTA_ORNAMENTS.map(({ src, className }, index) => (
          <Reveal key={src} className={`absolute ${className}`}>
            {/* Alternate the drift direction so the shapes don't move in sync */}
            <Float distance={index % 2 ? -12 : 12} duration={3.5 + index * 0.4}>
              <Image
                src={src}
                alt=""
                width={400}
                height={400}
                sizes="(min-width: 768px) 27vw, 40vw"
                className="h-auto w-full"
              />
            </Float>
          </Reveal>
        ))}
      </div>
    </RevealSection>
  );
}
