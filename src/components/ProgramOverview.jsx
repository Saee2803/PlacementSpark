
import { scrollToSection } from "../utils/navigation";
import { URLS } from "../config/urls";

export default function ProgramOverview() {
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

  return (
    <section id="program" className="py-20 md:py-32 bg-brand-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-in">
            <h2 className="heading-section mb-6">
              A Complete Placement Preparation System
            </h2>

            <div className="space-y-6 mb-10">
              <div>
                <h3 className="text-2xl font-bold text-brand-red mb-3">
                  What You Get
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-lg">
                    <span className="text-brand-yellow font-bold mr-4">✓</span>
                    <span>
                      6 structured modules covering all aspects of placement
                      prep
                    </span>
                  </li>
                  <li className="flex items-start text-lg">
                    <span className="text-brand-yellow font-bold mr-4">✓</span>
                    <span>Weekly live sessions with placement experts</span>
                  </li>
                  <li className="flex items-start text-lg">
                    <span className="text-brand-yellow font-bold mr-4">✓</span>
                    <span>Real mock interviews (HR + Technical)</span>
                  </li>
                  <li className="flex items-start text-lg">
                    <span className="text-brand-yellow font-bold mr-4">✓</span>
                    <span>Group discussion practice sessions</span>
                  </li>
                  <li className="flex items-start text-lg">
                    <span className="text-brand-yellow font-bold mr-4">✓</span>
                    <span>Personalized feedback and improvement roadmap</span>
                  </li>
                  <li className="flex items-start text-lg">
                    <span className="text-brand-yellow font-bold mr-4">✓</span>
                    <span>Lifetime access to resources and recordings</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-blue mb-3">
                  Program Duration
                </h3>
                <p className="text-lg text-brand-white text-opacity-80">
                  <strong>5 Weeks of Intensive Training</strong> with flexible
                  scheduling to fit around your college and preparation
                  schedule.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brand-blue mb-3">
                  Who Should Join?
                </h3>
                <p className="text-lg text-brand-white text-opacity-80">
                  Final year students, fresh graduates, and anyone serious about
                  cracking placement interviews at top companies.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleJoinClick}
                className="btn-primary">
                Join The Program
              </button>
              <button 
                onClick={handleCounsellingClick}
                className="btn-outline">
                Book Free Counselling
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-in stagger-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-red opacity-20 blur-2xl rounded-2xl"></div>
              <img
                src="/Preparation_Platform.png"
                alt="Preparation Platform"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-brand-blue border-opacity-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
