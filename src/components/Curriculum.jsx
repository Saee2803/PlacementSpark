import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Curriculum() {
  const [openModule, setOpenModule] = useState(0);

  const modules = [
    {
      title: "Module 01",
      name: "Resume & LinkedIn Preparation",
      description:
        "Craft a recruiter-friendly resume that gets past ATS systems and lands interviews.",
      details: [
        "ATS-optimized resume structure",
        "LinkedIn profile optimization",
        "Action verbs and metrics",
        "Portfolio building tips",
        "One-on-one resume review",
      ],
    },
    {
      title: "Module 02",
      name: "Communication Frameworks (PREP & STAR)",
      description:
        "Master proven frameworks to answer any interview question with confidence.",
      details: [
        "PREP framework for concise answers",
        "STAR method for behavioral questions",
        "Story structuring techniques",
        "Practice with real scenarios",
        "Confidence building exercises",
      ],
    },
    {
      title: "Module 03",
      name: "Technical Interview Preparation",
      description:
        "Solve problems, explain concepts, and showcase your technical knowledge effectively.",
      details: [
        "Common technical questions by role",
        "Problem-solving strategies",
        "System design basics",
        "Coding interview practice",
        "Technical communication skills",
      ],
    },
    {
      title: "Module 04",
      name: "Mock Interviews (HR + Technical)",
      description:
        "Experience real interview scenarios and get expert feedback.",
      details: [
        "3 full mock interview sessions",
        "HR round simulations",
        "Technical round assessments",
        "Detailed performance feedback",
        "Improvement recommendations",
      ],
    },
    {
      title: "Module 05",
      name: "Group Discussions & Case Practice",
      description: "Turn GDs from intimidating to your competitive advantage.",
      details: [
        "GD dos and don'ts",
        "Leadership and participation tactics",
        "Case study solving methods",
        "Live GD practice sessions",
        "Peer feedback opportunities",
      ],
    },
    {
      title: "Module 06",
      name: "Feedback & Improvement Roadmap",
      description: "Get personalized guidance for continuous improvement.",
      details: [
        "Performance analysis",
        "Strength identification",
        "Area for improvement highlighting",
        " 30-day action plan",
        "Ongoing support and mentorship",
      ],
    },
  ];

  return (
    <section
      id="curriculum"
      className="py-20 md:py-32 lg:py-40 2xl:py-48 bg-brand-black relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24 2xl:mb-32 animate-in">
          <h2 className="heading-section mb-4 lg:mb-6 2xl:mb-8">6 Modules. One Clear Path.</h2>
          <p className="text-lg lg:text-xl 2xl:text-2xl text-brand-white text-opacity-70 max-w-3xl lg:max-w-4xl 2xl:max-w-5xl mx-auto">
            Complete placement readiness through structured learning and expert mentorship
          </p>
        </div>

        {/* Modules Accordion */}
        <div className="max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto space-y-4 lg:space-y-5 2xl:space-y-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="feature-card cursor-pointer animate-in hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setOpenModule(openModule === index ? -1 : index)}
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 lg:p-8 2xl:p-10">
                <div className="flex-1 pr-4">
                  <h3 className="text-sm lg:text-base 2xl:text-lg font-bold text-brand-blue mb-1 lg:mb-2 uppercase tracking-wide">
                    {module.title}
                  </h3>
                  <h4 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-brand-white leading-tight">
                    {module.name}
                  </h4>
                </div>
                <FaChevronDown
                  className={`flex-shrink-0 text-brand-red transition-transform duration-300 mt-2 ${
                    openModule === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </div>

              <p className="text-brand-white text-opacity-70 px-6 lg:px-8 2xl:px-10 text-base lg:text-lg 2xl:text-xl">
                {module.description}
              </p>

              {/* Details */}
              {openModule === index && (
                <div className="mt-6 lg:mt-8 2xl:mt-10 px-6 lg:px-8 2xl:px-10 pb-6 lg:pb-8 2xl:pb-10 border-t border-brand-white border-opacity-10 animate-slide-up">
                  <p className="text-sm lg:text-base 2xl:text-lg font-bold text-brand-yellow mb-4 lg:mb-5 2xl:mb-6">
                    What's Included:
                  </p>
                  <ul className="space-y-3 lg:space-y-4 2xl:space-y-5">
                    {module.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start text-brand-white text-opacity-80 text-base lg:text-lg 2xl:text-xl leading-relaxed"
                      >
                        <span className="text-brand-red mr-3 lg:mr-4 2xl:mr-5 flex-shrink-0 font-bold">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
