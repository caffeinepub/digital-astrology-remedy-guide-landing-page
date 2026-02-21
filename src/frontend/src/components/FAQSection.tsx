import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  const faqs = [
    {
      question: 'Do I need my horoscope or birth chart?',
      answer: 'No! This guide is designed to work for everyone without needing your specific horoscope. The remedies are based on general planetary influences that affect all of us. You can start immediately without any astrological calculations.'
    },
    {
      question: 'Are the remedies complicated or time-consuming?',
      answer: 'Not at all. Each remedy takes just 5-10 minutes per day. They use simple, everyday items you already have at home. No expensive materials, no complex rituals, no special training needed. Everything is explained in plain language with step-by-step instructions.'
    },
    {
      question: 'How soon can I expect to see results?',
      answer: 'Most people notice subtle positive shifts within 2-3 weeks of consistent practice. Some experience changes sooner—like better sleep or reduced anxiety within days. For bigger life changes like career growth or financial improvement, give it 1-3 months of regular practice. Remember, these remedies work best when done consistently.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Common Questions
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12">
            Everything you need to know before you start
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-xl px-6 hover:border-gold transition-colors"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl font-semibold py-6 hover:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
