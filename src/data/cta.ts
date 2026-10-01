// src/data/cta.ts
import type { Ornament } from "@/types";

// md: values are % of the Figma 1440 x 488 frame. Small ones are hidden on phones.
export const CTA_ORNAMENTS: Ornament[] = [
  {
    src: "/images/ornaments/spring-lime2.svg",
    className: "" //"-left-[14%] -top-[8%] w-[38%] md:-left-[8.2%] md:-top-[33.2%] md:w-[26.7%]",
  },
  {
    src: "/images/ornaments/spring-white-sm.svg",
    className: "hidden md:block md:left-[12.4%] md:top-[1%] md:w-[12.2%]",
  },
  {
    src: "/images/ornaments/pyramid-lime.webp",
    className: "hidden md:block md:left-[75%] md:top-0 md:w-[13.1%]",
  },
  {
    src: "/images/ornaments/cylinder-white.webp",
    className:
      "-right-[16%] -top-[5%] w-[30%] md:right-auto md:left-[85.1%] md:top-[1.2%] md:w-[15.7%]",
  },
  {
    src: "/images/ornaments/cone-white.webp",
    className: "hidden md:block md:top-[46.1%] md:w-[9.1%]",
  },
  {
    src: "/images/ornaments/torus-lime.webp",
    className:
      "-bottom-[6%] -left-[14%] w-[40%] md:bottom-auto md:left-[1.4%] md:top-[61.3%] md:w-[23.75%]",
  },
  {
    src: "/images/features/feature-spring-1.webp",
    className:
      "-bottom-[4%] -right-[12%] w-[34%] md:bottom-auto md:right-auto md:left-[77.1%] md:top-[59.2%] md:w-[22.9%]",
  },
];
