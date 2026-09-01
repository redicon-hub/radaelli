import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm text-[0.78rem] font-extrabold uppercase tracking-[0.14em] transition-all duration-200 disabled:opacity-60";

const sizes = {
  md: "h-12 px-6",
  lg: "h-14 px-8 text-[0.82rem]",
};

const variants = {
  primary:
    "bg-brand text-[oklch(0.16_0.01_168)] hover:bg-brand-bright hover:-translate-y-0.5 shadow-[0_12px_30px_-14px_oklch(0.63_0.13_168.5/0.9)]",
  ghost:
    "border border-current/25 text-foreground hover:border-brand hover:text-brand-bright",
  solid: "bg-foreground text-background hover:opacity-90",
};

type BtnProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
};

export function BtnLink({
  to,
  variant = "primary",
  size = "md",
  className,
  children,
}: BtnProps & { to: string }) {
  return (
    <Link to={to} className={cn(base, sizes[size], variants[variant], className)}>
      {children}
    </Link>
  );
}

export function BtnAnchor({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: BtnProps & ComponentProps<"a">) {
  return (
    <a className={cn(base, sizes[size], variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}

export function BtnSubmit({
  variant = "primary",
  size = "lg",
  className,
  children,
  ...rest
}: BtnProps & ComponentProps<"button">) {
  return (
    <button
      className={cn(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="eyebrow">
      <span aria-hidden className="h-px w-8 bg-brand" />
      {children}
    </span>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={cn("h-4 w-4", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="square"
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function Figure({
  src,
  alt,
  className,
  ratio = "aspect-[4/3]",
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("group overflow-hidden bg-graphite", ratio, className)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="img-cine"

      />
    </div>
  );
}
