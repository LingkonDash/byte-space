const GLOW_COLORS = {
  blue: { rgb: "0 59 226", alpha: 0.3 },
  lime: { rgb: "203 252 1", alpha: 0.5 },
};

type Glow = {
  color: keyof typeof GLOW_COLORS;
  className: string;
};

// Positions are % of the section (from the Figma 1440 x 1460 frame)
const GLOWS: Glow[] = [
  { color: "lime", className: "-left-[10.6%] -top-[31.9%] w-[max(79%,600px)]" },
  { color: "blue", className: "-left-[35.3%] top-[12.5%] w-[max(79%,600px)]" },
  { color: "blue", className: "left-[56.3%] -top-[31.4%] w-[max(79%,600px)]" },
  { color: "blue", className: "left-[50.1%] top-[54%] w-[max(79%,600px)]" },
  { color: "lime", className: "-left-[19.9%] top-[64.8%] w-[max(46.7%,400px)]" },
];

function glowGradient({ rgb, alpha }: (typeof GLOW_COLORS)[Glow["color"]]) {
  return `radial-gradient(closest-side, rgb(${rgb} / ${alpha}), rgb(${rgb} / ${alpha * 0.75}) 53%, rgb(${rgb} / ${alpha * 0.2}) 75%, transparent)`;
}

/** Soft blurred color blobs. Put it inside a `relative isolate overflow-hidden` section. */
export default function GlowBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {GLOWS.map(({ color, className }) => (
        <div
          key={className}
          style={{ background: glowGradient(GLOW_COLORS[color]) }}
          className={`absolute aspect-square rounded-full ${className}`}
        />
      ))}
    </div>
  );
}
