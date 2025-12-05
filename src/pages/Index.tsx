import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ValparaiDestinations from "@/components/ValparaiDestinations";
import CoimbatoreDestinations from "@/components/CoimbatoreDestinations";
import TourPackagesPreview from "@/components/TourPackagesPreview";
import Adventures from "@/components/Adventures";
import CultureFood from "@/components/CultureFood";
import TravelInfo from "@/components/TravelInfo";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageGallery from "@/components/ImageGallery";
import { roomImages, vehicleImages } from "@/lib/galleryImages";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ValparaiDestinations />
      <CoimbatoreDestinations />
      <TourPackagesPreview />
      <Adventures />
      <CultureFood />
      
      {/* Room Gallery Section */}
      <section className="py-8 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <ImageGallery 
            images={roomImages} 
            title="🏨 Our Accommodations" 
          />
        </div>
      </section>

      {/* Vehicle Gallery Section */}
      <section className="py-8 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <ImageGallery 
            images={vehicleImages} 
            title="🚗 Our Fleet" 
          />
        </div>
      </section>

      <TravelInfo />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
