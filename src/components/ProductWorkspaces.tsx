import { useState } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  FileText,
  Filter,
  Globe2,
  Mail,
  MapPin,
  PackageCheck,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Users,
} from "lucide-react";

const findSuppliers = [
  {
    id: "nordline",
    name: "Nordline Components",
    location: "Poznań, Poland",
    capability: "Automotive wire harnesses",
    match: 92,
    status: "Verified",
    evidence: "Registry, supplier submission, ISO 9001",
    refreshed: "18 Jul 2026",
    leadTime: "12–16 days",
    minimumOrder: "2,000 units",
  },
  {
    id: "voltwerk",
    name: "Voltwerk Systems",
    location: "Dresden, Germany",
    capability: "High-voltage cable assemblies",
    match: 87,
    status: "Verified",
    evidence: "Registry, IATF 16949, customer record",
    refreshed: "17 Jul 2026",
    leadTime: "15–20 days",
    minimumOrder: "1,500 units",
  },
  {
    id: "morava",
    name: "Morava Cableworks",
    location: "Brno, Czechia",
    capability: "Industrial cable looms",
    match: 83,
    status: "Review",
    evidence: "Registry, supplier submission",
    refreshed: "12 Jul 2026",
    leadTime: "14–18 days",
    minimumOrder: "1,000 units",
  },
];

export function FindWorkspace() {
  const [selectedId, setSelectedId] = useState(findSuppliers[0].id);
  const selected = findSuppliers.find((supplier) => supplier.id === selectedId) ?? findSuppliers[0];

  return (
    <WorkspaceFrame
      product="OriginCue Find"
      title="Supplier discovery"
      meta="Illustrative workspace · Synthetic supplier records"
      action={
        <button className="workspace-button workspace-button-primary">
          <Search className="h-3.5 w-3.5" /> New search
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
        <div className="space-y-4">
          <div className="surface-card p-4">
            <label className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              What are you sourcing?
            </label>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <div className="flex min-h-11 flex-1 items-center gap-2 rounded-lg border border-border bg-background px-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-primary">Automotive wire harness manufacturers</span>
              </div>
              <button className="workspace-button">
                <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Central Europe", "ISO 9001", "Automotive", "≤ 20 day lead time"].map((filter) => (
                <span
                  key={filter}
                  className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-medium text-primary/75"
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>

          <div className="surface-card overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div>
                <div className="text-sm font-semibold text-primary">Matched suppliers</div>
                <div className="text-[11px] text-muted-foreground">
                  3 results · ranked by current search criteria
                </div>
              </div>
              <button className="workspace-button">
                <Filter className="h-3.5 w-3.5" /> Sort
              </button>
            </div>
            <div className="divide-y divide-border">
              {findSuppliers.map((supplier) => {
                const active = supplier.id === selectedId;
                return (
                  <button
                    key={supplier.id}
                    onClick={() => setSelectedId(supplier.id)}
                    aria-pressed={active}
                    className={`w-full p-4 text-left transition-colors hover:bg-secondary/60 ${
                      active ? "bg-accent-soft/55" : "bg-surface"
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-semibold text-primary-foreground">
                        {supplier.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="font-semibold text-primary">{supplier.name}</div>
                          <div className="text-sm font-semibold text-accent">
                            {supplier.match}% match
                          </div>
                        </div>
                        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {supplier.location}
                          </span>
                          <span>{supplier.capability}</span>
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                              supplier.status === "Verified"
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-amber-50 text-amber-700"
                            }`}
                          >
                            <BadgeCheck className="h-3 w-3" /> {supplier.status}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            Refreshed {supplier.refreshed}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="surface-card h-fit overflow-hidden lg:sticky lg:top-24">
          <div className="border-b border-border bg-primary p-5 text-primary-foreground">
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary-foreground/55">
              Supplier profile
            </div>
            <div className="mt-2 text-lg font-semibold">{selected.name}</div>
            <div className="mt-1 text-xs text-primary-foreground/65">{selected.location}</div>
          </div>
          <div className="space-y-5 p-5">
            <div className="grid grid-cols-2 gap-3">
              <DataPoint label="Match" value={`${selected.match}%`} />
              <DataPoint label="Status" value={selected.status} />
              <DataPoint label="Lead time" value={selected.leadTime} />
              <DataPoint label="Minimum order" value={selected.minimumOrder} />
            </div>
            <div>
              <div className="workspace-label">Evidence used</div>
              <p className="mt-2 text-xs leading-relaxed text-primary/75">{selected.evidence}</p>
            </div>
            <div className="rounded-xl border border-border bg-secondary/55 p-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                <Clock3 className="h-3.5 w-3.5 text-accent" /> Freshness is visible
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                Every field keeps its source and last-checked date so buyers can judge confidence
                before shortlisting.
              </p>
            </div>
            <button className="workspace-button workspace-button-primary w-full justify-center">
              Open supplier profile <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </aside>
      </div>
    </WorkspaceFrame>
  );
}

const rfqSuppliers = [
  {
    id: "nordline",
    name: "Nordline",
    price: "€4.28",
    delivery: "12 days",
    quality: "92",
    total: "€42,800",
    status: "Complete",
  },
  {
    id: "voltwerk",
    name: "Voltwerk",
    price: "€4.46",
    delivery: "15 days",
    quality: "89",
    total: "€44,600",
    status: "Complete",
  },
  {
    id: "morava",
    name: "Morava",
    price: "€4.31",
    delivery: "18 days",
    quality: "84",
    total: "€43,100",
    status: "Clarification",
  },
];

export function RFQWorkspace() {
  const [selectedId, setSelectedId] = useState(rfqSuppliers[0].id);
  const selected = rfqSuppliers.find((supplier) => supplier.id === selectedId) ?? rfqSuppliers[0];

  return (
    <WorkspaceFrame
      product="OriginCue RFQ"
      title="Wire harness sourcing · RFQ-2026-041"
      meta="Illustrative workspace · EUR · 10,000 units"
      action={
        <button className="workspace-button workspace-button-primary">
          <Mail className="h-3.5 w-3.5" /> Invite supplier
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
        <div className="space-y-4">
          <div className="surface-card p-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <DataPoint label="Stage" value="Evaluation" />
              <DataPoint label="Responses" value="3 of 4" />
              <DataPoint label="Closes" value="24 Jul" />
              <DataPoint label="Owner" value="M. Nowak" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-1" aria-label="RFQ progress">
              {["Draft", "Supplier response", "Evaluation", "Award"].map((step, index) => (
                <div key={step}>
                  <div
                    className={`h-1.5 rounded-full ${index <= 2 ? "bg-teal" : "bg-secondary"}`}
                  />
                  <div
                    className={`mt-1.5 text-[9px] ${index === 2 ? "font-semibold text-teal" : "text-muted-foreground"}`}
                  >
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3">
              <div>
                <div className="text-sm font-semibold text-primary">Comparable bids</div>
                <div className="text-[11px] text-muted-foreground">
                  Normalised commercial terms · synthetic bid data
                </div>
              </div>
              <button className="workspace-button">
                <SlidersHorizontal className="h-3.5 w-3.5" /> Weight criteria
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[680px] w-full text-xs">
                <thead className="bg-secondary/55 text-left text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Supplier</th>
                    <th className="px-3 py-3 font-semibold">Unit price</th>
                    <th className="px-3 py-3 font-semibold">Delivery</th>
                    <th className="px-3 py-3 font-semibold">Quality</th>
                    <th className="px-3 py-3 font-semibold">Total</th>
                    <th className="px-3 py-3 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rfqSuppliers.map((supplier) => {
                    const active = supplier.id === selectedId;
                    return (
                      <tr
                        key={supplier.id}
                        onClick={() => setSelectedId(supplier.id)}
                        className={`cursor-pointer transition-colors hover:bg-secondary/45 ${active ? "bg-teal-soft/65" : ""}`}
                      >
                        <td className="px-4 py-3.5 font-semibold text-primary">
                          <button className="flex items-center gap-2" aria-pressed={active}>
                            <span
                              className={`h-2 w-2 rounded-full ${active ? "bg-teal" : "bg-border"}`}
                            />
                            {supplier.name}
                          </button>
                        </td>
                        <td className="px-3 py-3.5 font-medium text-primary">{supplier.price}</td>
                        <td className="px-3 py-3.5 text-primary/75">{supplier.delivery}</td>
                        <td className="px-3 py-3.5 text-primary/75">{supplier.quality}/100</td>
                        <td className="px-3 py-3.5 font-medium text-primary">{supplier.total}</td>
                        <td className="px-3 py-3.5">
                          <span
                            className={`rounded-full px-2 py-1 text-[9px] font-semibold ${
                              supplier.status === "Complete"
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-amber-50 text-amber-700"
                            }`}
                          >
                            {supplier.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <aside className="surface-card h-fit p-5 lg:sticky lg:top-24">
          <div className="workspace-label">Evaluation summary</div>
          <div className="mt-3 text-lg font-semibold text-primary">{selected.name}</div>
          <div className="mt-1 text-xs text-muted-foreground">Selected for detailed review</div>
          <div className="mt-5 space-y-3">
            <ScoreRow label="Commercial" value="94" width="94%" tone="bg-teal" />
            <ScoreRow label="Delivery" value="88" width="88%" tone="bg-teal" />
            <ScoreRow
              label="Quality"
              value={selected.quality}
              width={`${selected.quality}%`}
              tone="bg-accent"
            />
            <ScoreRow label="Risk" value="86" width="86%" tone="bg-slate-600" />
          </div>
          <div className="mt-5 rounded-xl border border-teal/20 bg-teal-soft p-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal">
              <Sparkles className="h-3.5 w-3.5" /> Recommendation context
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-primary/70">
              Recommendation shows the criteria, weights and source fields behind the ranking. The
              buyer makes the award decision.
            </p>
          </div>
          <button className="workspace-button workspace-button-primary mt-4 w-full justify-center">
            Start approval <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </aside>
      </div>
    </WorkspaceFrame>
  );
}

const riskAlerts = [
  {
    id: "sanctions",
    severity: "High",
    title: "Potential sanctions-name match",
    supplier: "Demo Supplier 018",
    source: "EU consolidated sanctions list",
    checked: "Today, 08:12 CET",
    action: "Review entity match",
  },
  {
    id: "certificate",
    severity: "Medium",
    title: "Certificate expires in 28 days",
    supplier: "Nordline Components",
    source: "Supplier-provided ISO 9001 certificate",
    checked: "Today, 06:00 CET",
    action: "Request renewed document",
  },
  {
    id: "delivery",
    severity: "Low",
    title: "On-time delivery fell below threshold",
    supplier: "Morava Cableworks",
    source: "Customer ERP delivery history",
    checked: "Yesterday, 23:40 CET",
    action: "Open corrective action",
  },
];

export function RiskWorkspace() {
  const [selectedId, setSelectedId] = useState(riskAlerts[0].id);
  const selected = riskAlerts.find((alert) => alert.id === selectedId) ?? riskAlerts[0];

  return (
    <WorkspaceFrame
      product="OriginCue Risk"
      title="Monitoring queue"
      meta="Illustrative workspace · Synthetic supplier records"
      action={
        <button className="workspace-button workspace-button-primary">
          <SlidersHorizontal className="h-3.5 w-3.5" /> Configure thresholds
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="surface-card overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <div className="text-sm font-semibold text-primary">Active alerts</div>
              <div className="text-[11px] text-muted-foreground">
                Source-labelled and ready for analyst review
              </div>
            </div>
            <button className="workspace-button">
              <Filter className="h-3.5 w-3.5" /> Filter
            </button>
          </div>
          <div className="divide-y divide-border">
            {riskAlerts.map((alert) => {
              const active = alert.id === selectedId;
              return (
                <button
                  key={alert.id}
                  onClick={() => setSelectedId(alert.id)}
                  aria-pressed={active}
                  className={`w-full p-4 text-left transition-colors hover:bg-secondary/55 ${active ? "bg-slate-100/80" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                        alert.severity === "High"
                          ? "bg-red-50 text-red-700"
                          : alert.severity === "Medium"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      <AlertTriangle className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="font-semibold text-primary">{alert.title}</div>
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                          {alert.severity}
                        </span>
                      </div>
                      <div className="mt-1 text-xs text-primary/70">{alert.supplier}</div>
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-muted-foreground">
                        <span>{alert.source}</span>
                        <span>{alert.checked}</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="surface-card p-5">
            <div className="flex items-center justify-between">
              <div className="workspace-label">Alert review</div>
              <span className="rounded-full bg-red-50 px-2 py-1 text-[9px] font-semibold text-red-700">
                {selected.severity} severity
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-primary">{selected.title}</h3>
            <div className="mt-4 space-y-3">
              <DetailRow icon={Users} label="Supplier" value={selected.supplier} />
              <DetailRow icon={Globe2} label="Source" value={selected.source} />
              <DetailRow icon={CalendarClock} label="Checked" value={selected.checked} />
            </div>
            <div className="mt-5 rounded-xl border border-border bg-secondary/55 p-3">
              <div className="text-xs font-semibold text-primary">False-positive control</div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                OriginCue keeps the raw source, match rationale and reviewer decision. No potential
                match is treated as confirmed without review.
              </p>
            </div>
            <button className="workspace-button workspace-button-primary mt-4 w-full justify-center">
              {selected.action} <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="surface-card p-4">
            <div className="workspace-label">Remediation owner</div>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent">
                MK
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-primary">Marta Kowalska</div>
                <div className="text-[10px] text-muted-foreground">Supplier Risk Manager</div>
              </div>
              <span className="text-[10px] text-muted-foreground">Due tomorrow</span>
            </div>
          </div>
        </aside>
      </div>
    </WorkspaceFrame>
  );
}

function WorkspaceFrame({
  product,
  title,
  meta,
  action,
  children,
}: {
  product: string;
  title: string;
  meta: string;
  action: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="product-workspace overflow-hidden rounded-2xl border border-border bg-secondary/35 shadow-[0_30px_80px_-45px_rgba(11,18,32,0.32)]">
      <div className="flex flex-col gap-3 border-b border-border bg-surface px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
            {product}
          </div>
          <div className="mt-1 text-sm font-semibold text-primary">{title}</div>
          <div className="mt-0.5 text-[10px] text-muted-foreground">{meta}</div>
        </div>
        {action}
      </div>
      <div className="p-3 sm:p-5">{children}</div>
    </div>
  );
}

function DataPoint({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-3">
      <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-xs font-semibold text-primary">{value}</div>
    </div>
  );
}

function ScoreRow({
  label,
  value,
  width,
  tone,
}: {
  label: string;
  value: string;
  width: string;
  tone: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-[11px]">
        <span className="text-primary/75">{label}</span>
        <span className="font-semibold text-primary">{value}</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-secondary">
        <div className={`h-full rounded-full ${tone}`} style={{ width }} />
      </div>
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof ShieldCheck;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
      <div>
        <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 text-xs leading-relaxed text-primary/80">{value}</div>
      </div>
    </div>
  );
}

export function FindMethodology() {
  const sources = [
    {
      icon: Users,
      title: "Customer records",
      copy: "Supplier masters, ERP history and buyer-provided performance records.",
    },
    {
      icon: FileCheck2,
      title: "Supplier submissions",
      copy: "Profiles, capability evidence and documents submitted by suppliers.",
    },
    {
      icon: Globe2,
      title: "Official sources",
      copy: "Company registries and public authority sources available in each jurisdiction.",
    },
    {
      icon: PackageCheck,
      title: "Licensed providers",
      copy: "Commercial business, ownership and compliance data where contracted.",
    },
  ];

  return (
    <MethodologyLayout
      eyebrow="Supplier data methodology"
      title="Every profile shows where its data came from."
      description="Coverage is measured by category, geography and source availability—not a single inflated global count. Buyers can see field-level provenance, confidence and freshness before they shortlist."
      cards={sources}
      steps={[
        {
          title: "Match the legal entity",
          copy: "Names, addresses and registration identifiers are reconciled before records are merged.",
        },
        {
          title: "Cross-check important claims",
          copy: "Certifications, capabilities and ownership fields retain their supporting source.",
        },
        {
          title: "Flag gaps for review",
          copy: "Conflicts, expired documents and low-confidence matches are surfaced instead of silently accepted.",
        },
      ]}
      refresh={[
        ["Sanctions and watchlists", "Target: daily", "Source availability dependent"],
        ["Company and ownership records", "Target: weekly", "Jurisdiction dependent"],
        ["Certificates and supplier documents", "On change + expiry checks", "Document level"],
        ["Customer performance data", "Daily or event-based", "Integration dependent"],
      ]}
    />
  );
}

export function RiskMethodology() {
  const sources = [
    {
      icon: ShieldCheck,
      title: "Compliance",
      copy: "Sanctions, watchlists, ownership and customer-required control evidence.",
    },
    {
      icon: CircleDollarSign,
      title: "Financial",
      copy: "Licensed financial indicators and buyer-provided payment or credit signals.",
    },
    {
      icon: FileText,
      title: "ESG and documents",
      copy: "Supplier evidence, attestations, certificates and contracted ESG sources.",
    },
    {
      icon: PackageCheck,
      title: "Operational",
      copy: "Delivery, quality, capacity and corrective-action signals supplied by the buyer.",
    },
  ];

  return (
    <MethodologyLayout
      eyebrow="Risk methodology"
      title="Explainable scores, configurable decisions."
      description="OriginCue normalises available signals into category scores, but it does not replace analyst judgment. Every score keeps its inputs, timestamp, weight and review history."
      cards={sources}
      steps={[
        {
          title: "Normalise each signal",
          copy: "Source values are converted to a consistent 0–100 category scale with missing data shown explicitly.",
        },
        {
          title: "Apply buyer-defined weights",
          copy: "Teams set category weights, supplier tiers and severity thresholds for their own policy.",
        },
        {
          title: "Review before escalation",
          copy: "Potential matches and adverse events move through a human review and evidence trail.",
        },
      ]}
      refresh={[
        ["Sanctions screening", "Target: daily", "High-severity match review"],
        ["Adverse events", "Target: daily", "Provider dependent"],
        ["Financial indicators", "Monthly or quarterly", "Provider dependent"],
        ["Operational performance", "Daily or event-based", "Integration dependent"],
      ]}
      risk
    />
  );
}

function MethodologyLayout({
  eyebrow,
  title,
  description,
  cards,
  steps,
  refresh,
  risk = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  cards: { icon: typeof ShieldCheck; title: string; copy: string }[];
  steps: { title: string; copy: string }[];
  refresh: string[][];
  risk?: boolean;
}) {
  return (
    <div className="space-y-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <div className="workspace-label text-accent">{eyebrow}</div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
            {title}
          </h2>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(({ icon: Icon, title: cardTitle, copy }) => (
          <div key={cardTitle} className="surface-card p-5">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${risk ? "bg-slate-100 text-slate-700" : "bg-accent-soft text-accent"}`}
            >
              <Icon className="h-4 w-4" />
            </div>
            <div className="mt-4 text-sm font-semibold text-primary">{cardTitle}</div>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{copy}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="surface-card p-6">
          <div className="workspace-label">Verification workflow</div>
          <div className="mt-5 space-y-5">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                  {index + 1}
                </div>
                <div>
                  <div className="text-xs font-semibold text-primary">{step.title}</div>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                    {step.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-card overflow-hidden">
          <div className="border-b border-border px-5 py-4">
            <div className="workspace-label">Refresh targets</div>
            <p className="mt-1 text-[11px] text-muted-foreground">
              The product should show the actual source timestamp; targets vary by provider,
              jurisdiction and integration.
            </p>
          </div>
          <div className="divide-y divide-border">
            {refresh.map(([source, cadence, note]) => (
              <div
                key={source}
                className="grid gap-1 px-5 py-3.5 sm:grid-cols-[1.2fr_0.8fr_0.8fr] sm:items-center"
              >
                <div className="text-xs font-semibold text-primary">{source}</div>
                <div className="text-[11px] text-primary/75">{cadence}</div>
                <div className="text-[10px] text-muted-foreground sm:text-right">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {risk ? (
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: SlidersHorizontal,
              title: "Alert thresholds",
              copy: "Configurable by supplier tier, risk category and policy. High-severity events can require immediate review.",
            },
            {
              icon: CheckCircle2,
              title: "False-positive handling",
              copy: "Potential matches retain source evidence and must be confirmed, dismissed or escalated with a reviewer note.",
            },
            {
              icon: ArrowUpRight,
              title: "Remediation workflow",
              copy: "Assign an owner, due date and corrective action; preserve evidence and approval history through closure.",
            },
          ].map(({ icon: Icon, title: cardTitle, copy }) => (
            <div
              key={cardTitle}
              className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white"
            >
              <Icon className="h-4 w-4 text-orange-300" />
              <div className="mt-4 text-sm font-semibold">{cardTitle}</div>
              <p className="mt-1.5 text-xs leading-relaxed text-white/65">{copy}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
