import { HiPhotograph } from "react-icons/hi";

interface Props {
  label?: string;
  className?: string;
}

export default function ImagePlaceholder({ label = "Image", className = "" }: Props) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-black/[0.04] border-2 border-dashed border-black/[0.10] gap-3 ${className}`}
    >
      <HiPhotograph className="text-black/15" size={36} />
      <p className="text-black/25 font-semibold tracking-[0.2em] uppercase" style={{ fontSize: "11px" }}>
        {label}
      </p>
    </div>
  );
}
