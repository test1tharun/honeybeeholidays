import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PackageCardProps {
  title: string;
  duration: string;
  image: string;
  highlights: string[];
  description: string;
  itinerary?: string[];
  includes?: string;
}

const PackageCard = ({ title, duration, image, highlights, description, itinerary, includes }: PackageCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2 mb-2">
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
          <Badge variant="secondary" className="whitespace-nowrap text-xs">{duration}</Badge>
        </div>
        <CardDescription className="text-xs md:text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 md:space-y-4 pb-3">
        <div className="space-y-2">
          <h4 className="font-semibold text-xs md:text-sm">Highlights:</h4>
          <ul className="text-xs md:text-sm text-muted-foreground space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {itinerary && itinerary.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-border">
            <h4 className="font-semibold text-xs md:text-sm">Itinerary:</h4>
            <div className="text-xs md:text-sm text-muted-foreground space-y-2">
              {itinerary.map((day, index) => (
                <p key={index} className="leading-relaxed">
                  <span className="font-medium text-foreground">{day.split(':')[0]}:</span>
                  {day.substring(day.indexOf(':') + 1)}
                </p>
              ))}
            </div>
          </div>
        )}
        
        {includes && (
          <div className="space-y-2 pt-2 border-t border-border">
            <h4 className="font-semibold text-xs md:text-sm">Includes:</h4>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{includes}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-3">
        <a
          href="https://wa.me/919894177771"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-9 md:h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-xs md:text-sm font-medium transition-colors"
        >
          Book Now
        </a>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
