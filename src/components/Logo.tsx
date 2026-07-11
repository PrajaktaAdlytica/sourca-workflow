type LogoVariant = "default" | "light";

export function Logo({ variant = "default" }: { variant?: LogoVariant }) {
  const src = variant === "light" ? "/logo-light.svg" : "/logo.svg";
  const width = 148;

  return (
    <img
      src={src}
      alt="Sourcixa"
      width={width}
      height={48}
      className="h-8 w-auto"
      decoding="async"
    />
  );
}
