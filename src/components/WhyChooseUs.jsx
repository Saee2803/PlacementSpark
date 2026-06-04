import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function WhyChooseUs() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const problems = [
    {
      title: "No idea where to start placement prep",
      solution:
        "We provide a structured 6-module curriculum that covers everything from resume writing to mock interviews. No confusion, just a clear path to success.",
    },
    {
      title: "Freezing during interviews despite knowing answers",
      solution:
        "Our mock interview sessions simulate real corporate environments. You'll practice until you can answer confidently under pressure.",
    },
    {
      title: "Weak communication skills",
      solution:
        "Through our PREP & STAR frameworks and daily practice, you'll master communication strategies that impress recruiters.",
    },
    {
      title: "Resume ignored by recruiters",
      solution:
        "Our resume workshop ensures your resume gets past ATS systems and into recruiter hands. We review and refine every detail.",
    },
    {
      title: "No mentor to guide",
      solution:
        "You'll have access to mentors who have been through corporate interviews and can guide you based on real experience.",
    },
    {
      title: "Group discussions feel intimidating",
      solution:
        "With structured GD practice and feedback from experts, you'll turn GDs from scary to your competitive advantage.",
    },
  ];

  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "95%", label: "Placement Success Rate" },
    { value: "6", label: "Core Modules" },
  ];

  return (
    <section
      id="whychooseus"
      className="py-20 md:py-32 bg-brand-black relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-in">
          <h2 className="heading-section mb-4">
            We Solve Real Student Problems
          </h2>
          <p className="text-lg text-brand-white text-opacity-70">
            Tailored solutions for every placement challenge you face
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 md:gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stats-card text-center animate-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-brand-white text-opacity-70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Problems & Solutions Accordion */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6">Common Challenges</h3>
            {problems.slice(0, 3).map((problem, index) => (
              <div
                key={index}
                className="feature-card cursor-pointer animate-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() =>
                    setOpenAccordion(openAccordion === index ? -1 : index)
                  }
                  className="w-full flex items-start justify-between"
                >
                  <h4 className="text-lg font-bold text-left">
                    {problem.title}
                  </h4>
                  <FaChevronDown
                    className={`flex-shrink-0 text-brand-red transition-transform duration-300 mt-1 ${
                      openAccordion === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openAccordion === index && (
                  <p className="mt-4 text-brand-white text-opacity-70 animate-slide-up">
                    {problem.solution}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 invisible md:visible">
              Space
            </h3>
            {problems.slice(3).map((problem, index) => (
              <div
                key={index + 3}
                className="feature-card cursor-pointer animate-in"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <button
                  onClick={() =>
                    setOpenAccordion(
                      openAccordion === index + 3 ? -1 : index + 3,
                    )
                  }
                  className="w-full flex items-start justify-between"
                >
                  <h4 className="text-lg font-bold text-left">
                    {problem.title}
                  </h4>
                  <FaChevronDown
                    className={`flex-shrink-0 text-brand-red transition-transform duration-300 mt-1 ${
                      openAccordion === index + 3 ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openAccordion === index + 3 && (
                  <p className="mt-4 text-brand-white text-opacity-70 animate-slide-up">
                    {problem.solution}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
