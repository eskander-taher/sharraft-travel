"use client";

import { useEffect, useRef, useState } from "react";

type NetworkInfo = { saveData?: boolean; effectiveType?: string };

/**
 * Plays over the poster only when the visitor can afford it: motion allowed, data saver
 * off, a fast connection, and only after the page has finished loading.
 */
export default function HeroVideo() {
  const [src, setSrc] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const nav = navigator as Navigator & { connection?: NetworkInfo; deviceMemory?: number };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (nav.connection?.saveData) return;
    if (nav.connection?.effectiveType && nav.connection.effectiveType !== "4g") return;
    if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return;

    const start = () => {
      setSrc(window.innerWidth < 768 ? "/hero/red-square-640.mp4" : "/hero/red-square-1280.mp4");
    };
    let timer = 0;
    const schedule = () => {
      timer = window.setTimeout(start, 2500);
    };
    if (document.readyState === "complete") schedule();
    else window.addEventListener("load", schedule, { once: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", schedule);
    };
  }, []);

  if (!src) return null;
  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      autoPlay
      playsInline
      aria-hidden="true"
      tabIndex={-1}
      onPlaying={() => setPlaying(true)}
      className={`hero-media transition-opacity duration-700 ${playing ? "opacity-100" : "opacity-0"}`}
    />
  );
}
