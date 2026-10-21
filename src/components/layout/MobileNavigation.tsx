"use client";

import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import type { LinkItem, NavItem } from "@/types";

type MobileNavigationProps = {
  items: NavItem[];
  login: LinkItem;
  cta: LinkItem;
};

const PANEL_ID = "mobile-navigation";

export function MobileNavigation({ items, login, cta }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const close = () => {
    setIsOpen(false);
    setExpanded(null);
  };

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape" && isOpen) {
      close();
      event.currentTarget.querySelector<HTMLButtonElement>("[aria-controls='" + PANEL_ID + "']")?.focus();
    }
  }

  return (
    <div className="lg:hidden" onKeyDown={handleKeyDown}>
      <button
        type="button"
        className="grid h-11 w-14 place-items-center rounded-full bg-brand text-white transition-colors hover:bg-brand-strong"
        aria-expanded={isOpen}
        aria-controls={PANEL_ID}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => (isOpen ? close() : setIsOpen(true))}
      >
        <Icon name={isOpen ? "close" : "menu"} className="size-6" strokeWidth={2.5} />
      </button>

      <div
        id={PANEL_ID}
        hidden={!isOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-var(--announcement-height)-var(--header-height))] overflow-y-auto border-t border-line bg-white shadow-lift"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-site px-4 py-4 sm:px-6">
          <ul className="flex flex-col divide-y divide-line">
            {items.map((item) => {
              if (!item.children) {
                return (
                  <li key={item.label}>
                    <Link href={item.href} onClick={close} className="block py-3.5 font-medium text-ink hover:text-brand">
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const isExpanded = expanded === item.label;
              const submenuId = `${PANEL_ID}-${item.label.toLowerCase().replace(/\s+/g, "-")}`;

              return (
                <li key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3.5 font-medium text-ink"
                    aria-expanded={isExpanded}
                    aria-controls={submenuId}
                    onClick={() => setExpanded(isExpanded ? null : item.label)}
                  >
                    {item.label}
                    <Icon name="chevron-down" className={cn("size-5 transition-transform", isExpanded && "rotate-180")} />
                  </button>
                  <ul id={submenuId} hidden={!isExpanded} className="mb-3 flex flex-col gap-1 rounded-2xl bg-lilac p-2">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={close}
                          className="flex flex-col rounded-xl px-3 py-2 hover:bg-white focus-visible:bg-white"
                        >
                          <span className="text-sm font-semibold text-navy">{child.label}</span>
                          <span className="text-xs text-muted">{child.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button href={login.href} variant="soft" onClick={close} className="uppercase">
              {login.label}
            </Button>
            <Button href={cta.href} onClick={close} className="uppercase">
              {cta.label}
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
