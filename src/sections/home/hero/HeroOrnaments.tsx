import Image from "next/image";
import { HERO_ORNAMENTS } from "@/data/hero";

export default function HeroOrnaments() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-20">
      {HERO_ORNAMENTS.map(({ src, className }) => (
        <div key={src} className={`hero-ornament absolute motion-safe:opacity-0 ${className}`}>
          <div className="hero-float">
            <Image
              src={src}
              alt=""
              width={400}
              height={400}
              sizes="(min-width: 768px) 27vw, 40vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}