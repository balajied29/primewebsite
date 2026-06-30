"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";

const entrepreneurs = [
  { name: "Emika Mawlong",           sector: "Rural Enterprise",      img: "/assets/entrepreneurs/Emika-Mawlong.jpg"         },
  { name: "Bryan Daoba D. Shira",    sector: "Government & Startup",  img: "/assets/entrepreneurs/Bryan-Daoba-D-Shira.jpg"   },
  { name: "Anikit R. Marak",         sector: "District Coordinator",  img: "/assets/entrepreneurs/Anikit-R-Marak.jpg"        },
  { name: "Priyana Marak",           sector: "Business Facilitation", img: "/assets/entrepreneurs/Priyana-Marak.jpg"         },
  { name: "Mark Altroge CH. Marak",  sector: "Media & Comms",         img: "/assets/entrepreneurs/Mark-Altroge-CH-Marak.jpg" },
  { name: "Andrew Tshering Bareh",   sector: "Communications",        img: "/assets/entrepreneurs/Andrew.jpg"                },
];

export default function EntrepreneursOfPrime() {
  return (
    <section className="bg-[#f5f5f5] py-24 md:py-36 border-t border-black/[0.06]">
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

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {entrepreneurs.map((e, i) => (
            <AnimateIn key={e.name} delay={i * 0.06} direction="up">
              <motion.div
                className="relative overflow-hidden group aspect-[3/4] bg-black/10"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Image
                  src={e.img}
                  alt={e.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />

                {/* Bottom reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="font-bold tracking-[0.2em] uppercase text-[#2D6A4F] mb-1" style={{ fontSize: "var(--text-label)" }}>
                    {e.sector}
                  </p>
                  <p className="text-white font-bold text-[15px] leading-tight">{e.name}</p>
                </div>
              </motion.div>
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
