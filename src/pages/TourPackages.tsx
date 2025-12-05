import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PackageCard from "@/components/PackageCard";
import ImageGallery from "@/components/ImageGallery";
import { roomImages, vehicleImages } from "@/lib/galleryImages";
import athirapally from "@/assets/athirapally_falls.jpg";
import sholayar from "@/assets/sholayar_dam.jpg";
import teaEstates from "@/assets/tea_estate.webp";
import nallamudi from "@/assets/nallamudi_viewpoint.jpg";
import jungleStay from "@/assets/jungle_stay_cottage.jpg";
import parambikulam from "@/assets/parambikulam_forest_lake.jpg";
import monkeyFalls from "@/assets/monkey_falls.jpg";
import elephantSafari from "@/assets/topslip_elephant_safari.jpg";
import aliyarDam from "@/assets/aliyar_dam.jpg";
import balajiTemple from "@/assets/balaji_temple.jpg";
import grassHills from "@/assets/grass_hills.jpg";
import siruvaniFalls from "@/assets/siruvani_waterfalls.png";

const TourPackages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // VALPARAI PACKAGES
  const valparaiPackages = [
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
    },
    {
      id: "v2",
      title: "Complete Valparai Experience",
      duration: "2N / 3D",
      image: grassHills,
      description: "Route: Pollachi – Valparai – Pollachi",
      highlights: [
        "All major Valparai attractions",
        "Temple visits & scenic viewpoints",
        "Waterfalls & dam views",
        "Tea estate landscapes"
      ],
      itinerary: [
        "Day 1: Arrival Pollachi → sightseeing: Aliyar Dam & Park, Monkey Falls, Loams View Point, Hornbill View Point & Arpitorium, Tiger Valley, Waverly Photo Point, Thalanar View Point, Karvermarz Statue. Overnight stay in Valparai.",
        "Day 2: Valparai local sightseeing: Balaji Temple, Annai Velankanni Shrine, Vellamalai Tunnel & Falls, Nirar Dam & Tunnel, Koolangal River. Overnight stay in Valparai.",
        "Day 3: Valparai sightseeing: Siddhivinayakar Temple, Nallamudi View Point, Kurangumudi View Point & Falls, Sholayar Dam. Return to Pollachi."
      ]
    },
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
    }
  ];

  const valparaiOneDayTours = [
    {
      id: "v4",
      title: "Valparai Local Tour",
      duration: "1 Day",
      image: balajiTemple,
      description: "Complete local sightseeing experience",
      highlights: [
        "Balaji Temple, Velankanni Shrine",
        "Vellamalai Tunnel & Falls",
        "Nirar Dam, Koolangal River",
        "Nallamudi View Point, Sholayar Dam"
      ],
      itinerary: [
        "Sightseeing: Balaji Temple, Annai Velankanni Shrine, Vellamalai Tunnel & Falls, Nirar Dam, Koolangal River, Sidhi Vinayagar Temple, Nallamudi View Point, Sholayar Dam. Return to Valparai."
      ]
    },
    {
      id: "v5",
      title: "Valparai to Athirappilly Falls",
      duration: "1 Day",
      image: siruvaniFalls,
      description: "Waterfalls and dam view points",
      highlights: [
        "Sholayar Dam",
        "Pergalkuthu Dam View Point",
        "Vazhachal & Charpa Falls",
        "Athirappilly Falls"
      ],
      itinerary: [
        "Sightseeing: Sholayar Dam, Pergalkuthu Dam View Point, Vazhachal Falls, Charpa Water Falls, Athirappilly Falls. Return to Valparai."
      ]
    }
  ];

  // COIMBATORE / POLLACHI PACKAGES
  const pollachiiPackages = [
    {
      id: "p1",
      title: "Pollachi–Valparai–Parambikulam Explorer",
      duration: "2N / 3D",
      image: parambikulam,
      description: "Route: Pollachi – Valparai – Top Slip – Parambikulam – Athirappilly",
      highlights: [
        "Anaimalai & Massaniamman Temples",
        "Top Slip Van/Jungle Safari",
        "Athirappilly Falls circuit",
        "Complete hill station tour"
      ],
      itinerary: [
        "Day 1: Arrival Pollachi → sightseeing: Anaimalai, Massaniamman Temple, Top Slip (Van or Jungle Safari), Aliyar Dam & Park, Monkey Falls, Loams View Point, Hornbill View Point, Tiger Valley, Waverly Photo Point, Karvermarz Statue. Overnight stay in Valparai.",
        "Day 2: Valparai → Athirappilly route: Sholayar Dam, Pergalkuthu Dam View Point, Valazhachal Falls, Charpa Water Falls, Athirappilly Falls. Overnight stay in Valparai.",
        "Day 3: Valparai sightseeing: Balaji Temple, Annai Velankanni Shrine, Vellamalai Tunnel & Falls, Koolangal River, Sidhi Vinayagar Temple, Nallamudi View Point, Sholayar Dam. Return to Pollachi."
      ]
    },
    {
      id: "p2",
      title: "Pollachi–Top Slip–Valparai Nature Trail",
      duration: "2N / 3D",
      image: aliyarDam,
      description: "Route: Pollachi – Top Slip – Parambikulam – Valparai",
      highlights: [
        "Elephant & Jungle Safari",
        "Parambikulam Wildlife",
        "Complete Valparai sightseeing",
        "Temple & waterfall visits"
      ],
      itinerary: [
        "Day 1: Arrival Pollachi → sightseeing: Aliyar Dam & Park, Monkey Falls, Loams View Point, Hornbill View Point, Tiger Valley, Waverly Photo Point, Karvermarz Statue. Overnight stay in Valparai.",
        "Day 2: Valparai sightseeing: Balaji Temple, Annai Velankanni Shrine, Vellamalai Tunnel & Falls, Koolangal River, Sidhi Vinayagar Temple, Nallamudi View Point, Sholayar Dam. Return to Pollachi.",
        "Day 3: Valparai → Top Slip sightseeing: Anaimalai, Massaniamman Temple, Top Slip (Elephant or Jungle Safari), Parambikulam Safari. Return to Pollachi."
      ]
    }
  ];

  const pollachiiOneDayTours = [
    {
      id: "p3",
      title: "Top Slip & Parambikulam Safari",
      duration: "1 Day",
      image: elephantSafari,
      description: "Wildlife adventure package",
      highlights: [
        "Anaimalai & Massaniamman Temples",
        "Top Slip Elephant Safari",
        "Top Slip Jungle Safari",
        "Parambikulam 3-hour Safari"
      ],
      itinerary: [
        "Sightseeing: Anaimalai, Massaniamman Temple, Top Slip (Elephant or Jungle Safari), Parambikulam Jungle Safari (3 hours). Return to Pollachi."
      ]
    },
    {
      id: "p4",
      title: "Pollachi–Valparai Scenic Drive",
      duration: "1 Day",
      image: monkeyFalls,
      description: "City travel package with hill views",
      highlights: [
        "Aliyar Dam & Park",
        "Monkey Falls, View Points",
        "Tiger Valley, Waverly Point",
        "Overnight in Valparai option"
      ],
      itinerary: [
        "Route includes: Aliyar Dam & Park, Monkey Falls, Loams View Point, Hornbill View Point & Arpitorium, Tiger Valley, Waverly Photo Point, Thalanar View Point, Karvermarz Statue. Overnight stay in Valparai."
      ]
    }
  ];

  // KERALA / JUNGLE STAY PACKAGES
  const keralaPackages = [
    {
      id: "k1",
      title: "Kerala–Valparai–Parambikulam Explorer",
      duration: "2N / 3D",
      image: sholayar,
      description: "Route: Chalakudy – Athirappilly – Valparai – Parambikulam – Pollachi",
      highlights: [
        "Athirappilly Falls from Kerala side",
        "Complete Valparai experience",
        "Top Slip & Parambikulam Safari",
        "Cross-state scenic journey"
      ],
      itinerary: [
        "Day 1: Arrival Chalakudy → Athirappilly Falls sightseeing: Pergalkuthu Dam View Point, Valazhachal Falls, Charpa Water Falls, Sholayar Dam. Overnight stay in Valparai.",
        "Day 2: Valparai sightseeing: Balaji Temple, Annai Velankanni Shrine, Vellamalai Tunnel & Falls, Nirar Dam, Koolangal River, Sidhi Vinayagar Temple, Nallamudi View Point. Overnight stay in Valparai.",
        "Day 3: Valparai → Top Slip & Parambikulam sightseeing: Karvermarz Statue, Waverly Photo Point, Tiger Valley, Hornbill View Point, Loams View Point, Monkey Falls, Aliyar Dam & Park, Massaniamman Temple, Safari options. Return to Pollachi."
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
    }
  ];


  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-8 md:pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-3 md:space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              🌿 TOUR PACKAGES
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground italic">
              "Where journeys become memories and nature becomes home."
            </p>
            <p className="text-base md:text-lg">
              ✨ Explore Our Exclusive Travel Experiences
            </p>
          </div>
        </div>
      </section>

      {/* VALPARAI PACKAGES */}
      <section className="py-8 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">🌿 Valparai Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
            {valparaiPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                title={pkg.title}
                duration={pkg.duration}
                image={pkg.image}
                highlights={pkg.highlights}
                description={pkg.description}
                itinerary={pkg.itinerary}
              />
            ))}
          </div>

          {/* Valparai One Day Tours */}
          <div className="pt-6 md:pt-8 border-t border-border">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">One-Day Tours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {valparaiOneDayTours.map((tour) => (
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
        </div>
      </section>

      {/* COIMBATORE / POLLACHI PACKAGES */}
      <section className="py-8 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">🏞️ Coimbatore / Pollachi Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
            {pollachiiPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                title={pkg.title}
                duration={pkg.duration}
                image={pkg.image}
                highlights={pkg.highlights}
                description={pkg.description}
                itinerary={pkg.itinerary}
              />
            ))}
          </div>

          {/* Pollachi One Day Tours */}
          <div className="pt-6 md:pt-8 border-t border-border">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">One-Day Tours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {pollachiiOneDayTours.map((tour) => (
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
        </div>
      </section>

      {/* KERALA / JUNGLE STAY PACKAGES */}
      <section className="py-8 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">🌴 Other / Kerala / Jungle Stay Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {keralaPackages.map((pkg) => (
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
        </div>
      </section>

      {/* Room Gallery Section */}
      <section className="py-8 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <ImageGallery
            images={roomImages}
            title="🏨 Our Accommodations"
          />
        </div>
      </section>

      {/* Vehicle Gallery Section */}
      <section className="py-8 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <ImageGallery
            images={vehicleImages}
            title="🚗 Our Fleet"
          />
        </div>
      </section>

      {/* Emotional Footer Section */}
      <section className="py-10 md:py-16 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
            <p className="text-lg md:text-2xl font-serif italic text-foreground px-4">
              "Every journey starts with a heartbeat. Let the mountains call you,
              the waterfalls embrace you, and the forests whisper your story."
            </p>
            <div className="pt-2 md:pt-4">
              <a
                href="https://wa.me/919894177771"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-10 md:h-12 px-6 md:px-8 rounded-md text-base md:text-lg font-medium transition-colors"
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
