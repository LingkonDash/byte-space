// src/components/cards/HappyStudentsCard.tsx
import Image from "next/image";
import { HiStar } from "react-icons/hi2";
import FloatingCard from "./FloatingCard";
import { STUDENT_AVATARS } from "@/data/students";

type HappyStudentsCardProps = {
  className?: string;
};

export default function HappyStudentsCard({ className = "" }: HappyStudentsCardProps) {
  return (
    <FloatingCard className={`w-[258px] ${className}`}>
      <p className="font-medium text-[#242528]">Happy Students</p>
      <p className="flex items-center gap-1 text-[10px] leading-[19px] text-[#82868e]">
        4.5 (240)
        <HiStar size={16} className="text-secondary" />
      </p>

      <div className="mt-2 flex -space-x-4">
        {STUDENT_AVATARS.map((src) => (
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
  );
}