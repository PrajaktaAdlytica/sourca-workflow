import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./Motion";

export function Shell({
  children,
  cinematic = false,
}: {
  children: ReactNode;
  cinematic?: boolean;
}) {
  return (
    <div className="min-h-screen bg-network flex flex-col">
      <ScrollProgress />
      <Navbar cinematic={cinematic} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
