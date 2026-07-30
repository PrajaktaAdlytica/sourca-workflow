import {
  LayoutDashboard,
  Building2,
  FileText,
  ScrollText,
  Shield,
  FileCheck,
  BarChart3,
  Settings,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { Logo } from "./Logo";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Building2, label: "Suppliers" },
  { icon: FileText, label: "RFQs" },
  { icon: ScrollText, label: "Quotations" },
  { icon: Shield, label: "Risk" },
  { icon: FileCheck, label: "Contracts" },
  { icon: BarChart3, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

const kpis = [
  { l: "Supplier Search", v: "1,248", d: "New this month", t: "+12%", up: true },
  { l: "Supplier Directory", v: "12,540", d: "Total suppliers", t: "+6%", up: true },
  { l: "Live RFQs", v: "86", d: "Active RFQs", t: "+15%", up: true },
  { l: "Quote Comparison", v: "34", d: "In progress", t: "+6%", up: true },
];

export function SupplierDashboard() {
  return (
    <div className="surface-card overflow-hidden shadow-[0_30px_80px_-40px_rgba(11,18,32,0.25)]">
      <div className="flex min-h-[560px]">
        {/* Sidebar */}
        <div className="w-[200px] shrink-0 bg-primary text-primary-foreground p-4 hidden md:block">
          <Logo variant="light" />
          <div className="mt-6 space-y-1">
            {navItems.map((n) => (
              <div
                key={n.label}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-md text-xs ${n.active ? "bg-accent text-accent-foreground font-medium" : "text-primary-foreground/70 hover:text-primary-foreground"}`}
              >
                <n.icon className="h-3.5 w-3.5" />
                {n.label}
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 p-5 space-y-4 bg-surface">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[13px] font-semibold text-primary">Dashboard</div>
              <div className="text-[11px] text-muted-foreground">
                Illustrative workspace · synthetic data
              </div>
            </div>
            <button className="h-8 px-3 rounded-md border border-border text-[11px] text-primary/80 hover:border-primary/30">
              Export
            </button>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {kpis.map((k) => (
              <div key={k.l} className="surface-card p-3.5">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                  {k.l}
                </div>
                <div className="mt-1 flex items-baseline justify-between">
                  <div className="text-xl font-semibold text-primary tabular-nums">{k.v}</div>
                  <span className="text-[10px] font-medium text-emerald-700 inline-flex items-center gap-0.5">
                    <TrendingUp className="h-2.5 w-2.5" /> {k.t}
                  </span>
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5">{k.d}</div>
              </div>
            ))}
          </div>

          {/* Circles + Country */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <ScoreCircle label="Supplier Score" value={78} verdict="Good" color="emerald" />
            <CountryCard />
            <ScoreCircle label="ESG" value={72} verdict="Good" color="emerald" />
            <ScoreCircle label="Financial Health" value={68} verdict="Fair" color="amber" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <ScoreCircle label="Risk" value={28} verdict="Low Risk" color="emerald" small />
            <div className="lg:col-span-2 surface-card p-3.5">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                Recommended Supplier
              </div>
              <div className="mt-2.5 flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-md bg-accent text-accent-foreground flex items-center justify-center text-[10px] font-bold">
                  EC
                </div>
                <div className="flex-1">
                  <div className="text-[12px] font-semibold text-primary">ElectroCo</div>
                  <div className="text-[10px] text-muted-foreground">Poland</div>
                </div>
                <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                  Best Match
                </span>
                <div className="text-[11px] text-primary">
                  Score <span className="font-semibold tabular-nums">92</span>
                </div>
                <button className="text-[10px] text-accent font-medium hover:underline">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreCircle({
  label,
  value,
  verdict,
  color,
  small,
}: {
  label: string;
  value: number;
  verdict: string;
  color: "emerald" | "amber";
  small?: boolean;
}) {
  const stroke = color === "emerald" ? "stroke-emerald-500" : "stroke-amber-500";
  const text = color === "emerald" ? "text-emerald-700" : "text-amber-700";
  const r = 28,
    c = 2 * Math.PI * r;
  return (
    <div className={`surface-card p-3.5 ${small ? "" : ""}`}>
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</div>
      <div className="mt-2 flex items-center gap-3">
        <div className="relative h-16 w-16">
          <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
            <circle
              cx="32"
              cy="32"
              r={r}
              className="stroke-secondary"
              strokeWidth="6"
              fill="none"
            />
            <motion.circle
              cx="32"
              cy="32"
              r={r}
              className={stroke}
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDasharray: `0 ${c}` }}
              whileInView={{ strokeDasharray: `${(value / 100) * c} ${c}` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-primary tabular-nums">
            {value}
          </div>
        </div>
        <div className={`text-[11px] font-medium ${text}`}>{verdict}</div>
      </div>
    </div>
  );
}

function CountryCard() {
  const rows = [
    { c: "Poland", v: 32, cl: "bg-accent" },
    { c: "Germany", v: 22, cl: "bg-teal" },
    { c: "China", v: 15, cl: "bg-amber-500" },
    { c: "Italy", v: 10, cl: "bg-emerald-500" },
    { c: "Others", v: 21, cl: "bg-slate-400" },
  ];
  return (
    <div className="surface-card p-3.5">
      <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Country</div>
      <div className="mt-2 space-y-1">
        {rows.map((r) => (
          <div key={r.c} className="flex items-center gap-2 text-[10px]">
            <span className="w-14 text-primary/70">{r.c}</span>
            <div className="flex-1 h-1 rounded-full bg-secondary overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${r.v * 2.5}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`h-full ${r.cl}`}
              />
            </div>
            <span className="w-7 text-right text-primary tabular-nums">{r.v}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
