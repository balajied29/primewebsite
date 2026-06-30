"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  HiLocationMarker,
  HiGlobe,
  HiUsers,
  HiTrendingUp,
  HiAcademicCap,
  HiCurrencyRupee,
} from "react-icons/hi";
import type { IconType } from "react-icons";

const C = {
  cream:     "#ede8de",
  charcoal:  "#1c1a17",
  terracotta:"#8b3a2a",
  sage:      "#7a8c6e",
} as const;

const pillars: { num: string; title: string; desc: string; Icon: IconType }[] = [
  { num: "01", title: "Village-Level Reach", desc: "Block Officers embedded in every district — enterprise support that travels to you.", Icon: HiLocationMarker },
  { num: "02", title: "Land & Craft",        desc: "Agriculture, forest produce, weaving, and pottery — traditional knowledge turned market-ready.", Icon: HiGlobe },
  { num: "03", title: "Women First",         desc: "Over 65% of rural PRIME entrepreneurs are women — programmes designed around their reality.", Icon: HiUsers },
  { num: "04", title: "Market Access",       desc: "Connecting village produce to city shelves, ONDC, and national trade shows.", Icon: HiTrendingUp },
  { num: "05", title: "On-Site Training",    desc: "Skill programmes that come to the community — no one leaves home to learn.", Icon: HiAcademicCap },
  { num: "06", title: "Rural Credit",        desc: "Simplified financing pathways for founders who've never held a bank loan before.", Icon: HiCurrencyRupee },
];

export default function PrimeRural() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Title: fades in, scales up, then fades out to reveal content
  const titleScale   = useTransform(scrollYProgress, [0.05, 0.42], [1, 3.4]);
  const titleOpacity = useTransform(scrollYProgress, [0.03, 0.1, 0.38, 0.50], [0, 1, 1, 0]);

  // Organic circle grows behind title
  const circleScale   = useTransform(scrollYProgress, [0.05, 0.52], [0.12, 1.7]);
  const circleOpacity = useTransform(scrollYProgress, [0.05, 0.14, 0.44, 0.56], [0, 0.15, 0.15, 0]);

  // Content panel slides in after title dissolves
  const contentOpacity = useTransform(scrollYProgress, [0.46, 0.60, 0.90, 0.97], [0, 1, 1, 0]);
  const contentY       = useTransform(scrollYProgress, [0.46, 0.62], [36, 0]);

  // Eyebrow / scroll hint fades early
  const tagOpacity = useTransform(scrollYProgress, [0.02, 0.10, 0.36, 0.48], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "300vh" }}
      aria-label="PRIME Rural"
    >
      {/* Sticky full-viewport canvas */}
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ backgroundColor: C.cream }}
      >

        {/* Corner L-ornaments */}
        {[
          "M40 0H0V40",
          "M0 0H40V40",
          "M40 40H0V0",
          "M0 40H40V0",
        ].map((d, i) => (
          <svg
            key={i}
            className="absolute w-10 h-10"
            style={{
              top:    i < 2 ? 28 : "auto",
              bottom: i >= 2 ? 28 : "auto",
              left:   i % 2 === 0 ? 28 : "auto",
              right:  i % 2 === 1 ? 28 : "auto",
              opacity: 0.35,
            }}
            viewBox="0 0 40 40" fill="none"
          >
            <path d={d} stroke={C.sage} strokeWidth="1.2"/>
          </svg>
        ))}

        {/* Growing organic circle */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: circleOpacity }}
        >
          <motion.svg
            viewBox="0 0 560 560"
            className="w-[560px] h-[560px]"
            style={{ scale: circleScale }}
          >
            <ellipse cx="280" cy="280" rx="262" ry="246" stroke={C.sage} strokeWidth="1" fill="none" strokeDasharray="5 9"/>
            <ellipse cx="280" cy="280" rx="198" ry="185" stroke={C.sage} strokeWidth="0.5" fill="none" opacity="0.45"/>
          </motion.svg>
        </motion.div>

        {/* Eyebrow tag */}
        <motion.div
          className="absolute top-11 left-1/2 -translate-x-1/2 flex items-center gap-3 whitespace-nowrap"
          style={{ opacity: tagOpacity }}
        >
          <span className="w-5 h-px" style={{ backgroundColor: C.sage }} />
          <span
            className="font-semibold tracking-[0.32em] uppercase"
            style={{ fontSize: "9px", color: C.sage }}
          >
            A PRIME Initiative
          </span>
          <span className="w-5 h-px" style={{ backgroundColor: C.sage }} />
        </motion.div>

        {/* Giant outlined display title */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none"
          style={{ scale: titleScale, opacity: titleOpacity }}
        >
          {(["PRIME", "RURAL"] as const).map((word) => (
            <div
              key={word}
              className="leading-[0.84] tracking-[-0.01em] text-center"
              style={{
                fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                fontSize: "clamp(68px, 17.5vw, 210px)",
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              {word === "PRIME" ? (
                <span style={{ color: "transparent", WebkitTextStroke: `1.4px ${C.charcoal}` }}>
                  {word}
                </span>
              ) : (
                <>
                  <span style={{ color: C.terracotta, WebkitTextStroke: "0px" }}>R</span>
                  <span style={{ color: "transparent", WebkitTextStroke: `1.4px ${C.charcoal}` }}>URAL</span>
                </>
              )}
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.p
          className="absolute bottom-10 left-1/2 -translate-x-1/2 tracking-[0.32em] uppercase"
          style={{ fontSize: "8px", color: C.charcoal, opacity: tagOpacity as unknown as number }}
        >
          Scroll to discover
        </motion.p>

        {/* ── Content panel ────────────────────────────────────── */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-6 lg:px-14"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <div className="w-full max-w-6xl">
            <div className="grid md:grid-cols-[5fr_7fr] gap-14 md:gap-20 items-start">

              {/* Left — editorial serif block */}
              <div>
                <div className="flex items-center gap-3 mb-7">
                  <span className="w-5 h-px" style={{ backgroundColor: C.sage }} />
                  <span
                    className="font-semibold tracking-[0.28em] uppercase"
                    style={{ fontSize: "9px", color: C.sage }}
                  >
                    Prime Rural
                  </span>
                </div>

                <h2
                  className="leading-[0.93] tracking-[-0.01em]"
                  style={{
                    fontFamily: "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)",
                    fontSize: "clamp(38px, 5.5vw, 68px)",
                    fontWeight: 600,
                    fontStyle: "italic",
                    color: C.charcoal,
                  }}
                >
                  Where enterprise<br />
                  meets the<br />
                  <span style={{ color: C.terracotta }}>village.</span>
                </h2>

                <p
                  className="mt-6 leading-[1.9]"
                  style={{ fontSize: "var(--text-body)", color: C.charcoal, opacity: 0.48 }}
                >
                  PRIME Rural takes enterprise support beyond city limits — to the villages, hills, and valleys of Meghalaya where traditional knowledge, natural resources, and community strength are the raw material of sustainable business.
                </p>

                {/* Stat row */}
                <div
                  className="mt-8 grid grid-cols-2 gap-px"
                  style={{ border: `1px solid ${C.charcoal}20`, backgroundColor: `${C.charcoal}12` }}
                >
                  {[
                    { val: "11", label: "Districts Covered" },
                    { val: "65%+", label: "Women Entrepreneurs" },
                    { val: "₹10L", label: "Rural Kick Start Grant" },
                    { val: "500+", label: "Village Enterprises" },
                  ].map((s) => (
                    <div key={s.label} className="px-4 py-4" style={{ backgroundColor: C.cream }}>
                      <p
                        className="font-black leading-none mb-0.5"
                        style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',Georgia,serif)", fontSize: "clamp(22px,3vw,30px)", color: C.terracotta }}
                      >
                        {s.val}
                      </p>
                      <p
                        className="font-medium leading-tight"
                        style={{ fontSize: "var(--text-label)", color: C.charcoal, opacity: 0.4 }}
                      >
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>

                <Link
                  href="/prime-rural"
                  className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 font-semibold border transition-all duration-300 hover:opacity-60"
                  style={{
                    borderColor: C.charcoal,
                    color: C.charcoal,
                    fontSize: "var(--text-sm)",
                    letterSpacing: "0.07em",
                    fontFamily: "inherit",
                  }}
                >
                  Discover Prime Rural <span>→</span>
                </Link>
              </div>

              {/* Right — pillar grid */}
              <div
                className="grid grid-cols-2 gap-px"
                style={{ border: `1px solid ${C.charcoal}15`, backgroundColor: `${C.charcoal}10` }}
              >
                {pillars.map((p) => (
                  <div
                    key={p.num}
                    className="group flex flex-col gap-3 p-5 md:p-6 cursor-default transition-colors duration-300 hover:bg-[#1c1a17]"
                    style={{ backgroundColor: C.cream }}
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#8b3a2a]"
                      style={{ backgroundColor: `${C.terracotta}18`, color: C.terracotta }}
                    >
                      <p.Icon size={18} />
                    </div>
                    <div>
                      <p
                        className="font-black text-[11px] mb-1 transition-colors duration-300 group-hover:text-white/20"
                        style={{ color: C.charcoal, opacity: 0.3, letterSpacing: "0.15em" }}
                      >
                        {p.num}
                      </p>
                      <p
                        className="font-semibold leading-tight mb-1.5 transition-colors duration-300 group-hover:text-white"
                        style={{ fontSize: "var(--text-sm)", color: C.charcoal }}
                      >
                        {p.title}
                      </p>
                      <p
                        className="leading-relaxed transition-colors duration-300 group-hover:text-white/40"
                        style={{ fontSize: "11px", color: C.charcoal, opacity: 0.42 }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
