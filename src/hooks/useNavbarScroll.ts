import { useEffect, useState } from "react";

const SCROLLED_AT = 20; // px scrolled before the navbar gets its background
const HIDE_AFTER = 120; // never hide the navbar near the top of the page
const MIN_SCROLL_STEP = 5; // ignore tiny scroll jitters
const REVEAL_ZONE = 80; // mouse this close to the top (px) brings the navbar back

export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > SCROLLED_AT);

      if (y < HIDE_AFTER) {
        setIsHidden(false);
        lastY = y;
        return;
      }

      if (Math.abs(y - lastY) < MIN_SCROLL_STEP) return;
      setIsHidden(y > lastY); // scrolling down hides, scrolling up shows
      lastY = y;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientY < REVEAL_ZONE) setIsHidden(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return { isScrolled, isHidden };
}