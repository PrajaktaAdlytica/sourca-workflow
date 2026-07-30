import { Factory, PackageSearch, ShoppingBag, Truck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const teams = [
  { icon: PackageSearch, label: "Procurement teams" },
  { icon: Factory, label: "Manufacturers" },
  { icon: ShoppingBag, label: "Retailers" },
  { icon: Truck, label: "Supply-chain teams" },
];

export function TrustedBy() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="py-14 border-y border-border bg-dotted">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Built around the teams that qualify, compare and monitor suppliers
        </p>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {teams.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="surface-card flex items-center justify-center gap-2.5 px-4 py-4 text-center"
            >
              <Icon className="h-4 w-4 shrink-0 text-accent" />
              <div className="text-xs font-semibold text-primary/75">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
