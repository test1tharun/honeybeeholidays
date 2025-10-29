import { Link } from "react-router-dom";
import PackageCard from "./PackageCard";
import athirapally from "@/assets/athirapally_falls.jpg";
import jungleStay from "@/assets/jungle_stay_cottage.jpg";
import teaEstates from "@/assets/tea_estate.webp";

const TourPackagesPreview = () => {
  const featuredPackages = [
    {
      id: "v3",
      title: "Valparai–Athirappilly Waterfalls Circuit",
      duration: "2N / 3D",
      image: athirapally,
      description: "Route: Pollachi – Valparai – Athirappilly",
      highlights: [
        "Athirappilly & Valazhachal Falls",
        "Sholayar & Pergalkuthu Dams",
        "Charpa Waterfalls",
        "Hill station sightseeing"
      ],
      itinerary: [
        "Day 1: Arrival Pollachi → sightseeing: Aliyar Dam & Park, Monkey Falls, Loams View Point, Hornbill View Point, Tiger Valley, Waverly Photo Point, Karvermarz Statue. Overnight stay in Valparai.",
        "Day 2: Valparai → Athirappilly Falls route: Sholayar Dam, Pergalkuthu Dam View Point, Valazhachal Falls, Charpa Water Falls, Athirappilly Falls. Overnight stay in Valparai.",
        "Day 3: Valparai sightseeing: Balaji Temple, Annai Velankanni Shrine, Vellamalai Tunnel & Falls, Koolangal River, Sidhi Vinayagar Temple, Nallamudi View Point. Return to Pollachi."
      ]
    },
    {
      id: "k2",
      title: "Valparai Jungle Stay Experience",
      duration: "1N / 2D",
      image: jungleStay,
      description: "Deep forest stay surrounded by nature — includes meals, wildlife watching, and adventure",
      highlights: [
        "Forest Stay with all meals included",
        "Off-road Jeep Ride & Bird Watching",
        "Campfire & Music, Day Safari",
        "Kurangumudi Backwater visit"
      ],
      itinerary: [
        "Day 1: Arrival Pollachi → sightseeing: Aliyar Dam & Park, Monkey Falls, Loams View Point, Hornbill View Point, Tiger Valley, Waverly Photo Point, Karvermarz Statue. Overnight stay in Valparai.",
        "Day 2: Jungle stay sightseeing: Kurangumudi Backwater, Koolangal River, Nallamudi View Point. Return to Pollachi."
      ],
      includes: "Welcome drink, breakfast, lunch, dinner, tea/coffee. Activities: Off-road Jeep Ride, Pickup & Drop, Bird Watching, Waterfalls visit, Campfire & Music, Day Safari."
    },
    {
      id: "v1",
      title: "Valparai Getaway",
      duration: "1N / 2D",
      image: teaEstates,
      description: "Route: Pollachi – Valparai",
      highlights: [
        "Aliyar Dam & Park, Monkey Falls",
        "Loams & Hornbill View Points",
        "Tiger Valley, Waverly Photo Point",
        "Balaji Temple, Sholayar Dam"
      ],
      itinerary: [
        "Day 1: Arrival Pollachi → sightseeing: Aliyar Dam & Park, Monkey Falls, Loams View Point, Hornbill View Point, Tiger Valley, Waverly Photo Point, Karvermarz Statue. Overnight stay in Valparai.",
        "Day 2: Valparai sightseeing: Balaji Temple, Annai Velankanni Shrine, Vellamalai Tunnel & Falls, Koolangal River, Sidhi Vinayagar Temple, Nallamudi View Point, Sholayar Dam. Return to Pollachi."
      ]
    }
  ];

  return (
    <section id="packages" className="py-8 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
            🌿 Tour Packages
          </h2>
          <p className="text-base md:text-lg text-muted-foreground italic mb-1.5 md:mb-2">
            "Where journeys become memories and nature becomes home."
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            Explore our handcrafted travel experiences designed to create magical moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-6 md:mb-12">
          {featuredPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              title={pkg.title}
              duration={pkg.duration}
              image={pkg.image}
              highlights={pkg.highlights}
              description={pkg.description}
              itinerary={pkg.itinerary}
              includes={pkg.includes}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/tour-packages"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-10 md:h-12 px-6 md:px-8 rounded-md text-base md:text-lg font-medium transition-colors"
          >
            View All Packages 🌟
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TourPackagesPreview;
