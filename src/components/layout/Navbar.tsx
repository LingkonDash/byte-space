"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HiBars3, HiOutlineShoppingBag, HiXMark } from "react-icons/hi2";
import Logo from "@/components/ui/Logo";
import { AUTH_LINKS, NAV_LINKS } from "@/data/navigation";
import { useNavbarScroll } from "@/hooks/useNavbarScroll";
import { gsap, motionDuration, runMotionSafe } from "@/lib/gsap";
import MobileMenu from "./MobileMenu";
import NavLink from "./NavLink";

function CartLink({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/cart"
      aria-label="Cart"
      className={`text-white transition-opacity hover:opacity-80 ${className}`}
    >
      <HiOutlineShoppingBag size={24} />
    </Link>
  );
}

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { isScrolled, isHidden } = useNavbarScroll();

  // Transparent at the top on all pages. Solid on scroll.
  const hasBackground = isScrolled;

  // Intro: logo, links and buttons fade in one after another
  useEffect(
    () =>
      runMotionSafe(headerRef, () => {
        gsap.fromTo(
          ".nav-animate",
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.2, stagger: 0.1, ease: "power3.out" },
        );
      }),
    [],
  );

  // Background fades in and out
  useEffect(() => {
    gsap.to(backgroundRef.current, {
      opacity: hasBackground ? 1 : 0,
      duration: motionDuration(0.3),
      ease: "power2.out",
      overwrite: "auto",
    });
  }, [hasBackground]);

  // Navbar slides out of view when scrolling down, back in when scrolling up
  useEffect(() => {
    gsap.to(headerRef.current, {
      yPercent: isHidden && !isOpen ? -100 : 0, // never hide while the mobile menu is open
      duration: motionDuration(0.4),
      ease: "power3.out",
      overwrite: "auto",
    });
  }, [isHidden, isOpen]);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      {/* Background layer: its opacity is animated by GSAP */}
      <div
        ref={backgroundRef}
        aria-hidden
        className="absolute inset-0 bg-brand-blue opacity-0"
      />

      <div className="relative mx-auto flex h-20 max-w-300 items-center justify-between px-4 md:grid md:h-30 md:grid-cols-[1fr_auto_1fr] md:px-6 xl:px-0">
        <Logo className="nav-animate motion-safe:opacity-0" />

        {/* Desktop: centered links */}
        <nav
          aria-label="Main"
          className="nav-animate hidden gap-6 motion-safe:opacity-0 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        {/* Desktop: auth links + cart */}
        <div className="nav-animate hidden items-center gap-6 justify-self-end motion-safe:opacity-0 md:flex">
          {AUTH_LINKS.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
          <CartLink />
        </div>

        {/* Mobile: cart + menu button */}
        <div className="nav-animate -mr-2 flex items-center motion-safe:opacity-0 md:hidden">
          <CartLink className="p-2" />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((open) => !open)}
            className="p-2 text-white"
          >
            {isOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
          </button>
        </div>
      </div>

      {isOpen && <MobileMenu onNavigate={() => setIsOpen(false)} />}
    </header>
  );
}