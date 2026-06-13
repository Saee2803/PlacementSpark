export default function About() {
  const aboutPoints = [
    {
      title: "Born from a Gap",
      description:
        "We noticed engineering students had the technical knowledge but lacked interview readiness, communication skills, and structured placement guidance.",
      icon: "💡",
    },
    {
      title: "Student-Driven",
      description:
        "Placement Spark is built by people who've been through the placement grind. Every module is designed with the student's real challenges in mind.",
      icon: "👥",
    },
    {
      title: "Structured & Scalable",
      description:
        "Starting with Chemical Engineering and expanding to all branches — our goal is to democratize placement preparation across every campus.",
      icon: "📈",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-24 lg:py-32 2xl:py-40 bg-brand-white"
    >
      <div className="container-custom">
        {/* About Us Badge */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 2xl:mb-14 px-4 sm:px-0">
          <div className="inline-flex items-center gap-2 bg-brand-red text-white px-4 sm:px-5 md:px-6 lg:px-8 2xl:px-10 py-1.5 sm:py-2 md:py-2.5 rounded-full text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl font-bold">
            About Us
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-center heading-section text-brand-red mb-4 sm:mb-6 md:mb-8 lg:mb-10 2xl:mb-12 px-2 sm:px-0">
          What is Placement Spark?
        </h2>

        {/* Subtitle */}
        <p className="text-center text-brand-black/70 max-w-2xl sm:max-w-3xl md:max-w-4xl 2xl:max-w-5xl mx-auto mb-10 sm:mb-14 md:mb-16 lg:mb-20 2xl:mb-24 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl leading-relaxed px-3 sm:px-0">
          A structured, student-focused placement preparation initiative that
          bridges the gap between classroom learning and corporate interview
          rooms.
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 2xl:gap-16 items-center mb-10 sm:mb-14 md:mb-16 lg:mb-20 2xl:mb-24 px-4 sm:px-0">
          {/* Left - Image */}
          <div className="relative rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl overflow-hidden order-2 md:order-1">
            <img
              src="/Interview_Success_rate.png"
              alt="Interview Success Rate"
              className="w-full h-auto object-cover rounded-xl sm:rounded-2xl md:rounded-2xl lg:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl"
            />
          </div>

          {/* Right - Content */}
          <div className="order-1 md:order-2">
            <p className="text-brand-black/80 mb-6 sm:mb-8 md:mb-10 lg:mb-12 2xl:mb-14 text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl leading-relaxed">
              Most engineering students step into placement season unsure of
              what to expect. They have the skills, but lack a roadmap.
              Placement Spark changes that — through mock interviews,
              Placement Mentorship, resume building, and mentorship, we
              prepare students to show up confident and ready.
            </p>

            {/* Feature Points */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 2xl:space-y-7">
              {aboutPoints.map((point, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 2xl:gap-8">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 bg-red-100 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
                    {point.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-0.5 sm:pt-1">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-bold text-brand-black mb-1.5 sm:mb-2 md:mb-3">
                      {point.title}
                    </h3>
                    <p className="text-brand-black/70 text-xs sm:text-sm md:text-sm lg:text-base 2xl:text-lg leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
