import Image from "next/image";

type AvatarStackProps = {
  avatars: string[];
  extra?: string; // e.g. "26+"
};

export default function AvatarStack({ avatars, extra }: AvatarStackProps) {
  return (
    <div className="flex -space-x-2">
      {avatars.map((src) => (
        <Image key={src} src={src} alt="" width={32} height={32} className="size-8 rounded-full object-cover" />
      ))}
      {extra && (
        <span className="grid size-8 place-items-center rounded-full bg-secondary text-xs font-medium text-[#242528]">
          {extra}
        </span>
      )}
    </div>
  );
}