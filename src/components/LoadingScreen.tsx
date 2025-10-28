import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import honeyBeeAnimation from "@/assets/honey-bee-animation.json";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const interval = 20;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ backgroundColor: "#ff8600" }}
    >
      <div className="flex flex-col items-center gap-6 px-4">
        <div className="w-48 h-48 md:w-56 md:h-56">
          <Lottie 
            animationData={honeyBeeAnimation}
            loop={true}
          />
        </div>
        
        <div className="w-56 md:w-80 space-y-2">
          <div className="h-1.5 bg-black/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-black transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-black font-semibold text-sm">
            Loading your adventure...
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
