import Image from "next/image";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1B4332]"
      role="status"
      aria-label="Loading"
    >
      {/* Star logo — glowing pulse */}
      <div className="animate-prime-fade-in">
        <Image
          src="/logo-white.png"
          alt="PRIME Meghalaya"
          width={676}
          height={183}
          className="animate-prime-glow"
          style={{ height: "clamp(28px, 4vw, 44px)", width: "auto" }}
          priority
        />
      </div>

      {/* Subtle dot progress */}
      <div className="flex items-center gap-1.5 mt-10">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1 h-1 rounded-full bg-[#74C69D]"
            style={{
              animation: `prime-star-pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
