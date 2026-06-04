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
      className="py-20 md:py-32 lg:py-40 2xl:py-48 bg-brand-white"
    >
      <div className="container-custom">
        {/* About Us Badge */}
        <div className="flex justify-center mb-8 lg:mb-10 2xl:mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-red text-white px-6 py-2 rounded-full text-sm lg:text-base 2xl:text-lg font-bold">
            About Us
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-center heading-section text-brand-red mb-8 lg:mb-10 2xl:mb-12">
          What is Placement Spark?
        </h2>

        {/* Subtitle */}
        <p className="text-center text-brand-black text-opacity-70 max-w-3xl lg:max-w-4xl 2xl:max-w-5xl mx-auto mb-16 lg:mb-20 2xl:mb-24 text-base lg:text-lg 2xl:text-xl">
          A structured, student-focused placement preparation initiative that
          bridges the gap between classroom learning and corporate interview
          rooms.
        </p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 2xl:gap-16 items-center mb-16 lg:mb-20 2xl:mb-24">
          {/* Left - Image */}
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
            <img
              src="/Interview_Success_rate.png"
              alt="Interview Success Rate"
              className="w-full h-auto object-cover rounded-2xl lg:rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right - Content */}
          <div>
            <p className="text-brand-black text-opacity-80 mb-8 lg:mb-10 2xl:mb-12 text-base lg:text-lg 2xl:text-xl leading-relaxed">
              Most engineering students step into placement season unsure of
              what to expect. They have the skills, but lack a roadmap.
              Placement Spark changes that — through mock interviews,
              communication training, resume building, and mentorship, we
              prepare students to show up confident and ready.
            </p>

            {/* Feature Points */}
            <div className="space-y-4 lg:space-y-5 2xl:space-y-6">
              {aboutPoints.map((point, idx) => (
                <div key={idx} className="flex gap-4 lg:gap-5 2xl:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 2xl:w-16 2xl:h-16 bg-red-100 rounded-full flex items-center justify-center text-2xl lg:text-3xl 2xl:text-4xl">
                    {point.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg lg:text-xl 2xl:text-2xl font-bold text-brand-black mb-2 lg:mb-3">
                      {point.title}
                    </h3>
                    <p className="text-brand-black text-opacity-70 text-sm lg:text-base 2xl:text-lg leading-relaxed">
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
