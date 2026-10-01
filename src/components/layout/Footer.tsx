import Image from "next/image";
import Link from "next/link";
import { BROWSE_LINKS, PLATFORM_LINKS } from "@/data/course-detail";

const LINK_GROUPS = [
  { title: "Featured Courses", links: BROWSE_LINKS.slice(0, 5) },
  { title: "Development", links: BROWSE_LINKS.slice(5) },
  { title: "Become a Creator", links: PLATFORM_LINKS },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#d9d9d9] bg-[#f3f3f5]">
      <div className="mx-auto max-w-[1200px] px-4 pb-8 pt-10 md:px-6 md:pb-10 md:pt-12 xl:px-0">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-[520px] flex-col gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/images/brand/logo-dark.svg"
                alt="ByteSpace"
                width={152}
                height={36}
                className="h-9 w-auto"
              />
            </div>

            <p className="text-sm leading-6 text-[#242528]">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-[52px] w-full rounded-full border border-[#d8d8dc] bg-[#f3f3f5] px-5 text-base text-[#242528] outline-none placeholder:text-[#242528] focus:border-primary sm:max-w-[376px]"
              />
              <button
                type="button"
                className="h-[46px] shrink-0 rounded-full bg-secondary px-7 text-base font-medium text-[#242528] transition-opacity hover:opacity-90"
              >
                Search
              </button>
            </div>

            <p className="max-w-[460px] text-xs leading-[1.5] text-[#242528]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          <nav aria-label="Footer links" className="grid grid-cols-3 gap-x-10 gap-y-6 text-sm text-[#242528]">
            {LINK_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                {group.links.map(({ label, href }) => (
                  <Link key={label} href={href} className="transition-colors hover:text-primary">
                    {label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#d9d9d9] pt-6 text-xs text-[#242528] md:flex-row md:items-center md:justify-between">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies Settings</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
