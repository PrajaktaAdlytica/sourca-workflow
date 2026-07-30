import { createFileRoute } from "@tanstack/react-router";
import { FileText, Send, ScrollText, GitCompare, CheckCircle2, Award } from "lucide-react";
import { ProductPage } from "@/components/ProductPage";
import { RFQWorkspace } from "@/components/ProductWorkspaces";
import { pageUrl } from "@/lib/site";
import { motion } from "motion/react";

export const Route = createFileRoute("/products/rfq")({
  head: () => ({
    meta: [
      { title: "Sourcixa RFQ — RFQ Management" },
      {
        name: "description",
        content:
          "Create RFQs, invite suppliers, receive bids and compare pricing from one collaborative workspace.",
      },
      { property: "og:title", content: "Sourcixa RFQ — RFQ Management" },
      {
        property: "og:description",
        content:
          "Create RFQs, invite suppliers, receive bids and compare pricing from one collaborative workspace.",
      },
    ],
    links: [{ rel: "canonical", href: pageUrl("/products/rfq") }],
  }),
  component: () => (
    <ProductPage
      eyebrow="RFQ"
      chip="bg-teal"
      accentText="text-teal"
      title="RFQ Management."
      editorial="Collaborative."
      description="Create requests for quotation, invite suppliers, receive bids and compare pricing from one collaborative workspace. Standardise procurement processes and reduce sourcing cycles with automated RFQ workflows."
      rightPanel={<RFQPanel />}
      workspace={<RFQWorkspace />}
      features={[
        {
          icon: <FileText className="h-5 w-5" />,
          t: "RFQ builder",
          d: "Templates and structured forms for repeatable sourcing events.",
        },
        {
          icon: <Send className="h-5 w-5" />,
          t: "Supplier invitations",
          d: "Invite suppliers with a single click and track responses.",
        },
        {
          icon: <GitCompare className="h-5 w-5" />,
          t: "Quote comparison",
          d: "Side-by-side comparison of price, delivery and terms.",
        },
        {
          icon: <ScrollText className="h-5 w-5" />,
          t: "Version history",
          d: "Full audit trail of every revision and clarification.",
        },
        {
          icon: <CheckCircle2 className="h-5 w-5" />,
          t: "Approval workflow",
          d: "Route awards through finance, legal and procurement.",
        },
        {
          icon: <Award className="h-5 w-5" />,
          t: "Award supplier",
          d: "Award, split-award and notify suppliers in one click.",
        },
      ]}
      benefits={[
        "Track cycle time against your own sourcing baseline",
        "Standardise sourcing across business units",
        "Eliminate spreadsheet-based quote tracking",
        "Compare quotes with total-cost visibility",
        "Onboard suppliers into RFQs in minutes",
        "Build a defensible audit trail",
      ]}
      faq={[
        {
          q: "Can we run multi-round RFQs?",
          a: "Yes — Sourcixa supports single-round, multi-round and Dutch-auction style negotiations.",
        },
        {
          q: "Do suppliers need an account?",
          a: "Suppliers receive a secure link to a lightweight portal — no account required.",
        },
        {
          q: "Can we award to multiple suppliers?",
          a: "Yes — split awards with allocated volumes and per-line commercial terms are fully supported.",
        },
      ]}
    />
  ),
});

function RFQPanel() {
  const rows = [
    { s: "ElectroCo", p: "$4.28", d: "12 days", best: true },
    { s: "Voltix", p: "$4.65", d: "15 days" },
    { s: "TechWire", p: "$4.90", d: "18 days" },
    { s: "EuroCable", p: "$5.32", d: "21 days" },
  ];
  return (
    <div className="surface-card p-5 max-w-md ml-auto">
      <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        Illustrative RFQ · synthetic bid data
      </div>
      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Quotation Comparison
      </div>
      <table className="mt-4 w-full text-xs">
        <thead>
          <tr className="text-left text-muted-foreground border-b border-border">
            <th className="pb-2 font-medium">Supplier</th>
            <th className="pb-2 font-medium">Price</th>
            <th className="pb-2 font-medium">Delivery</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <motion.tr
              key={r.s}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className={`border-b border-border last:border-0 ${r.best ? "bg-emerald-50/60" : ""}`}
            >
              <td className="py-2.5 text-primary font-medium">
                {r.s}{" "}
                {r.best && <span className="ml-1 text-[9px] font-bold text-emerald-700">✓</span>}
              </td>
              <td className="py-2.5 tabular-nums text-primary/80">{r.p}</td>
              <td className="py-2.5 tabular-nums text-primary/80">{r.d}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex items-center justify-between text-[11px]">
        <span className="text-muted-foreground">Recommended:</span>
        <span className="font-semibold text-emerald-700 inline-flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3" /> ElectroCo · Best Match
        </span>
      </div>
    </div>
  );
}
