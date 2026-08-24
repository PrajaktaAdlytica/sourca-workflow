import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Search } from "lucide-react";
import { Shell } from "@/components/Shell";
import { ButtonLink } from "@/components/Button";
import { HeroWorkflow } from "@/components/HeroWorkflow";
import { TrustedBy } from "@/components/TrustedBy";
import { ProblemCards } from "@/components/ProblemCards";
import { SupplierDashboard } from "@/components/SupplierDashboard";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { Reveal, ScrollParallax } from "@/components/Motion";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { DecisionEvidence } from "@/components/DecisionEvidence";
import { CinematicEntry } from "@/components/CinematicEntry";
import { FundingAnnouncement } from "@/components/FundingAnnouncement";
import { pageUrl } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OriginCue — Find better suppliers. Source with confidence." },
      {
        name: "description",
        content:
          "AI-powered procurement platform for supplier discovery, RFQ management and supplier risk intelligence.",
      },
    ],
    links: [{ rel: "canonical", href: pageUrl() }],
  }),
  component: Home,
});

function Home() {
  return (
    <Shell cinematic>
      <CinematicEntry />

      {/* HERO */}
      <section id="main-hero" className="relative scroll-mt-16">
        <div className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-20 md:pb-24 min-h-[82vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-14 items-center w-full">
            <ScrollParallax distance={-34}>
              <Eyebrow>AI Procurement Platform</Eyebrow>
              <h1 className="mt-4 text-[42px] sm:text-5xl lg:text-[64px] leading-[1.02] font-semibold text-primary tracking-tight text-balance">
                Find better suppliers.
                <br />
                Source with <span className="font-editorial text-accent">confidence.</span>
              </h1>
              <p className="mt-6 max-w-xl text-[16px] text-muted-foreground leading-relaxed">
                Search suppliers, compare quotations, evaluate risk and manage procurement workflows
                from one intelligent sourcing platform.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink to="/request-demo" variant="primary" size="lg">
                  Request Demo <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href="#platform" variant="outline" size="lg">
                  Explore Platform
                </ButtonLink>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent" /> Sources shown
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent" /> Freshness shown
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent" /> Review path
                </div>
              </div>
            </ScrollParallax>
            <ScrollParallax distance={42}>
              <HeroWorkflow />
            </ScrollParallax>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="The Problem" title="Sourcing shouldn't take weeks." />
        <div className="mt-14">
          <ProblemCards />
        </div>
      </section>

      <TrustedBy />

      {/* SOLUTION / PRODUCTS */}
      <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <Eyebrow>The Solution</Eyebrow>
            <h2 className="mt-3 text-4xl lg:text-5xl font-semibold text-primary tracking-tight leading-[1.05] text-balance">
              One intelligent{" "}
              <span className="font-editorial text-accent">sourcing workspace.</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed max-w-md">
              Manage supplier discovery, RFQs and supplier risk inside one connected procurement
              platform.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <Reveal>
              <ProductCard
                tone="orange"
                eyebrow="Find"
                title="OriginCue Find"
                tagline="Supplier discovery."
                to="/products/find"
                preview={<FindPreview />}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <ProductCard
                tone="teal"
                eyebrow="RFQ"
                title="OriginCue RFQ"
                tagline="RFQ management."
                to="/products/rfq"
                preview={<RFQPreview />}
              />
            </Reveal>
            <Reveal delay={0.16}>
              <ProductCard
                tone="slate"
                eyebrow="Risk"
                title="OriginCue Risk"
                tagline="Supplier intelligence."
                to="/products/risk"
                preview={<RiskPreview />}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-[1fr_2.2fr] gap-10 items-start">
          <div>
            <Eyebrow>The Platform</Eyebrow>
            <h2 className="mt-3 text-4xl lg:text-5xl font-semibold text-primary tracking-tight leading-[1.05] text-balance">
              Everything in <span className="font-editorial text-accent">one place.</span>
            </h2>
            <p className="mt-5 text-[15px] text-muted-foreground leading-relaxed max-w-md">
              Real-time visibility across your entire procurement workflow.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-primary/85">
              {[
                "Search and discover suppliers",
                "Manage RFQs and quotations",
                "Evaluate risk and performance",
                "Make confident sourcing decisions",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="#platform" variant="outline" size="md">
                Explore Platform
              </ButtonLink>
            </div>
          </div>
          <Reveal>
            <SupplierDashboard />
          </Reveal>
        </div>
      </section>

      {/* DECISION EVIDENCE */}
      <DecisionEvidence />

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, transparent pricing."
          description="Choose the plan that fits your team today — scale as your procurement programme grows."
        />
        <div className="mt-14">
          <Pricing />
        </div>
      </section>

      {/* BUYER ASSURANCE */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <SectionHeader
          eyebrow="Buyer assurance"
          title="Evidence before claims."
          description="OriginCue is designed to make supplier research, comparisons and risk decisions inspectable—not hide them behind a single score."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              t: "Inspect the supplier source",
              d: "Open the legal-entity record, supporting document, integration or provider behind an important field.",
            },
            {
              t: "Understand the recommendation",
              d: "See the criteria, buyer-defined weights and missing information before choosing a shortlist or award.",
            },
            {
              t: "Keep the review history",
              d: "Preserve who confirmed, dismissed or escalated a finding and what remediation followed.",
            },
          ].map((t) => (
            <div key={t.t} className="surface-card card-hover p-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Check className="h-4 w-4" />
              </div>
              <div className="mt-5 text-sm font-semibold text-primary">{t.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <FundingAnnouncement />

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions." />
        <div className="mt-12">
          <FAQ
            items={[
              {
                q: "How does OriginCue find suppliers?",
                a: "OriginCue can combine customer records, supplier submissions, official registries and licensed provider data where available. Every important field keeps its source, timestamp and review state.",
              },
              {
                q: "Can I compare supplier quotations?",
                a: "Yes. OriginCue automatically compares pricing, delivery times, commercial terms and supplier scores in one comparison workspace.",
              },
              {
                q: "Does OriginCue monitor supplier risk?",
                a: "OriginCue brings available compliance, ESG, financial and operational signals into a source-labelled review queue. Actual refresh cadence depends on the source and is shown in the product.",
              },
              {
                q: "Can multiple procurement teams collaborate?",
                a: "Yes. Procurement managers, sourcing specialists, finance teams and stakeholders can collaborate throughout the sourcing process.",
              },
              {
                q: "Does OriginCue integrate with ERP systems?",
                a: "Yes. OriginCue is designed to integrate with ERP, procurement and supplier management systems.",
              },
              {
                q: "Is OriginCue suitable for global sourcing?",
                a: "Yes. OriginCue supports international supplier discovery, multi-country sourcing and cross-border procurement workflows.",
              },
            ]}
          />
        </div>
      </section>

      <CTA />
    </Shell>
  );
}

function ProductCard({
  tone,
  eyebrow,
  title,
  tagline,
  to,
  preview,
}: {
  tone: "orange" | "teal" | "slate";
  eyebrow: string;
  title: string;
  tagline: string;
  to: string;
  preview: React.ReactNode;
}) {
  const tones = {
    orange: { chip: "bg-accent text-accent-foreground", accent: "text-accent" },
    teal: { chip: "bg-teal text-white", accent: "text-teal" },
    slate: { chip: "bg-slate-700 text-white", accent: "text-slate-700" },
  }[tone];
  return (
    <div className="surface-card card-hover p-5 flex flex-col">
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${tones.chip}`}
        >
          {eyebrow}
        </span>
      </div>
      <div className="mt-3">
        <div className="text-sm font-semibold text-primary">{title}</div>
        <div className="text-xs text-muted-foreground">{tagline}</div>
      </div>
      <div className="mt-4 flex-1">{preview}</div>
      <div className="mt-4">
        <ButtonLink to={to} variant="link" size="sm" className={`${tones.accent} px-0`}>
          Learn more <ArrowRight className="h-3.5 w-3.5" />
        </ButtonLink>
      </div>
    </div>
  );
}

function FindPreview() {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-border bg-background/50">
        <Search className="h-3 w-3 text-muted-foreground" />
        <span className="text-[10px] text-muted-foreground">Search suppliers…</span>
      </div>
      {[
        { n: "ElectroCo", c: "Poland" },
        { n: "Voltix", c: "Germany" },
        { n: "TechWire", c: "Czechia" },
      ].map((s) => (
        <div
          key={s.n}
          className="flex items-center gap-2 p-2 rounded-md border border-border bg-background/40"
        >
          <div className="h-6 w-6 rounded-md bg-accent-soft text-accent flex items-center justify-center text-[8px] font-bold">
            {s.n[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-semibold text-primary truncate">{s.n}</div>
            <div className="text-[9px] text-muted-foreground">{s.c}</div>
          </div>
          <div className="text-[9px] text-amber-500">★★★★★</div>
        </div>
      ))}
    </div>
  );
}

function RFQPreview() {
  return (
    <table className="w-full text-[10px]">
      <thead>
        <tr className="text-muted-foreground text-left">
          <th className="pb-1 font-normal">Supplier</th>
          <th className="pb-1 font-normal">Price</th>
          <th className="pb-1 font-normal">Delivery</th>
        </tr>
      </thead>
      <tbody className="text-primary/80">
        {[
          ["ElectroCo", "$4.28", "12d"],
          ["Voltix", "$4.65", "15d"],
          ["TechWire", "$4.90", "18d"],
        ].map((r) => (
          <tr key={r[0]} className="border-t border-border">
            <td className="py-1.5">{r[0]}</td>
            <td className="py-1.5 tabular-nums">{r[1]}</td>
            <td className="py-1.5 tabular-nums">{r[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function RiskPreview() {
  return (
    <div className="flex items-start gap-3">
      <div className="relative h-20 w-20">
        <svg viewBox="0 0 64 64" className="h-20 w-20 -rotate-90">
          <circle cx="32" cy="32" r="28" className="stroke-secondary" strokeWidth="6" fill="none" />
          <circle
            cx="32"
            cy="32"
            r="28"
            className="stroke-emerald-500"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${(32 / 100) * 2 * Math.PI * 28} ${2 * Math.PI * 28}`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-lg font-semibold text-primary leading-none">32</div>
          <div className="text-[8px] text-emerald-700 mt-0.5">Low Risk</div>
        </div>
      </div>
      <div className="flex-1 space-y-1.5 text-[10px]">
        <div className="flex justify-between">
          <span className="text-primary/70">Compliance</span>
          <span className="text-emerald-700 font-medium">Low</span>
        </div>
        <div className="flex justify-between">
          <span className="text-primary/70">Financial</span>
          <span className="text-amber-700 font-medium">Medium</span>
        </div>
        <div className="flex justify-between">
          <span className="text-primary/70">ESG</span>
          <span className="text-emerald-700 font-medium">Low</span>
        </div>
      </div>
    </div>
  );
}
