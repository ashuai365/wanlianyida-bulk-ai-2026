"use client";

import type { MouseEvent, ReactNode } from "react";

type AnchorLinkProps = {
  targetId: string;
  className?: string;
  ariaLabel?: string;
  children: ReactNode;
};

export function AnchorLink({ targetId, className, ariaLabel, children }: AnchorLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) return;

    document.documentElement.style.removeProperty("overflow");
    document.body.style.removeProperty("overflow");

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    const headerHeight = document.querySelector<HTMLElement>(".site-header")?.offsetHeight ?? 0;
    const top = window.scrollY + target.getBoundingClientRect().top - headerHeight - 14;

    window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "auto" });
    window.history.replaceState(null, "", `#${targetId}`);
  };

  return (
    <a className={className} href={`#${targetId}`} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </a>
  );
}
