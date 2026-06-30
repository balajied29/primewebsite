import Image from "next/image";

const partners = [
  { name: "Startup India",                       src: "/assets/partners/startup-india.png", w: 541, h: 140 },
  { name: "IIM Calcutta Innovation Park",        src: "/assets/partners/iim-calcutta.png",  w: 350, h: 381 },
  { name: "MBMA",                                src: "/assets/partners/mbma.png",           w: 445, h: 155 },
  { name: "Meghalaya Institute of Entrepreneurship", src: "/assets/partners/mie.png",       w: 168, h: 190 },
];

export default function Partners() {
  return (
    <section className="bg-white border-t border-black/[0.06] py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">

          {/* Label */}
          <p
            className="font-semibold tracking-[0.25em] uppercase text-black/30 shrink-0"
            style={{ fontSize: "var(--text-label)" }}
          >
            Partners &amp; Affiliations
          </p>

          {/* Divider */}
          <div className="hidden md:block w-px h-8 bg-black/[0.08] shrink-0" />

          {/* Logos */}
          <div className="flex flex-wrap items-center gap-10 md:gap-14">
            {partners.map((p) => (
              <Image
                key={p.name}
                src={p.src}
                alt={p.name}
                width={p.w}
                height={p.h}
                className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
                style={{ height: 44, width: "auto" }}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
