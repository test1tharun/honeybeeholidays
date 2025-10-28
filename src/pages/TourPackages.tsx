import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PackageCard from "@/components/PackageCard";
import athirapally from "@/assets/athirapally_falls.jpg";
import sholayar from "@/assets/sholayar_dam_tour.jpg";
import teaEstates from "@/assets/valparai_tea_estates_tour.webp";
import nallamudi from "@/assets/nallamudi_view_point_tour.jpg";
import jungleStay from "@/assets/jungle_stay_cottage.jpg";
import parambikulam from "@/assets/parambikulam_forest_lake.jpg";
import monkeyFalls from "@/assets/monkey_falls_tour.jpg";
import elephantSafari from "@/assets/topslip_elephant_safari.jpg";

const TourPackages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packages = [
    {
      id: 1,
      title: "Athirapally & Valparai Bliss",
      duration: "2N / 3D",
      image: athirapally,
      description: "Experience the majesty of waterfalls and scenic hill drives",
      highlights: [
        "Athirapally, Valazhachal & Charpa Falls",
        "Sholayar & Perigalkuthu Dam Views",
        "Balaji Temple & Velankanni Shrine",
        "Forest Safari & Wildlife Spotting"
      ],
      itinerary: [
        "Day 1: Chalakudy → Athirapally Falls, Valazhachal Falls, Charpa Falls, Perigalkuthu Dam View, Sholayar Dam → Overnight in Valparai",
        "Day 2: Valparai sightseeing (Balaji Temple, Annai Velankanni Shrine, Vellamalai Tunnel & Falls, Koolangal River, Nirar Dam, Nallamudi View Point) → Overnight stay",
        "Day 3: Top Slip & Parambikulam Safari (Karvermarz Statue, Hornbill View Point, Loams View Point, Monkey Falls, Aliyar Dam & Park) → Return to Pollachi"
      ]
    },
    {
      id: 2,
      title: "Pollachi – Valparai – Athirapally Escape",
      duration: "2N / 3D",
      image: sholayar,
      description: "Temple visits, hill drives, and spectacular waterfalls",
      highlights: [
        "Anaimalai & Massaniamman Temples",
        "Aliyar Dam & Park",
        "Sholayar & Vazhachal Falls",
        "Scenic View Points"
      ],
      itinerary: [
        "Day 1: Pollachi Arrival → Anaimalai Temple, Massaniamman Temple, Aliyar Dam, Monkey Falls, View Points → Overnight in Valparai",
        "Day 2: Sholayar Dam, Vazhachal Falls, Charpa Falls, Athirapally → Overnight stay",
        "Day 3: Balaji Temple, Vellamalai Tunnel & Falls, Nallamudi Viewpoint, Sholayar Dam → Drop at Pollachi"
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
        "Sholayar Dam"
      ],
      itinerary: [
        "Day 1: Pollachi → Aliyar Dam, Monkey Falls, View Points → Overnight in Valparai",
        "Day 2: Koolangal River, Balaji Temple, Nallamudi View Point, Sholayar Dam → Return to Pollachi"
      ]
    },
    {
      id: 4,
      title: "Valparai Hill Discovery",
      duration: "2N / 3D",
      image: nallamudi,
      description: "Explore tea estates, temples, rivers, and wildlife",
      highlights: [
        "Tea Estate Tours",
        "Tiger Valley & Waverly Photo Point",
        "Nirar Dam & Koolangal River",
        "Vellamalai Tunnel & Falls"
      ],
      itinerary: [
        "Day 1: Pollachi → Aliyar Dam, Thalanar View Point, Tiger Valley, Waverly Photo Point → Overnight in Valparai",
        "Day 2: Nirar Dam, Koolangal River, Balaji Temple, Vellamalai Tunnel & Falls → Overnight stay",
        "Day 3: Siddhi Vinayagar Temple, Kurangumudi View Point, Sholayar Dam → Drop at Pollachi"
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
      ],
      itinerary: [
        "Day 1: Pollachi Arrival → Aliyar Dam, Monkey Falls, Waverly View Point → Transfer to Jungle Stay → Campfire & Overnight Forest Stay",
        "Day 2: Bird Watching, Kurangumudi Backwaters, Koolangal River, Nallamudi View Point → Return to Pollachi"
      ]
    },
    {
      id: 6,
      title: "Wildlife & Hillstation Combo",
      duration: "2N / 3D",
      image: parambikulam,
      description: "Perfect blend of wildlife safari and hill station beauty",
      highlights: [
        "Top Slip Elephant Safari",
        "Parambikulam Jungle Safari",
        "Nirar Dam & Balaji Temple",
        "Koolangal River Experience"
      ],
      itinerary: [
        "Day 1: Pollachi arrival → Aliyar Dam, Monkey Falls, View Points → Overnight in Valparai",
        "Day 2: Balaji Temple, Nirar Dam, Koolangal River, Nallamudi View → Overnight stay",
        "Day 3: Top Slip, Elephant Safari, Parambikulam Jungle Safari → Return to Pollachi"
      ]
    },
    {
      id: 7,
      title: "Nature & Waterfall Retreat",
      duration: "2N / 3D",
      image: monkeyFalls,
      description: "Immerse yourself in nature's symphony of waterfalls and rivers",
      highlights: [
        "Athirapally Waterfalls Day Trip",
        "Monkey Falls & Aliyar Dam",
        "Koolangal River Exploration",
        "Nallamudi Viewpoint"
      ],
      itinerary: [
        "Day 1: Pollachi → Aliyar Dam, Monkey Falls, View Points → Overnight in Valparai",
        "Day 2: Athirapally Waterfalls Trip → Return & Overnight in Valparai",
        "Day 3: Koolangal River, Balaji Temple, Nallamudi View Point → Drop at Pollachi"
      ]
    }
  ];

  const oneDayTours = [
    {
      id: "day1",
      title: "Valparai Local Sightseeing",
      duration: "1 Day",
      image: sholayar,
      description: "Explore the best of Valparai in a single day",
      highlights: [
        "Balaji Temple",
        "Nirar Dam",
        "Koolangal River",
        "Nallamudi Viewpoint"
      ]
    },
    {
      id: "day2",
      title: "Athirapally Day Trip",
      duration: "1 Day",
      image: athirapally,
      description: "Witness the Niagara of India",
      highlights: [
        "Sholayar Dam",
        "Perigalkuthu Dam View",
        "Vazhachal Falls",
        "Charpa Falls"
      ]
    },
    {
      id: "day3",
      title: "Top Slip & Parambikulam Tour",
      duration: "1 Day",
      image: elephantSafari,
      description: "Wildlife adventure and forest drives",
      highlights: [
        "Jungle Safari",
        "Elephant Safari",
        "Wildlife Viewing",
        "Forest Drives"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              🌿 PACKAGES
            </h1>
            <p className="text-xl text-muted-foreground italic">
              "Where journeys become memories and nature becomes home."
            </p>
            <p className="text-lg">
              ✨ Explore Our Exclusive Travel Experiences
            </p>
            <p className="text-muted-foreground">
              Each package is paired with breathtaking imagery—carefully chosen to reflect the soul of the journey. 
              Click into any experience to reveal full details, day-by-day itineraries, and magical moments you'll cherish forever.
            </p>
          </div>
        </div>
      </section>

      {/* Main Packages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Multi-Day Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
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
        </div>
      </section>

      {/* One Day Tours */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">🚗 One-Day Special Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {oneDayTours.map((tour) => (
              <PackageCard
                key={tour.id}
                title={tour.title}
                duration={tour.duration}
                image={tour.image}
                highlights={tour.highlights}
                description={tour.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Footer Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-2xl font-serif italic text-foreground">
              "Every journey starts with a heartbeat. Let the mountains call you, 
              the waterfalls embrace you, and the forests whisper your story."
            </p>
            <div className="pt-4">
              <a
                href="https://wa.me/919894177771"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 rounded-md text-lg font-medium transition-colors"
              >
                Start Your Journey 🌟
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TourPackages;
