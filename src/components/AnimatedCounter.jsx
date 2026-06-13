import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

/**
 * AnimatedCounter Component
 * Animates number counting with ease-out effect when element comes into view
 */
export default function AnimatedCounter({ 
  value = 100, 
  duration = 2000,
  prefix = "",
  suffix = "",
  label = ""
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const countStartRef = useRef(false);

  useEffect(() => {
    if (!inView || countStartRef.current) return;

    countStartRef.current = true;
    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out function for smooth animation
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (value - startValue) * easeProgress);

      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCount);
  }, [inView, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-brand-white mb-3 lg:mb-4 2xl:mb-5 tabular-nums">
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </div>
      {label && (
        <p className="text-sm md:text-base lg:text-lg 2xl:text-xl text-brand-white font-medium">
          {label}
        </p>
      )}
    </div>
  );
}
