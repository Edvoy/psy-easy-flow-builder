import { cn } from "@/lib/utils";

interface BrandPictoProps {
  variant?: "primary" | "teal" | "pink" | "navy" | "mint";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

/**
 * Custom brand pictogram based on Psy-Easy branding
 * Features a central neuron-like shape with surrounding colored dots
 */
export function BrandPicto({ variant = "primary", size = "md", className }: BrandPictoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  };

  const centerColors = {
    primary: "fill-brand-blue",
    teal: "fill-teal",
    pink: "fill-pink-soft",
    navy: "fill-navy",
    mint: "fill-mint",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(sizeClasses[size], className)}
      aria-hidden="true"
    >
      {/* Outer dots - alternating colors */}
      {/* Top */}
      <circle cx="50" cy="8" r="5" className="fill-mint" />
      {/* Top right */}
      <circle cx="78" cy="22" r="4" className="fill-pink-soft" />
      {/* Right */}
      <circle cx="92" cy="50" r="5" className="fill-teal" />
      {/* Bottom right */}
      <circle cx="78" cy="78" r="4" className="fill-mint" />
      {/* Bottom */}
      <circle cx="50" cy="92" r="5" className="fill-pink-soft" />
      {/* Bottom left */}
      <circle cx="22" cy="78" r="4" className="fill-teal" />
      {/* Left */}
      <circle cx="8" cy="50" r="5" className="fill-mint" />
      {/* Top left */}
      <circle cx="22" cy="22" r="4" className="fill-pink-soft" />

      {/* Central neuron shape */}
      <path
        d="M50 30 
           C55 30, 60 35, 60 40 
           L70 40 C73 40, 75 42, 75 45 C75 48, 73 50, 70 50
           L70 50 C73 50, 75 52, 75 55 C75 58, 73 60, 70 60 L60 60
           C60 65, 55 70, 50 70
           C45 70, 40 65, 40 60 L30 60 C27 60, 25 58, 25 55 C25 52, 27 50, 30 50
           L30 50 C27 50, 25 48, 25 45 C25 42, 27 40, 30 40 L40 40
           C40 35, 45 30, 50 30Z"
        className={cn(centerColors[variant])}
      />
    </svg>
  );
}

interface BrandIconProps {
  type: "brain" | "shield" | "heart" | "lightbulb" | "users" | "check" | "star" | "sparkles" | "target" | "book" | "clock" | "zap" | "chart" | "file" | "award" | "flask" | "message" | "building" | "user";
  variant?: "primary" | "teal" | "pink" | "navy" | "mint";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

/**
 * Custom brand icons in the Psy-Easy style
 * Uses the brand colors with a soft, organic feel
 */
export function BrandIcon({ type, variant = "primary", size = "md", className }: BrandIconProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-20 h-20",
  };

  const centerColors = {
    primary: "fill-brand-blue",
    teal: "fill-teal",
    pink: "fill-pink-soft",
    navy: "fill-navy",
    mint: "fill-mint",
  };

  const dotColors = {
    primary: ["fill-mint", "fill-pink-soft", "fill-teal"],
    teal: ["fill-mint", "fill-pink-soft", "fill-brand-blue"],
    pink: ["fill-mint", "fill-teal", "fill-brand-blue"],
    navy: ["fill-mint", "fill-pink-soft", "fill-teal"],
    mint: ["fill-pink-soft", "fill-teal", "fill-brand-blue"],
  };

  const dots = dotColors[variant];

  const iconPaths: Record<string, string> = {
    brain: "M50 25c-12 0-22 8-25 19-5 2-8 7-8 13 0 8 6 14 14 14h38c8 0 14-6 14-14 0-6-3-11-8-13-3-11-13-19-25-19zm-8 20c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4zm16 0c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4z",
    shield: "M50 20L25 30v20c0 15 10 28 25 33 15-5 25-18 25-33V30L50 20zm0 35L40 45l5-5 5 5 10-10 5 5-15 15z",
    heart: "M50 75L25 50c-7-7-7-18 0-25s18-7 25 0c7-7 18-7 25 0s7 18 0 25L50 75z",
    lightbulb: "M50 20c-12 0-22 10-22 22 0 8 4 15 11 19v9h22v-9c7-4 11-11 11-19 0-12-10-22-22-22zm-6 55h12v5H44v-5z",
    users: "M35 45c-6 0-10-5-10-11s4-11 10-11 10 5 10 11-4 11-10 11zm30 0c-6 0-10-5-10-11s4-11 10-11 10 5 10 11-4 11-10 11zM35 50c-10 0-18 6-18 13v7h36v-7c0-7-8-13-18-13zm30 0c-3 0-5 1-7 2 4 3 7 8 7 13v5h18v-7c0-7-8-13-18-13z",
    check: "M50 20c-17 0-30 13-30 30s13 30 30 30 30-13 30-30-13-30-30-30zm-5 43L30 48l5-5 10 10 20-20 5 5-25 25z",
    star: "M50 20l9 19 21 3-15 15 4 21-19-10-19 10 4-21-15-15 21-3z",
    sparkles: "M50 20l4 12 12-4-8 10 8 10-12-4-4 12-4-12-12 4 8-10-8-10 12 4z M30 30l2 6 6-2-4 5 4 5-6-2-2 6-2-6-6 2 4-5-4-5 6 2z M70 60l2 6 6-2-4 5 4 5-6-2-2 6-2-6-6 2 4-5-4-5 6 2z",
    target: "M50 20c-17 0-30 13-30 30s13 30 30 30 30-13 30-30-13-30-30-30zm0 50c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20zm0-30c-6 0-10 4-10 10s4 10 10 10 10-4 10-10-4-10-10-10zm0 15c-3 0-5-2-5-5s2-5 5-5 5 2 5 5-2 5-5 5z",
    book: "M25 25h20v50H25c-3 0-5-2-5-5V30c0-3 2-5 5-5zm30 0h20c3 0 5 2 5 5v40c0 3-2 5-5 5H55V25z",
    clock: "M50 20c-17 0-30 13-30 30s13 30 30 30 30-13 30-30-13-30-30-30zm0 55c-14 0-25-11-25-25s11-25 25-25 25 11 25 25-11 25-25 25zm3-25l10 10-4 4-12-12V35h6v15z",
    zap: "M55 20L30 55h20l-5 25 25-35H50z",
    chart: "M25 70V45h10v25H25zm15 0V30h10v40H40zm15 0V40h10v30H55zm15 0V50h10v20H70z",
    file: "M70 30L55 15H30c-3 0-5 2-5 5v60c0 3 2 5 5 5h40c3 0 5-2 5-5V30zm-15-10l10 10H55V20zm10 55H35V25h15v15h15v35z",
    award: "M50 20l8 8h12v12l8 8-8 8v12H58l-8 8-8-8H30V56l-8-8 8-8V28h12l8-8zm0 20c-6 0-10 4-10 10s4 10 10 10 10-4 10-10-4-10-10-10z",
    flask: "M40 20v25L25 70c-2 3 0 7 4 7h42c4 0 6-4 4-7L60 45V20h5v-5H35v5h5zm5 5h10v22l12 23H33l12-23V25z",
    message: "M25 25h50c3 0 5 2 5 5v30c0 3-2 5-5 5H45l-10 10v-10h-10c-3 0-5-2-5-5V30c0-3 2-5 5-5z",
    building: "M25 75V25c0-3 2-5 5-5h20c3 0 5 2 5 5v50h-5V30H30v45h-5zm30 0V40c0-3 2-5 5-5h10c3 0 5 2 5 5v35h-5V45H60v30h-5z",
    user: "M50 25c-8 0-15 7-15 15s7 15 15 15 15-7 15-15-7-15-15-15zm0 40c-15 0-25 8-25 18v2h50v-2c0-10-10-18-25-18z",
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(sizeClasses[size], className)}
      aria-hidden="true"
    >
      {/* Decorative dots */}
      <circle cx="12" cy="12" r="4" className={dots[0]} />
      <circle cx="88" cy="12" r="3" className={dots[1]} />
      <circle cx="88" cy="88" r="4" className={dots[2]} />
      <circle cx="12" cy="88" r="3" className={dots[0]} />

      {/* Main icon path */}
      <path
        d={iconPaths[type]}
        className={cn(centerColors[variant])}
      />
    </svg>
  );
}
