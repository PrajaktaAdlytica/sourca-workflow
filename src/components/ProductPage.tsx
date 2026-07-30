import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Shell } from "@/components/Shell";
import { ButtonLink } from "@/components/Button";
import { SectionHeader, Eyebrow } from "@/components/SectionHeader";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Reveal } from "@/components/Motion";

export interface ProductPageProps {
  eyebrow: string;
  chip: string;
  accentText: string;
  title: string;
  editorial: string;
  description: string;
  features: { icon: ReactNode; t: string; d: string }[];
  benefits: string[];
  faq: { q: string; a: string }[];
  rightPanel?: ReactNode;
  workspace: ReactNode;
  methodology?: ReactNode;
}

export function ProductPage(p: ProductPageProps) {
  return (
    <Shell>
      <section className="mx-auto max-w-7xl px-6 pt-14 md:pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span
              className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white ${p.chip}`}
            >
              {p.eyebrow}
            </span>
            <h1 className="mt-4 text-5xl lg:text-6xl font-semibold text-primary tracking-tight leading-[1] text-balance">
              {p.title} <span className={`font-editorial ${p.accentText}`}>{p.editorial}</span>
            </h1>
            <p className="mt-5 max-w-lg text-[16px] text-muted-foreground leading-relaxed">
              {p.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink to="/request-demo" variant="primary" size="lg">
                Request Demo <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#dashboard" variant="outline" size="lg">
                Explore Platform
              </ButtonLink>
            </div>
          </div>
          <div>{p.rightPanel}</div>
        </div>
      </section>

      <section id="dashboard" className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeader
          eyebrow="Product workspace"
          title={`${p.eyebrow} in a real sourcing workflow.`}
          description="A detailed product view using synthetic records, designed to show the decisions, evidence and hand-offs Sourcixa supports."
          align="center"
        />
        <div className="mt-12">
          <Reveal>{p.workspace}</Reveal>
        </div>
      </section>

      {p.methodology ? (
        <section className="border-y border-border bg-secondary/35">
          <div className="mx-auto max-w-7xl px-6 py-20">{p.methodology}</div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="Features" title="Built for procurement teams." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {p.features.map((f) => (
            <div key={f.t} className="surface-card card-hover p-6">
              <div
                className={`h-10 w-10 rounded-lg bg-accent-soft ${p.accentText} flex items-center justify-center`}
              >
                {f.icon}
              </div>
              <div className="mt-4 text-sm font-semibold text-primary">{f.t}</div>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="surface-card p-10 md:p-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow>Benefits</Eyebrow>
              <h3 className="mt-3 text-3xl md:text-4xl font-semibold text-primary tracking-tight text-balance">
                Real outcomes for procurement teams.
              </h3>
              <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed max-w-md">
                Sourcixa combines supplier intelligence, automation and visibility so every
                procurement stakeholder moves forward together.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {p.benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2.5 text-sm text-primary/85 surface-card p-3.5"
                >
                  <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions." />
        <div className="mt-12">
          <FAQ items={p.faq} />
        </div>
      </section>

      <CTA />
    </Shell>
  );
}
