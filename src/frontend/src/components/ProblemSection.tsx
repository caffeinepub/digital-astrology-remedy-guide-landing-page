import { TrendingDown, Heart, Brain, Briefcase, Building2 } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Income Instability',
      description: 'Salary feels stuck. Expenses keep rising. Savings barely grow. Every month feels like a struggle to make ends meet.'
    },
    {
      icon: Heart,
      title: 'Health Fatigue',
      description: 'Constant tiredness. Small issues that won\'t go away. Medical bills adding up. You want to feel energetic again.'
    },
    {
      icon: Brain,
      title: 'Mental Stress',
      description: 'Anxiety about the future. Sleepless nights. Overthinking everything. Peace of mind feels like a distant dream.'
    },
    {
      icon: Briefcase,
      title: 'Promotion Delays',
      description: 'Colleagues moving ahead. Your hard work goes unnoticed. That promotion keeps getting postponed. Recognition feels unfair.'
    },
    {
      icon: Building2,
      title: 'Slow Business Growth',
      description: 'Customers aren\'t coming. Deals fall through at the last moment. Competition is winning. Growth feels impossible.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Does This Sound Familiar?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12">
            You're not alone. Thousands face these exact struggles every single day.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border rounded-xl p-6 hover:border-gold transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
