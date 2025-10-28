import { Mountain, Camera, Home, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";

const Adventures = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/7598010898", "_blank");
  };

  const adventures = [
    {
      icon: Mountain,
      title: "Trekking & Hiking",
      description: "Explore scenic mountain trails, from beginner-friendly walks to challenging treks through the Western Ghats."
    },
    {
      icon: TreePine,
      title: "Tea Estate Tours",
      description: "Walk through sprawling tea plantations, learn about tea cultivation, and savor fresh brews with mountain views."
    },
    {
      icon: Home,
      title: "Plantation Stays",
      description: "Experience authentic plantation life with homestays offering local cuisine, culture, and warm hospitality."
    },
    {
      icon: Camera,
      title: "Wildlife Photography",
      description: "Capture stunning wildlife moments including elephants, gaurs, and rare bird species in their natural habitat."
    }
  ];

  return (
    <section id="adventures" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Adventure & <span className="text-primary">Nature Experiences</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Immerse yourself in thrilling adventures and peaceful nature retreats designed for every type of traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {adventures.map((adventure, index) => (
            <div
              key={adventure.title}
              className="bg-card p-6 md:p-8 rounded-lg shadow-md text-center border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <adventure.icon className="h-12 w-12 md:h-16 md:w-16 text-primary mx-auto mb-3 md:mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground">{adventure.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{adventure.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-secondary font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg"
          >
            Book Your Experience with HoneyBee Holidays
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Adventures;
