// CreatorVisual.tsx
import Image from "next/image";
import Float from "@/components/animations/Float";
import Reveal from "@/components/animations/Reveal";
import HappyStudentsCard from "@/components/cards/HappyStudentsCard";
import RevenueCard from "@/components/cards/RevenueCard";
import ScaledStage from "@/components/ui/ScaledStage";
import CutoutImage from "./CutoutImage";

export default function CreatorVisual() {
  return (
    <ScaledStage
      width={541}
      height={596}
      className="self-center [--scale:.63] sm:[--scale:1] lg:[--scale:.8] xl:[--scale:1]"
    >
      {/* Layers: back to front */}
      <Reveal className="absolute left-0 top-[44px]">
        <RevenueCard
          className="w-[232px]"
          title="Total Revenue"
          period="July 1-28"
          amount="$120.29"
          change="+12$"
          progress={56}
        />
      </Reveal>

      <Reveal className="absolute left-0 top-[194px]">
        <RevenueCard className="w-[134px]" title="Year to Date" period="2023" amount="$1,200.38" change="+12$" />
      </Reveal>

      <Reveal className="absolute left-[28px] top-0">
        <CutoutImage
          src="/images/features/feature-creator.webp"
          alt="Smiling course creator with headphones holding a tablet"
          width={435}
          height={596}
        />
      </Reveal>

      <Reveal className="absolute left-[305px] top-[114px]">
        <Float>
          <Image src="/images/features/feature-spring-2.webp" alt="" width={215} height={215} />
        </Float>
      </Reveal>

      <Reveal className="absolute left-[283px] top-[413px]">
        <HappyStudentsCard />
      </Reveal>
    </ScaledStage>
  );
}
