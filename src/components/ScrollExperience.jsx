"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Lightweight scroll affordances: progress indicator, polished sticky header,
 * restrained one-time reveals, and accessible back-to-top control.
 * No third-party animation dependencies or layout-shifting parallax.
 */
export default function ScrollExperience() {
  const pathname = usePathname();
  const progress = useRef(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const root = document.documentElement;
      const y = Math.max(window.scrollY, 0);
      const scrollable = Math.max(root.scrollHeight - window.innerHeight, 1);
      const fraction = Math.min(1, y / scrollable);
      if (progress.current) progress.current.style.transform = "scaleX(" + fraction + ")";
      root.classList.toggle("p-has-scrolled", y > 32);
      setShowTop(previous => {
        const next = y > 640;
        return previous === next ? previous : next;
      });
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove("p-has-scrolled");
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    const selectors = [
      ".p-home .p-intro-grid > div",
      ".p-home .p-feature-image",
      ".p-home .p-coffee-section .p-section-heading",
      ".p-home .p-explorer",
      ".p-home .p-process-intro > div",
      ".p-home .p-process-list .p-process-row",
      ".p-home .p-story-copy",
      ".p-home .p-story-image",
      ".p-home .p-news .p-section-heading",
      ".p-home .p-news-card",
      ".p-home .p-final-banner-grid > div",
      ".p-home-form > div",
      ".p-collection .p-explorer",
      ".p-archive-grid .p-news-card",
      ".p-gallery-grid .p-gallery-item",
      ".p-interior-grid > div",
      ".p-interior-grid > aside",
      ".p-contact-grid > div"
    ];
    const items = [...document.querySelectorAll(selectors.join(","))];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove("p-reveal-pending");
        entry.target.classList.add("p-reveal-visible");
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -35px 0px", threshold: 0.06 });

    for (const item of items) {
      // Above-the-fold elements stay visible and never flash after hydration.
      if (item.getBoundingClientRect().top < window.innerHeight * 0.91) continue;
      item.classList.add("p-reveal-pending");
      observer.observe(item);
    }
    return () => {
      observer.disconnect();
      for (const item of items) item.classList.remove("p-reveal-pending");
    };
  }, [pathname]);

  const backToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" });
  };

  return <>
    <div className="p-scroll-progress" aria-hidden="true" ref={progress} />
    <button
      type="button"
      className={"p-back-to-top" + (showTop ? " is-visible" : "")}
      aria-label="Back to top"
      aria-hidden={!showTop}
      tabIndex={showTop ? 0 : -1}
      onClick={backToTop}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  </>;
}
