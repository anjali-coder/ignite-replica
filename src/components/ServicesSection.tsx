import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Palette } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      category: "EARNED MEDIA",
      items: [
        "Search Engine Optimization (SEO)",
        "Generative Engine Optimization",
        "Local SEO",
        "Digital PR",
        "Influencer Marketing",
        "Organic Social Media Management",
      ],
      stat: "97%",
      statLabel: "IN MONTHLY AD SPEND",
    },
    {
      icon: Target,
      category: "PAID MEDIA",
      items: [
        "Pay-Per-Click Advertising (PPC)",
        "Display Advertising",
        "Paid Social Media Advertising",
        "Retargeting/Remarketing",
        "Affiliate Marketing",
        "Programmatic Advertising",
      ],
      stat: "99%",
      statLabel: "TOP OF DIGITAL AGENCIES",
      statPrefix: "Google Premier Partner – TOP",
    },
    {
      icon: Palette,
      category: "OWNED MEDIA",
      items: [
        "Media Design & Creation",
        "Video Production",
        "Content Marketing",
        "Website Design",
        "Website Development",
        "Email Marketing",
        "Conversion Rate Optimization (CRO)",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative">
      {/* Decorative side element */}
      <div className="absolute left-0 top-1/4 w-32 h-64 opacity-50">
        <svg viewBox="0 0 100 200" className="w-full h-full">
          <path
            d="M0,0 Q50,50 30,100 Q10,150 50,200"
            stroke="hsl(var(--peach))"
            strokeWidth="8"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M20,20 Q70,70 50,120 Q30,170 70,220"
            stroke="hsl(var(--peach))"
            strokeWidth="6"
            fill="none"
            opacity="0.2"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            AWARD WINNING MARKETING SERVICES
          </h2>
          <p className="text-muted-foreground text-lg">
            Ignite Visibility offers a comprehensive suite of marketing services all under one roof. We don't believe in a one-size-fits-all approach. Our team of experts craft tailored digital marketing strategies that align with your specific business goals and target audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-teal/20 flex items-center justify-center group-hover:bg-teal/30 transition-colors">
                  <service.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-xl font-heading font-bold">{service.category}</h3>
              </div>

              <ul className="space-y-3 mb-8">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-teal mt-1">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {service.stat && (
                <div className="mt-auto pt-6 border-t border-border/30">
                  {service.statPrefix && (
                    <div className="text-xs text-muted-foreground mb-1">{service.statPrefix}</div>
                  )}
                  <div className="text-4xl font-heading font-bold text-teal">{service.stat}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{service.statLabel}</div>
                </div>
              )}

              <Button variant="ghost_light" className="mt-6 p-0 h-auto text-primary hover:text-primary/80">
                Learn More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
