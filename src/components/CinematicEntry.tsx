import { ArrowDown, Pause, Play } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const films = [
  {
    id: "loom",
    number: "01",
    name: "Evidence Loom",
    label: "Signals become a shortlist",
    eyebrow: "Evidence, woven into decisions",
    titleStart: "Every supplier",
    titleAccent: "signal,",
    titleEnd: "brought into line.",
    description: "Source-labelled data becomes a shortlist your team can explain.",
    video: "/media/entry/evidence-loom.mp4",
    poster: "/media/entry/evidence-loom-poster.jpg",
    tone: "light" as const,
  },
  {
    id: "risk",
    number: "02",
    name: "Risk Revealed",
    label: "Exceptions become visible",
    eyebrow: "Risk, made visible",
    titleStart: "See what the quote",
    titleAccent: "doesn’t",
    titleEnd: "show.",
    description: "Compare evidence, surface exceptions and move forward with confidence.",
    video: "/media/entry/risk-revealed.mp4",
    poster: "/media/entry/risk-revealed-poster.jpg",
    tone: "dark" as const,
  },
];

export function CinematicEntry() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState<boolean[]>([false, false]);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const filmButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const reducedMotion = useReducedMotion();
  const active = films[activeIndex];
  const isDark = active.tone === "dark";

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("origincue:entry-theme", { detail: { tone: active.tone } }),
    );
  }, [active.tone]);

  useEffect(() => {
    if (reducedMotion) return;
    for (const video of videoRefs.current) {
      if (!video) continue;
      if (paused) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    }
  }, [paused, reducedMotion]);

  const chooseFilm = (index: number) => {
    setActiveIndex(index);
    const selectedVideo = videoRefs.current[index];
    if (!paused && selectedVideo) void selectedVideo.play().catch(() => undefined);
  };

  const handleFilmKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const nextIndex =
      event.key === "ArrowRight"
        ? (index + 1) % films.length
        : event.key === "ArrowLeft"
          ? (index - 1 + films.length) % films.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? films.length - 1
              : null;

    if (nextIndex === null) return;
    event.preventDefault();
    chooseFilm(nextIndex);
    filmButtonRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      data-cinematic-entry
      aria-labelledby="cinematic-entry-title"
      className={cn(
        "relative -mt-16 min-h-screen min-h-[100dvh] overflow-hidden pt-16 transition-colors duration-700",
        isDark ? "bg-[#020304] text-white" : "bg-[#f3ede4] text-[#111827]",
      )}
    >
      <div className="absolute inset-0" aria-hidden="true">
        {films.map((film, index) =>
          reducedMotion ? (
            <img
              key={film.id}
              src={film.poster}
              alt=""
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
                film.tone === "light"
                  ? "object-[67%_center] md:object-center"
                  : "object-[69%_center] md:object-center",
                index === activeIndex ? "opacity-100" : "opacity-0",
              )}
            />
          ) : (
            <video
              key={film.id}
              ref={(node) => {
                videoRefs.current[index] = node;
              }}
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1100ms] ease-in-out",
                film.tone === "light"
                  ? "object-[67%_center] md:object-center"
                  : "object-[69%_center] md:object-center",
                index === activeIndex ? "opacity-100" : "opacity-0",
              )}
              src={film.video}
              poster={film.poster}
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              tabIndex={-1}
              onCanPlay={() =>
                setReady((current) => current.map((value, i) => (i === index ? true : value)))
              }
            />
          ),
        )}

        <div
          className={cn(
            "absolute inset-0 transition-colors duration-700",
            isDark
              ? "bg-[linear-gradient(90deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.3)_36%,rgba(0,0,0,0.04)_68%,rgba(0,0,0,0.16)_100%)]"
              : "bg-[linear-gradient(90deg,rgba(250,247,241,0.74)_0%,rgba(250,247,241,0.43)_38%,rgba(250,247,241,0.02)_70%,rgba(250,247,241,0.08)_100%)]",
          )}
        />
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t to-transparent md:h-40",
            isDark ? "from-black/55" : "from-[#f6f0e7]/70",
          )}
        />
        <div
          className={cn("absolute inset-0 md:hidden", isDark ? "bg-black/30" : "bg-[#faf6ef]/32")}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] min-h-[calc(100dvh-4rem)] max-w-7xl flex-col px-6 pb-7 pt-12 sm:pb-8 md:pt-24">
        <div className="flex flex-1 items-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              id="cinematic-entry-panel"
              role="tabpanel"
              aria-labelledby={`film-tab-${active.id}`}
              initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -18, filter: "blur(7px)" }}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[640px] pt-8 sm:pt-0"
            >
              <div
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-[0.19em] sm:text-xs",
                  isDark ? "text-[#ef6c2f]" : "text-[#b94718]",
                )}
              >
                {active.eyebrow}
              </div>
              <h1
                id="cinematic-entry-title"
                className={cn(
                  "mt-4 max-w-[620px] text-[clamp(3rem,6vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-balance",
                  isDark && "md:max-w-[450px] md:text-[78px] lg:text-[84px]",
                )}
              >
                {active.titleStart}{" "}
                <span
                  className={cn(
                    "font-editorial font-normal",
                    isDark ? "text-[#e9672f]" : "text-[#bd4c1b]",
                  )}
                >
                  {active.titleAccent}
                </span>
                {isDark && <br className="hidden md:block" />} {active.titleEnd}
              </h1>
              <p
                className={cn(
                  "mt-6 max-w-lg text-sm leading-relaxed sm:text-base",
                  isDark ? "text-white/70" : "text-[#384152]/76",
                )}
              >
                {active.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#main-hero"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-medium text-white shadow-[0_14px_34px_-16px_rgba(194,65,12,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d0521a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  Enter OriginCue
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </a>
                {!reducedMotion && (
                  <button
                    type="button"
                    onClick={() => setPaused((current) => !current)}
                    className={cn(
                      "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isDark
                        ? "text-white/72 hover:bg-white/10"
                        : "text-[#26303d]/72 hover:bg-black/5",
                    )}
                    aria-pressed={paused}
                  >
                    {paused ? (
                      <Play className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Pause className="h-4 w-4" aria-hidden="true" />
                    )}
                    {paused ? "Play motion" : "Pause motion"}
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid items-end gap-5 border-t border-current/15 pt-5 md:grid-cols-[auto_minmax(0,680px)] md:justify-between">
          <div className="hidden text-[10px] font-semibold uppercase tracking-[0.16em] opacity-60 md:block">
            Choose the signal
          </div>
          <div
            role="tablist"
            aria-label="Choose an entry film"
            className="grid gap-2 sm:grid-cols-2"
          >
            {films.map((film, index) => {
              const selected = index === activeIndex;
              return (
                <button
                  key={film.id}
                  ref={(node) => {
                    filmButtonRefs.current[index] = node;
                  }}
                  id={`film-tab-${film.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="cinematic-entry-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => chooseFilm(index)}
                  onKeyDown={(event) => handleFilmKeyDown(event, index)}
                  className={cn(
                    "group relative min-h-[70px] overflow-hidden rounded-xl border px-4 py-3 text-left backdrop-blur-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    isDark
                      ? selected
                        ? "border-white/34 bg-white/12"
                        : "border-white/14 bg-black/18 hover:border-white/28 hover:bg-white/8"
                      : selected
                        ? "border-black/22 bg-white/54 shadow-[0_16px_38px_-28px_rgba(34,24,18,0.55)]"
                        : "border-black/10 bg-white/28 hover:border-black/20 hover:bg-white/45",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={cn(
                        "mt-0.5 text-[10px] font-semibold tracking-[0.14em]",
                        selected ? "text-accent" : "opacity-55",
                      )}
                    >
                      {film.number}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{film.name}</span>
                      <span className="mt-1 block text-[11px] opacity-60">{film.label}</span>
                    </span>
                  </div>
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent transition-transform duration-500",
                      selected ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-[9px] font-medium uppercase tracking-[0.14em] opacity-45 sm:text-[10px]">
          <span>{ready[activeIndex] || reducedMotion ? "Film ready" : "Preparing film"}</span>
          <span>Silent · 8 second loop</span>
        </div>
      </div>
    </section>
  );
}
