import type { ReactNode } from "react";
import type { SocialPlatform } from "@/types";

/** Simplified platform glyphs on a 24×24 grid. */
const glyphs: Record<SocialPlatform, ReactNode> = {
  facebook: (
    <path
      fill="currentColor"
      d="M13.5 21v-7.5H16l.4-3.2h-2.9V8.4c0-.9.3-1.6 1.6-1.6h1.6V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6v3.2h2.7V21z"
    />
  ),
  x: <path fill="currentColor" d="M17.8 3.5h3l-6.6 7.5 7.7 9.5h-6l-4.7-5.8-5.4 5.8h-3l7-7.9-7.4-9.1h6.1l4.2 5.3zm-1 15.3h1.7L7.3 5.1H5.5z" />,
  linkedin: (
    <path
      fill="currentColor"
      d="M4.5 9h3.2v11H4.5zM6.1 3.8a1.85 1.85 0 1 1 0 3.7 1.85 1.85 0 0 1 0-3.7zM9.8 9h3.1v1.5c.5-.9 1.6-1.8 3.3-1.8 3.4 0 4 2.2 4 5.1V20H17v-5.4c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V20H9.8z"
    />
  ),
  instagram: (
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" />
    </g>
  ),
  youtube: (
    <path
      fill="currentColor"
      d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.6 2.6 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z"
    />
  ),
};

type SocialIconProps = {
  platform: SocialPlatform;
  className?: string;
};

export function SocialIcon({ platform, className = "size-5" }: SocialIconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      {glyphs[platform]}
    </svg>
  );
}
