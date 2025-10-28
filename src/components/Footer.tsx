import { Smartphone } from "lucide-react";
import logo from "@/assets/honeybee-logo.png";
import gpayQr from "@/assets/gpay-qr-new.jpeg";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/7598010898", "_blank");
  };

  const openGPay = () => {
    window.open("upi://pay?pa=hendreyjose-1@oksbi&pn=Hendrey Jose&cu=INR", "_blank");
  };

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-6 md:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-8 mb-5 md:mb-8">
            <div className="text-center md:text-left">
              <img src={logo} alt="HoneyBee Holidays" className="h-10 md:h-14 mx-auto md:mx-0 mb-3" />
              <p className="text-xs md:text-base text-secondary-foreground/80">
                Experience nature. Live the journey.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-4 text-secondary-foreground">Quick Links</h3>
              <ul className="space-y-1.5">
                <li>
                  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm md:text-base text-secondary-foreground/80 hover:text-primary transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm md:text-base text-secondary-foreground/80 hover:text-primary transition-colors">
                    Destinations
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('adventures')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm md:text-base text-secondary-foreground/80 hover:text-primary transition-colors">
                    Adventures
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm md:text-base text-secondary-foreground/80 hover:text-primary transition-colors">
                    About Us
                  </button>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-4 text-secondary-foreground">Contact Us</h3>
              <div className="space-y-1.5 md:space-y-3">
                <a href="tel:+917598010898" className="flex items-center justify-center md:justify-end text-sm md:text-base text-secondary-foreground/80 hover:text-primary transition-colors">
                  <Smartphone className="h-4 w-4 md:h-5 md:w-5 mr-2 flex-shrink-0" />
                  <span>+91 75980 10898</span>
                </a>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-4 text-secondary-foreground">Pay with UPI</h3>
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <img 
                    src={gpayQr} 
                    alt="Scan to pay Hendrey Jose via UPI" 
                    className="w-32 h-32 md:w-48 md:h-48 object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs md:text-base text-secondary-foreground/90 font-medium">
                  hendreyjose-1@oksbi
                </p>
                <Button
                  onClick={openGPay}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  <Smartphone className="h-4 w-4 mr-2" />
                  Pay Now
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-4 md:pt-8 text-center">
            <p className="text-xs text-secondary-foreground/70 mb-1.5">
              © {new Date().getFullYear()} HoneyBee Holidays. All rights reserved.
            </p>
            <p className="text-xs md:text-base text-secondary-foreground/90 font-medium">
              Chat with <span className="text-primary">Hendrey Jose</span> on WhatsApp to plan your trip!
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
