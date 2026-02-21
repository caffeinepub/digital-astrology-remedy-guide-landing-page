import { Star, Calendar, CheckSquare, BookOpen } from 'lucide-react';

export default function WhatsIncludedSection() {
  const includes = [
    {
      icon: Star,
      title: 'Planet-Based Remedies',
      description: 'Specific actions for each planet affecting your life areas. Simple instructions you can follow at home without any special equipment.'
    },
    {
      icon: Calendar,
      title: 'Weekly Planner',
      description: 'Organize your remedies by day and time. Know exactly what to do and when for maximum effectiveness.'
    },
    {
      icon: CheckSquare,
      title: 'Daily Checklist',
      description: 'Track your progress easily. Stay consistent with simple daily tasks that take just 5-10 minutes.'
    },
    {
      icon: BookOpen,
      title: 'Ritual Calendar',
      description: 'Important dates and auspicious timings. Align your remedies with favorable planetary periods for better results.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Everything You Need Inside
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12">
            A complete system to help you stay consistent and see results
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {includes.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-card to-muted/10 border border-border rounded-xl p-6 hover:border-gold transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gold rounded-lg flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              Plus bonus tips on maintaining positive energy throughout your day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
