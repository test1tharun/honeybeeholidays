import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/header-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={scrollToTop} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="HoneyBee Holidays" className="h-10 md:h-12" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={scrollToTop} className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("destinations")} className="text-foreground hover:text-primary transition-colors font-medium">
              Destinations
            </button>
            <button onClick={() => navigate("/tour-packages")} className="text-foreground hover:text-primary transition-colors font-medium">
              Tour Packages
            </button>
            <button onClick={() => scrollToSection("adventures")} className="text-foreground hover:text-primary transition-colors font-medium">
              Adventures
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button onClick={scrollToTop} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("destinations")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium">
              Destinations
            </button>
            <button onClick={() => navigate("/tour-packages")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium">
              Tour Packages
            </button>
            <button onClick={() => scrollToSection("adventures")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium">
              Adventures
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
