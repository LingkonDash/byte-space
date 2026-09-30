// GrowthVisual.tsx 
import Image from "next/image";
import Float from "@/components/animations/Float";
import Reveal from "@/components/animations/Reveal";
import CourseCard from "@/components/cards/CourseCard";
import LearningProgressCard from "@/components/cards/LearningProgressCard";
import ScaledStage from "@/components/ui/ScaledStage";
import { COURSES } from "@/data/courses";
import CutoutImage from "./CutoutImage";

export default function GrowthVisual() {
  return (
    <ScaledStage
      width={621}
      height={552}
      className="self-center [--scale:.55] sm:[--scale:.95] md:[--scale:1] lg:[--scale:.72] xl:[--scale:1] min-[1360px]:-mr-[58px]"
    >
      {/* Layers: back to front */}
      <Reveal className="absolute left-0 top-0 w-[373px]">
        <CourseCard course={COURSES[0]} />
      </Reveal>

      <Reveal className="absolute left-0 top-3">
        <CutoutImage src="/images/hero/hero-student.svg" alt="" width={577} height={540} />
      </Reveal>

      <Reveal className="absolute left-[345px] top-[213px]">
        <LearningProgressCard />
      </Reveal>

      <Reveal className="absolute left-[406px] top-[67px]">
        <Float>
          <Image src="/images/features/feature-spring-1.webp" alt="" width={215} height={215} />
        </Float>
      </Reveal>
    </ScaledStage>
  );
}
