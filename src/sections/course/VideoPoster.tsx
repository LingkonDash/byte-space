import Image from "next/image";
import { HiPlay } from "react-icons/hi2";

type VideoPosterProps = {
  src: string;
  alt: string;
};

export default function VideoPoster({ src, alt }: VideoPosterProps) {
  return (
    <div className="relative aspect-[720/479] overflow-hidden rounded-3xl bg-[#443131]">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1280px) 725px, (min-width: 1024px) 524px, 92vw"
        className="object-cover"
      />
      <button
        type="button"
        aria-label="Play course preview"
        className="absolute left-[52.2%] top-[53.4%] grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl border border-[#4f4f4f] bg-[#3d3d3d]/25 text-[#f5f2ff] backdrop-blur-xl transition-transform duration-300 hover:scale-105 md:size-[104px] md:rounded-3xl"
      >
        <HiPlay className="size-8 md:size-12" />
      </button>
    </div>
  );
}
