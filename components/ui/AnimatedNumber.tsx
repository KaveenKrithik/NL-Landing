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

  // Extract number from string (e.g., "50K+" -> 50000, "10K+" -> 10000, "95%" -> 95)
  const extractNumber = (str: string): number => {
    const match = str.match(/(\d+\.?\d*)([KM]?)/i);
    if (!match) return 0;
    
    const num = parseFloat(match[1]);
    const multiplier = match[2].toUpperCase();
    
    if (multiplier === 'K') return num * 1000;
    if (multiplier === 'M') return num * 1000000;
    return num;
  };

  // Get suffix (e.g., "K+", "%")
  const getSuffix = (str: string): string => {
    return str.replace(/\d+\.?\d*[KM]?/gi, "");
  };

  const numValue = extractNumber(value);
  const suffix = getSuffix(value);
  
  // Format number back to display format (e.g., 10000 -> "10K+")
  const formatNumber = (num: number, originalSuffix: string): string => {
    if (originalSuffix.includes('K') || originalSuffix.includes('k')) {
      return `${Math.floor(num / 1000)}K${originalSuffix.replace(/[Kk]/g, '')}`;
    }
    if (originalSuffix.includes('M') || originalSuffix.includes('m')) {
      return `${Math.floor(num / 1000000)}M${originalSuffix.replace(/[Mm]/g, '')}`;
    }
    return `${Math.floor(num)}${originalSuffix}`;
  };

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 500), 1); // Faster: 500ms instead of 1000ms
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * numValue);
      
      setDisplayValue(formatNumber(current, suffix));

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

