"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
}

export default function AnimatedNumber({ value, duration = 2 }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Extract number from string (e.g., "50K+" -> 50, "95%" -> 95)
  const extractNumber = (str: string): number => {
    const match = str.match(/(\d+\.?\d*)/);
    return match ? parseFloat(match[1]) : 0;
  };

  // Get suffix (e.g., "K+", "%")
  const getSuffix = (str: string): string => {
    return str.replace(/\d+\.?\d*/g, "");
  };

  const numValue = extractNumber(value);
  const suffix = getSuffix(value);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * numValue);
      
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value); // Ensure final value is exact
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, numValue, suffix, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

