"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { topNavigationGroups } from "@/src/content/serviceCatalog";
import type { Locale } from "@/src/config/site";

type HeaderCategoryScrollerProps = {
  locale: Locale;
};

export function HeaderCategoryScroller({ locale }: HeaderCategoryScrollerProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef<{ isDown: boolean; isDragging: boolean; startX: number; startScrollLeft: number }>({
    isDown: false,
    isDragging: false,
    startX: 0,
    startScrollLeft: 0,
  });
  const [showStartArrow, setShowStartArrow] = useState(false);
  const [showEndArrow, setShowEndArrow] = useState(false);

  function updateArrowVisibility() {
    const element = scrollRef.current;
    if (!element) return;

    const maxScrollLeft = element.scrollWidth - element.clientWidth;
    const current = Math.max(0, element.scrollLeft);

    setShowStartArrow(current > 8);
    setShowEndArrow(current < maxScrollLeft - 8);
  }

  useEffect(() => {
    updateArrowVisibility();

    const element = scrollRef.current;
    if (!element) return;

    const handleScroll = () => updateArrowVisibility();
    const handleResize = () => updateArrowVisibility();

    element.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      element.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function scrollByAmount(direction: "next" | "prev") {
    const element = scrollRef.current;
    if (!element) return;

    const amount = Math.min(320, Math.max(180, element.clientWidth * 0.35));
    element.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  }

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
    updateArrowVisibility();
  }

  function handlePointerUp() {
    window.setTimeout(() => {
      dragStateRef.current.isDown = false;
      dragStateRef.current.isDragging = false;
    }, 0);
  }

  return (
    <div className="relative">
      {showStartArrow ? (
        <>
          <button
            type="button"
            onClick={() => scrollByAmount(locale === "ar" ? "next" : "prev")}
            className="absolute inset-y-0 left-0 z-10 hidden h-11 w-11 self-center rounded-full border border-slate-200 bg-white/95 text-brand-blue shadow-sm transition hover:border-brand-blue hover:bg-brand-mist lg:flex lg:items-center lg:justify-center"
            aria-label={locale === "ar" ? "تحريك الأقسام إلى اليسار" : "Kategorien nach links bewegen"}
          >
            <span aria-hidden="true">{locale === "ar" ? "→" : "←"}</span>
          </button>
          <div className="pointer-events-none absolute inset-y-0 left-12 z-[1] hidden w-12 bg-gradient-to-r from-white via-white/80 to-transparent lg:block" />
        </>
      ) : null}
      {showEndArrow ? (
        <div className="pointer-events-none absolute inset-y-0 right-12 z-[1] hidden w-12 bg-gradient-to-l from-white via-white/80 to-transparent lg:block" />
      ) : null}
      <div
        ref={scrollRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="scrollbar-hidden flex gap-2 overflow-x-auto pb-1 text-sm text-slate-600 lg:px-14"
        style={{ cursor: "grab" }}
      >
        {topNavigationGroups.map((group) => (
          <Link
            key={group.slug}
            href={`/${locale}#${group.slug}`}
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
      {showEndArrow ? (
        <button
          type="button"
          onClick={() => scrollByAmount(locale === "ar" ? "prev" : "next")}
          className="absolute inset-y-0 right-0 z-10 hidden h-11 w-11 self-center rounded-full border border-slate-200 bg-white/95 text-brand-blue shadow-sm transition hover:border-brand-blue hover:bg-brand-mist lg:flex lg:items-center lg:justify-center"
          aria-label={locale === "ar" ? "تحريك الأقسام إلى اليمين" : "Kategorien nach rechts bewegen"}
        >
          <span aria-hidden="true">{locale === "ar" ? "←" : "→"}</span>
        </button>
      ) : null}
    </div>
  );
}
