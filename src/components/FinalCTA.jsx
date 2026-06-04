
import { scrollToSection } from "../utils/navigation";
import { URLS } from "../config/urls";

export default function FinalCTA() {
  const handleJoinClick = () => {
    if (URLS.isPlaceholder(URLS.REGISTRATION_FORM)) {
      URLS.showConfigMessage();
      return;
    }
    window.open(URLS.REGISTRATION_FORM, "_blank");
  };

  const handleCounsellingClick = () => {
    window.open(URLS.WHATSAPP_COUNSELLING, "_blank");
  };

  const highlights = [
    { icon: "✓", text: "No prior prep needed" },
    { icon: "✓", text: "Flexible online sessions" },
    { icon: "✓", text: "Expert mentorship" },
    { icon: "✓", text: "27+ Success Stories" },
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-black relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red via-brand-black to-brand-blue opacity-15"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-block mb-6 px-4 py-2 bg-brand-red bg-opacity-20 border border-brand-red rounded-full">
            <p className="text-sm font-bold text-brand-red animate-pulse">
              ⚠️ Seats Limited For Next Batch | Applications Closing Soon
            </p>
          </div>

          {/* Heading */}
          <h2 className="heading-section mb-4 animate-in">
            Start Your Placement Preparation Today.
          </h2>

          {/* Subheading */}
          <p className="text-2xl text-brand-white text-opacity-80 mb-12 animate-in stagger-1">
            Every day you wait is a day your competition gets ahead.
          </p>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-4 p-4 glass-effect animate-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <span className="text-2xl text-brand-red">
                  {highlight.icon}
                </span>
                <span className="text-lg font-semibold text-brand-white">
                  {highlight.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-in stagger-4">
            <button 
              onClick={handleJoinClick}
              className="btn-primary text-lg">
              Join The Program
            </button>
            <button 
              onClick={handleCounsellingClick}
              className="btn-secondary text-lg">
              Book Free Counselling
            </button>
          </div>

          {/* Trust Statement */}
          <div className="glass-effect p-8 border-l-4 border-brand-yellow">
            <p className="text-brand-white text-opacity-90">
              <strong>Still not sure?</strong> Join 500+ students who
              transformed their placement journey. Our guarantee: You'll see
              measurable improvement in 7 days or we'll guide you personally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
