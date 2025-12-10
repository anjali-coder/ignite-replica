import { Eye, Award, HeadphonesIcon, Target, Handshake, ArrowUpDown } from "lucide-react";

const DifferenceSection = () => {
  const differences = [
    {
      icon: Eye,
      title: "TRANSPARENT",
      description: "We pride ourselves on our transparency. With our detailed project management and open communication.",
    },
    {
      icon: Award,
      title: "INDUSTRY LEADER",
      description: "We've been in business for 13 years and consistently accoladed as a leading digital marketing agency.",
    },
    {
      icon: HeadphonesIcon,
      title: "PERSONALIZED SUPPORT",
      description: "High-touch services include a dedicated help desk, standing calls, and over 340 Igniters to assist you.",
    },
    {
      icon: Target,
      title: "ROI DRIVEN",
      description: "We are focused on getting you the ROI you deserve. If we aren't seeing the results you want, we'll pivot our efforts.",
    },
    {
      icon: Handshake,
      title: "ELITE PARTNERSHIPS",
      description: "As a top 1% Google Partner, Meta Premium Partner, and TikTok Premium Partner, we leverage strong relationships.",
    },
    {
      icon: ArrowUpDown,
      title: "FLEXIBLE",
      description: "We don't believe in tying our clients down with long-term contracts, hidden fees, or owning your assets.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            THE IGNITE DIFFERENCE
          </h2>
          <p className="text-muted-foreground text-lg">
            At Ignite Visibility, we blend creativity with data to deliver results that truly stand out. Our approach goes beyond traditional marketing—by understanding your unique challenges and goals, we craft tailored strategies that integrate SEO, paid media, and content to drive growth.
          </p>
        </div>

        {/* Differences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differences.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-teal/10 flex items-center justify-center mb-4 group-hover:bg-teal/20 transition-colors">
                <item.icon className="w-8 h-8 text-teal" />
              </div>
              <h3 className="text-lg font-heading font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
