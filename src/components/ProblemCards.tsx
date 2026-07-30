import { motion, useReducedMotion } from "motion/react";
import { Search, Table, ShieldCheck, GitBranch, FileText } from "lucide-react";

export function ProblemCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <Card
        index={0}
        icon={<Search className="h-5 w-5" />}
        title="Supplier Discovery"
        desc="Finding qualified suppliers takes too much manual research."
      >
        <div className="mt-4 flex items-center gap-2 p-2 rounded-md border border-border bg-background/50">
          <Search className="h-3.5 w-3.5 text-muted-foreground" />
          <div className="text-[11px] text-muted-foreground">Search suppliers…</div>
        </div>
      </Card>
      <Card
        index={1}
        icon={<Table className="h-5 w-5" />}
        title="Quote Comparison"
        desc="Comparing quotations across spreadsheets is slow."
      >
        <table className="mt-4 w-full text-[10px]">
          <thead>
            <tr className="text-muted-foreground text-left">
              <th className="pb-1 font-normal">Supplier</th>
              <th className="pb-1 font-normal">Price</th>
              <th className="pb-1 font-normal">Delivery</th>
            </tr>
          </thead>
          <tbody className="text-primary/80">
            {[
              ["A", "$4.28", "12d"],
              ["B", "$4.65", "15d"],
              ["C", "$4.90", "18d"],
            ].map((r) => (
              <tr key={r[0]} className="border-t border-border">
                <td className="py-1">Supplier {r[0]}</td>
                <td className="py-1 tabular-nums">{r[1]}</td>
                <td className="py-1 tabular-nums">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <Card
        index={2}
        icon={<ShieldCheck className="h-5 w-5" />}
        title="Supplier Risk"
        desc="Compliance and financial checks happen too late."
      >
        <div className="mt-4 space-y-1.5">
          {[
            { l: "Compliance", v: "Medium", c: "bg-amber-50 text-amber-700" },
            { l: "Financial Health", v: "Low", c: "bg-emerald-50 text-emerald-700" },
            { l: "Quality", v: "High", c: "bg-red-50 text-red-700" },
          ].map((r) => (
            <div key={r.l} className="flex items-center justify-between text-[11px]">
              <span className="text-primary/70">{r.l}</span>
              <span className={`px-1.5 py-0.5 rounded ${r.c}`}>{r.v}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card
        index={3}
        icon={<GitBranch className="h-5 w-5" />}
        title="Disconnected Procurement"
        desc="RFQs, documents and suppliers live in separate systems."
      >
        <div className="mt-4 relative h-16">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="absolute h-8 w-8 rounded-md bg-secondary flex items-center justify-center border border-border"
              style={{ left: `${i * 32}%`, top: i % 2 ? "50%" : "0%" }}
            >
              <FileText className="h-3.5 w-3.5 text-muted-foreground" />
            </motion.div>
          ))}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 rounded-md bg-accent text-accent-foreground flex items-center justify-center text-[9px] font-bold">
            S
          </div>
        </div>
      </Card>
    </div>
  );
}

function Card({
  icon,
  title,
  desc,
  children,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  children?: React.ReactNode;
  index: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 28, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="surface-card card-hover p-6 flex flex-col"
    >
      <div className="h-10 w-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center">
        {icon}
      </div>
      <div className="mt-4 text-sm font-semibold text-primary">{title}</div>
      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{desc}</p>
      {children}
    </motion.div>
  );
}
