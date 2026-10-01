import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-blue px-4 py-24 md:px-6">
      {/* Grid background: 120px cells, 2px white lines at 12% opacity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 2px, transparent 2px), linear-gradient(to bottom, #fff 2px, transparent 2px)",
          backgroundSize: "120px 120px",
        }}
      />

      <div className="flex w-full max-w-[935px] flex-col items-center text-center">
        {/* 404 with top-to-bottom fade */}
        <span
          aria-hidden="true"
          className="-mb-[0.25em] inline-block select-none bg-linear-to-b from-secondary from-25% via-secondary/80 via-50% to-transparent to-100% bg-clip-text font-heading text-[clamp(9rem,33.33vw,30rem)] font-semibold leading-none tracking-[-0.01em] text-transparent"
        >
          404
        </span>

        <div className="relative z-10 flex flex-col items-center gap-8">
          <h1 className="text-balance font-heading text-[clamp(2.25rem,5vw,4.5rem)] font-semibold leading-[1.2] tracking-[-0.01em] text-white">
            The page you are looking for doesn&rsquo;t exist
          </h1>

          <p className="max-w-[486px] font-sans text-base leading-7 text-[#e5e6e8] md:text-lg">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-3xl bg-secondary px-6 py-3 font-sans text-lg font-medium leading-[22px] text-[#242528] transition-transform hover:scale-[1.02] active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}