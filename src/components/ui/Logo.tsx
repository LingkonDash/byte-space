import Image from "next/image";
import Link from "next/link";

const LOGO_SRC = {
  light: "/images/brand/logo-light.svg", // for dark backgrounds (header)
  dark: "/images/brand/logo-dark.svg", // for light backgrounds (footer)
};

type LogoProps = {
  variant?: keyof typeof LOGO_SRC;
  className?: string;
};

export default function Logo({ variant = "light", className = "" }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Image
        src={LOGO_SRC[variant]}
        alt="ByteSpace"
        width={171}
        height={37}
        priority
        className="h-8 w-auto md:h-9"
      />
    </Link>
  );
}
