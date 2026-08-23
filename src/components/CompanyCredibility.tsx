import { ExternalLink } from "lucide-react";
import { CRUNCHBASE_URL, INVESTOR_NAME, INVESTOR_URL, LINKEDIN_URL } from "@/lib/company";

const links = [
  { label: "Gama VC", href: INVESTOR_URL },
  { label: "LinkedIn", href: LINKEDIN_URL },
  { label: "Crunchbase", href: CRUNCHBASE_URL },
];

export function CompanyCredibility() {
  return (
    <section className="border-t border-border bg-background" aria-label="Company credibility">
      <div className="mx-auto grid max-w-7xl gap-5 px-6 py-7 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-sm font-semibold text-primary">Funded by {INVESTOR_NAME}</span>
          <span aria-hidden="true" className="hidden h-4 w-px bg-border sm:block" />
          <span className="text-sm font-semibold text-accent">$590K funding</span>
          <span className="text-xs text-muted-foreground">Announced Aug 29, 2025</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-accent focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {link.label} <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
