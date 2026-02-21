import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import TrustBadges from './TrustBadges';

export default function PriceSection() {
  const handlePurchase = () => {
    alert('Purchase functionality would be integrated here with payment gateway');
  };

  return (
    <section id="price-section" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12">
            One-time investment. Lifetime access.
          </p>

          <div className="bg-card border-2 border-gold rounded-2xl p-8 md:p-12 shadow-2xl">
            {/* Pricing */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl text-muted-foreground line-through">₹999</span>
                <span className="text-5xl md:text-6xl font-bold text-gold">₹299</span>
              </div>
              <p className="text-lg text-muted-foreground">
                Limited Time Offer • Save 70%
              </p>
            </div>

            {/* What's Included Summary */}
            <div className="space-y-3 mb-8">
              {[
                'Complete Planet-Based Remedy Guide',
                'Weekly Planner & Daily Checklist',
                'Ritual Calendar with Auspicious Dates',
                'Bonus Energy Maintenance Tips',
                'Instant Digital Download',
                'Lifetime Access - No Subscription'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-black" />
                  </div>
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={handlePurchase}
              size="lg"
              className="w-full bg-gold hover:bg-gold-dark text-black font-bold text-xl py-6 h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Instant Access Now - ₹299
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              Secure payment • Instant download after purchase
            </p>

            {/* Trust Badges */}
            <div className="mt-8">
              <TrustBadges />
            </div>
          </div>

          {/* Additional Reassurance */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Join thousands who have already started their journey to better financial stability, health, and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
