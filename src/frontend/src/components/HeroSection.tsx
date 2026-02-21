import { Button } from '@/components/ui/button';
import TrustBadges from './TrustBadges';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Feeling Stuck Despite All Your Hard Work?
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 leading-relaxed">
            Money pressure keeps growing. Health feels uncertain. Career progress seems blocked.
          </p>
          <p className="text-lg md:text-xl text-gold mb-8 font-medium">
            You're doing everything right... but something still feels off.
          </p>
          
          <Button
            onClick={onCTAClick}
            size="lg"
            className="bg-gold hover:bg-gold-dark text-black font-bold text-lg px-8 py-6 h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Your Remedy Guide Now - ₹299
          </Button>

          <p className="text-white/80 mt-4 text-sm">
            Instant Digital Download • Start Today
          </p>

          <div className="mt-12">
            <TrustBadges />
          </div>
        </div>
      </div>
    </section>
  );
}
