import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ApplicationForm from "@/components/ApplicationForm";
import ComparisonSection from "@/components/ComparisonSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AlertsSection from "@/components/AlertsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import FounderLetterSection from "@/components/FounderLetterSection";
import FoundingOfferSection from "@/components/FoundingOfferSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ApplicationForm />
      <ComparisonSection />
      <ProblemSection />
      <SolutionSection />
      <AlertsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <FounderLetterSection />
      <FoundingOfferSection />
      <Footer />
    </main>
  );
}
