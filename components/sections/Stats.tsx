"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { num: 2847, suffix: "+", label: "CM Elevate Graduates",   pct: 1.00 },
  { num: 1350, suffix: "+", label: "Registered Startups",    pct: 0.47 },
  { num: 885,  suffix: "+", label: "Funding Cases",          pct: 0.31 },
  { num: 459,  suffix: "",  label: "BFS Sector Startups",    pct: 0.16 },
  { num: 353,  suffix: "",  label: "Incubation Cohort",      pct: 0.12 },
  { num: 287,  suffix: "",  label: "Rural Enterprises",      pct: 0.10 },
];

function StatItem({ stat }: { stat: typeof stats[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className="flex flex-col gap-2 p-5 md:p-6 border-b border-r border-white/[0.06]"
    >
      <p className="text-white/30 font-medium leading-tight" style={{ fontSize: "var(--text-label)" }}>
        {stat.label}
      </p>
      <p className="font-black text-white leading-none" style={{ fontSize: "var(--text-heading)" }}>
        {inView ? <CountUp to={stat.num} suffix={stat.suffix} duration={1.6} /> : "0"}
      </p>
      <div className="mt-1 h-px bg-white/[0.07] overflow-hidden">
        <motion.div
          className="h-full bg-[#74C69D]"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: stat.pct } : { scaleX: 0 }}
          style={{ originX: 0 }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#1B4332] py-20 md:py-28 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-[1fr_1.8fr] gap-12 md:gap-20 items-start">

          {/* Left — label + heading */}
          <AnimateIn direction="left">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-px bg-[#74C69D]" />
              <p className="font-semibold tracking-[0.25em] uppercase text-white/35" style={{ fontSize: "var(--text-label)" }}>
                Ecosystem Reach
              </p>
            </div>
            <h2
              className="font-black text-white leading-[0.9] tracking-tight"
              style={{ fontSize: "var(--text-display)" }}
            >
              The scale<br />
              of PRIME,<br />
              by the<br />
              <span className="text-[#74C69D]">numbers.</span>
            </h2>
            <p className="mt-8 text-white/25 font-medium" style={{ fontSize: "var(--text-label)" }}>
              All figures since inception · 2019
            </p>
            <Link
              href="/ecosystem-data"
              className="mt-8 inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white/60 font-semibold hover:border-[#74C69D] hover:text-[#74C69D] transition-all duration-300"
              style={{ fontSize: "var(--text-sm)" }}
            >
              Read More <span>→</span>
            </Link>
          </AnimateIn>

          {/* Right — 3×2 stat grid */}
          <AnimateIn direction="right" delay={0.08}>
            <div className="grid grid-cols-3 border-t border-l border-white/[0.06]">
              {stats.map((stat) => (
                <StatItem key={stat.label} stat={stat} />
              ))}
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
