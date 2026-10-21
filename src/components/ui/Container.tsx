import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** Centers content and applies the site's max width and side gutters. */
export function Container({ as: Component = "div", className, children }: ContainerProps) {
  return (
    <Component className={cn("mx-auto w-full max-w-site px-4 sm:px-6", className)}>
      {children}
    </Component>
  );
}
