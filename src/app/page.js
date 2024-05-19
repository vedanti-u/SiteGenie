"use client";
import HeroSection from "../components/heroSection";
import FAQ_E from "../components/faqs";
import CTA from "@/components/cta-section";
import "@/styles/globals.css";
import FooterSection from "@/components/footer";
import FeatureSection from "@/components/features";

export default function Page() {
  return (
    <div className="relative mx-5">
      <HeroSection />
      <FeatureSection />
      <FAQ_E />
      <CTA />
      <FooterSection />
    </div>
  );
}
