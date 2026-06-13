import { useEffect, useState } from "react";

const activities = [
  "🔥 Aditya joined recently",
  "🔥 Priya booked a counselling session",
  "🔥 Rohit got selected at Reliance",
  "🔥 Sneha completed mock interviews",
  "🔥 Vikram cleared technical round",
  "🔥 Neha got 9 LPA offer",
];

export default function LiveActivityFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div 
      className="py-4 lg:py-6 2xl:py-8 bg-gradient-to-r from-brand-red/10 to-brand-blue/10 border-y border-brand-white border-opacity-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-custom">
        <div className="flex items-center justify-center gap-3 lg:gap-4">
          <span className="text-xs lg:text-sm 2xl:text-base font-semibold text-brand-red uppercase tracking-widest">
            Live
          </span>
          <div className="flex-1 overflow-hidden">
            <div className="transition-all duration-500">
              <p className="text-sm lg:text-base 2xl:text-lg text-brand-white font-medium whitespace-nowrap">
                {activities[currentIndex]}
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {activities.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-1.5 rounded-full transition-all ${
                  index === currentIndex ? "bg-brand-red w-4" : "bg-brand-white/30"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
