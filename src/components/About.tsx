import { MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            About <span className="text-primary">HoneyBee Holidays</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
            Welcome to HoneyBee Holidays, your gateway to exploring the stunning natural beauty and rich cultural heritage of Valparai and Coimbatore. Founded and managed by <span className="font-semibold text-foreground">Hendrey Jose</span>, a passionate local travel guide with deep roots in the region, we specialize in creating unforgettable experiences that connect you with nature.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Whether you're seeking adventure in the Western Ghats, tranquility in tea estates, or spiritual journeys to ancient temples, HoneyBee Holidays offers personalized tours that showcase the best of Tamil Nadu's hill country and plains.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 max-w-5xl mx-auto">
          <div className="bg-card p-4 md:p-6 rounded-lg shadow-md text-center border border-border hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <MapPin className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">Local Expertise</h3>
            <p className="text-sm md:text-base text-muted-foreground">Native knowledge of hidden gems and authentic experiences</p>
          </div>
          <div className="bg-card p-4 md:p-6 rounded-lg shadow-md text-center border border-border hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Phone className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">Personal Service</h3>
            <p className="text-sm md:text-base text-muted-foreground">Customized itineraries tailored to your interests</p>
          </div>
          <div className="bg-card p-4 md:p-6 rounded-lg shadow-md text-center border border-border hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Mail className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground">Eco-Friendly</h3>
            <p className="text-sm md:text-base text-muted-foreground">Sustainable tourism supporting local communities</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center text-foreground">Our Location - Valparai</h3>
          <div className="rounded-lg overflow-hidden shadow-xl border border-border">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15700.744041362506!2d76.9450754934548!3d10.32699414625785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8279db1aa1b0f%3A0x86bc2b6e18667469!2sValparai%2C%20Tamil%20Nadu%20642127!5e0!3m2!1sen!2sin!4v1760009774929!5m2!1sen!2sin" 
              width="100%" 
              height="300"
              className="md:h-[450px]"
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Valparai Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
