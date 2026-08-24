import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ExternalLink, Linkedin } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: [
      { label: "OriginCue Find", to: "/products/find" },
      { label: "OriginCue RFQ", to: "/products/rfq" },
      { label: "OriginCue Risk", to: "/products/risk" },
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
      { label: "Funding announcement", to: "/news/funding-announcement" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "mailto:hello@origincue.com" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/origincue/",
      },
      {
        label: "Crunchbase",
        href: "https://www.crunchbase.com/organization/origincue",
      },
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
              6686 George Road
              <br />
              Valletta, SH VLT 1012
              <br />
              Malta
              <br />
              Phone: 2507 7040
              <br />
              hello@origincue.com
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
                        {...(l.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer noopener" }
                          : {})}
                        className="inline-flex items-center gap-2 text-primary/80 hover:text-accent transition-colors"
                      >
                        {l.href === "https://www.linkedin.com/company/origincue/" ? (
                          <Linkedin className="h-4 w-4" />
                        ) : l.href === "https://www.crunchbase.com/organization/origincue" ? (
                          <ExternalLink className="h-4 w-4" />
                        ) : null}
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
          <div>© 2026 OriginCue</div>
          <div>Procurement intelligence for European sourcing teams</div>
        </div>
      </div>
    </footer>
  );
}
