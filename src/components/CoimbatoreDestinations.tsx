import DestinationCard from "./DestinationCard";
import maruthamalaiTemple from "@/assets/maruthamalai_temple.jpg";
import velliangiriHills from "@/assets/velliangiri_hills.jpg";
import siruvaniWaterfalls from "@/assets/siruvani_waterfalls.png";
import kovaiKondattam from "@/assets/kovai_kondattam.webp";
import blackThunder from "@/assets/blackthunder_coimbatore.avif";
import gassForestMuseum from "@/assets/gass_forest_museum.jpg";

const CoimbatoreDestinations = () => {
  const destinations = [
    {
      image: maruthamalaiTemple,
      title: "Marudhamalai Temple",
      description: "An ancient hilltop temple dedicated to Lord Murugan, featuring stunning Dravidian architecture and spiritual ambiance."
    },
    {
      image: velliangiriHills,
      title: "Velliangiri Hills",
      description: "The 'Kailash of the South' - a sacred mountain range offering challenging treks and spiritual experiences."
    },
    {
      image: siruvaniWaterfalls,
      title: "Siruvani Waterfalls",
      description: "Home to some of the world's sweetest water, this waterfall is surrounded by dense forests and natural beauty."
    },
    {
      image: kovaiKondattam,
      title: "Kovai Kondattam",
      description: "A fun-filled amusement and water park perfect for families seeking entertainment and refreshing water activities."
    },
    {
      image: blackThunder,
      title: "Black Thunder",
      description: "One of India's largest water theme parks, offering thrilling rides and attractions for all ages."
    },
    {
      image: gassForestMuseum,
      title: "Gass Forest Museum",
      description: "A fascinating museum showcasing the region's rich forestry heritage, wildlife specimens, and natural history."
    }
  ];

  return (
    <section className="py-8 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-6 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-6 text-foreground">
            Explore <span className="text-primary">Coimbatore</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            The Manchester of South India offers a perfect blend of spirituality, nature, adventure, and modern entertainment.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {destinations.map((dest, index) => (
            <DestinationCard
              key={dest.title}
              {...dest}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoimbatoreDestinations;
