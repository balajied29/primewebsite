import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import {
  HiLightningBolt,
  HiChip,
  HiTrendingUp,
  HiCreditCard,
} from "react-icons/hi";
import type { IconType } from "react-icons";

const stats = [
  { num: "2,847+", label: "CM Elevate Graduates" },
  { num: "1,350+", label: "Registered Startups"  },
  { num: "885+",   label: "Funding Cases"         },
  { num: "2019",   label: "Year Founded"          },
];

const pillars: { num: string; label: string; desc: string; Icon: IconType }[] = [
  {
    num: "01",
    label: "Skills",
    desc: "Expert entrepreneurial training across every sector",
    Icon: HiLightningBolt,
  },
  {
    num: "02",
    label: "Technology",
    desc: "Digital tools that multiply enterprise productivity",
    Icon: HiChip,
  },
  {
    num: "03",
    label: "Market",
    desc: "Demand-side networks that open real buying channels",
    Icon: HiTrendingUp,
  },
  {
    num: "04",
    label: "Credit",
    desc: "De-risked financing that unlocks capital access",
    Icon: HiCreditCard,
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-36 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-24 items-start mb-20 md:mb-28">

          {/* Left — eyebrow + headline */}
          <AnimateIn direction="left">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-px bg-[#2D6A4F]" />
              <p className="font-semibold tracking-[0.25em] uppercase text-black/35" style={{ fontSize: "var(--text-label)" }}>
                Who We Are
              </p>
            </div>
            <h2
              className="font-black text-black leading-[0.9] tracking-tight"
              style={{ fontSize: "var(--text-display)" }}
            >
              Meghalaya&apos;s<br />
              most ambitious<br />
              bet on its<br />
              <span className="text-[#2D6A4F]">people.</span>
            </h2>
          </AnimateIn>

          {/* Right — body + stats + link */}
          <AnimateIn direction="right" delay={0.1}>
            <div className="flex flex-col gap-8 pt-1">
              <p className="text-black/50 leading-[1.8]" style={{ fontSize: "var(--text-body)" }}>
                Launched in 2019 by the Government of Meghalaya, PRIME — the Promotion and Incubation of Market-driven Enterprises programme — is the state&apos;s most comprehensive entrepreneurship initiative, supporting founders at every stage through a network of PRIME Hubs.
              </p>

              <div className="grid grid-cols-2 gap-px bg-black/[0.07] border border-black/[0.07]">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white px-5 py-5">
                    <p className="font-black text-black leading-none mb-1" style={{ fontSize: "var(--text-heading)" }}>{s.num}</p>
                    <p className="text-black/35 font-medium" style={{ fontSize: "var(--text-label)" }}>{s.label}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about-us"
                className="group inline-flex items-center gap-3 font-semibold text-black hover:text-[#2D6A4F] transition-colors duration-300 self-start"
                style={{ fontSize: "var(--text-sm)" }}
              >
                Our full story
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
            </div>
          </AnimateIn>

        </div>

        <AnimateIn delay={0.05} className="relative aspect-[16/7] overflow-hidden mb-20 md:mb-28">
          <Image
            src="/assets/images/about-image.jpg"
            alt="PRIME in action"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
        </AnimateIn>

        {/* Four pillars — large icon boxes, full dark invert on hover */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/[0.07] border border-black/[0.07]">
          {pillars.map((p, i) => (
            <AnimateIn key={p.label} delay={0.05 + i * 0.06}>
              <div className="bg-white p-6 md:p-8 flex flex-col gap-6 group hover:bg-[#1B4332] transition-colors duration-300 h-full cursor-default">
                {/* Icon box */}
                <div className="w-14 h-14 flex items-center justify-center bg-[#74C69D]/20 group-hover:bg-[#2D6A4F] transition-colors duration-300">
                  <span className="text-[#2D6A4F] group-hover:text-white transition-colors duration-300">
                    <p.Icon size={28} />
                  </span>
                </div>
                <div>
                  <p className="font-black text-black group-hover:text-white text-[18px] mb-2 transition-colors duration-300">{p.label}</p>
                  <p className="text-black/40 group-hover:text-white/40 leading-relaxed transition-colors duration-300" style={{ fontSize: "var(--text-sm)" }}>{p.desc}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
