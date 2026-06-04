export default function CompanyJourneyTimeline() {
  const timeline = [
    {
      year: "2024",
      title: "PlacementSpark Started",
      description: "Launched with a mission to bridge the gap between college and corporate world",
    },
    {
      year: "2025",
      title: "First Success Stories",
      description: "27+ students landed their dream placements at top companies",
    },
    {
      year: "2026",
      title: "120+ Students Mentored",
      description: "Expanded reach and impact across India with proven methodologies",
    },
    {
      year: "2027",
      title: "500+ Students Goal",
      description: "Aiming to transform the placement journey for 500+ engineering students",
    },
  ];

  return (
    <section className="py-20 md:py-32 lg:py-40 2xl:py-48 bg-brand-black">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 2xl:mb-28 animate-in">
          <h2 className="heading-section mb-4 lg:mb-6 2xl:mb-8">
            Our Journey
          </h2>
          <p className="text-base lg:text-lg 2xl:text-xl text-brand-white text-opacity-70 max-w-2xl mx-auto">
            From vision to impact: How PlacementSpark is transforming student careers
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-blue to-brand-yellow transform -translate-y-1/2"></div>

            {/* Timeline Items */}
            <div className="grid grid-cols-4 gap-6 lg:gap-8 relative z-10">
              {timeline.map((item, index) => (
                <div key={index} className="group">
                  {/* Timeline Dot */}
                  <div className="flex justify-center mb-8">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10 bg-brand-card border-4 border-brand-blue rounded-full shadow-lg shadow-brand-blue/50 group-hover:scale-125 transition-transform"></div>
                  </div>

                  {/* Card */}
                  <div className="feature-card bg-brand-card border-2 border-brand-white border-opacity-10 group-hover:border-brand-blue group-hover:border-opacity-50 rounded-2xl p-6 lg:p-8 2xl:p-10 h-full transition-all">
                    <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-brand-blue mb-3 lg:mb-4 2xl:mb-5 group-hover:text-brand-yellow transition-colors">
                      {item.year}
                    </h3>
                    <h4 className="text-lg lg:text-xl 2xl:text-2xl font-bold text-brand-white mb-3 lg:mb-4 2xl:mb-5">
                      {item.title}
                    </h4>
                    <p className="text-sm lg:text-base 2xl:text-lg text-brand-white text-opacity-70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-6 lg:space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-4 lg:gap-6">
              {/* Timeline Dot */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 lg:w-6 lg:h-6 bg-brand-blue rounded-full shadow-lg shadow-brand-blue/50"></div>
                {index < timeline.length - 1 && (
                  <div className="w-1 h-16 lg:h-20 bg-gradient-to-b from-brand-blue to-brand-red mt-2"></div>
                )}
              </div>

              {/* Card */}
              <div className="feature-card bg-brand-card border-2 border-brand-white border-opacity-10 rounded-xl lg:rounded-2xl p-4 lg:p-6 2xl:p-8 flex-1">
                <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-brand-blue mb-2 lg:mb-3">
                  {item.year}
                </h3>
                <h4 className="text-lg lg:text-xl 2xl:text-2xl font-bold text-brand-white mb-2 lg:mb-3">
                  {item.title}
                </h4>
                <p className="text-xs lg:text-sm 2xl:text-base text-brand-white text-opacity-70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
