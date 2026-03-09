"use client";

import { useRef, useState, useEffect } from "react";

export default function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <p
        className={`text-4xl md:text-5xl lg:text-6xl font-bold gradient-text transition-all duration-400 ease-out ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
      >
        {value}
        {suffix}
      </p>
      <p className="text-white/50 text-sm md:text-base mt-2 tracking-wide">
        {label}
      </p>
    </div>
  );
}
