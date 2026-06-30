import Image from "next/image";

const partners = [
  { name: "Startup India",                       src: "/assets/partners/startup-india.png", w: 541, h: 140 },
  { name: "IIM Calcutta Innovation Park",        src: "/assets/partners/iim-calcutta.png",  w: 350, h: 381 },
  { name: "MBMA",                                src: "/assets/partners/mbma.png",           w: 445, h: 155 },
  { name: "Meghalaya Institute of Entrepreneurship", src: "/assets/partners/mie.png",       w: 168, h: 190 },
];

export default function Partners() {
  return (
    <section className="bg-white border-t border-black/[0.06] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center gap-10">

        {/* Label */}
        <p
          className="font-semibold tracking-[0.25em] uppercase text-black/30"
          style={{ fontSize: "var(--text-label)" }}
        >
          Partners &amp; Affiliations
        </p>

        {/* Logos */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {partners.map((p) => (
            <Image
              key={p.name}
              src={p.src}
              alt={p.name}
              width={p.w}
              height={p.h}
              className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 object-contain"
              style={{ height: 64, width: "auto" }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
