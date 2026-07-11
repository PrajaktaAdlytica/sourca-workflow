import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-network px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-semibold text-primary tracking-tight">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-primary">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent/90 transition-colors">Go home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-network px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-primary">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground hover:bg-accent/90">Try again</button>
          <a href="/" className="inline-flex items-center justify-center rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-medium text-primary hover:bg-secondary">Go home</a>
        </div>
      </div>
    </div>
  );
}

const TITLE = "Sourcixa — AI Procurement Platform for Supplier Sourcing";
const DESC = "Sourcixa is the AI procurement platform for supplier discovery, RFQ management and supplier risk intelligence. Find better suppliers and source with confidence.";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "author", content: "Sourcixa" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sourcixa" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { title: "Sourcixa" },
      { property: "og:title", content: "Sourcixa" },
      { name: "twitter:title", content: "Sourcixa" },
      { name: "description", content: "Sourcixa Procurement Hub streamlines sourcing by connecting suppliers, RFQs, and risk intelligence." },
      { property: "og:description", content: "Sourcixa Procurement Hub streamlines sourcing by connecting suppliers, RFQs, and risk intelligence." },
      { name: "twitter:description", content: "Sourcixa Procurement Hub streamlines sourcing by connecting suppliers, RFQs, and risk intelligence." },
      { property: "og:image", content: "https://sourcixa.com/sourcixa-favicon.svg?v=sourcixa" },
      { name: "twitter:image", content: "https://sourcixa.com/sourcixa-favicon.svg?v=sourcixa" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/sourcixa-favicon.svg?v=sourcixa", type: "image/svg+xml" },
      { rel: "shortcut icon", href: "/favicon.ico?v=sourcixa", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
