"use client";

import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";

const entrepreneurs = [
  { name: "Emika Mawlong",          sector: "Rural Enterprise",      tag: "East Khasi Hills", img: "/assets/entrepreneurs/Emika-Mawlong.jpg" },
  { name: "Bryan Daoba D. Shira",   sector: "Government & Startup",  tag: "Ri Bhoi",          img: "/assets/entrepreneurs/Bryan-Daoba-D-Shira.jpg" },
  { name: "Anikit R. Marak",        sector: "District Coordinator",  tag: "West Garo Hills",  img: "/assets/entrepreneurs/Anikit-R-Marak.jpg" },
  { name: "Priyana Marak",          sector: "Business Facilitation", tag: "East Garo Hills",  img: "/assets/entrepreneurs/Priyana-Marak.jpg" },
  { name: "Mark Altroge CH. Marak", sector: "Media & Comms",         tag: "West Garo Hills",  img: "/assets/entrepreneurs/Mark-Altroge-CH-Marak.jpg" },
  { name: "Andrew Tshering Bareh",  sector: "Communications",        tag: "East Khasi Hills", img: "/assets/entrepreneurs/Andrew.jpg" },
];

export default function EntrepreneursOfPrime() {
  return (
    <section className="bg-white py-24 md:py-36 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <AnimateIn direction="left">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-[#2D6A4F]" />
              <p className="font-semibold tracking-[0.25em] uppercase text-black/35" style={{ fontSize: "var(--text-label)" }}>
                The People
              </p>
            </div>
            <h2 className="font-black text-black leading-[0.9] tracking-tight" style={{ fontSize: "var(--text-display)" }}>
              Entrepreneurs<br />
              <span className="text-[#2D6A4F]">of Prime.</span>
            </h2>
          </AnimateIn>
          <AnimateIn direction="right" delay={0.1} className="max-w-xs">
            <p className="text-black/45 leading-[1.75]" style={{ fontSize: "var(--text-body)" }}>
              Real people. Real businesses. Powered by PRIME across every district of&nbsp;Meghalaya.
            </p>
          </AnimateIn>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          {entrepreneurs.map((e, i) => (
            <AnimateIn key={e.name} delay={i * 0.06} direction="up">
              <div className="group cursor-default">
                {/* Square image */}
                <div className="relative aspect-square overflow-hidden bg-black/10 mb-4">
                  <Image
                    src={e.img}
                    alt={e.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className="border border-black/20 px-2.5 py-1 font-semibold tracking-[0.15em] uppercase text-black/50"
                    style={{ fontSize: "10px" }}
                  >
                    {e.sector}
                  </span>
                  <span
                    className="border border-black/20 px-2.5 py-1 font-semibold tracking-[0.15em] uppercase text-black/50"
                    style={{ fontSize: "10px" }}
                  >
                    {e.tag}
                  </span>
                </div>

                {/* Name */}
                <p className="font-bold text-black leading-snug" style={{ fontSize: "var(--text-body)" }}>
                  {e.name}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
