"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/types";

type NavLinkProps = NavItem & {
  className?: string;
  onClick?: () => void;
};

export default function NavLink({ label, href, className = "", onClick }: NavLinkProps) {
  const isActive = usePathname() === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`transition-colors hover:text-white ${
        isActive ? "font-bold text-[#f5f5f6]" : "text-[#ced0d3]"
      } ${className}`}
    >
      {label}
    </Link>
  );
}