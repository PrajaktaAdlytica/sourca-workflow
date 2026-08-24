import { createFileRoute } from "@tanstack/react-router";
import { Search, Filter, Award, Globe, Sparkles, Building2 } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import { FindMethodology, FindWorkspace } from "@/components/ProductWorkspaces";
import { pageUrl } from "@/lib/site";
import { motion } from "motion/react";

export const Route = createFileRoute("/products/find")({
  head: () => ({
    meta: [
      { title: "OriginCue Find — Supplier Discovery" },
      {
        name: "description",
        content:
          "Discover verified suppliers across industries and regions using intelligent search.",
      },
      { property: "og:title", content: "OriginCue Find — Supplier Discovery" },
      {
        property: "og:description",
        content:
          "Discover verified suppliers across industries and regions using intelligent search.",
      },
    ],
    links: [{ rel: "canonical", href: pageUrl("/products/find") }],
  }),
  component: () => (
    <ProductPage
      eyebrow="Find"
      chip="bg-accent"
      accentText="text-accent"
      title="Supplier Discovery."
      editorial="Intelligent."
      description="Discover relevant suppliers across industries and regions using source-labelled search. Filter by capability, certification, geography, evidence confidence and freshness to build a shortlist you can verify."
      rightPanel={<FindPanel />}
      workspace={<FindWorkspace />}
      methodology={<FindMethodology />}
      features={[
        {
          icon: <Globe className="h-5 w-5" />,
          t: "Coverage you can inspect",
          d: "See available suppliers, sources and freshness by category and market.",
        },
        {
          icon: <Sparkles className="h-5 w-5" />,
          t: "Explainable recommendations",
          d: "Understand which capability, evidence and geography fields shaped each match.",
        },
        {
          icon: <Filter className="h-5 w-5" />,
          t: "Advanced filtering",
          d: "Filter by industry, region, capability and certification.",
        },
        {
          icon: <Building2 className="h-5 w-5" />,
          t: "Source-labelled profiles",
          d: "Keep company, capacity and history fields tied to their supporting source.",
        },
        {
          icon: <Award className="h-5 w-5" />,
          t: "Document verification",
          d: "Track certificate source, validity period and review status.",
        },
        {
          icon: <Search className="h-5 w-5" />,
          t: "Buyer-owned data",
          d: "Import existing suppliers and preserve ERP or procurement-system context.",
        },
      ]}
      benefits={[
        "Build a defensible shortlist from labelled evidence",
        "Compare capabilities and certifications side by side",
        "See when every important field was last checked",
        "Escalate conflicts and missing data for review",
        "Combine external discovery with buyer-owned records",
        "Keep sourcing research in one searchable workspace",
      ]}
      faq={[
        {
          q: "How is supplier coverage measured?",
          a: "Coverage is shown inside OriginCue by category, geography and available source. Because public records and licensed data vary by jurisdiction, OriginCue does not present one unsupported global coverage number.",
        },
        {
          q: "How are suppliers verified?",
          a: "Legal-entity fields are reconciled across available sources. Important claims retain their evidence, timestamp and review status; conflicts or expired documents are flagged rather than silently accepted.",
        },
        {
          q: "How often is supplier information refreshed?",
          a: "The interface shows a field-level source and last-checked date. Refresh targets depend on the source: sanctions data is targeted daily, registry records weekly, documents on change or expiry, and customer performance data daily or event-based when integrated.",
        },
        {
          q: "Can we add our own suppliers?",
          a: "Yes — you can import existing suppliers into the directory and enrich them with OriginCue's intelligence layer.",
        },
      ]}
    />
  ),
});

function FindPanel() {
  const suppliers = [
    { n: "ElectroCo", c: "Poland", score: 92, cert: "ISO 9001" },
    { n: "Voltix Systems", c: "Germany", score: 88, cert: "IATF 16949" },
    { n: "TechWire", c: "Czechia", score: 84, cert: "ISO 14001" },
    { n: "EuroCable", c: "Spain", score: 79, cert: "ISO 9001" },
  ];
  return (
    <div className="surface-card p-5 max-w-md ml-auto">
      <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Illustrative search · synthetic data
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-background/50">
        <Search className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">wire harness manufacturers</span>
      </div>
      <div className="mt-4 space-y-2">
        {suppliers.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="flex items-center gap-3 p-2.5 rounded-lg border border-border bg-background/40"
          >
            <div className="h-8 w-8 rounded-md bg-accent-soft text-accent flex items-center justify-center text-[10px] font-bold">
              {s.n[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-primary">{s.n}</div>
              <div className="text-[10px] text-muted-foreground">
                {s.c} · {s.cert}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-semibold text-primary tabular-nums">{s.score}</div>
              <div className="text-amber-500 text-[9px]">★★★★★</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
