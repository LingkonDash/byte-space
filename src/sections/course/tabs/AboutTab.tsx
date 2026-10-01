import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi2";
import ContentHeading from "@/components/ui/ContentHeading";
import { ABOUT_PARAGRAPHS, KEY_POINTS, SNEAK_PEEK } from "@/data/course-detail";

export default function AboutTab() {
  return (
    <div className="flex flex-col gap-6">
      <ContentHeading>Description</ContentHeading>
      <div className="flex flex-col gap-6 text-foreground-muted">
        {ABOUT_PARAGRAPHS.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <ContentHeading>Sneak Peak</ContentHeading>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-[19px]">
        {SNEAK_PEEK.map(({ src, alt }) => (
          <li key={src} className="relative aspect-[167/125] overflow-hidden rounded-2xl">
            <Image src={src} alt={alt} fill sizes="(min-width: 640px) 170px, 45vw" className="object-cover" />
          </li>
        ))}
      </ul>

      <ContentHeading>Key Points</ContentHeading>
      <ul className="flex flex-col gap-3">
        {KEY_POINTS.map((point) => (
          <li key={point} className="flex items-center gap-2 text-foreground-muted">
            <HiCheckCircle size={24} className="shrink-0 text-brand-blue" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
