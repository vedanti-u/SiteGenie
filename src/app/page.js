"use client";
import HeroSection from "@/components/heroSection";
import FAQ_E from "@/components/faqs";
import CTA from "@/components/cta-section";
import "@/styles/globals.css";

export default function Example() {
  return (
    <div className="relative mx-5">
      <HeroSection />
      <FAQ_E />
      <CTA />
    </div>
  );
}
