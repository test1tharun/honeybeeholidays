import { Link } from "react-router-dom";
import PackageCard from "./PackageCard";
import athirapally from "@/assets/athirapally_falls.jpg";
import jungleStay from "@/assets/jungle_stay_cottage.jpg";
import teaEstates from "@/assets/valparai_tea_estates_tour.webp";

const TourPackagesPreview = () => {
  const featuredPackages = [
    {
      id: 1,
      title: "Athirapally & Valparai Bliss",
      duration: "2N / 3D",
      image: athirapally,
      description: "Experience the majesty of waterfalls and scenic hill drives",
      highlights: [
        "Athirapally & Valazhachal Falls",
        "Sholayar Dam Views",
        "Balaji Temple Visit",
        "Forest Safari"
      ]
    },
    {
      id: 5,
      title: "Jungle Stay Experience",
      duration: "1N / 2D",
      image: jungleStay,
      description: "Off-road jeep rides, wildlife spotting, and campfire nights",
      highlights: [
        "Forest Stay with Campfire",
        "Off-Road Jeep Adventures",
        "Bird Watching",
        "Kurangumudi Backwaters"
      ]
    },
    {
      id: 3,
      title: "Quick Hill Retreat",
      duration: "1N / 2D",
      image: teaEstates,
      description: "Perfect weekend escape for nature lovers",
      highlights: [
        "Aliyar Dam & Park",
        "Monkey Falls",
        "Koolangal River",
        "Scenic View Points"
      ]
    }
  ];

  return (
    <section id="packages" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🌿 Tour Packages
          </h2>
          <p className="text-lg text-muted-foreground italic mb-2">
            "Where journeys become memories and nature becomes home."
          </p>
          <p className="text-muted-foreground">
            Explore our handcrafted travel experiences designed to create magical moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              title={pkg.title}
              duration={pkg.duration}
              image={pkg.image}
              highlights={pkg.highlights}
              description={pkg.description}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/tour-packages"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-md text-lg font-medium transition-colors"
          >
            View All Packages 🌟
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TourPackagesPreview;
