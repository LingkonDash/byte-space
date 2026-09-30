type MaskImageProps = {
  src: string;
  label?: string; // omit for decorative images
  className?: string;
};

/**
 * Paints an SVG in any color: the file is used as a CSS mask over a colored box.
 * Set size and color with classes, e.g. "size-9 bg-black".
 */
export default function MaskImage({ src, label, className = "" }: MaskImageProps) {
  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{
        maskImage: `url(${src})`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
      className={`block ${className}`}
    />
  );
}