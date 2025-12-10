import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "The team has been instrumental in helping us improve our SEO, influencer program, digital PR, CRO, and paid ads on Meta platforms. From strategic insights to hands-on execution, they've helped us refine our digital marketing efforts and drive real results.",
      author: "Director",
      company: "Ecommerce Company",
      rating: 5,
    },
    {
      quote: "One of the most commendable aspects of our partnership has been Ignite's dedication to understanding our business. They have taken the time to delve into the intricacies of our specialty, allowing them to execute strategies with near-flawless precision.",
      author: "Executive",
      company: "Healthcare Company",
      rating: 5,
    },
    {
      quote: "The team's data-driven insights and proactive recommendations keep our campaigns ahead of the curve, ensuring maximum impact in a competitive digital landscape. If you're looking for a reliable performance-marketing agency, Ignite Visibility is the perfect choice.",
      author: "Manager",
      company: "Online Lead Gen Company",
      rating: 5,
    },
    {
      quote: "They're professional, responsive, and understand how to drive results. From strategy to execution, they've helped us grow our brand and consistently improve our ROI through digital advertising.",
      author: "Leader",
      company: "Multi-Location Lead Gen Company",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-navy-light/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <Quote className="absolute top-10 left-10 w-32 h-32 text-foreground" />
        <Quote className="absolute bottom-10 right-10 w-24 h-24 text-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-medium mb-2">Highly Reviewed by 250+ Clients</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            TESTIMONIALS
          </h2>
          <p className="text-muted-foreground">
            Our clients trust us to deliver results, and their success speaks for itself. With a commitment to excellence and a focus on long-term growth, we've helped enterprise brands thrive in a fast-paced digital world.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 md:p-12">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-center text-foreground mb-8 leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <p className="font-heading font-bold text-foreground">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-muted-foreground text-sm">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-border/50 hover:border-primary hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-border/50 hover:border-primary hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
