// src/components/ui/SectionHeading.tsx
const TITLE_STYLES = {
  lg: "max-w-[588px] text-[1.75rem] sm:text-4xl lg:text-[44px]", // Discover
  md: "max-w-[840px] text-2xl sm:text-3xl lg:text-4xl", // Learning paths
};

type SectionHeadingProps = {
  title: string;
  description?: string;
  size?: keyof typeof TITLE_STYLES;
  className?: string;
};

export default function SectionHeading({
  title,
  description,
  size = "lg",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center ${className}`}>
      <h2 className={`text-balance font-medium leading-[1.2] text-[#040819] ${TITLE_STYLES[size]}`}>
        {title}
      </h2>
      {description && (
        <p className="text-base text-[#82868e] md:text-lg md:leading-[1.5]">{description}</p>
      )}
    </div>
  );
}