import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PackageCardProps {
  title: string;
  duration: string;
  image: string;
  highlights: string[];
  description: string;
}

const PackageCard = ({ title, duration, image, highlights, description }: PackageCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant="secondary">{duration}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Highlights:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <a
          href="https://wa.me/919894177771"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors"
        >
          Book Now
        </a>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
