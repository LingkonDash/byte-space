import type { ReactNode } from "react";

type CategoryPillProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon?: ReactNode;
};

export default function CategoryPill({ label, isActive, onClick, icon }: CategoryPillProps) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
      className={`inline-flex items-center gap-1 rounded-full px-3 py-2.5 text-sm font-medium leading-[19px] transition-colors duration-300 md:px-4 md:py-3 md:text-base ${
        isActive
          ? "bg-secondary text-[#242528]"
          : "bg-[#ebebed] text-[#4b4c53] hover:bg-[#e0e0e4]"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}
