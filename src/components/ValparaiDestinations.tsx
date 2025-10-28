import DestinationCard from "./DestinationCard";
import nallamudiViewpoint from "@/assets/nallamudi_viewpoint.jpg";
import sholayarDam from "@/assets/sholayar_dam.jpg";
import aliyarDam from "@/assets/aliyar_dam.jpg";
import monkeyFalls from "@/assets/monkey_falls.jpg";
import balajiTemple from "@/assets/balaji_temple.jpg";
import grassHills from "@/assets/grass_hills.jpg";
import chinnakallarFalls from "@/assets/chinnakallar_falls.jpg";
import teaEstate from "@/assets/tea_estate.webp";

const ValparaiDestinations = () => {
  const destinations = [
    {
      image: nallamudiViewpoint,
      title: "Nallamudi Viewpoint",
      description: "Experience breathtaking panoramic views of the Western Ghats and lush tea plantations from this spectacular vantage point."
    },
    {
      image: sholayarDam,
      title: "Sholayar Dam",
      description: "Marvel at one of Asia's highest dams, surrounded by pristine forests and offering stunning views of cascading waters."
    },
    {
      image: aliyarDam,
      title: "Aliyar Dam",
      description: "A serene reservoir nestled in the hills, perfect for boating and enjoying the tranquil mountain atmosphere."
    },
    {
      image: monkeyFalls,
      title: "Monkey Falls",
      description: "A picturesque waterfall cascading over rocky terrain, a favorite spot for nature lovers and photographers."
    },
    {
      image: balajiTemple,
      title: "Balaji Temple",
      description: "A beautiful hilltop temple offering spiritual solace and magnificent views of the surrounding valleys."
    },
    {
      image: grassHills,
      title: "Grass Hills",
      description: "Rolling green meadows dotted with grazing wildlife, offering peaceful walks through pristine mountain grasslands."
    },
    {
      image: chinnakallarFalls,
      title: "Chinnakallar Falls",
      description: "A hidden gem waterfall flowing through dense forest, perfect for those seeking off-the-beaten-path adventures."
    },
    {
      image: teaEstate,
      title: "Tea Estates",
      description: "Explore vast tea plantations, learn about tea processing, and enjoy fresh brews amidst scenic mountain slopes."
    }
  ];

  return (
    <section id="destinations" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Top Attractions in <span className="text-primary">Valparai</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Discover the pristine beauty of Valparai, a hill station blessed with tea estates, waterfalls, wildlife, and breathtaking mountain vistas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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

export default ValparaiDestinations;
