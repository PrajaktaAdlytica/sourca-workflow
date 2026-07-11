import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { motion } from "motion/react";

export const Route = createFileRoute("/request-demo")({
  head: () => ({
    meta: [
      { title: "Request a Demo — Sourcixa" },
      { name: "description", content: "See how Sourcixa helps procurement teams discover suppliers, manage RFQs and evaluate risk." },
    ],
  }),
  component: RequestDemo,
});

const benefits = [
  "30-minute personalised walkthrough",
  "Tailored to your industry and sourcing category",
  "Pricing and implementation guidance",
  "Q&A with a procurement specialist",
];

function RequestDemo() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="relative hidden lg:flex flex-col bg-primary text-primary-foreground p-10 overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }} />
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
        <Link to="/" className="relative">
          <Logo variant="light" />
        </Link>
        <div className="relative mt-auto max-w-md">
          <h2 className="text-4xl font-semibold tracking-tight text-balance leading-[1.05]">
            See <span className="font-editorial text-accent">Sourcixa</span> in action.
          </h2>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Walk through supplier discovery, RFQs and risk intelligence — mapped to how your team sources today.
          </p>
          <ul className="mt-8 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-primary-foreground/85">
                <span className="mt-0.5 h-5 w-5 rounded-md bg-accent/25 text-accent flex items-center justify-center">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-14 bg-network">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md">
          <div className="lg:hidden mb-8"><Link to="/"><Logo /></Link></div>
          <h1 className="text-3xl font-semibold text-primary tracking-tight">Request Demo</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Fill in a few details and our team will be in touch within one business day.
          </p>

          {sent ? (
            <div className="mt-8 surface-card p-8 text-center">
              <div className="mx-auto h-12 w-12 rounded-full bg-accent-soft text-accent flex items-center justify-center">
                <Check className="h-6 w-6" strokeWidth={3} />
              </div>
              <div className="mt-4 text-lg font-semibold text-primary">Thank you.</div>
              <p className="mt-2 text-sm text-muted-foreground">
                A member of our team will reach out shortly to schedule your walkthrough.
              </p>
            </div>
          ) : (
            <form className="mt-8 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Full name"><input required className="input" /></Field>
                <Field label="Job title"><input required className="input" /></Field>
              </div>
              <Field label="Work email"><input required type="email" className="input" placeholder="you@company.com" /></Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Company"><input required className="input" /></Field>
                <Field label="Country"><input required className="input" placeholder="Poland" /></Field>
              </div>
              <Field label="Company size">
                <select className="input" defaultValue="">
                  <option value="" disabled>Select</option>
                  <option>1–50</option>
                  <option>51–250</option>
                  <option>251–1,000</option>
                  <option>1,000+</option>
                </select>
              </Field>
              <Field label="What are you looking to solve? (optional)">
                <textarea rows={3} className="input h-auto py-2.5" />
              </Field>
              <Button variant="primary" size="lg" className="w-full">
                Request Demo <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-[11px] text-muted-foreground text-center">
                By submitting, you agree to Sourcixa processing your data as described in our Privacy Policy.
              </p>
            </form>
          )}
        </motion.div>
      </div>
      <style>{`
        .input {
          width: 100%; height: 44px; padding: 0 0.875rem;
          border: 1px solid var(--border); border-radius: 0.5rem; background: var(--surface);
          color: var(--foreground); font-size: 0.875rem; transition: border-color 200ms, box-shadow 200ms;
        }
        .input:focus { outline: none; border-color: var(--accent);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--accent) 20%, transparent); }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-primary">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
