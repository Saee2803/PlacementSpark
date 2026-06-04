import { useEffect, useState, useRef } from "react";
import { FaUsers, FaTrophy, FaChartLine, FaRupeeSign } from "react-icons/fa";

const AnimatedCounter = ({ targetValue, label, icon, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let currentCount = 0;
    const increment = targetValue / 30;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return (
    <div
      ref={ref}
      className="feature-card bg-gradient-to-br from-brand-card to-brand-card hover:shadow-2xl hover:-translate-y-2 p-6 lg:p-8 2xl:p-10 border-2 border-brand-white border-opacity-10 rounded-2xl"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-3xl lg:text-4xl 2xl:text-5xl text-brand-blue">
          {icon}
        </div>
        <div className="text-4xl lg:text-5xl 2xl:text-6xl font-bold text-brand-yellow">
          {count}
          {suffix}
        </div>
      </div>
      <p className="text-sm lg:text-base 2xl:text-lg text-brand-white text-opacity-80 font-semibold">
        {label}
      </p>
    </div>
  );
};

export default function ProfessionalStats() {
  return (
    <section className="py-20 md:py-32 lg:py-40 2xl:py-48 bg-brand-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 2xl:mb-28 animate-in">
          <h2 className="heading-section mb-4 lg:mb-6 2xl:mb-8">
            Our Impact
          </h2>
          <p className="text-base lg:text-lg 2xl:text-xl text-brand-white text-opacity-70 max-w-3xl mx-auto">
            Proven results from our mentorship and structured preparation program
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 2xl:gap-10">
          <AnimatedCounter
            targetValue={120}
            label="Students Mentored"
            icon={<FaUsers />}
            suffix="+"
          />
          <AnimatedCounter
            targetValue={27}
            label="Success Stories"
            icon={<FaTrophy />}
            suffix="+"
          />
          <AnimatedCounter
            targetValue={95}
            label="Interview Clearance Rate"
            icon={<FaChartLine />}
            suffix="%"
          />
          <AnimatedCounter
            targetValue={15}
            label="Highest Package"
            icon={<FaRupeeSign />}
            suffix=" LPA"
          />
        </div>
      </div>
    </section>
  );
}
