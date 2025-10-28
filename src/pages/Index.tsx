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
      <TravelInfo />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
