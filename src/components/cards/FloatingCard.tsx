import type { ReactNode } from "react";

type FloatingCardProps = {
  className?: string;
  children: ReactNode;
};

export default function FloatingCard({ className = "", children }: FloatingCardProps) {
  return <div className={`rounded-2xl bg-white p-4 ${className}`}>{children}</div>;
}
