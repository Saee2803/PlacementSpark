import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import ProgramOverview from "./components/ProgramOverview";
import SuccessStories from "./components/SuccessStories";
import WhatsAppProof from "./components/WhatsAppProof";
import FAQ from "./components/FAQ";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import StickyMobileCTA from "./components/StickyMobileCTA";
import LiveActivityFeed from "./components/LiveActivityFeed";
import ProfessionalStats from "./components/ProfessionalStats";
import FounderSection from "./components/FounderSection";
import CompanyJourneyTimeline from "./components/CompanyJourneyTimeline";
import BlogSection from "./components/BlogSection";
import RiskFreeBanner from "./components/RiskFreeBanner";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-brand-black text-brand-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <LiveActivityFeed />
        <About />
        <ProfessionalStats />
        <ProgramOverview />
        <Curriculum />
        <HowItWorks />
        <FounderSection />
        <SuccessStories />
        <CompanyJourneyTimeline />
        <WhatsAppProof />
        <BlogSection />
        <RiskFreeBanner />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
}

export default App;
