import { Button } from '@/components/ui/button';
import { Clock, AlertCircle } from 'lucide-react';

interface FinalCTASectionProps {
  onCTAClick: () => void;
}

export default function FinalCTASection({ onCTAClick }: FinalCTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-5 h-5 text-gold" />
            <span className="text-gold font-semibold">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Don't Let Another Month Pass Feeling Stuck
          </h2>

          <div className="space-y-4 text-lg md:text-xl text-muted-foreground mb-8">
            <p>
              Every day you wait is another day of unnecessary struggle.
            </p>
            <p className="text-foreground font-medium">
              Another month of financial stress. Another week of sleepless nights. Another opportunity that might slip away.
            </p>
            <p>
              The remedies in this guide have helped thousands break through their blocks. They're simple, practical, and designed for busy people like you.
            </p>
          </div>

          <div className="bg-card border-2 border-gold/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3 text-left">
              <AlertCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-2">Why wait?</p>
                <p className="text-muted-foreground">
                  For less than the cost of a single consultation, you get lifetime access to remedies you can use again and again. Start today and give yourself the energetic support you deserve.
                </p>
              </div>
            </div>
          </div>

          <Button
            onClick={onCTAClick}
            size="lg"
            className="bg-gold hover:bg-gold-dark text-black font-bold text-xl px-12 py-6 h-auto rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Yes, I'm Ready to Start - ₹299
          </Button>

          <p className="text-muted-foreground mt-4">
            Instant access • Start in the next 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
}
