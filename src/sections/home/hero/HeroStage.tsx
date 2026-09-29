import Image from "next/image";
import { HiStar } from "react-icons/hi2";
import FloatingCard from "@/components/cards/FloatingCard";
import { HERO_AVATARS } from "@/data/hero";

export default function HeroStage() {
  return (
    <div className="relative z-10 mx-auto mt-auto h-[340px] w-full max-w-[1440px] md:aspect-[1440/512] md:h-auto">
      {/* Lime ring behind the student */}
      <div className="absolute inset-x-0 top-[15%] flex justify-center md:top-[13.7%]">
        <div className="hero-circle aspect-square w-[150vw] shrink-0 rounded-full bg-[radial-gradient(closest-side,transparent_44%,#c3f104_44.3%)] motion-safe:opacity-0 md:w-[79.8%]" />
      </div>

      {/* Student */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <Image
          src="/images/hero/hero-student.svg"
          alt="Smiling student with headphones holding a laptop"
          width={578}
          height={541}
          priority
          sizes="(min-width: 768px) 40vw, 300px"
          className="hero-student h-auto w-full motion-safe:opacity-0 md:w-[55%]"
        />
      </div>

      {/* Card: category (hidden on mobile to keep it uncluttered) */}
      <div className="hero-card absolute hidden motion-safe:opacity-0 md:left-[28.1%] md:top-[24.8%] md:block">
        <FloatingCard className="w-[208px] origin-top-left md:scale-[.8] lg:scale-100">
          <p className="font-medium text-[#242528]">UI/UX Design</p>
          <p className="flex gap-2 text-[10px] leading-[19px] text-[#82868e]">
            <span>200 Courses</span>
            <span aria-hidden>•</span>
            <span>1000+ Students</span>
          </p>
        </FloatingCard>
      </div>

      {/* Card: learning progress */}
      <div className="hero-card absolute right-2 top-10 motion-safe:opacity-0 md:left-[58.5%] md:right-auto md:top-[27.1%]">
        <FloatingCard className="w-[232px] origin-top-right scale-75 md:origin-top-left md:scale-[.8] lg:scale-100">
          <p className="text-sm font-medium leading-[17px] text-[#242528]">Learning Progress</p>
          <p className="mt-2 font-heading text-5xl font-semibold leading-[58px] tracking-[-0.01em] text-[#242528]">
            55%
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#f6f6f6]">
            <div className="hero-progress h-full w-[56%] origin-left rounded-full bg-secondary" />
          </div>
        </FloatingCard>
      </div>

      {/* Card: happy students */}
      <div className="hero-card absolute bottom-3 left-2 motion-safe:opacity-0 md:bottom-auto md:left-[22.8%] md:top-[63.5%]">
        <FloatingCard className="w-[258px] origin-bottom-left scale-75 md:origin-top-left md:scale-[.8] lg:scale-100">
          <p className="font-medium text-[#242528]">Happy Students</p>
          <p className="flex items-center gap-1 text-[10px] leading-[19px] text-[#82868e]">
            4.5 (240)
            <HiStar size={16} className="text-secondary" />
          </p>

          <div className="mt-2 flex -space-x-4">
            {HERO_AVATARS.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={43}
                height={43}
                className="size-[43px] rounded-full border-2 border-white object-cover"
              />
            ))}
            <span className="grid size-[43px] place-items-center rounded-full border-2 border-white bg-secondary text-xs font-bold text-[#242528]">
              2K+
            </span>
          </div>
        </FloatingCard>
      </div>
    </div>
  );
}