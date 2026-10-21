import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cn, isExternalHref } from "@/lib/utils";

export type ButtonVariant = "primary" | "violet" | "soft" | "accent" | "outline" | "light";
export type ButtonSize = "sm" | "md" | "lg" | "xl" | "promo";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-strong",
  violet: "bg-violet text-white hover:bg-violet-strong",
  soft: "bg-lavender text-ink hover:bg-[#dcbcef]",
  accent: "bg-amber text-[#1e1b2e] hover:bg-[#e8960f]",
  outline: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
  light: "bg-white text-navy hover:bg-lilac",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-13 px-8 text-base",
  xl: "h-14 px-9 text-lg",
  promo: "h-8 px-4 text-[0.8125rem] sm:h-10 sm:px-5 sm:text-[1.0625rem]",
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Optional icon rendered after the label (e.g. a chevron). */
  trailingIcon?: IconName;
  /** Places the trailing icon inside a translucent circle (reference footer CTA style). */
  iconInCircle?: boolean;
  /** Label weight; most reference CTAs are medium, promo buttons are extra bold. */
  weight?: "medium" | "extrabold";
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps | "href"> & { href: string };

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
  weight: "medium" | "extrabold" = "medium",
) {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-full whitespace-nowrap transition-colors duration-200 disabled:pointer-events-none disabled:opacity-60",
    weight === "extrabold" ? "font-extrabold" : "font-medium",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

/** Pill-shaped call to action. Renders a link when `href` is provided, otherwise a <button>. */
export function Button({ variant, size, trailingIcon, iconInCircle, weight, className, children, ...rest }: ButtonProps) {
  const classes = buttonClasses(variant, size, className, weight);
  const icon = trailingIcon ? <Icon name={trailingIcon} className="size-4" strokeWidth={2.5} /> : null;
  const content = (
    <>
      <span>{children}</span>
      {icon && iconInCircle ? (
        <span className="grid size-9 place-items-center rounded-full bg-white/25">{icon}</span>
      ) : (
        icon
      )}
    </>
  );

  if (typeof rest.href === "string") {
    const { href, ...anchorProps } = rest as Omit<ButtonAsLink, keyof BaseProps>;
    if (isExternalHref(href)) {
      return (
        <a href={href} className={classes} {...anchorProps}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as Omit<ButtonAsButton, keyof BaseProps>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
