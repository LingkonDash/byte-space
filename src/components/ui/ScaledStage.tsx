import type { ReactNode } from "react";

type ScaledStageProps = {
  width: number; // design size in px, from Figma
  height: number;
  className?: string; // set --scale per breakpoint, e.g. "[--scale:.6] lg:[--scale:1]"
  children: ReactNode;
};

/** Keeps a Figma composition pixel-exact and shrinks it as one piece on small screens. */
export default function ScaledStage({ width, height, className = "", children }: ScaledStageProps) {
  return (
    <div
      className={`relative shrink-0 ${className}`}
      style={{
        width: `calc(${width}px * var(--scale, 1))`,
        height: `calc(${height}px * var(--scale, 1))`,
      }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ width, height, transform: "scale(var(--scale, 1))" }}
      >
        {children}
      </div>
    </div>
  );
}
