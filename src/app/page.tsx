import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { FeatureGrid } from "@/components/feature-grid";
import { Philosophy } from "@/components/philosophy";
import { ProtocolSection } from "@/components/protocol-section";
import { Waitlist } from "@/components/waitlist";

export default function HomePage() {
  return (
    <main className="space-y-24 md:space-y-28 lg:space-y-32">
      <Navbar />
      <Hero />
      <Philosophy />
      <FeatureGrid />
      <ProtocolSection />
      <Waitlist />
      <Footer />
    </main>
  );
}
