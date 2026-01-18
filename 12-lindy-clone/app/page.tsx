import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AgentDemo from "@/components/AgentDemo";
import HowItWorks from "@/components/HowItWorks";
import LogoCloud from "@/components/LogoCloud";
import PlatformFeatures from "@/components/PlatformFeatures";
import Integrations from "@/components/Integrations";
import Enterprise from "@/components/Enterprise";
import CustomerStories from "@/components/CustomerStories";
import Resources from "@/components/Resources";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AgentDemo />
      <HowItWorks />
      <LogoCloud />
      <PlatformFeatures />
      <Integrations />
      <Enterprise />
      <CustomerStories />
      <Resources />
      <CTA />
      <Footer />
    </main>
  );
}
