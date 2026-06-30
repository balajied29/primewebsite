import Image from "next/image";
import AnimateIn from "@/components/ui/AnimateIn";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const images = [
  { src: "/assets/images/event-1.jpg",  label: "Act East Business Show",        aspect: "aspect-[4/5]",   exists: true  },
  { src: "/assets/images/event-2.jpg",  label: "Incubation Cohort",             aspect: "aspect-[4/5]",   exists: true  },
  { src: "/assets/images/event-3.jpg",  label: "PRIME Hub Activity",            aspect: "aspect-[4/5]",   exists: true  },
  { src: "",                            label: "Event / Programme Photo",        aspect: "aspect-[4/5]",   exists: false },
  { src: "",                            label: "Event / Programme Photo",        aspect: "aspect-[4/5]",   exists: false },
  { src: "/assets/images/team-bg.jpg",  label: "Team & Leadership",             aspect: "aspect-[4/5]",   exists: true  },
];

export default function Gallery() {
  return (
    <section className="bg-[#f5f5f5] py-24 md:py-36 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <AnimateIn direction="left">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-8 h-px bg-[#2D6A4F]" />
              <p className="font-semibold tracking-[0.25em] uppercase text-black/35" style={{ fontSize: "var(--text-label)" }}>
                Gallery
              </p>
            </div>
            <h2 className="font-black text-black leading-[0.9] tracking-tight" style={{ fontSize: "var(--text-display)" }}>
              PRIME in<br />
              <span className="text-[#2D6A4F]">action.</span>
            </h2>
          </AnimateIn>
          <AnimateIn direction="right" delay={0.1} className="max-w-xs">
            <p className="text-black/45 leading-[1.75]" style={{ fontSize: "var(--text-body)" }}>
              From pitch days to trade shows — a glimpse into the PRIME ecosystem across Meghalaya.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {images.map((img, i) => (
            <AnimateIn key={i} delay={i * 0.05} direction="up">
              {img.exists ? (
                <div className={`relative ${img.aspect} overflow-hidden bg-black/10 group`}>
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="absolute bottom-4 left-4 text-white font-semibold text-[12px] tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.label}
                  </p>
                </div>
              ) : (
                <ImagePlaceholder label={img.label} className={img.aspect} />
              )}
            </AnimateIn>
          ))}
        </div>

      </div>
    </section>
  );
}
