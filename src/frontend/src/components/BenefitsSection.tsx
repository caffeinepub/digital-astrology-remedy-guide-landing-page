import { Wallet, Heart, Lightbulb, TrendingUp } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Wallet,
      title: 'Improved Financial Discipline',
      description: 'Develop better money habits and attract opportunities for income growth. Feel more confident about your financial future.'
    },
    {
      icon: Heart,
      title: 'Emotional Calm',
      description: 'Reduce anxiety and stress. Sleep better at night. Wake up feeling more peaceful and centered.'
    },
    {
      icon: Lightbulb,
      title: 'Clearer Decisions',
      description: 'Cut through confusion and doubt. Make choices with confidence. Trust your intuition more.'
    },
    {
      icon: TrendingUp,
      title: 'Better Opportunity Flow',
      description: 'Notice doors opening that were previously closed. Right people and situations start appearing at the right time.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            What You'll Experience
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12">
            Real, tangible improvements in your daily life
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card border-2 border-gold/20 rounded-xl p-8 hover:border-gold transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
