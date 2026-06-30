"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { num: 2847, suffix: "+", label: "CM Elevate Graduates" },
  { num: 1350, suffix: "+", label: "Registered Startups"  },
  { num: 885,  suffix: "+", label: "Funding Cases"        },
  { num: 459,  suffix: "+", label: "BFS Sector Startups"  },
  { num: 353,  suffix: "",  label: "Incubation Cohort"    },
  { num: 287,  suffix: "",  label: "Rural Enterprises"    },
];

function StatItem({ stat, delay }: { stat: typeof stats[number]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      className="bg-[#1B4332] px-5 py-7 md:px-6 md:py-10 flex flex-col gap-2"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <p
        className="text-white/30 font-medium leading-tight"
        style={{ fontSize: "10px" }}
      >
        {stat.label.toUpperCase()}
      </p>
      <p
        className="font-black text-white leading-none"
        style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)" }}
      >
        {inView
          ? <CountUp to={stat.num} suffix={stat.suffix} duration={1.8} />
          : <span>0{stat.suffix}</span>
        }
      </p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#1B4332] border-t border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 md:py-28">

        {/* Two-column layout: heading left, stats right */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-20 items-center">

          {/* Left — label + heading + meta + CTA */}
          <AnimateIn direction="left">
            <div className="flex items-center gap-4 mb-7">
              <span className="w-6 h-px bg-[#74C69D]" />
              <p
                className="font-semibold tracking-[0.25em] uppercase text-white/30"
                style={{ fontSize: "var(--text-label)" }}
              >
                Ecosystem Reach
              </p>
            </div>

            <h2
              className="font-black text-white leading-[0.88] tracking-tight mb-8"
              style={{ fontSize: "var(--text-display)" }}
            >
              The scale<br />
              of PRIME,<br />
              by the<br />
              <span className="text-[#74C69D]">numbers.</span>
            </h2>

            <p
              className="text-white/20 font-medium mb-7"
              style={{ fontSize: "var(--text-label)" }}
            >
              All figures since inception · 2019
            </p>

            <Link
              href="/ecosystem-data"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/15 text-white/50 font-semibold hover:border-[#74C69D] hover:text-[#74C69D] transition-all duration-300"
              style={{ fontSize: "var(--text-sm)" }}
            >
              Read more <span>→</span>
            </Link>
          </AnimateIn>

          {/* Right — 3×2 stat grid */}
          <AnimateIn direction="right" delay={0.1}>
            {/* gap-px with bg-white/[0.07] creates hairline separators between cells */}
            <div className="grid grid-cols-3 gap-px bg-white/[0.07]">
              {stats.map((stat, i) => (
                <StatItem key={stat.label} stat={stat} delay={0.12 + i * 0.07} />
              ))}
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
