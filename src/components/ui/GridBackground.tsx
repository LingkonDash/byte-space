const LINE_COLOR = "rgb(255 255 255 / 0.12)";

const gridStyle = {
  backgroundImage: `linear-gradient(to right, ${LINE_COLOR} 2px, transparent 2px), linear-gradient(to bottom, ${LINE_COLOR} 2px, transparent 2px)`,
  backgroundSize: "var(--grid-size) var(--grid-size)",
  backgroundPosition: "-1px -1px",
};

type GridBackgroundProps = {
  className?: string;
};

export default function GridBackground({ className = "" }: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      style={gridStyle}
      className={`pointer-events-none absolute inset-0 [--grid-size:60px] md:[--grid-size:120px] ${className}`}
    />
  );
}