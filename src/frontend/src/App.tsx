import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FearBridgeSection from './components/FearBridgeSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import WhatsIncludedSection from './components/WhatsIncludedSection';
import PriceSection from './components/PriceSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import StickyMobileCTA from './components/StickyMobileCTA';
import Footer from './components/Footer';

function App() {
  const handleCTAClick = () => {
    // Scroll to price section for purchase
    const priceSection = document.getElementById('price-section');
    if (priceSection) {
      priceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onCTAClick={handleCTAClick} />
      <ProblemSection />
      <FearBridgeSection />
      <SolutionSection />
      <BenefitsSection />
      <WhatsIncludedSection />
      <PriceSection />
      <FAQSection />
      <FinalCTASection onCTAClick={handleCTAClick} />
      <Footer />
      <StickyMobileCTA onClick={handleCTAClick} />
    </div>
  );
}

export default App;
