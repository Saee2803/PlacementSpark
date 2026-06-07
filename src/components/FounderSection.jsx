import { FaLinkedin } from "react-icons/fa";

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="py-12 sm:py-16 md:py-24 lg:py-32 2xl:py-40 bg-brand-white overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 2xl:mb-24 animate-in px-4 sm:px-0">
          <h2 className="heading-section text-brand-black mb-3 sm:mb-4 lg:mb-5 2xl:mb-6">
            Meet The Founder
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-brand-black/70 max-w-2xl mx-auto px-2">
            Guided by industry expertise and real placement experience
          </p>
        </div>

        {/* Founder Card */}
        <div className="feature-card bg-gradient-to-br from-brand-card to-brand-black border-2 border-brand-blue/30 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-brand-blue/60 transition-all duration-300 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 2xl:gap-16 items-center p-4 sm:p-6 md:p-8 lg:p-12 2xl:p-16">
            
            {/* Image Section */}
            <div className="flex justify-center order-1 md:order-1">
              <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg 2xl:max-w-2xl">
                <img
                  src="/founder.jpg"
                  alt="Shashikant Patil"
                  className="w-full h-auto aspect-square object-cover rounded-2xl sm:rounded-3xl border-4 border-brand-blue/30 shadow-2xl shadow-blue-500/20"
                />

                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-brand-blue text-white px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm lg:text-base shadow-lg">
                  Co-Founder
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-2 md:order-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white mb-2 sm:mb-3 lg:mb-4">
                Shashikant Patil
              </h3>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-brand-blue font-semibold mb-4 sm:mb-6 lg:mb-8">
                Placement Mentor & Career Coach
              </p>

              <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-white/80 leading-relaxed mb-6 sm:mb-8 lg:mb-10">
                With years of experience in campus recruitment and professional
                development, Shashikant has helped 120+ students transform
                their career prospects. His structured mentorship program
                focuses on:
              </p>

              <ul className="space-y-3 sm:space-y-4 lg:space-y-5 mb-6 sm:mb-8 lg:mb-10">
                <li className="flex gap-2 sm:gap-3 text-sm sm:text-base md:text-lg lg:text-xl">
                  <span className="text-green-400 font-bold text-lg sm:text-xl lg:text-2xl flex-shrink-0">✓</span>
                  <span className="text-white/90">
                    <strong>Communication Skills</strong> – Master the art of
                    articulate expression
                  </span>
                </li>

                <li className="flex gap-2 sm:gap-3 text-sm sm:text-base md:text-lg lg:text-xl">
                  <span className="text-green-400 font-bold text-lg sm:text-xl lg:text-2xl flex-shrink-0">✓</span>
                  <span className="text-white/90">
                    <strong>Interview Confidence</strong> – Overcome anxiety
                    and interview jitters
                  </span>
                </li>

                <li className="flex gap-2 sm:gap-3 text-sm sm:text-base md:text-lg lg:text-xl">
                  <span className="text-green-400 font-bold text-lg sm:text-xl lg:text-2xl flex-shrink-0">✓</span>
                  <span className="text-white/90">
                    <strong>Placement Strategy</strong> – Navigate the
                    recruitment process effectively
                  </span>
                </li>

                <li className="flex gap-2 sm:gap-3 text-sm sm:text-base md:text-lg lg:text-xl">
                  <span className="text-green-400 font-bold text-lg sm:text-xl lg:text-2xl flex-shrink-0">✓</span>
                  <span className="text-white/90">
                    <strong>Career Growth</strong> – Build a sustainable,
                    successful career
                  </span>
                </li>
              </ul>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg"
              >
                <FaLinkedin size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}