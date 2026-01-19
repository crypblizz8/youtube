import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AgentsSection from "@/components/AgentsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AgentsSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
