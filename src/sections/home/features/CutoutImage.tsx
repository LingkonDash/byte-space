// CutoutImage.tsx
import Image from "next/image";

type CutoutImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

/** A transparent cutout photo with the soft drop shadow used in the Figma. */
export default function CutoutImage({ src, alt, width, height, className = "" }: CutoutImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={`${width}px`}
      className={`max-w-none [filter:drop-shadow(0_8px_12px_rgb(0_0_0/0.08))_drop-shadow(0_28px_44px_rgb(0_0_0/0.12))] ${className}`}
    />
  );
}
