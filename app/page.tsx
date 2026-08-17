import HeroSection from "@/components/home/HeroSection";
import Marquee from "@/components/shared/Marquee";
import BrandStatement from "@/components/home/BrandStatement";
import ServicesSection from "@/components/home/ServicesSection";
import CampaignObjectives from "@/components/home/CampaignObjectives";
import WorkSection from "@/components/home/WorkSection";
import ProcessSection from "@/components/home/ProcessSection";
import WhySection from "@/components/home/WhySection";
import PhilosophySection from "@/components/home/PhilosophySection";
import AboutSection from "@/components/home/AboutSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ClientsSection from "@/components/home/ClientsSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import InsightsSection from "@/components/home/InsightsSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-[#f5f5f0]">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Divider */}
      <Marquee dark={true} speed={35} />

      {/* 3. Brand Manifesto */}
      <BrandStatement />

      {/* 4. Six Services */}
      <ServicesSection />

      {/* 5. Campaigns, Not Services Explorer */}
      <CampaignObjectives />

      {/* 6. Featured Case Studies */}
      <WorkSection />

      {/* 7. How We Work (From Idea To Impact) */}
      <ProcessSection />

      {/* 8. Why Buzzcrafterss (Built Different) */}
      <WhySection />

      {/* 9. Core Philosophy */}
      <PhilosophySection />

      {/* 10. About Us */}
      <AboutSection />

      {/* 11. Industries We Touch */}
      <IndustriesSection />

      {/* 12. Partnerships & Client Trust */}
      <ClientsSection />

      {/* 13. Client Testimonial */}
      <TestimonialSection />

      {/* 14. Thinking Out Loud (Insights) */}
      <InsightsSection />

      {/* 15. Final CTA */}
      <FinalCTA />
    </main>
  );
}
