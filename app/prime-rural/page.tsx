import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PrimeRural from "@/components/sections/PrimeRural";

export const metadata: Metadata = {
  title: "PRIME Rural — Enterprise at the Village Level",
  description: "PRIME Rural brings entrepreneurship support to every village, hill, and valley in Meghalaya. Women-led, land-rooted, market-connected.",
};

export default function PrimeRuralPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PrimeRural />
      </main>
      <Footer />
    </>
  );
}
