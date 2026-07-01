"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CountUp from "@/components/ui/CountUp";

const EASE = [0.22, 1, 0.36, 1] as const;
const DISTRICTS = ["EGH","EJH","EKH","EWKH","NGH","RB","SGH","SWGH","SWKH","WGH","WJH","WKH"];

const SUMMARY = [
  { value: 2847, suffix: "+", label: "CM Elevate Graduates",     color: "#2D6A4F" },
  { value: 1350, suffix: "+", label: "PRIME Registered Startups", color: "#2D6A4F" },
  { value: 885,  suffix: "+", label: "Funding Cases",             color: "#2D6A4F" },
  { value: 459,  suffix: "",  label: "BFS Sector Startups",       color: "#2D6A4F" },
  { value: 353,  suffix: "",  label: "Incubation Cohort",         color: "#2D6A4F" },
  { value: 287,  suffix: "",  label: "Rural Enterprises",         color: "#2D6A4F" },
];

type Row = { label: string; values: number[] };
const PROGRAMS: { name: string; rowLabel: string; total: number; rows: Row[] }[] = [
  {
    name: "CM Elevate", rowLabel: "Scheme", total: 2847,
    rows: [
      { label: "Piggery",          values: [123,14,85,124,54,123,56,262,56,284,74,102] },
      { label: "Poultry",          values: [19,2,38,59,6,53,6,124,9,42,27,69]          },
      { label: "Sericulture (S)",  values: [3,0,0,0,36,158,0,2,0,1,0,0]                },
      { label: "Sericulture (W)",  values: [15,1,1,0,6,91,1,3,0,58,14,7]               },
      { label: "Agri Vehicle",     values: [18,5,32,4,10,31,8,12,13,35,15,9]           },
      { label: "Dairy",            values: [7,5,18,2,18,17,5,20,4,25,6,5]              },
      { label: "Tourism Vehicle",  values: [4,1,37,6,5,2,5,7,6,20,3,14]               },
      { label: "Warehouse",        values: [2,6,11,9,4,6,7,4,6,15,9,8]                },
      { label: "Goat Farming",     values: [5,0,2,3,1,2,3,23,1,2,2,4]                 },
      { label: "Any Business",     values: [3,1,9,2,0,5,1,1,1,5,1,4]                  },
      { label: "Common Facility",  values: [1,0,3,1,3,1,0,2,0,13,0,2]                 },
    ],
  },
  {
    name: "PRIME Rural", rowLabel: "Sector", total: 277,
    rows: [
      { label: "Food Processing",  values: [16,11,8,7,6,9,9,2,17,12,15,4]  },
      { label: "Handicraft",       values: [7,2,9,2,2,8,9,7,5,7,7,2]       },
      { label: "Manufacturing",    values: [3,9,3,1,3,5,3,1,2,2,12,2]      },
      { label: "Handloom",         values: [0,1,1,0,2,5,0,1,0,1,1,1]       },
      { label: "Farm",             values: [3,1,2,0,0,2,0,0,0,0,1,0]       },
      { label: "Fashion",          values: [0,1,0,2,2,0,0,1,0,0,0,1]       },
      { label: "Handloom/Weaving", values: [1,1,0,0,0,1,0,1,1,0,1,0]       },
      { label: "Furniture",        values: [0,1,1,0,0,0,1,1,0,1,0,0]       },
      { label: "Service",          values: [0,0,3,1,0,0,0,0,0,1,0,0]       },
      { label: "Other",            values: [0,1,0,0,0,0,0,0,1,1,0,0]       },
    ],
  },
  {
    name: "Acceleration", rowLabel: "Sector", total: 6,
    rows: [
      { label: "Food & Beverage",  values: [0,0,1,0,0,0,0,0,0,0,0,0] },
      { label: "Edu Tech",         values: [0,0,1,0,0,0,0,0,0,0,0,0] },
      { label: "IT Services",      values: [0,0,1,0,0,0,0,0,0,0,0,0] },
      { label: "Health Tech",      values: [0,0,1,0,0,0,0,0,0,0,0,0] },
      { label: "Manufacturing",    values: [0,0,0,0,0,0,0,0,0,0,0,1] },
      { label: "Tourism",          values: [0,0,0,0,0,1,0,0,0,0,0,0] },
    ],
  },
  {
    name: "Incubation", rowLabel: "Sector", total: 353,
    rows: [
      { label: "Agriculture",      values: [5,0,20,0,4,14,4,0,0,18,9,2]  },
      { label: "Handicraft",       values: [5,1,13,3,5,5,6,5,0,14,4,6]   },
      { label: "Food Processing",  values: [0,3,7,1,1,3,1,1,2,1,2,2]     },
      { label: "E-Commerce/IT",    values: [0,0,8,0,0,0,0,0,0,5,0,1]     },
      { label: "Fashion",          values: [0,1,8,0,0,1,1,0,0,1,1,0]     },
      { label: "Food & Beverage",  values: [0,0,7,1,0,1,0,0,0,1,2,1]     },
      { label: "Education",        values: [0,0,4,1,0,2,0,0,0,1,1,0]     },
      { label: "Manufacturing",    values: [0,0,4,0,0,0,0,0,0,2,4,0]     },
      { label: "Tourism",          values: [0,0,5,0,0,0,1,0,0,2,0,1]     },
      { label: "Handloom",         values: [0,0,1,0,0,3,0,0,0,4,0,0]     },
    ],
  },
  {
    name: "Funding", rowLabel: "Sector", total: 459,
    rows: [
      { label: "Food Processing",  values: [11,4,66,6,0,58,13,3,12,50,27,3] },
      { label: "Manufacturing",    values: [6,5,46,0,1,9,2,0,0,12,6,4]      },
      { label: "Handicraft",       values: [4,1,7,2,4,3,9,3,8,10,4,1]       },
      { label: "Tourism",          values: [0,0,5,0,0,1,1,0,0,3,0,1]        },
      { label: "IT",               values: [1,0,9,0,0,0,0,0,0,0,0,0]        },
      { label: "Bakery",           values: [1,0,1,0,0,1,0,0,2,1,3,0]        },
      { label: "Service",          values: [0,0,6,0,0,0,0,0,0,1,0,0]        },
      { label: "Agriculture",      values: [0,0,6,0,0,0,0,0,0,0,0,0]        },
      { label: "Education",        values: [0,0,4,0,0,0,0,0,0,1,1,0]        },
    ],
  },
  {
    name: "Academia (E-Cells)", rowLabel: "Metric", total: 24,
    rows: [
      { label: "E-Cells",          values: [2,3,10,1,0,2,0,1,0,4,1,0] },
    ],
  },
];

function SummaryCard({ s }: { s: typeof SUMMARY[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="bg-white px-6 py-8">
      <p className="font-black text-black leading-none mb-2.5" style={{ fontSize: "clamp(1.25rem, 2vw, 1.875rem)" }}>
        {inView ? (
          <>
            <CountUp to={s.value} duration={1.8} />
            {s.suffix && (
              <span className="text-[#2D6A4F]">{s.suffix}</span>
            )}
          </>
        ) : "0"}
      </p>
      <p className="text-black/35 font-medium" style={{ fontSize: "var(--text-label)" }}>{s.label}</p>
    </div>
  );
}

function DistrictBars({ rows }: { rows: Row[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const districtTotals = DISTRICTS.map((_, j) =>
    rows.reduce((acc, row) => acc + row.values[j], 0)
  );
  const maxVal = Math.max(...districtTotals, 1);

  return (
    <div ref={ref} className="mb-10 border border-black/[0.07] bg-white px-6 pt-6 pb-4">
      <p className="font-semibold text-black/30 tracking-[0.2em] uppercase mb-5" style={{ fontSize: "var(--text-label)" }}>
        District Distribution
      </p>
      <div className="flex items-end gap-2 h-28">
        {DISTRICTS.map((d, i) => (
          <div key={d} className="flex-1 flex flex-col items-center gap-1.5">
            <p className="font-bold text-[#2D6A4F] leading-none" style={{ fontSize: "9px" }}>
              {districtTotals[i] > 0 ? districtTotals[i] : ""}
            </p>
            <div className="w-full flex items-end" style={{ height: 72 }}>
              <motion.div
                className="w-full bg-[#2D6A4F]"
                initial={{ height: 0 }}
                animate={inView ? { height: `${(districtTotals[i] / maxVal) * 72}px` } : { height: 0 }}
                transition={{ duration: 1.2, delay: i * 0.06, ease: EASE }}
                style={{ minHeight: districtTotals[i] > 0 ? 2 : 0 }}
              />
            </div>
            <p className="text-black/35 font-medium" style={{ fontSize: "8px" }}>{d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeatTable({ program }: { program: typeof PROGRAMS[number] }) {
  const globalMax = Math.max(...program.rows.flatMap((r) => r.values), 1);

  return (
    <div className="overflow-x-auto border border-black/[0.07]">
      <table className="w-full text-left border-collapse" style={{ fontSize: "11px" }}>
        <thead>
          <tr className="bg-[#1B4332] text-white">
            <th className="px-4 py-3 font-semibold text-white/70 w-40 sticky left-0 bg-[#1B4332] text-xs">
              {program.rowLabel}
            </th>
            {DISTRICTS.map((d) => (
              <th key={d} className="px-2 py-3 text-center font-semibold text-white/50 whitespace-nowrap text-xs">{d}</th>
            ))}
            <th className="px-4 py-3 font-bold text-[#74C69D] text-center text-xs">Total</th>
          </tr>
        </thead>
        <tbody>
          {program.rows.map((row) => {
            const rowTotal = row.values.reduce((a, b) => a + b, 0);
            return (
              <tr key={row.label} className="border-b border-black/[0.05]">
                <td className="px-4 py-2.5 font-semibold text-black/70 sticky left-0 bg-white whitespace-nowrap text-xs">{row.label}</td>
                {row.values.map((v, j) => {
                  const intensity = v / globalMax;
                  return (
                    <td
                      key={j}
                      className="px-2 py-2.5 text-center transition-all duration-200"
                      style={{
                        backgroundColor: v > 0 ? `rgba(45,106,79,${Math.max(intensity * 0.85, intensity > 0 ? 0.08 : 0)})` : "transparent",
                        color: intensity > 0.45 ? "#fff" : intensity > 0 ? "#1B4332" : "rgba(0,0,0,0.15)",
                        fontWeight: v > 0 ? 600 : 400,
                      }}
                    >
                      {v}
                    </td>
                  );
                })}
                <td className="px-4 py-2.5 text-center font-black text-[#2D6A4F]">{rowTotal}</td>
              </tr>
            );
          })}
          <tr className="bg-[#1B4332]/[0.04] border-t-2 border-[#2D6A4F]/20">
            <td className="px-4 py-3 font-black text-black/60 sticky left-0 bg-[#f7f7f5] text-xs">Total</td>
            {DISTRICTS.map((_, j) => {
              const col = program.rows.reduce((acc, row) => acc + row.values[j], 0);
              return (
                <td key={j} className="px-2 py-3 text-center font-bold text-black/50">{col}</td>
              );
            })}
            <td className="px-4 py-3 text-center font-black text-[#1B4332]">
              {program.rows.reduce((a, r) => a + r.values.reduce((x, y) => x + y, 0), 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function SectorBars({ rows }: { rows: Row[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const totals = rows.map((r) => ({ label: r.label, val: r.values.reduce((a, b) => a + b, 0) }))
    .sort((a, b) => b.val - a.val);
  const max = totals[0]?.val || 1;

  return (
    <div ref={ref} className="border border-black/[0.07] bg-white px-6 py-6 mb-8">
      <p className="font-semibold text-black/30 tracking-[0.2em] uppercase mb-5" style={{ fontSize: "var(--text-label)" }}>
        Top Sectors / Schemes
      </p>
      <div className="flex flex-col gap-3">
        {totals.slice(0, 8).map((t, i) => (
          <div key={t.label} className="flex items-center gap-3">
            <p className="text-black/50 font-medium shrink-0 w-36 truncate" style={{ fontSize: "11px" }}>{t.label}</p>
            <div className="flex-1 h-4 bg-black/[0.04] overflow-hidden">
              <motion.div
                className="h-full bg-[#2D6A4F]"
                initial={{ width: 0 }}
                animate={inView ? { width: `${(t.val / max) * 100}%` } : { width: 0 }}
                transition={{ duration: 1.2, delay: i * 0.07, ease: EASE }}
              />
            </div>
            <p className="font-bold text-[#2D6A4F] w-8 text-right shrink-0" style={{ fontSize: "11px" }}>{t.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EcosystemDataPage() {
  const [selected, setSelected] = useState(0);
  const program = PROGRAMS[selected];

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-36 pb-24 min-h-screen bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#2D6A4F]" />
              <p className="font-semibold tracking-[0.25em] uppercase text-black/35" style={{ fontSize: "var(--text-label)" }}>
                Ecosystem Data
              </p>
            </div>
            <h1 className="font-black text-black leading-[0.9] tracking-tight" style={{ fontSize: "var(--text-display)" }}>
              The scale of PRIME,<br />
              <span className="text-[#2D6A4F]">by the numbers.</span>
            </h1>
            <p className="text-black/40 max-w-md leading-relaxed mt-5" style={{ fontSize: "var(--text-body)" }}>
              District-wise breakdown of all PRIME programmes since 2019. Select a programme to explore.
            </p>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-black/[0.07] border border-black/[0.07] mb-14">
            {SUMMARY.map((s) => <SummaryCard key={s.label} s={s} />)}
          </div>

          {/* Programme selector pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {PROGRAMS.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setSelected(i)}
                className={`relative px-5 py-2.5 font-semibold border transition-all duration-200 ${
                  selected === i
                    ? "bg-[#1B4332] border-[#1B4332] text-white shadow-md"
                    : "bg-white border-black/15 text-black/50 hover:border-[#2D6A4F] hover:text-[#2D6A4F]"
                }`}
                style={{ fontSize: "var(--text-label)" }}
              >
                {p.name}
                <span className={`ml-2 text-[9px] font-black tracking-wide ${selected === i ? "text-[#74C69D]" : "text-black/25"}`}>
                  {p.total.toLocaleString()}
                </span>
              </button>
            ))}
          </div>

          {/* Visuals row */}
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 mb-6">
            <DistrictBars key={`dist-${selected}`} rows={program.rows} />
            <SectorBars key={`sec-${selected}`} rows={program.rows} />
          </div>

          {/* Heatmap table */}
          <div className="mb-3 flex items-center gap-3">
            <p className="font-semibold text-black/30 tracking-[0.2em] uppercase" style={{ fontSize: "var(--text-label)" }}>
              Detailed Breakdown — {program.name}
            </p>
            <div className="flex items-center gap-1.5 ml-auto">
              <span className="text-black/30" style={{ fontSize: "9px" }}>Low</span>
              {[0.08, 0.25, 0.45, 0.65, 0.85].map((o) => (
                <div key={o} className="w-4 h-3" style={{ backgroundColor: `rgba(45,106,79,${o})` }} />
              ))}
              <span className="text-black/30" style={{ fontSize: "9px" }}>High</span>
            </div>
          </div>
          <HeatTable key={`heat-${selected}`} program={program} />

        </div>
      </main>
      <Footer />
    </>
  );
}
