import { MapPin, Calendar, Info, Train } from "lucide-react";

const TravelInfo = () => {
  const infoCards = [
    {
      icon: MapPin,
      title: "How to Reach",
      points: [
        "Nearest Airport: Coimbatore International (40km from Valparai)",
        "Nearest Railway: Coimbatore Junction (65km)",
        "Road: Well-connected by scenic mountain highways",
        "Local Transport: Taxis, buses available from Coimbatore"
      ]
    },
    {
      icon: Calendar,
      title: "Best Time to Visit",
      points: [
        "Ideal Season: October to March (pleasant weather)",
        "Monsoon: June to September (lush greenery, occasional landslides)",
        "Summer: April to May (warm, perfect for hill station escape)",
        "Wildlife Spotting: November to April"
      ]
    },
    {
      icon: Info,
      title: "Travel Tips",
      points: [
        "Carry warm clothing for early mornings and evenings",
        "Book accommodations in advance during peak season",
        "Respect wildlife - maintain safe distance",
        "Check road conditions before traveling in monsoon"
      ]
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-6 text-foreground">
            Plan Your <span className="text-primary">Journey</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Everything you need to know for a smooth and memorable trip to Valparai and Coimbatore.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {infoCards.map((card, index) => (
            <div
              key={card.title}
              className="bg-card p-4 md:p-8 rounded-lg shadow-md border border-border hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <card.icon className="h-8 w-8 md:h-12 md:w-12 text-primary mb-2 md:mb-4" />
              <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-4 text-foreground">{card.title}</h3>
              <ul className="space-y-1.5 md:space-y-3">
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-xs md:text-base">
                    <span className="text-primary mr-1.5 mt-0.5 flex-shrink-0">•</span>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelInfo;
