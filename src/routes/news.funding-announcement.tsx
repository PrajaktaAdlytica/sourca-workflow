import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Shell } from "@/components/Shell";
import { Eyebrow } from "@/components/SectionHeader";
import { DLABS_PORTFOLIO_URL } from "@/lib/company";
import { pageUrl } from "@/lib/site";

const TITLE = "OriginCue secures $590K in funding from Dlabs";
const DESCRIPTION =
  "OriginCue has secured $590K in funding from Dlabs and joins its global portfolio of supply-chain intelligence companies.";

export const Route = createFileRoute("/news/funding-announcement")({
  head: () => ({
    meta: [
      { title: `${TITLE} — OriginCue` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: "2025-08-29" },
    ],
    links: [{ rel: "canonical", href: pageUrl("/news/funding-announcement") }],
  }),
  component: FundingArticle,
});

function FundingArticle() {
  return (
    <Shell>
      <article className="mx-auto max-w-4xl px-6 pb-24 pt-16 sm:pt-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <header className="mt-12 border-b border-border pb-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Eyebrow>Funding announcement</Eyebrow>
            <time dateTime="2025-08-29" className="text-xs font-medium text-muted-foreground">
              Aug 29, 2025
            </time>
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.04] tracking-tight text-primary text-balance sm:text-5xl lg:text-6xl">
            OriginCue secures <span className="font-editorial text-accent">$590K</span> in funding
            from Dlabs.
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            OriginCue is part of Dlabs’ global portfolio of companies building supply-chain
            intelligence for complex operating environments.
          </p>
        </header>

        <div className="grid gap-10 py-12 md:grid-cols-[minmax(0,1fr)_240px]">
          <div className="space-y-6 text-[16px] leading-8 text-primary/80">
            <p>OriginCue has secured $590K in funding from Dlabs.</p>
            <p>
              OriginCue operates in supply-chain intelligence, supporting teams working across
              supplier discovery, RFQs and supplier risk.
            </p>
            <p>
              As part of Dlabs’ global portfolio, OriginCue joins companies building for complex
              operating environments.
            </p>
          </div>
          <aside
            className="h-fit rounded-xl border border-border bg-surface p-6"
            aria-label="Announcement details"
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Announcement record
            </div>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Date</dt>
                <dd className="mt-1 font-semibold text-primary">Aug 29, 2025</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Funding</dt>
                <dd className="mt-1 font-semibold text-primary">$590K</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Investor</dt>
                <dd className="mt-1 font-semibold text-primary">Dlabs</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Sector</dt>
                <dd className="mt-1 font-semibold text-primary">Supply-chain intelligence</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="rounded-xl border border-accent/20 bg-accent-soft/45 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <div className="text-sm font-semibold text-primary">Explore the Dlabs portfolio</div>
            <p className="mt-1 text-sm text-muted-foreground">
              View OriginCue alongside Dlabs’ global portfolio companies.
            </p>
          </div>
          <a
            href={DLABS_PORTFOLIO_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:mt-0"
          >
            View Dlabs portfolio <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </article>
    </Shell>
  );
}
