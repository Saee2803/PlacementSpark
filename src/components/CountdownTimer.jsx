import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set next batch date (adjust as needed)
      const nextBatchDate = new Date("2026-06-22T10:00:00+05:30").getTime();
      const now = new Date().getTime();
      const difference = nextBatchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-b from-brand-red to-red-600 rounded-lg px-2 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-3 2xl:px-6 2xl:py-4 min-w-fit shadow-lg shadow-brand-red/50">
        <span className="text-lg md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs md:text-xs lg:text-sm 2xl:text-base font-semibold text-brand-red text-opacity-80 mt-1.5 lg:mt-2 2xl:mt-3 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  const Separator = () => (
    <div className="flex items-end pb-1 md:pb-1.5 lg:pb-2 2xl:pb-3">
      <span className="text-lg md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-brand-red">
        :
      </span>
    </div>
  );

  return (
    <div className="w-full">
      <p className="text-xs md:text-xs lg:text-sm 2xl:text-base font-bold text-brand-red text-opacity-80 uppercase tracking-wider mb-2 lg:mb-3 2xl:mb-4">
        Next Batch Starts In
      </p>
      <div className="flex items-end justify-start gap-1.5 md:gap-2 lg:gap-3 2xl:gap-4">
        <TimeUnit value={timeLeft.days} label="Days" />
        <Separator />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <Separator />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}
