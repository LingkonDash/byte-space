// FeatureText.tsx
import type { ReactNode } from "react";
import Reveal from "@/components/animations/Reveal";

type FeatureTextProps = {
  title: string;
  description: ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
  children?: ReactNode; // stats, checklist...
};

export default function FeatureText({
  title,
  description,
  titleClassName = "",
  descriptionClassName = "",
  className = "",
  children,
}: FeatureTextProps) {
  return (
    <div className={`flex flex-col gap-6 md:gap-10 ${className}`}>
      <Reveal
        as="h2"
        className={`text-balance text-[1.75rem] font-medium leading-[1.2] text-[#242528] sm:text-4xl lg:text-[44px] lg:leading-[52px] ${titleClassName}`}
      >
        {title}
      </Reveal>
      <Reveal as="p" className={`text-base text-foreground-muted md:text-lg md:leading-7 ${descriptionClassName}`}>
        {description}
      </Reveal>
      {children && <Reveal>{children}</Reveal>}
    </div>
  );
}
