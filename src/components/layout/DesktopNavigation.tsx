"use client";

import Link from "next/link";
import { useState, type FocusEvent, type KeyboardEvent, type MouseEvent } from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

type DesktopNavigationProps = {
  items: NavItem[];
};

const linkClasses =
  "rounded-md px-1 py-2 text-base font-normal text-ink transition-colors hover:text-brand";

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  function handleToggleClick(event: MouseEvent<HTMLButtonElement>, label: string) {
    // Keyboard activation (detail === 0) toggles; pointer clicks open so hover + click never fights.
    if (event.detail === 0) setOpenMenu((current) => (current === label ? null : label));
    else setOpenMenu(label);
  }

  function handleBlur(event: FocusEvent<HTMLLIElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenMenu(null);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLLIElement>) {
    if (event.key === "Escape" && openMenu) {
      setOpenMenu(null);
      event.currentTarget.querySelector("button")?.focus();
    }
  }

  return (
    <ul className="flex items-center gap-5 xl:gap-8">
      {items.map((item) => {
        if (!item.children) {
          return (
            <li key={item.label}>
              <Link href={item.href} className={linkClasses}>
                {item.label}
              </Link>
            </li>
          );
        }

        const isOpen = openMenu === item.label;
        const menuId = `nav-menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`;

        return (
          <li
            key={item.label}
            className="relative"
            onMouseEnter={() => setOpenMenu(item.label)}
            onMouseLeave={() => setOpenMenu(null)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
          >
            <button
              type="button"
              className={cn(linkClasses, "flex items-center gap-1", isOpen && "text-brand")}
              aria-expanded={isOpen}
              aria-controls={menuId}
              onClick={(event) => handleToggleClick(event, item.label)}
            >
              {item.label}
              <Icon name="chevron-down" className={cn("size-4 transition-transform", isOpen && "rotate-180")} />
            </button>
            <div id={menuId} hidden={!isOpen} className="absolute top-full -left-4 z-50 pt-3">
              <ul className="w-80 rounded-2xl bg-white p-2 shadow-lift ring-1 ring-line">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link
                      href={child.href}
                      onClick={() => setOpenMenu(null)}
                      className="flex flex-col rounded-xl px-4 py-2.5 transition-colors hover:bg-lilac focus-visible:bg-lilac"
                    >
                      <span className="text-sm font-semibold text-navy">{child.label}</span>
                      <span className="text-xs text-muted">{child.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
