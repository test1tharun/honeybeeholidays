import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/7598010898", "_blank");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl animate-scale-in"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-8 w-8 text-white" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-secondary text-secondary-foreground">
          <p className="font-medium">Chat with Hendrey Jose</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default WhatsAppButton;
