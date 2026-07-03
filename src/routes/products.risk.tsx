import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert, Activity, TrendingUp, Leaf, Radar, Globe } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import { motion } from "motion/react";

export const Route = createFileRoute("/products/risk")({
  head: () => ({
    meta: [
      { title: "Sourca Risk — Supplier Intelligence" },
      { name: "description", content: "Continuously monitor supplier financial health, compliance, ESG and operational risk." },
      { property: "og:title", content: "Sourca Risk — Supplier Intelligence" },
      { property: "og:description", content: "Continuously monitor supplier financial health, compliance, ESG and operational risk." },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Risk"
      chip="bg-slate-700"
      accentText="text-slate-700"
      title="Supplier Intelligence."
      editorial="Continuous."
      description="Continuously monitor supplier financial health, compliance, ESG performance and operational risk before decisions impact your supply chain. Receive proactive alerts when supplier risk changes."
      rightPanel={<RiskPanel />}
      features={[
        { icon: <Leaf className="h-5 w-5" />, t: "ESG monitoring", d: "Track environmental, social and governance performance." },
        { icon: <ShieldAlert className="h-5 w-5" />, t: "Compliance tracking", d: "Sanctions, KYC and regulatory screening built in." },
        { icon: <TrendingUp className="h-5 w-5" />, t: "Financial health", d: "Continuous insight into supplier financial stability." },
        { icon: <Globe className="h-5 w-5" />, t: "Country risk", d: "Geopolitical and trade-region exposure at a glance." },
        { icon: <Activity className="h-5 w-5" />, t: "Operational risk", d: "Capacity, quality and delivery performance signals." },
        { icon: <Radar className="h-5 w-5" />, t: "Continuous monitoring", d: "Automated re-assessment and instant risk alerts." },
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
        { q: "What data sources power the risk scores?", a: "Sourca combines internal signals with external monitoring feeds, financial data providers and public sanctions lists." },
        { q: "Can we bring our own risk framework?", a: "Yes — scoring weights, tiering and control libraries are configurable to match your existing methodology." },
        { q: "How are alerts delivered?", a: "In-app, email, Slack and via webhook — with severity thresholds you control per team." },
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
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">ElectroCo</div>
          <div className="mt-1 text-sm font-semibold text-primary">Supplier Risk Score</div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-semibold text-primary tracking-tight">72<span className="text-base text-muted-foreground">/100</span></div>
          <div className="text-[11px] font-medium text-emerald-700">Low Risk</div>
        </div>
      </div>
      <div className="mt-5 space-y-3">
        {bars.map((b, i) => (
          <div key={b.l}>
            <div className="flex justify-between text-[11px] text-primary/70">
              <span>{b.l}</span><span className="tabular-nums">{b.v}</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }} whileInView={{ width: `${b.v}%` }} viewport={{ once: true }}
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
