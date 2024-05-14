"use client";
import HeroSection from "../components/heroSection";
import FAQ_E from "../components/faqs";
import CTA from "@/components/cta-section";
import "@/styles/globals.css";
import FooterSection from "@/components/footer";
import Trustedcompany from "@/components/trustedcompany";

export default function Page() {
  return (
    <div className="relative mx-5">
      <HeroSection />
      <Trustedcompany />
      <FAQ_E />
      <CTA />
      <FooterSection />
    </div>
  );
}
