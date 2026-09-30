import Image from "next/image";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({
  testimonial,
  className = "",
}: TestimonialCardProps) {
  const { name, role, avatar, quote } = testimonial;

  return (
    <div
      className={`testimonial-card flex flex-col justify-start rounded-[24px] bg-[#f5f6f8] p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1.5 motion-safe:opacity-0 ${className}`}
    >
      <div className="relative mb-6 h-16 w-16 overflow-hidden rounded-full md:h-[72px] md:w-[72px]">
        <Image
          src={avatar}
          alt={name}
          fill
          sizes="(max-width: 768px) 64px, 72px"
          className="object-cover"
        />
      </div>

      <h3 className="text-lg font-bold text-foreground md:text-xl">
        {name}
      </h3>

      <p className="mt-1 text-sm font-medium text-brand-blue md:text-base">
        {role}
      </p>

      <p className="mt-6 text-sm leading-relaxed text-foreground-muted md:text-base">
        {quote}
      </p>
    </div>
  );
}
