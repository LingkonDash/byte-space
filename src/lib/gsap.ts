import type { RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

/**
 * Runs GSAP animations only if the user has NOT asked for reduced motion.
 * Selectors inside `animation` are scoped to `scope`.
 * Return value is a cleanup function, so use it directly in useEffect.
 */
export function runMotionSafe(
  scope: RefObject<Element | null>,
  animation: () => void,
) {
  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", animation, scope);
  return () => mm.revert();
}

/** Returns `seconds`, or 0 (instant) when the user prefers reduced motion. */
export function motionDuration(seconds: number) {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : seconds;
}