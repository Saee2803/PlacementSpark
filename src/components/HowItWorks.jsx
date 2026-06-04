import {
    FaCheckCircle,
    FaClipboardList,
    FaPencilAlt,
    FaVideo,
} from "react-icons/fa";
import { scrollToSection } from "../utils/navigation";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Enroll",
      description:
        "Fill the registration form and secure your spot in the upcoming batch.",
      icon: <FaClipboardList size={32} />,
    },
    {
      number: "2",
      title: "Attend Sessions",
      description: "Join live sessions, workshops, and mock interview rounds.",
      icon: <FaVideo size={32} />,
    },
    {
      number: "3",
      title: "Practice & Get Feedback",
      description:
        "Complete assignments and receive personalized feedback from mentors.",
      icon: <FaPencilAlt size={32} />,
    },
    {
      number: "4",
      title: "Improve & Apply",
      description: "Implement feedback and apply to companies with confidence.",
      icon: <FaCheckCircle size={32} />,
    },
  ];

  return (
    <section className="py-20 md:py-32 lg:py-40 2xl:py-48 bg-brand-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-blue opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24 2xl:mb-32 animate-in">
          <h2 className="heading-section mb-4 lg:mb-6 2xl:mb-8">
            Four Simple Steps To Get Started
          </h2>
          <p className="text-lg lg:text-xl 2xl:text-2xl text-brand-white text-opacity-70 max-w-3xl lg:max-w-4xl 2xl:max-w-5xl mx-auto">
            From enrollment to landing your dream job
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 2xl:gap-10 max-w-7xl lg:max-w-6xl 2xl:max-w-full mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connecting line - Desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 lg:top-28 2xl:top-32 -right-3 lg:-right-4 2xl:-right-5 w-6 lg:w-8 2xl:w-10 h-1 lg:h-1.5 2xl:h-2 bg-gradient-to-r from-brand-red to-brand-blue"></div>
              )}

              {/* Card */}
              <div className="feature-card relative z-10 h-full p-6 lg:p-7 2xl:p-8 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-6 lg:-top-7 2xl:-top-8 -right-6 lg:-right-7 2xl:-right-8 w-14 lg:w-16 2xl:w-20 h-14 lg:h-16 2xl:h-20 bg-brand-red rounded-full flex items-center justify-center font-bold text-2xl lg:text-3xl 2xl:text-4xl shadow-lg hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-brand-blue mb-5 lg:mb-6 2xl:mb-7 text-4xl lg:text-5xl 2xl:text-6xl">
                  {step.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-bold text-brand-white mb-3 lg:mb-4 2xl:mb-5">
                  {step.title}
                </h3>
                <p className="text-brand-white text-opacity-70 text-base lg:text-lg 2xl:text-xl leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 lg:mt-24 2xl:mt-32 animate-in">
          <button 
            onClick={() => scrollToSection("pricing")}
            className="btn-primary text-base lg:text-lg 2xl:text-xl py-3 lg:py-4 2xl:py-5 px-8 lg:px-12 2xl:px-16 font-semibold hover:shadow-lg">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
}
