
import { scrollToSection } from "../utils/navigation";

export default function TrialOutcome() {
  const outcomes = [
    "Recruiter Ready Resume",
    "PREP & STAR Frameworks",
    "Mock Interview Experience",
    "Group Discussion Practice",
    "Personalized Improvement Roadmap",
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-black relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-brand-blue opacity-10"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Gradient Card */}
          <div className="bg-gradient-to-br from-brand-red via-brand-black to-brand-blue p-1 rounded-2xl">
            <div className="bg-brand-black p-8 md:p-12 rounded-2xl">
              <h2 className="heading-section mb-4">By Day 7, You Will Have:</h2>

              {/* Outcomes Grid */}
              <div className="grid md:grid-cols-2 gap-6 my-12">
                {outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="text-lg font-semibold flex items-center justify-center gap-3 animate-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-2xl">✔</span>
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <p className="text-brand-white text-opacity-70 mb-8">
                Plus access to expert mentorship and a personalized action plan
                for your next phase.
              </p>

              {/* CTA */}
              <button 
                onClick={() => scrollToSection("pricing")}
                className="btn-primary text-lg">
                Start Your Free 7-Day Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
