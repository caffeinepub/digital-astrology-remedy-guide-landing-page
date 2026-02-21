export default function SolutionSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full" />
                <img
                  src="/assets/generated/product-mockup.dim_800x1000.png"
                  alt="Digital Astrology Remedy Guide"
                  className="relative w-full max-w-md mx-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Your Practical Astrology Remedy Guide
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                No complicated rituals. No expensive priests. No confusing jargon.
              </p>
              <p className="text-lg md:text-xl mb-8 leading-relaxed">
                This guide gives you <span className="text-gold font-semibold">simple, actionable remedies</span> you can do at home to help align planetary energies in your favor.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg"><span className="font-semibold">Money:</span> Attract better financial flow and stability</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg"><span className="font-semibold">Health:</span> Support physical vitality and wellness</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg"><span className="font-semibold">Peace:</span> Reduce mental stress and anxiety</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg"><span className="font-semibold">Career Growth:</span> Clear obstacles to promotion and recognition</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <p className="text-lg"><span className="font-semibold">Business Stability:</span> Improve customer flow and deal success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
