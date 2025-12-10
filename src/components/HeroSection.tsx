import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const awards = [
    { title: "#1 SEO COMPANY IN THE US", label: "UpCity" },
    { title: "#1 TOP FRANCHISE SUPPLIER", label: "Entrepreneur" },
    { title: "#1 PAID MEDIA COMPANY IN THE US", label: "Clutch" },
    { title: "#1 BEST PLACES TO WORK", label: "Inc. Best Workplaces" },
    { title: "6X INC. 5000 COMPANY", label: "Inc. 5000" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-gradient pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave effect */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="absolute bottom-0 left-0 w-full animate-wave"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="hsl(180 100% 33% / 0.3)"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
          <svg
            className="absolute bottom-0 left-0 w-full animate-wave"
            style={{ animationDelay: "-5s" }}
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="hsl(180 100% 33% / 0.2)"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,133.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "-2s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight animate-fade-in">
            YOUR TRUSTED AGENCY FOR
            <br />
            <span className="text-gradient-gold">ROI-DRIVEN DIGITAL MARKETING</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Accelerate growth with our digital marketing and web development solutions. We drive qualified traffic to websites that convert for enterprise, franchise and multi-location businesses.
          </p>
          <Button variant="gold" size="xl" className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Speak With An Expert
          </Button>
        </div>
      </div>

      {/* Awards Bar */}
      <div className="relative z-10 mt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {awards.map((award, index) => (
              <div
                key={index}
                className="award-card rounded-lg animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="text-xs text-muted-foreground mb-2 font-medium">{award.label}</div>
                <div className="text-xs font-heading font-bold text-foreground">{award.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
