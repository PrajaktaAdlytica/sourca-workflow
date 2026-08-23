import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";
import { cn } from "@/lib/utils";

const products = [
  { to: "/products/find", name: "OriginCue Find", desc: "Supplier discovery" },
  { to: "/products/rfq", name: "OriginCue RFQ", desc: "RFQ management" },
  { to: "/products/risk", name: "OriginCue Risk", desc: "Supplier intelligence" },
];

export function Navbar({ cinematic = false }: { cinematic?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [overCinematic, setOverCinematic] = useState(cinematic);
  const [cinematicTone, setCinematicTone] = useState<"light" | "dark">("light");
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const entry = cinematic
        ? document.querySelector<HTMLElement>("[data-cinematic-entry]")
        : null;
      const isOverEntry = Boolean(entry && entry.getBoundingClientRect().bottom > 64);
      setOverCinematic(isOverEntry);
      setScrolled(window.scrollY > 8 && !isOverEntry);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [cinematic]);

  useEffect(() => {
    if (!cinematic) return;
    const onTheme = (event: Event) => {
      const themeEvent = event as CustomEvent<{ tone?: "light" | "dark" }>;
      if (themeEvent.detail?.tone) setCinematicTone(themeEvent.detail.tone);
    };
    window.addEventListener("origincue:entry-theme", onTheme);
    return () => window.removeEventListener("origincue:entry-theme", onTheme);
  }, [cinematic]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const inverted = overCinematic && cinematicTone === "dark";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        overCinematic
          ? "border-b border-transparent bg-transparent"
          : scrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-border"
            : "bg-transparent",
        inverted && "text-white",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center">
          <Logo variant={inverted ? "light" : "default"} />
        </Link>

        <div className="hidden lg:flex items-center gap-1 text-sm">
          <NavLink to="/" inverted={inverted}>
            Home
          </NavLink>
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              className={cn(
                "inline-flex items-center gap-1 px-3 py-2 rounded-md transition-colors",
                inverted ? "text-white/80 hover:text-white" : "text-primary/80 hover:text-primary",
              )}
            >
              Products <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {productsOpen && (
              <div className="absolute left-0 top-full pt-2 w-[320px]">
                <div className="surface-card p-2 shadow-xl">
                  {products.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="block rounded-lg px-3 py-2.5 hover:bg-secondary transition-colors"
                    >
                      <div className="text-sm font-medium text-primary">{p.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{p.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <NavAnchor href="/#solutions" inverted={inverted}>
            Solutions
          </NavAnchor>
          <NavAnchor href="/#pricing" inverted={inverted}>
            Pricing
          </NavAnchor>
          <NavLink to="/about" inverted={inverted}>
            About
          </NavLink>
          <NavLink to="/news/funding-announcement" inverted={inverted}>
            Announcement
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <ButtonLink
            to="/signin"
            variant="ghost"
            size="sm"
            className={inverted ? "text-white hover:bg-white/10 hover:text-white" : undefined}
          >
            Sign In
          </ButtonLink>
          <ButtonLink to="/request-demo" variant="primary" size="sm">
            Request Demo
          </ButtonLink>
        </div>

        <button
          className={cn(
            "lg:hidden -mr-2 flex h-11 w-11 items-center justify-center rounded-lg transition-colors",
            inverted ? "text-white hover:bg-white/10" : "text-primary hover:bg-secondary",
          )}
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="fixed inset-x-0 bottom-0 top-16 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="absolute inset-y-0 right-0 flex w-[min(92vw,390px)] flex-col overflow-y-auto border-l border-border bg-background shadow-2xl"
          >
            <div className="flex-1 px-6 py-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Navigate
              </div>
              <div className="mt-3 space-y-1">
                <MobileLink to="/" onClick={() => setOpen(false)}>
                  Home
                </MobileLink>
                <a href="/#solutions" onClick={() => setOpen(false)} className="mobile-nav-link">
                  Solutions
                </a>
                <a href="/#pricing" onClick={() => setOpen(false)} className="mobile-nav-link">
                  Pricing
                </a>
                <MobileLink to="/about" onClick={() => setOpen(false)}>
                  About
                </MobileLink>
                <MobileLink to="/news/funding-announcement" onClick={() => setOpen(false)}>
                  Announcement
                </MobileLink>
              </div>

              <div className="mt-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Products
              </div>
              <div className="mt-3 space-y-2">
                {products.map((product, index) => (
                  <Link
                    key={product.to}
                    to={product.to}
                    onClick={() => setOpen(false)}
                    className="flex min-h-16 items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/35 hover:bg-accent-soft/35"
                  >
                    <span
                      className={`h-8 w-1 rounded-full ${index === 0 ? "bg-accent" : index === 1 ? "bg-teal" : "bg-slate-600"}`}
                    />
                    <span>
                      <span className="block text-sm font-semibold text-primary">
                        {product.name}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {product.desc}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="sticky bottom-0 border-t border-border bg-background/95 p-5 backdrop-blur">
              <div className="grid grid-cols-2 gap-3">
                <ButtonLink to="/signin" variant="outline" size="md" className="w-full">
                  Sign In
                </ButtonLink>
                <ButtonLink to="/request-demo" variant="primary" size="md" className="w-full">
                  Request Demo
                </ButtonLink>
              </div>
              <p className="mt-3 text-center text-[10px] text-muted-foreground">
                Product views use synthetic demo records.
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  to,
  children,
  inverted = false,
}: {
  to: string;
  children: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "px-3 py-2 rounded-md transition-colors",
        inverted ? "text-white/80 hover:text-white" : "text-primary/80 hover:text-primary",
      )}
      activeProps={{ className: inverted ? "text-white font-medium" : "text-primary font-medium" }}
    >
      {children}
    </Link>
  );
}
function NavAnchor({
  href,
  children,
  inverted = false,
}: {
  href: string;
  children: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "px-3 py-2 rounded-md transition-colors",
        inverted ? "text-white/80 hover:text-white" : "text-primary/80 hover:text-primary",
      )}
    >
      {children}
    </a>
  );
}
function MobileLink({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link to={to} onClick={onClick} className="mobile-nav-link">
      {children}
    </Link>
  );
}
