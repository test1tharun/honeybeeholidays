interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

const DestinationCard = ({ image, title, description, delay = 0 }: DestinationCardProps) => {
  return (
    <div 
      className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden h-48 md:h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-foreground group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
