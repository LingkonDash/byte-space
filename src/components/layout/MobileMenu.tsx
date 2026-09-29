"use client";

import { useEffect, useRef } from "react";
import { AUTH_LINKS, NAV_LINKS } from "@/data/navigation";
import { gsap, runMotionSafe } from "@/lib/gsap";
import NavLink from "./NavLink";

type MobileMenuProps = {
  onNavigate: () => void; // closes the menu after a link is tapped
};

export default function MobileMenu({ onNavigate }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Panel slides down, then the links fade in one by one
  useEffect(
    () =>
      runMotionSafe(menuRef, () => {
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, y: -12 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" },
        );
        gsap.from(".menu-item", {
          opacity: 0,
          y: 8,
          duration: 0.4,
          delay: 0.1,
          stagger: 0.06,
          ease: "power2.out",
        });
      }),
    [],
  );

  return (
    <div
      id="mobile-menu"
      ref={menuRef}
      className="absolute inset-x-4 top-full mt-2 flex flex-col gap-5 rounded-2xl border border-white/15 bg-brand-blue p-6 shadow-2xl shadow-black/30 motion-safe:opacity-0 md:hidden"
    >
      {NAV_LINKS.map((link) => (
        <NavLink key={link.href} {...link} className="menu-item text-lg" onClick={onNavigate} />
      ))}

      <hr className="menu-item border-white/10" />

      {AUTH_LINKS.map((link) => (
        <NavLink key={link.href} {...link} className="menu-item text-lg" onClick={onNavigate} />
      ))}
    </div>
  );
}