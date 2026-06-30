"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY            = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex items-end min-h-[100svh] overflow-hidden bg-[#1B4332]"
      aria-label="Hero — PRIME Meghalaya"
    >
      {/* Background photo */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')", y: bgY }}
      />

      {/* Dark overlay — clean, no gradient */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Bottom fade so text stays readable */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content — centred */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-16 md:pb-24 pt-44 flex flex-col items-center text-center"
        style={{ opacity: contentOpacity }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-6 h-px bg-[#74C69D]" />
          <span className="text-white/50 font-medium tracking-[0.2em] uppercase" style={{ fontSize: "var(--text-label)" }}>
            Government of Meghalaya · Est. 2019
          </span>
          <span className="w-6 h-px bg-[#74C69D]" />
        </motion.div>

        {/* Headline */}
        <div className="overflow-hidden mb-7">
          <motion.h1
            className="font-black text-white leading-[0.9] tracking-tight"
            style={{ fontSize: "var(--text-display)" }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
          >
            Meghalaya&apos;s hub for<br />
            <span className="text-[#74C69D]">Entrepreneurs.</span>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
          className="text-white/45 leading-[1.75] max-w-sm mb-8"
          style={{ fontSize: "var(--text-body)" }}
        >
          Real support for real people building real businesses — right here in Meghalaya.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: EASE }}
        >
          <Link
            href="https://portal.primemeghalaya.com/GeneralRegistraion.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-[#1B4332] font-bold hover:bg-[#74C69D] hover:text-[#1B4332] transition-colors duration-300"
            style={{ fontSize: "var(--text-sm)" }}
          >
            Join PRIME <span>→</span>
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4, ease: EASE }}
          className="mt-14 pt-6 border-t border-white/[0.08] flex flex-wrap justify-center gap-x-10 gap-y-5"
        >
          {[
            { value: "1,350+",     label: "Registered Startups" },
            { value: "885+",       label: "Funding Cases"       },
            { value: "Up to ₹75L", label: "Max. Grant / Loan"  },
            { value: "Est. 2019",  label: "Govt. of Meghalaya"  },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-black text-white leading-none mb-1" style={{ fontSize: "var(--text-sm)" }}>{s.value}</p>
              <p className="text-white/30 font-medium" style={{ fontSize: "var(--text-label)" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="absolute bottom-8 right-8 md:right-10 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#74C69D]/60 to-transparent"
        />
        <span className="text-white/25 tracking-[0.2em] uppercase rotate-90 origin-center mt-4" style={{ fontSize: "var(--text-label)" }}>Scroll</span>
      </motion.div>
    </section>
  );
}
