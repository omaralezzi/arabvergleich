"use client";

import Link from "next/link";
import { useRef } from "react";

import { investmentNavigationGroup } from "@/src/content/investment";
import { topNavigationGroups } from "@/src/content/serviceCatalog";
import type { Locale } from "@/src/config/site";

type HeaderCategoryScrollerProps = {
  locale: Locale;
};

export function HeaderCategoryScroller({ locale }: HeaderCategoryScrollerProps) {
  const navigationGroups = [...topNavigationGroups, investmentNavigationGroup];
  const desktopColumnCount = Math.ceil(navigationGroups.length / 2);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef<{ isDown: boolean; isDragging: boolean; startX: number; startScrollLeft: number }>({
    isDown: false,
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
  });
  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>) {
    if (event.button !== 0) return;

    const element = scrollRef.current;
    if (!element) return;

    dragStateRef.current = {
      isDown: true,
      isDragging: false,
      startX: event.clientX,
      startScrollLeft: element.scrollLeft,
    };
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const element = scrollRef.current;
    const dragState = dragStateRef.current;
    if (!element || !dragState.isDown) return;

    const delta = event.clientX - dragState.startX;
    if (!dragState.isDragging && Math.abs(delta) < 8) return;

    dragState.isDragging = true;
    element.scrollLeft = dragState.startScrollLeft - delta;
  }

  function handlePointerUp() {
    window.setTimeout(() => {
      dragStateRef.current.isDown = false;
      dragStateRef.current.isDragging = false;
    }, 0);
  }

  return (
    <>
      <div className="relative lg:hidden">
        <div
          ref={scrollRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="scrollbar-hidden flex gap-2 overflow-x-auto pb-1 text-sm text-slate-600"
          style={{ cursor: "grab" }}
        >
          {navigationGroups.map((group) => (
            <Link
              key={group.slug}
              href={`/${locale}${group.href}`}
              onClick={(event) => {
                if (dragStateRef.current.isDragging) {
                  event.preventDefault();
                }
              }}
              className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 font-medium hover:border-brand-blue hover:bg-brand-mist hover:text-brand-blue"
              draggable={false}
            >
              {group.title[locale]}
            </Link>
          ))}
        </div>
      </div>

      <nav
        aria-label={locale === "ar" ? "أقسام الموقع" : "Bereiche der Website"}
        className="hidden gap-2 lg:grid"
        style={{ gridTemplateColumns: `repeat(${desktopColumnCount}, minmax(0, 1fr))` }}
      >
        {navigationGroups.map((group) => (
          <Link
            key={group.slug}
            href={`/${locale}${group.href}`}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-center text-sm font-medium leading-5 text-slate-600 transition hover:border-brand-blue hover:bg-brand-mist hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          >
            {group.title[locale]}
          </Link>
        ))}
      </nav>
    </>
  );
}
