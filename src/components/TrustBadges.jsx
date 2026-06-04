import { FaCheck } from "react-icons/fa";

export default function TrustBadges() {
  const badges = [
    {
      icon: "✓",
      text: "Live Interactive Sessions",
      color: "text-brand-blue",
    },
    {
      icon: "✓",
      text: "Industry Mentors",
      color: "text-brand-yellow",
    },
    {
      icon: "✓",
      text: "Mock Interviews",
      color: "text-brand-red",
    },
    {
      icon: "✓",
      text: "Lifetime Access",
      color: "text-brand-green",
    },
    {
      icon: "✓",
      text: "Placement Roadmap",
      color: "text-brand-blue",
    },
  ];

  return (
    <div className="mt-16 lg:mt-20 2xl:mt-24 pt-12 lg:pt-16 2xl:pt-20 border-t border-brand-white border-opacity-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 2xl:gap-8">
        {badges.map((badge, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center gap-3 lg:gap-4 p-4 lg:p-6 2xl:p-8 rounded-xl border border-brand-white border-opacity-10 bg-brand-white bg-opacity-[0.02] hover:bg-opacity-[0.05] hover:border-opacity-20 transition-all duration-300 group cursor-pointer"
          >
            <div className={`text-2xl lg:text-3xl 2xl:text-4xl font-bold ${badge.color} group-hover:scale-110 transition-transform duration-300`}>
              {badge.icon}
            </div>
            <p className="text-xs md:text-sm lg:text-base 2xl:text-lg font-semibold text-brand-white text-center text-opacity-90">
              {badge.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
