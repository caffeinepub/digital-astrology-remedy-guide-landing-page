import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface StickyMobileCTAProps {
  onClick: () => void;
}

export default function StickyMobileCTA({ onClick }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t-2 border-gold/30 p-4 shadow-2xl">
      <Button
        onClick={onClick}
        size="lg"
        className="w-full bg-gold hover:bg-gold-dark text-black font-bold text-lg py-6 h-auto rounded-lg shadow-xl"
      >
        Get Guide Now - ₹299
      </Button>
    </div>
  );
}
