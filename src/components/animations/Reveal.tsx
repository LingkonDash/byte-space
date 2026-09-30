import type { ElementType, ReactNode } from "react";

type RevealProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** Hidden until RevealSection animates it in. Only hides when motion is allowed. */
export default function Reveal({ as: Tag = "div", className = "", children }: RevealProps) {
  return (
    <Tag data-reveal className={`motion-safe:opacity-0 ${className}`}>
      {children}
    </Tag>
  );
}