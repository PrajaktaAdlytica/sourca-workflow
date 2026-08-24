import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert, Activity, TrendingUp, Leaf, Radar, Globe } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import { RiskMethodology, RiskWorkspace } from "@/components/ProductWorkspaces";
import { pageUrl } from "@/lib/site";
import { motion } from "motion/react";

export const Route = createFileRoute("/products/risk")({
  head: () => ({
    meta: [
      { title: "OriginCue Risk — Supplier Intelligence" },
      {
        name: "description",
        content:
          "Continuously monitor supplier financial health, compliance, ESG and operational risk.",
      },
      { property: "og:title", content: "OriginCue Risk — Supplier Intelligence" },
      {
        property: "og:description",
        content:
          "Continuously monitor supplier financial health, compliance, ESG and operational risk.",
      },
    ],
    links: [{ rel: "canonical", href: pageUrl("/products/risk") }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Risk"
      chip="bg-slate-700"
      accentText="text-slate-700"
      title="Supplier Intelligence."
      editorial="Continuous."
      description="Bring supplier financial, compliance, ESG and operational signals into one explainable review queue. See the source, timestamp and reason behind every score or alert before your team takes action."
      rightPanel={<RiskPanel />}
      workspace={<RiskWorkspace />}
      methodology={<RiskMethodology />}
      features={[
        {
          icon: <Leaf className="h-5 w-5" />,
          t: "ESG evidence",
          d: "Organise available environmental, social and governance evidence by source and date.",
        },
        {
          icon: <ShieldAlert className="h-5 w-5" />,
          t: "Compliance review",
          d: "Review potential sanctions, ownership and policy-control signals with evidence.",
        },
        {
          icon: <TrendingUp className="h-5 w-5" />,
          t: "Financial indicators",
          d: "Bring licensed and buyer-provided financial signals into the supplier record.",
        },
        {
          icon: <Globe className="h-5 w-5" />,
          t: "Country risk",
          d: "Geopolitical and trade-region exposure at a glance.",
        },
        {
          icon: <Activity className="h-5 w-5" />,
          t: "Operational risk",
          d: "Capacity, quality and delivery performance signals.",
        },
        {
          icon: <Radar className="h-5 w-5" />,
          t: "Refresh-aware monitoring",
          d: "Show the source cadence and last-checked timestamp behind every alert.",
        },
      ]}
      benefits={[
        "Detect risk changes before they hit your supply chain",
        "Consolidate risk scoring across all suppliers",
        "Meet regulator expectations for supplier oversight",
        "Reduce reliance on annual questionnaires",
        "Prioritise remediation with clear signals",
        "Report supplier posture confidently to the board",
      ]}
      faq={[
        {
          q: "What data sources power the risk scores?",
          a: "OriginCue can combine buyer-provided operational records, supplier documents, official registries and sanctions lists, plus licensed financial, ownership, ESG or adverse-event providers where contracted. Each signal keeps its source and timestamp.",
        },
        {
          q: "How is the overall score calculated?",
          a: "Available signals are normalised into category scores. Buyer-defined category weights and supplier tiers produce an overall score, while missing data remains visible. Every score keeps its inputs, weights and review history.",
        },
        {
          q: "How often are risk signals refreshed?",
          a: "Refresh depends on the source. The target cadence shown in the methodology is daily for sanctions and adverse events, monthly or quarterly for financial indicators, and daily or event-based for customer operational data.",
        },
        {
          q: "How are alert thresholds configured?",
          a: "Teams can set severity thresholds by supplier tier, risk category and internal policy. High-severity events can require immediate analyst review.",
        },
        {
          q: "How are false positives handled?",
          a: "Potential entity matches retain the raw source and match rationale. A reviewer confirms, dismisses or escalates the alert with a note; unreviewed matches are never presented as confirmed findings.",
        },
        {
          q: "What happens after a risk is confirmed?",
          a: "Create a remediation action, assign an owner and due date, request evidence, route approvals and preserve the full history through closure.",
        },
      ]}
    />
  ),
});

function RiskPanel() {
  const bars = [
    { l: "Compliance", v: 82, c: "bg-emerald-500" },
    { l: "Financial", v: 74, c: "bg-emerald-500" },
    { l: "ESG", v: 61, c: "bg-amber-500" },
    { l: "Operational", v: 48, c: "bg-amber-500" },
    { l: "Country", v: 91, c: "bg-emerald-500" },
  ];
  return (
    <div className="surface-card p-6 max-w-md ml-auto">
      <div className="mb-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Illustrative score · synthetic data
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            ElectroCo
          </div>
          <div className="mt-1 text-sm font-semibold text-primary">Supplier Risk Score</div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-semibold text-primary tracking-tight">
            72<span className="text-base text-muted-foreground">/100</span>
          </div>
          <div className="text-[11px] font-medium text-emerald-700">Low Risk</div>
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {bars.map((b, i) => (
          <div key={b.l}>
            <div className="flex justify-between text-[11px] text-primary/70">
              <span>{b.l}</span>
              <span className="tabular-nums">{b.v}</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${b.v}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`h-full ${b.c}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
