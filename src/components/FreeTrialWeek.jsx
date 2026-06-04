
import { scrollToSection } from "../utils/navigation";

export default function FreeTrialWeek() {

  const days = [
    {
      day: "Day 1",
      title: "Orientation & Assessment",
      description:
        "Get to know the program structure and understand your starting point.",
    },
    {
      day: "Day 2",
      title: "Resume Workshop",
      description: "Learn resume building techniques and get yours reviewed.",
    },
    {
      day: "Day 3",
      title: "Communication Basics",
      description: "Master the PREP framework for confident answers.",
    },
    {
      day: "Day 4",
      title: "Technical Q&A Drill",
      description: "Brush up technical fundamentals with guided practice.",
    },
    {
      day: "Day 5",
      title: "Mock HR Interview",
      description:
        "Experience a real HR interview and get personalized feedback.",
    },
    {
      day: "Day 6",
      title: "Group Discussion Practice",
      description: "Participate in live GD sessions and learn strategies.",
    },
    {
      day: "Day 7",
      title: "Review & Roadmap",
      description: "Get your personalized improvement plan for the next phase.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-in">
          <h2 className="heading-section text-brand-black mb-4">
            Your First 7 Days — Free
          </h2>
          <p className="text-lg text-brand-black text-opacity-70">
            Experience the complete Placement Spark program at zero cost
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {days.map((day, index) => (
              <div
                key={index}
                className="feature-card bg-brand-card border-brand-red border-opacity-30 animate-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-brand-yellow font-bold mb-2">
                  {day.day}
                </div>
                <h3 className="text-xl font-bold text-brand-white mb-2">
                  {day.title}
                </h3>
                <p className="text-brand-white text-opacity-70">
                  {day.description}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Timeline View */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-brand-red to-brand-blue"></div>

              {/* Timeline items */}
              <div className="grid grid-cols-7 gap-2">
                {days.map((day, index) => (
                  <div
                    key={index}
                    className="animate-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Node */}
                    <div className="relative mb-8">
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-brand-red rounded-full border-4 border-brand-white z-10 flex items-center justify-center">
                        <span className="text-brand-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="feature-card bg-brand-card border-brand-red border-opacity-20 h-full">
                      <p className="text-sm font-bold text-brand-red mb-2">
                        {day.day}
                      </p>
                      <h4 className="text-lg font-bold text-brand-white mb-2">
                        {day.title}
                      </h4>
                      <p className="text-sm text-brand-white text-opacity-60">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-in">
          <p className="text-lg text-brand-black text-opacity-70 mb-6">
            No credit card required. Free access. Genuine learning.
          </p>
          <button 
            onClick={() => scrollToSection("pricing")}
            className="btn-primary">
            Start Your Free 7-Day Trial
          </button>
        </div>
      </div>
    </section>
  );
}
