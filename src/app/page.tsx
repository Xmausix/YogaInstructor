import Header from "@/components/layout/header";
import HeroSection from "@/components/sections/hero";
import AboutSection from "@/components/sections/about";
import PricingSection from "@/components/sections/pricing";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
