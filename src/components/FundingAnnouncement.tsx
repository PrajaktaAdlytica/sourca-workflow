import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Eyebrow } from "./SectionHeader";
import { Reveal } from "./Motion";
import { DLABS_PORTFOLIO_URL } from "@/lib/company";

export function FundingAnnouncement() {
  return (
    <section
      id="funding-announcement"
      className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20"
      aria-labelledby="funding-title"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-[calc(var(--radius)+8px)] border border-border bg-primary px-7 py-9 text-primary-foreground shadow-[0_28px_70px_-42px_rgba(15,23,42,0.7)] sm:px-10 sm:py-11 lg:px-14 lg:py-12">
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
          <div className="relative grid gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Eyebrow className="text-orange-300">Funding announcement</Eyebrow>
                <time dateTime="2025-08-29" className="text-xs font-medium text-white/60">
                  Aug 29, 2025
                </time>
              </div>
              <h2
                id="funding-title"
                className="mt-5 text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[46px] text-balance"
              >
                OriginCue secures <span className="font-editorial text-orange-300">$590K</span> in
                funding from Dlabs.
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70 sm:text-base">
                OriginCue is part of Dlabs’ global portfolio of companies building supply-chain
                intelligence for complex operating environments.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <a
                href={DLABS_PORTFOLIO_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View Dlabs portfolio <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                to="/news/funding-announcement"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Read the announcement <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
