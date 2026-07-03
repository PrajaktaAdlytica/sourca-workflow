export function Logo({ variant = "default" }: { variant?: "default" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-primary";
  return (
    <div className="flex items-center gap-2">
      <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden>
        <rect x="2" y="2" width="36" height="36" rx="8" fill="var(--accent)" />
        <path
          d="M14 15c0-2.2 1.9-4 4.5-4h7c1.4 0 2.5 1.1 2.5 2.5S26.9 16 25.5 16H18c-.6 0-1 .4-1 1s.4 1 1 1h4c2.8 0 5 2.2 5 5s-2.2 5-5 5h-7.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5H22c.6 0 1-.4 1-1s-.4-1-1-1h-4c-2.8 0-4-2.2-4-5z"
          fill="white"
        />
      </svg>
      <span className={`text-[1.35rem] font-semibold tracking-tight ${text}`}>Sourca</span>
    </div>
  );
}
