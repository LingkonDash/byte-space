import Image from "next/image";
import Link from "next/link";
import { FOOTER_COLUMNS } from "@/data/navigation";

export default function CreatorFooter() {
  return (
    <footer className="border-t border-[#ced0d3]/60 bg-[#f3f3f5]">
      <div className="mx-auto max-w-[1200px] px-4 pb-12 pt-12 md:px-6 xl:px-0">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex max-w-[528px] flex-col gap-10 md:gap-[45px]">
            <div className="flex items-center gap-2">
              <Image src="/images/brand/logo-dark.svg" alt="ByteSpace" width={152} height={36} className="h-9 w-auto" />
            </div>

            <p className="text-sm leading-6 text-[#242528]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <div className="flex flex-col gap-6">
              <form className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="h-[52px] w-full rounded-full border border-[#d6d8dc] bg-white px-6 text-base text-[#242528] outline-none placeholder:text-[#242528] focus:border-primary sm:max-w-[376px]"
                />
                <button
                  type="submit"
                  className="h-[46px] shrink-0 rounded-3xl bg-secondary px-6 text-lg font-medium text-[#242528] transition-opacity hover:opacity-90"
                >
                  Search
                </button>
              </form>
              <p className="max-w-[504px] text-xs leading-[1.5] text-[#242528]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from
                our company.
              </p>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-10 gap-y-10 lg:flex-nowrap">
            {FOOTER_COLUMNS.map((column, index) => (
              <div key={index} className="flex flex-col gap-4 text-sm leading-6 text-[#242528]">
                <ul className="flex flex-col gap-4">
                  {column.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="transition-colors hover:text-primary">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
