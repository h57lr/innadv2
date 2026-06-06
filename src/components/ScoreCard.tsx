"use client";

import { useEffect, useRef, useState } from "react";

interface ScoreCardProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  finalDisplay: string;
  description: string;
}

const easeOutCubic = (progress: number) => 1 - Math.pow(1 - progress, 3);

function formatDisplay(value: number, prefix = "", suffix = "") {
  return `${prefix}${Math.round(value).toLocaleString("en-US")}${suffix}`;
}

export function ScoreCard({ value, label, prefix = "", suffix = "", finalDisplay, description }: ScoreCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);
  const [displayValue, setDisplayValue] = useState(finalDisplay);
  const [isVisible, setIsVisible] = useState(false);
  const [isSettled, setIsSettled] = useState(false);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      hasAnimated.current = true;
      setDisplayValue(finalDisplay);
      setIsVisible(true);
      setIsSettled(true);
      return;
    }

    let animationFrame = 0;
    let settleTimer = 0;
    const scrambleDuration = 420;
    const countDuration = 980;

    const animateMetric = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      setIsVisible(true);

      const start = performance.now();

      const tick = (now: number) => {
        const elapsed = now - start;

        if (elapsed < scrambleDuration) {
          const scrambled = Math.max(1, Math.round(Math.random() * Math.max(value * 1.35, 9)));
          setDisplayValue(formatDisplay(scrambled, prefix, suffix));
          animationFrame = requestAnimationFrame(tick);
          return;
        }

        const countProgress = Math.min((elapsed - scrambleDuration) / countDuration, 1);
        const easedValue = easeOutCubic(countProgress) * value;
        setDisplayValue(countProgress >= 1 ? finalDisplay : formatDisplay(easedValue, prefix, suffix));

        if (countProgress < 1) {
          animationFrame = requestAnimationFrame(tick);
          return;
        }

        setDisplayValue(finalDisplay);
        settleTimer = window.setTimeout(() => setIsSettled(true), 90);
      };

      animationFrame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateMetric();
          observer.disconnect();
        }
      },
      { threshold: 0.28, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(settleTimer);
    };
  }, [finalDisplay, prefix, suffix, value]);

  return (
    <article
      ref={cardRef}
      className={`scorecard ${isVisible ? "scorecard--visible" : ""} ${isSettled ? "scorecard--settled" : ""}`}
      aria-label={`${label}: ${finalDisplay}. ${description}`}
    >
      <p className="scorecard__label">
        <span className="scorecard__dot" aria-hidden="true" />
        {label}
      </p>
      <p className="scorecard__number" aria-hidden="true">
        {displayValue}
      </p>
      <p className="scorecard__description">{description}</p>
    </article>
  );
}
