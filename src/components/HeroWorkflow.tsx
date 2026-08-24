import { motion } from "motion/react";
import { Search, Building2, Sparkles, ShieldAlert, DollarSign, Truck, Check } from "lucide-react";

const steps = [
  { icon: Search, label: "Search suppliers", sub: "Wire harness manufacturers" },
  { icon: Building2, label: "Supplier cards appear", sub: "ElectroCo · Voltix · TechWire" },
  { icon: Sparkles, label: "AI compares suppliers", sub: "Quality · Price · Delivery" },
  { icon: ShieldAlert, label: "Risk scores appear", sub: "Compliance · Financial · ESG" },
  { icon: DollarSign, label: "Prices compare", sub: "$4.28 · $4.65 · $4.90 · $5.32" },
  { icon: Truck, label: "Delivery times compare", sub: "12 · 15 · 18 · 21 days" },
];

const finalSupplier = { name: "ElectroCo", country: "Poland", price: "$4.28", delivery: "12 days" };

export function HeroWorkflow() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-6 rounded-3xl bg-accent/5 blur-3xl -z-10" />
      <div className="space-y-2.5">
        {steps.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="surface-card card-hover flex items-center gap-3 p-3 pr-4"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <s.icon className="h-4.5 w-4.5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-semibold text-primary">{s.label}</div>
              <div className="text-[11px] text-muted-foreground truncate">{s.sub}</div>
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + steps.length * 0.18, duration: 0.6 }}
          className="surface-card flex items-center gap-3 p-3.5 pr-4 ring-2 ring-emerald-400/60 shadow-[0_20px_60px_-25px_rgba(16,185,129,0.55)]"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500 text-white">
            <Check className="h-5 w-5" strokeWidth={3} />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-primary">
              {finalSupplier.name} · {finalSupplier.country}
            </div>
            <div className="text-[11px] text-muted-foreground">
              {finalSupplier.price} · {finalSupplier.delivery}
            </div>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200 rounded-full px-2 py-0.5">
            Best Match
          </span>
        </motion.div>
      </div>
    </div>
  );
}
