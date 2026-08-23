type LogoVariant = "default" | "light";

export function Logo({ variant = "default" }: { variant?: LogoVariant }) {
  const src = variant === "light" ? "/origincue-logo-light.svg" : "/origincue-logo.svg";
  const width = 148;

  return (
    <img
      src={src}
      alt="OriginCue"
      width={width}
      height={48}
      className="h-8 w-auto"
      decoding="async"
    />
  );
}
