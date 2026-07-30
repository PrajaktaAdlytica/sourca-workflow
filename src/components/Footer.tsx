import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Sourcixa Find", to: "/products/find" },
      { label: "Sourcixa RFQ", to: "/products/rfq" },
      { label: "Sourcixa Risk", to: "/products/risk" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Procurement Teams", href: "/#solutions" },
      { label: "Manufacturers", href: "/#solutions" },
      { label: "Retailers", href: "/#solutions" },
      { label: "Supply Chain", href: "/#solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "mailto:hello@sourcixa.com" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Data Processing", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-dotted border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              AI-powered procurement platform for supplier discovery, RFQ management and supplier
              risk intelligence.
            </p>
            <div className="mt-5 text-xs text-muted-foreground leading-relaxed">
              Poland · European Union
              <br />
              hello@sourcixa.com
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {col.title}
              </div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) =>
                  "to" in l ? (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-primary/80 hover:text-accent transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-primary/80 hover:text-accent transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 Sourcixa</div>
          <div>Procurement intelligence for European sourcing teams</div>
        </div>
      </div>
    </footer>
  );
}
