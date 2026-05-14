import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { ProtocolSection } from "@/components/sections/protocol-section";
import { Waitlist } from "@/components/waitlist";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0907] text-[#F5E9D8]">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <FeatureGrid />
      <ProtocolSection />
      <Waitlist />
      <Footer />
    </main>
  );
}
