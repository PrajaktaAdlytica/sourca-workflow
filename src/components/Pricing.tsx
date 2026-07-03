import { Check } from "lucide-react";
import { ButtonLink } from "./Button";

const plans = [
  {
    name: "Starter",
    price: "€99",
    desc: "Everything small procurement teams need to discover suppliers and manage sourcing.",
    features: ["Supplier Search", "Supplier Profiles", "Basic RFQs", "Quote Comparison", "Procurement Dashboard", "Email Support"],
    cta: "Start Free",
    to: "/request-demo",
  },
  {
    name: "Professional",
    price: "€299",
    desc: "Advanced procurement workflows for growing organisations managing multiple sourcing projects.",
    features: ["Everything in Starter", "Unlimited RFQs", "AI Recommendations", "Supplier Intelligence", "ESG Monitoring", "Financial Health", "Approval Workflows", "Priority Support"],
    cta: "Request Demo",
    to: "/request-demo",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Complete procurement intelligence for global sourcing operations.",
    features: ["Everything in Professional", "Custom Integrations", "API Access", "Enterprise Security", "Multi-region Procurement", "Dedicated Success Manager", "Custom Reporting", "SLA Support"],
    cta: "Contact Sales",
    to: "/request-demo",
  },
];

export function Pricing() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {plans.map((p) => (
        <div
          key={p.name}
          className={`surface-card card-hover p-7 flex flex-col relative ${
            p.featured ? "ring-2 ring-accent shadow-[0_30px_60px_-30px_color-mix(in_oklab,var(--accent)_50%,transparent)]" : ""
          }`}
        >
          {p.featured && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[11px] font-semibold px-3 py-1 rounded-full">
              Most Popular
            </span>
          )}
          <div className="text-sm font-semibold text-primary">{p.name}</div>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed min-h-[42px]">{p.desc}</p>
          <div className="mt-5">
            <span className="text-4xl font-semibold text-primary tracking-tight">{p.price}</span>
            {p.price !== "Custom" && <span className="text-sm text-muted-foreground ml-1">/month</span>}
          </div>
          <div className="text-[11px] text-muted-foreground mt-1">
            {p.price === "Custom" ? "Contact us for pricing" : "Billed annually"}
          </div>
          <ul className="mt-6 space-y-2.5 text-sm text-primary/80 flex-1">
            {p.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <ButtonLink to={p.to} variant={p.featured ? "primary" : "outline"} size="md" className="w-full">
              {p.cta}
            </ButtonLink>
          </div>
        </div>
      ))}
    </div>
  );
}
