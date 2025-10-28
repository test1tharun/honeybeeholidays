import tamilCuisine from "@/assets/tamil_cuisine.webp";

const CultureFood = () => {
  return (
    <section className="py-8 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 text-foreground">
                Local Culture & <span className="text-primary">Traditional Food</span>
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground mb-3 md:mb-6 leading-relaxed">
                Experience the rich cultural tapestry of Tamil Nadu through its vibrant traditions, warm hospitality, and mouthwatering cuisine.
              </p>
              <div className="space-y-2.5 md:space-y-4">
                <div className="border-l-4 border-primary pl-2.5 md:pl-4">
                  <h3 className="text-base md:text-xl font-semibold mb-0.5 md:mb-2 text-foreground">Authentic Tamil Cuisine</h3>
                  <p className="text-xs md:text-base text-muted-foreground">
                    Savor traditional dishes like dosai, idli, sambar, and aromatic biryanis prepared with locally sourced ingredients and age-old recipes.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-2.5 md:pl-4">
                  <h3 className="text-base md:text-xl font-semibold mb-0.5 md:mb-2 text-foreground">Plantation Life</h3>
                  <p className="text-xs md:text-base text-muted-foreground">
                    Discover the unique lifestyle of tea and coffee plantation workers, their traditions, and their deep connection with the land.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-2.5 md:pl-4">
                  <h3 className="text-base md:text-xl font-semibold mb-0.5 md:mb-2 text-foreground">Regional Festivities</h3>
                  <p className="text-xs md:text-base text-muted-foreground">
                    Witness colorful festivals, traditional dance forms, and spiritual celebrations that reflect the region's cultural heritage.
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="rounded-lg overflow-hidden shadow-2xl border border-border">
                <img
                  src={tamilCuisine}
                  alt="Traditional Tamil Cuisine"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureFood;
