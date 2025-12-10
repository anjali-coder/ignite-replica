import { Building2, Store, Users, LineChart, ShoppingCart, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhoWeServeSection = () => {
  const businesses = [
    {
      icon: Building2,
      title: "MULTI-LOCATION BUSINESSES",
      description: "Ignite Visibility specializes in driving results for multi-location businesses with tailored digital strategies. From local SEO to location-based targeting, we ensure your brand stands out across every site.",
    },
    {
      icon: Store,
      title: "FRANCHISE BUSINESSES",
      description: "Ignite Visibility powers franchise growth with targeted digital strategies that drive local and national results. We optimize brand visibility, improve franchisee performance, and create scalable marketing systems.",
    },
    {
      icon: Users,
      title: "FRANCHISE DEVELOPMENT",
      description: "Ignite Visibility helps franchisors attract top-tier investors with targeted digital strategies that elevate brand visibility and drive qualified leads.",
    },
    {
      icon: LineChart,
      title: "LEAD GENERATION WEBSITES",
      description: "Ignite Visibility drives high-quality leads with data-driven strategies. From SEO to performance marketing, we optimize every step of the funnel.",
    },
    {
      icon: ShoppingCart,
      title: "ECOMMERCE BRANDS",
      description: "Ignite Visibility helps Ecommerce brands scale by driving traffic, boosting conversions, and maximizing revenue with tailored strategies.",
    },
    {
      icon: Briefcase,
      title: "B2B COMPANIES",
      description: "Ignite Visibility drives growth for B2B companies with strategies that generate qualified leads and build brand authority.",
    },
  ];

  return (
    <section id="who-we-serve" className="py-24 bg-navy-light/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-peach rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            WHO WE SERVE
          </h2>
          <p className="text-muted-foreground text-lg">
            We partner with a diverse range of established businesses, including thriving franchise and multi-location brands, across numerous industries. From healthcare and finance to home services and beyond, we understand the unique challenges of your sector.
          </p>
        </div>

        {/* Business Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businesses.map((business, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-peach/20 to-gold/20 flex items-center justify-center mb-4 group-hover:from-peach/30 group-hover:to-gold/30 transition-colors">
                <business.icon className="w-7 h-7 text-peach" />
              </div>
              <h3 className="text-lg font-heading font-bold mb-3">{business.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{business.description}</p>
              <Button variant="ghost_light" className="p-0 h-auto text-sm text-primary hover:text-primary/80">
                Learn More →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
