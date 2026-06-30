"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { HiDownload, HiPlay, HiArrowRight } from "react-icons/hi";

type Category = "All" | "Success Stories" | "Updates" | "Newsletter" | "Catalogue" | "Brochure" | "Videos";

type Post = {
  category: Exclude<Category, "All">;
  title: string;
  excerpt: string;
  date: string;
  img: string | null;
  featured?: boolean;
  download?: boolean;
  video?: boolean;
  href?: string;
};

const posts: Post[] = [
  {
    category: "Success Stories",
    title: "From a small kitchen to Meghalaya's favourite bakery — Chisa's story",
    excerpt: "A self-taught baker from Karkutta, North Garo Hills, who turned passion into a thriving local business — now employing five people and training women in baking.",
    date: "March 2024",
    img: "/assets/images/event-1.jpg",
    featured: true,
  },
  {
    category: "Success Stories",
    title: "EZER Wine: From ₹50,000 to 19 flavours and international recognition",
    excerpt: "Started with minimal capital, Probina grew EZER Wine from 2 flavours to 19 varieties — earning international acclaim while donating 5% of profits to charity.",
    date: "February 2024",
    img: null,
  },
  {
    category: "Success Stories",
    title: "Bakyrshan Health Food Truck — from bike to wheels",
    excerpt: "From selling juice off his bike in 2021 to running a fully equipped food truck by 2023, Shillong's most inspiring health-focused food brand.",
    date: "January 2024",
    img: "/assets/images/event-2.jpg",
  },
  {
    category: "Updates",
    title: "PRIME launches its 7th cohort of the CM's E-Championship",
    excerpt: "75 selected founders join the latest edition of Meghalaya's most prestigious startup challenge — with ₹2 lakh grants, IIM Calcutta mentorship, and Demo Day pitches.",
    date: "April 2024",
    img: "/assets/images/event-3.jpg",
    featured: true,
  },
  {
    category: "Updates",
    title: "Act East Business Show 2024 — PRIME at Northeast India's biggest trade expo",
    excerpt: "Over 200 PRIME-supported entrepreneurs showcased their products and secured buyers at the Act East Business Show in Shillong.",
    date: "March 2024",
    img: null,
  },
  {
    category: "Updates",
    title: "PRIME crosses 2,847 CM Elevate graduates across Meghalaya",
    excerpt: "The CM Elevate programme reaches a milestone — over 2,800 entrepreneurs now trained and supported under the state's flagship credit-linked scheme.",
    date: "February 2024",
    img: null,
  },
  {
    category: "Newsletter",
    title: "PRIME E-Newsletter — Issue 12",
    excerpt: "This month: fellowship applications open, new training centre launches in Tura, Entrepreneur of the Month spotlight, and funding scheme updates.",
    date: "April 2024",
    img: null,
    download: true,
    href: "#",
  },
  {
    category: "Newsletter",
    title: "PRIME E-Newsletter — Issue 11",
    excerpt: "Inside: Act East Business Show recap, CM Elevate new batch announcement, and PRIME Rural expansion into 5 new blocks.",
    date: "March 2024",
    img: null,
    download: true,
    href: "#",
  },
  {
    category: "Catalogue",
    title: "PRIME Product Catalogue 2024",
    excerpt: "A curated catalogue of products made by PRIME-supported entrepreneurs — showcasing the best of Meghalaya's startup ecosystem across food, fashion, craft, and tech.",
    date: "January 2024",
    img: null,
    download: true,
    href: "#",
  },
  {
    category: "Brochure",
    title: "PRIME One Year Journey",
    excerpt: "A retrospective of PRIME's first year — milestones, stories, numbers, and the vision that drives Meghalaya's most ambitious entrepreneurship mission.",
    date: "2020",
    img: null,
    download: true,
    href: "#",
  },
  {
    category: "Brochure",
    title: "PRIME E-Brochure",
    excerpt: "Everything about PRIME in one document — programmes, eligibility, how to apply, and what support looks like at every stage of your entrepreneurship journey.",
    date: "2024",
    img: null,
    download: true,
    href: "#",
  },
  {
    category: "Videos",
    title: "PRIME — Meghalaya's Hub for Entrepreneurs (Official Film)",
    excerpt: "A short documentary on PRIME's journey, impact, and the real entrepreneurs whose lives have been transformed by the programme.",
    date: "2023",
    img: "/assets/images/team-bg.jpg",
    video: true,
    href: "#",
  },
];

const CATEGORIES: Category[] = ["All", "Success Stories", "Updates", "Newsletter", "Catalogue", "Brochure", "Videos"];

export default function UpdatesPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <Navbar />
      <PageHero
        breadcrumb="Resources"
        title="PRIME Updates"
        subtitle="Success stories, programme news, newsletters, catalogues, brochures, and videos from across the PRIME ecosystem."
      />

      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-14 border-b border-black/[0.07] pb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 font-semibold tracking-[0.12em] uppercase transition-all duration-200 ${
                  active === cat
                    ? "bg-[#1B4332] text-white"
                    : "bg-black/[0.04] text-black/50 hover:bg-black/[0.08] hover:text-black"
                }`}
                style={{ fontSize: "11px" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {filtered.map((post, i) => (
              <article key={i} className="group flex flex-col">

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-black/[0.05] mb-5">
                  {post.img ? (
                    <>
                      <Image
                        src={post.img}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </>
                  ) : (
                    <ImagePlaceholder label={post.category} className="w-full h-full" />
                  )}

                  {/* Video play badge */}
                  {post.video && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <HiPlay className="text-[#1B4332] ml-1" size={22} />
                      </div>
                    </div>
                  )}

                  {/* Featured badge */}
                  {post.featured && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-[#2D6A4F] text-white font-bold tracking-[0.15em] uppercase" style={{ fontSize: "9px" }}>
                      Featured
                    </span>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className="border border-black/20 px-2.5 py-1 font-semibold tracking-[0.15em] uppercase text-black/50"
                    style={{ fontSize: "10px" }}
                  >
                    {post.category}
                  </span>
                  <span
                    className="border border-black/10 px-2.5 py-1 font-medium text-black/30"
                    style={{ fontSize: "10px" }}
                  >
                    {post.date}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-black text-black leading-snug mb-3 group-hover:text-[#2D6A4F] transition-colors duration-200" style={{ fontSize: "var(--text-body)" }}>
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-black/45 leading-relaxed mb-5 flex-1" style={{ fontSize: "var(--text-sm)" }}>
                  {post.excerpt}
                </p>

                {/* CTA */}
                {post.download ? (
                  <a
                    href={post.href ?? "#"}
                    className="inline-flex items-center gap-2 font-semibold text-[#2D6A4F] hover:gap-3 transition-all duration-200 self-start"
                    style={{ fontSize: "var(--text-sm)" }}
                    download
                  >
                    <HiDownload size={16} />
                    Download PDF
                  </a>
                ) : post.video ? (
                  <a
                    href={post.href ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-[#2D6A4F] hover:gap-3 transition-all duration-200 self-start"
                    style={{ fontSize: "var(--text-sm)" }}
                  >
                    <HiPlay size={16} />
                    Watch Video
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 font-semibold text-[#2D6A4F] group-hover:gap-3 transition-all duration-200 self-start cursor-default" style={{ fontSize: "var(--text-sm)" }}>
                    Read more
                    <HiArrowRight size={14} />
                  </span>
                )}

              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-black/35 text-center py-24" style={{ fontSize: "var(--text-body)" }}>
              No posts in this category yet.
            </p>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}
