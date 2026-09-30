import FloatingCard from "./FloatingCard";

type LearningProgressCardProps = {
  className?: string;
};

export default function LearningProgressCard({ className = "" }: LearningProgressCardProps) {
  return (
    <FloatingCard className={`w-[232px] ${className}`}>
      <p className="text-sm font-medium leading-6 text-[#242528]">Learning Progress</p>
      <p className="mt-2 font-heading text-5xl font-semibold leading-[58px] tracking-[-0.01em] text-[#242528]">
        55%
      </p>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#f6f6f6]">
        <div className="progress-fill h-full w-[56%] origin-left rounded-full bg-secondary" />
      </div>
    </FloatingCard>
  );
}
