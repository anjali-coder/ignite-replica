import { ArrowRight, TrendingUp, Users, DollarSign, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      client: "TechFlow Solutions",
      industry: "SaaS Technology",
      logo: "TF",
      description: "Transformed their digital presence with a comprehensive SEO and paid media strategy, resulting in record-breaking growth across all channels.",
      metrics: [
        { icon: TrendingUp, value: "+312%", label: "Organic Traffic" },
        { icon: DollarSign, value: "+189%", label: "Revenue Growth" },
        { icon: Target, value: "4.2x", label: "ROAS" },
      ],
      color: "from-secondary/20 to-secondary/5",
    },
    {
      client: "HealthFirst Medical",
      industry: "Healthcare",
      logo: "HF",
      description: "Developed a patient-focused digital marketing strategy that increased appointments and brand awareness in competitive markets.",
      metrics: [
        { icon: Users, value: "+245%", label: "New Patients" },
        { icon: TrendingUp, value: "+178%", label: "Website Visits" },
        { icon: DollarSign, value: "-42%", label: "Cost Per Lead" },
      ],
      color: "from-primary/20 to-primary/5",
    },
    {
      client: "Urban Retail Co",
      industry: "E-Commerce",
      logo: "UR",
      description: "Implemented a full-funnel marketing approach combining influencer partnerships, social ads, and conversion optimization.",
      metrics: [
        { icon: DollarSign, value: "+425%", label: "Online Sales" },
        { icon: Target, value: "6.8x", label: "ROAS" },
        { icon: Users, value: "+89%", label: "Customer Base" },
      ],
      color: "from-accent/20 to-accent/5",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-2 tracking-wide">Proven Results</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            CASE STUDIES
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore how we've helped leading brands achieve exceptional results through strategic digital marketing solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="group bg-card/50 border-border/20 hover:border-primary/40 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${study.color}`} />
              
              <CardHeader className="pb-4">
                {/* Client Logo & Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-navy-light to-muted flex items-center justify-center border border-border/30 group-hover:border-primary/30 transition-colors">
                    <span className="text-lg font-heading font-bold text-primary">{study.logo}</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg font-heading">{study.client}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {study.industry}
                    </CardDescription>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {study.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div 
                      key={idx}
                      className="text-center p-3 rounded-lg bg-muted/30 border border-border/10"
                    >
                      <metric.icon className="w-4 h-4 mx-auto mb-1 text-primary" />
                      <p className="text-lg font-heading font-bold text-foreground">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="w-full group/btn text-muted-foreground hover:text-primary hover:bg-primary/10"
                >
                  View Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold px-8"
          >
            View All Case Studies
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
