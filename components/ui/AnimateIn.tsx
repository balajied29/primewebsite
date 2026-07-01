"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  duration = 0.72,
  direction = "up",
  distance = 20,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-48px" });

  const initial: { opacity: number; x?: number; y?: number } = { opacity: 0 };
  if (direction === "up")    initial.y =  distance;
  if (direction === "down")  initial.y = -distance;
  if (direction === "left")  initial.x =  distance;
  if (direction === "right") initial.x = -distance;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
