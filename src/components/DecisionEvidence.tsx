import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarClock,
  Check,
  ChevronRight,
  CircleUserRound,
  ClipboardCheck,
  Database,
  FileSearch,
  GitCompareArrows,
  Home,
  ListChecks,
  Mail,
  MapPin,
  MoreHorizontal,
  Search,
  Settings,
  Share2,
  ShieldCheck,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/SectionHeader";
import { Reveal } from "@/components/Motion";

type EvidenceView = "sources" | "comparison" | "remediation";

const promises: {
  id: EvidenceView;
  title: string;
  description: string;
  icon: typeof Search;
}[] = [
  {
    id: "sources",
    title: "Find relevant suppliers",
    description: "Discover suppliers backed by verified, source-labelled information.",
    icon: Search,
  },
  {
    id: "comparison",
    title: "Compare complete offers",
    description: "Evaluate proposals side by side to understand what is best and why.",
    icon: GitCompareArrows,
  },
  {
    id: "remediation",
    title: "Resolve risk with an owner",
    description: "Turn findings into tracked actions with clear ownership and due dates.",
    icon: ShieldCheck,
  },
];

export function DecisionEvidence() {
  const [activeView, setActiveView] = useState<EvidenceView>("sources");
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 35%"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reducedMotion) return;
    if (progress < 0.38) setActiveView("sources");
    else if (progress < 0.72) setActiveView("comparison");
    else setActiveView("remediation");
  });

  return (
    <section
      ref={sectionRef}
      id="decision-evidence"
      className="mx-auto max-w-7xl scroll-mt-16 px-6 py-24 md:py-28 lg:min-h-[145vh]"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[0.78fr_1.72fr] lg:gap-10 xl:gap-14">
        <Reveal className="lg:sticky lg:top-24">
          <div>
            <Eyebrow>Why Sourcixa</Eyebrow>
            <h2 className="mt-4 max-w-lg text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] text-primary sm:text-5xl lg:text-[48px]">
              Every decision comes with the evidence behind it.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Sourcixa brings sourced data, explainable scoring and clear actions into one connected
              view—so buyers can decide with confidence.
            </p>

            <div className="mt-10 space-y-3" role="list" aria-label="Buyer outcomes">
              {promises.map((promise) => {
                const Icon = promise.icon;
                const isActive = activeView === promise.id;
                return (
                  <button
                    key={promise.id}
                    type="button"
                    onClick={() => setActiveView(promise.id)}
                    className={cn(
                      "group flex w-full items-center gap-4 rounded-xl border px-3 py-3 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                      isActive
                        ? "border-accent/30 bg-surface shadow-[0_14px_35px_-28px_rgba(15,23,42,0.55)]"
                        : "border-transparent hover:border-border hover:bg-surface/70",
                    )}
                    aria-pressed={isActive}
                  >
                    <span
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors",
                        isActive ? "bg-accent-soft text-accent" : "bg-secondary text-primary/60",
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-primary">
                        {promise.title}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                        {promise.description}
                      </span>
                    </span>
                    <ArrowRight
                      className={cn(
                        "hidden h-4 w-4 shrink-0 transition-all sm:block",
                        isActive
                          ? "translate-x-0 text-accent"
                          : "-translate-x-1 text-muted-foreground/40 group-hover:translate-x-0",
                      )}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:sticky lg:top-24">
          <div>
            <div className="mb-3 flex items-center justify-end gap-2 text-[10px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Illustrative workflow · synthetic records
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_24px_65px_-38px_rgba(15,23,42,0.42)]">
              <div className="grid min-h-[650px] xl:grid-cols-[142px_1fr]">
                <WorkspaceNavigation />
                <div className="min-w-0 p-4 sm:p-5 xl:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
                    <div>
                      <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                        RFQ-2026-045 <ChevronRight className="h-3 w-3" /> Office chairs
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <h3 className="text-xl font-semibold text-primary">Ergocomfort GmbH</h3>
                        <span className="rounded-full border border-teal/25 bg-teal-soft px-2 py-0.5 text-[9px] font-semibold text-teal">
                          Selected
                        </span>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3 w-3" /> Munich, Germany
                        </span>
                        <span>Supplier since 2024</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" className="workspace-button hidden sm:inline-flex">
                        <Share2 className="h-3.5 w-3.5" /> Share
                      </button>
                      <button
                        type="button"
                        className="workspace-button workspace-button-primary hidden sm:inline-flex"
                      >
                        <Mail className="h-3.5 w-3.5" /> Contact supplier
                      </button>
                      <button
                        type="button"
                        className="workspace-button"
                        aria-label="More supplier actions"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 lg:grid-cols-2">
                    <CompanyFacts active={activeView === "sources"} />
                    <RiskScore active={activeView === "sources"} />
                  </div>
                  <QuoteComparison active={activeView === "comparison"} />
                  <RecommendedAction active={activeView === "remediation"} />
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-[10px] leading-relaxed text-muted-foreground lg:hidden">
              Tap an outcome above to focus its supporting evidence.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WorkspaceNavigation() {
  const items = [
    { label: "Overview", icon: Home },
    { label: "RFQs", icon: FileSearch },
    { label: "Suppliers", icon: Users, active: true },
    { label: "Compare", icon: GitCompareArrows },
    { label: "Insights", icon: BarChart3 },
    { label: "Tasks", icon: ClipboardCheck },
    { label: "Data Hub", icon: Database },
    { label: "Settings", icon: Settings },
  ];

  return (
    <aside className="hidden border-r border-border bg-background/55 p-4 xl:block">
      <div className="flex items-center gap-2 px-2 text-xs font-semibold text-primary">
        <img
          src="/sourcixa-favicon.svg"
          alt=""
          width="24"
          height="24"
          className="h-6 w-6 rounded-md"
        />
        Sourcixa
      </div>
      <nav className="mt-7 space-y-1" aria-label="Illustrative workspace">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-2 text-[10px]",
                item.active ? "bg-accent-soft text-accent" : "text-muted-foreground",
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {item.label}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

function CompanyFacts({ active }: { active: boolean }) {
  const facts = [
    ["Legal name", "Ergocomfort GmbH", "Commercial Register", "2 days ago"],
    ["Registration", "HRB 123456", "Commercial Register", "2 days ago"],
    ["VAT number", "DE123456789", "EU VIES", "3 days ago"],
    ["Employees", "120–250", "Company website", "7 days ago"],
  ];

  return (
    <section
      className={cn(
        "rounded-xl border bg-background/35 p-4 transition-all duration-300",
        active ? "border-teal/40 shadow-[0_0_0_3px_rgba(15,118,110,0.07)]" : "border-border",
      )}
      aria-label="Company facts and sources"
    >
      <div className="flex items-center justify-between gap-3">
        <h4 className="text-xs font-semibold text-primary">Company facts</h4>
        <span className="text-[9px] text-muted-foreground">Source · freshness</span>
      </div>
      <div className="mt-3 divide-y divide-border">
        {facts.map(([label, value, source, fresh]) => (
          <div key={label} className="grid grid-cols-[0.8fr_1fr] gap-3 py-2.5">
            <div>
              <div className="text-[9px] text-muted-foreground">{label}</div>
              <div className="mt-0.5 text-[10px] font-medium text-primary">{value}</div>
            </div>
            <div className="flex items-start gap-1.5">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-teal-soft text-teal">
                <Building2 className="h-3 w-3" />
              </span>
              <div>
                <div className="text-[9px] font-medium text-primary/75">{source}</div>
                <div className="text-[8px] text-muted-foreground">Checked {fresh}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-3 inline-flex items-center gap-1 text-[9px] font-semibold text-teal"
      >
        View all company facts <ArrowRight className="h-3 w-3" />
      </button>
    </section>
  );
}

function RiskScore({ active }: { active: boolean }) {
  const signals = [
    ["Financial health", "Medium", "w-[68%]", "bg-accent"],
    ["Delivery performance", "Low", "w-[48%]", "bg-teal"],
    ["Compliance", "Medium", "w-[66%]", "bg-accent"],
    ["Sustainability", "Low", "w-[51%]", "bg-teal"],
  ];

  return (
    <section
      className={cn(
        "rounded-xl border bg-background/35 p-4 transition-all duration-300",
        active ? "border-teal/40 shadow-[0_0_0_3px_rgba(15,118,110,0.07)]" : "border-border",
      )}
      aria-label="Explainable supplier risk score"
    >
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-semibold text-primary">Risk score</h4>
        <button type="button" aria-label="Risk scoring settings" className="text-muted-foreground">
          <SlidersHorizontal className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-accent bg-accent-soft text-base font-semibold text-accent">
          72
        </span>
        <div>
          <div className="text-xs font-semibold text-primary">Medium risk</div>
          <div className="mt-0.5 text-[9px] text-muted-foreground">Updated 2 days ago</div>
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {signals.map(([label, status, width, tone]) => (
          <div key={label} className="grid grid-cols-[1fr_84px_42px] items-center gap-2">
            <span className="text-[9px] text-primary/70">{label}</span>
            <span className="h-1 overflow-hidden rounded-full bg-secondary">
              <span className={cn("block h-full rounded-full", width, tone)} />
            </span>
            <span
              className={cn(
                "text-right text-[8px] font-medium",
                status === "Low" ? "text-teal" : "text-accent",
              )}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-5 inline-flex items-center gap-1 text-[9px] font-semibold text-teal"
      >
        View scoring methodology <ArrowRight className="h-3 w-3" />
      </button>
    </section>
  );
}

function QuoteComparison({ active }: { active: boolean }) {
  const quotes = [
    ["Ergocomfort GmbH", "€82,450", "6 weeks", "5 years", "30 days", "72"],
    ["Seating Solutions SL", "€85,230", "7 weeks", "3 years", "30 days", "65"],
    ["Nordic Office AS", "€88,900", "6 weeks", "5 years", "45 days", "60"],
  ];

  return (
    <section
      className={cn(
        "mt-4 overflow-hidden rounded-xl border bg-background/35 transition-all duration-300",
        active ? "border-accent/45 shadow-[0_0_0_3px_rgba(194,65,12,0.07)]" : "border-border",
      )}
      aria-label="RFQ supplier comparison"
    >
      <div className="flex items-center justify-between px-4 py-3">
        <h4 className="text-xs font-semibold text-primary">RFQ comparison</h4>
        <span className="text-[9px] text-muted-foreground">3 suppliers</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] text-left">
          <thead className="border-y border-border bg-surface text-[8px] font-medium text-muted-foreground">
            <tr>
              <th className="px-4 py-2">Supplier</th>
              <th className="px-2 py-2">Total price</th>
              <th className="px-2 py-2">Delivery</th>
              <th className="px-2 py-2">Warranty</th>
              <th className="px-2 py-2">Terms</th>
              <th className="px-3 py-2">Risk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-[9px]">
            {quotes.map((quote, index) => (
              <tr key={quote[0]} className={index === 0 ? "bg-teal-soft/55" : undefined}>
                <td className="px-4 py-2.5 font-medium text-primary">
                  <span className="inline-flex items-center gap-2">
                    <span
                      className={cn(
                        "h-2.5 w-2.5 rounded-full border",
                        index === 0 ? "border-teal bg-teal" : "border-border bg-surface",
                      )}
                    />
                    {quote[0]}
                  </span>
                </td>
                {quote.slice(1, 5).map((value) => (
                  <td key={value} className="px-2 py-2.5 text-primary/75">
                    {value}
                  </td>
                ))}
                <td className="px-3 py-2.5 font-semibold text-accent">{quote[5]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end border-t border-border px-4 py-2.5">
        <button
          type="button"
          className="inline-flex items-center gap-1 text-[9px] font-semibold text-teal"
        >
          Open full comparison <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </section>
  );
}

function RecommendedAction({ active }: { active: boolean }) {
  return (
    <section
      className={cn(
        "mt-4 rounded-xl border bg-background/35 p-4 transition-all duration-300",
        active ? "border-accent/45 shadow-[0_0_0_3px_rgba(194,65,12,0.07)]" : "border-border",
      )}
      aria-label="Recommended remediation action"
    >
      <h4 className="text-xs font-semibold text-primary">Recommended action</h4>
      <div className="mt-3 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-soft text-teal">
            <ListChecks className="h-4 w-4" />
          </span>
          <div>
            <div className="text-[10px] font-semibold text-primary">
              Clarify delivery capacity for Q3
            </div>
            <p className="mt-1 text-[9px] leading-relaxed text-muted-foreground">
              Request written confirmation of production capacity and lead times.
            </p>
            <span className="mt-2 inline-flex rounded bg-accent-soft px-2 py-1 text-[8px] font-semibold text-accent">
              Evidence needed
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 border-t border-border pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
          <div className="flex items-center gap-2">
            <CircleUserRound className="h-5 w-5 text-teal" />
            <div>
              <div className="text-[8px] text-muted-foreground">Owner</div>
              <div className="text-[9px] font-medium text-primary">Lea Becker</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CalendarClock className="h-5 w-5 text-accent" />
            <div>
              <div className="text-[8px] text-muted-foreground">Due</div>
              <div className="text-[9px] font-medium text-primary">5 days</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <button type="button" className="workspace-button">
          View task <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </section>
  );
}
