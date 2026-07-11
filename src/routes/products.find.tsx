import { createFileRoute } from "@tanstack/react-router";
import { Search, Filter, Award, Globe, Sparkles, Building2 } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import { motion } from "motion/react";

export const Route = createFileRoute("/products/find")({
  head: () => ({
    meta: [
      { title: "Sourcixa Find — Supplier Discovery" },
      { name: "description", content: "Discover verified suppliers across industries and regions using intelligent search." },
      { property: "og:title", content: "Sourcixa Find — Supplier Discovery" },
      { property: "og:description", content: "Discover verified suppliers across industries and regions using intelligent search." },
    ],
  }),
  component: () => (
    <ProductPage
      eyebrow="Find"
      chip="bg-accent"
      accentText="text-accent"
      title="Supplier Discovery."
      editorial="Intelligent."
      description="Discover verified suppliers across industries and regions using intelligent search. Filter by certifications, capabilities, financial health, ESG performance and delivery regions to identify the right partners in minutes instead of weeks."
      rightPanel={<FindPanel />}
      features={[
        { icon: <Globe className="h-5 w-5" />, t: "Global supplier search", d: "Access a verified network of suppliers across 98 countries." },
        { icon: <Sparkles className="h-5 w-5" />, t: "AI-powered recommendations", d: "Smart suggestions based on capability, quality and geography." },
        { icon: <Filter className="h-5 w-5" />, t: "Advanced filtering", d: "Filter by industry, region, capability and certification." },
        { icon: <Building2 className="h-5 w-5" />, t: "Supplier profiles", d: "Deep supplier pages with contact, capacity and history." },
        { icon: <Award className="h-5 w-5" />, t: "Certifications", d: "ISO, IATF, GMP, HACCP and industry-specific standards." },
        { icon: <Search className="h-5 w-5" />, t: "Geographic coverage", d: "Filter by trade region, country and cross-border capability." },
      ]}
      benefits={[
        "Discover qualified suppliers in minutes, not weeks",
        "Access a global network of vetted partners",
        "Compare capability and certifications side by side",
        "Reduce reliance on manual research",
        "Expand into new geographies with confidence",
        "Give sourcing teams a single, searchable directory",
      ]}
      faq={[
        { q: "How large is the supplier network?", a: "Over 120,000 verified suppliers across 98 countries, spanning manufacturing, components, packaging and industrial services." },
        { q: "How are suppliers verified?", a: "Sourcixa combines certifications, financial data, references and historical performance to verify each supplier before it enters the directory." },
        { q: "Can we add our own suppliers?", a: "Yes — you can import existing suppliers into the directory and enrich them with Sourcixa's intelligence layer." },
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
      <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-background/50">
        <Search className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">wire harness manufacturers</span>
      </div>
      <div className="mt-4 space-y-2">
        {suppliers.map((s, i) => (
          <motion.div key={s.n}
            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="flex items-center gap-3 p-2.5 rounded-lg border border-border bg-background/40"
          >
            <div className="h-8 w-8 rounded-md bg-accent-soft text-accent flex items-center justify-center text-[10px] font-bold">{s.n[0]}</div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-primary">{s.n}</div>
              <div className="text-[10px] text-muted-foreground">{s.c} · {s.cert}</div>
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
