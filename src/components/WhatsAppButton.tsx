import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/7598010898", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-2 md:gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-3 py-2.5 md:px-5 md:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0" />
      <span className="text-xs md:text-sm font-semibold whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </button>
  );
};

export default WhatsAppButton;
