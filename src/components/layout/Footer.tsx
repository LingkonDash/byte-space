"use client";

import Image from "next/image";
import Link from "next/link";
import { FOOTER_COLUMNS, FOOTER_LEGAL } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f4f6] border-t-2 border-[#ced0d3]/60 text-foreground">
      <div className="mx-auto max-w-300 px-4 pt-16 pb-8 md:px-6 md:pt-20 md:pb-12 xl:px-0">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Newsletter Column */}
          <div className="lg:col-span-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/brand/logo-dark.svg"
                alt="ByteSpace Logo"
                width={152}
                height={36}
                className="h-9 w-auto"
              />
            </Link>

            <p className="mt-5 max-w-[420px] text-sm text-foreground-muted md:text-base">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-[460px] flex-col gap-3 sm:flex-row sm:items-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full min-w-0 flex-1 rounded-full border border-transparent bg-[#e7e8eb] px-5 py-3 text-sm text-foreground placeholder:text-foreground-muted focus:border-primary focus:bg-white focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-11 min-w-[120px] shrink-0 items-center justify-center rounded-full bg-secondary px-7 text-sm font-semibold text-foreground transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
              >
                Search
              </button>
            </form>

            <p className="mt-3 max-w-[460px] text-xs text-foreground-muted leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          {/* Links Grid (3 Columns) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-6">
            {FOOTER_COLUMNS.map((column, colIdx) => (
              <ul key={colIdx} className="flex flex-col gap-4 text-sm">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#ced0d3]/60 pt-8 text-xs text-foreground-muted sm:flex-row">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <nav aria-label="Legal Links" className="flex flex-wrap items-center gap-6">
            {FOOTER_LEGAL.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
