import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-navy-dark via-background to-navy-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            WHY PARTNER WITH IGNITE VISIBILITY?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            At Ignite Visibility, we understand the challenges brands face in today's competitive digital landscape. Whether it's scaling efficiently, integrating across marketing channels, or staying ahead of rapid changes, we're here to help. We create customized, data-driven strategies that deliver measurable results.
          </p>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            With a low client-to-account manager ratio, we ensure personalized attention and full transparency. You'll always know exactly where your investment is going. When you partner with us, you don't just get an agency, you get a dedicated, results-focused partner committed to driving long-term growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl">
              Get Started Today
            </Button>
            <Button variant="outline" size="xl" className="border-border/50 hover:bg-card/50">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
