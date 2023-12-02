import "./style/globals.css";
import FAQ_E from "./components/faqs";
import CTA from "./components/cta-section";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";

export default function Example() {
  return (
    <div className="relative mx-5">
      <Navbar />
      <HeroSection />
      <FAQ_E />
      <CTA />
      <Footer />
    </div>
  );
}
