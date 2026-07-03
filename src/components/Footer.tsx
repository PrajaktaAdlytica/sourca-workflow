import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Linkedin, Twitter } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Sourca Find", to: "/products/find" },
      { label: "Sourca RFQ", to: "/products/rfq" },
      { label: "Sourca Risk", to: "/products/risk" },
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
      { label: "Contact", href: "mailto:hello@sourca.io" },
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
              AI-powered procurement platform for supplier discovery, RFQ management and supplier risk intelligence.
            </p>
            <div className="mt-5 text-xs text-muted-foreground leading-relaxed">
              Sourca Sp. z o.o.<br />
              Prosta 70, 00-838 Warsaw, Poland<br />
              hello@sourca.io · +48 22 307 44 00
            </div>
            <div className="mt-6 flex gap-2">
              <a href="#" className="p-2 rounded-lg border border-border hover:border-accent/60 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg border border-border hover:border-accent/60 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{col.title}</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) =>
                  "to" in l ? (
                    <li key={l.label}><Link to={l.to} className="text-primary/80 hover:text-accent transition-colors">{l.label}</Link></li>
                  ) : (
                    <li key={l.label}><a href={l.href} className="text-primary/80 hover:text-accent transition-colors">{l.label}</a></li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 Sourca Sp. z o.o. — sourca.io</div>
          <div>Warsaw · Kraków · Wrocław</div>
        </div>
      </div>
    </footer>
  );
}
