const ClientsSection = () => {
  // Placeholder client logos - in production these would be actual client logos
  const clients = [
    "Enterprise Corp",
    "Global Brand",
    "Tech Leader",
    "Market Pro",
    "Growth Inc",
    "Scale Up",
    "Vision Labs",
    "Peak Media",
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            OUR CLIENTS
          </h2>
          <p className="text-muted-foreground">
            With years of proven success across established brands and businesses, Ignite Visibility has helped numerous organizations achieve their digital marketing goals.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 bg-card/30 rounded-lg border border-border/10 hover:border-border/30 transition-colors"
            >
              <span className="text-muted-foreground font-heading font-medium text-sm">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
