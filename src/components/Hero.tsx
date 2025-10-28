import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 animate-fade-in-up leading-tight">
          Experience Nature. Live the Journey.
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/90 mb-4 md:mb-8 max-w-2xl animate-fade-in px-4" style={{ animationDelay: "0.2s" }}>
          Discover the breathtaking beauty of Valparai and Coimbatore with local expertise
        </p>
        <Button
          onClick={scrollToAbout}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-secondary font-semibold px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-lg animate-scale-in"
          style={{ animationDelay: "0.4s" }}
        >
          Plan Your Trip
          <ArrowDown className="ml-1.5 h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 md:h-8 md:w-8 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
