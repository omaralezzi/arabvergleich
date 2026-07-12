"use client";

import { useEffect, useRef, useState } from "react";

export function AffiliateEmbed({ html, className = "" }: { html: string; className?: string }) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = hostRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !hostRef.current) return;

    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    const appendedNodes: HTMLElement[] = [];
    const cleanupNodes: HTMLElement[] = [];

    Array.from(wrapper.children).forEach((child) => {
      if (child instanceof HTMLLinkElement) {
        const link = document.createElement("link");
        Array.from(child.attributes).forEach((attr) => link.setAttribute(attr.name, attr.value));
        document.head.appendChild(link);
        cleanupNodes.push(link);
        return;
      }

      if (child instanceof HTMLScriptElement) {
        const script = document.createElement("script");
        Array.from(child.attributes).forEach((attr) => script.setAttribute(attr.name, attr.value));
        if (child.textContent) script.textContent = child.textContent;
        hostRef.current?.appendChild(script);
        appendedNodes.push(script);
        return;
      }

      const element = child.cloneNode(true) as HTMLElement;
      hostRef.current?.appendChild(element);
      appendedNodes.push(element);
    });

    return () => {
      appendedNodes.forEach((node) => node.remove());
      cleanupNodes.forEach((node) => node.remove());
      if (hostRef.current) {
        hostRef.current.innerHTML = "";
      }
    };
  }, [html, isVisible]);

  return <div ref={hostRef} className={`affiliate-embed w-full max-w-full overflow-x-auto ${className}`} />;
}
