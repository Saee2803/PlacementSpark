import { FaLinkedin } from "react-icons/fa";

export default function FounderSection() {
  return (
    <section
      id="founder"
      className="py-20 md:py-28 lg:py-32 bg-brand-white overflow-hidden"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 animate-in">
          <h2 className="heading-section text-brand-black mb-4">
            Meet The Founder
          </h2>
          <p className="text-base lg:text-lg text-brand-black/70 max-w-2xl mx-auto">
            Guided by industry expertise and real placement experience
          </p>
        </div>

        {/* Founder Card */}
        <div className="feature-card bg-gradient-to-br from-brand-card to-brand-black border-2 border-brand-blue/30 rounded-3xl overflow-hidden hover:border-brand-blue/60 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-10 lg:gap-14 items-center p-6 md:p-8 lg:p-12">
            
            {/* Image Section */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  
                  src="/founder.jpg"
                  alt="Shashikant Patil"
                  className="
                    w-full
                    max-w-[320px]
                    sm:max-w-[400px]
                    md:max-w-[500px]
                    lg:max-w-[600px]
                    xl:max-w-[650px]
                    aspect-square
                    object-cover
                    rounded-3xl
                    border-4 border-brand-blue/30
                    shadow-2xl shadow-blue-500/20
                  "
                />

                <div className="absolute bottom-4 right-4 bg-brand-blue text-white px-5 py-2 rounded-full font-semibold text-sm lg:text-base shadow-lg">
                  Co-Founder
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                Shashikant Patil
              </h3>

              <p className="text-lg lg:text-2xl text-brand-blue font-semibold mb-6">
                Placement Mentor & Career Coach
              </p>

              <p className="text-base lg:text-xl text-white/80 leading-relaxed mb-8">
                With years of experience in campus recruitment and professional
                development, Shashikant has helped 120+ students transform
                their career prospects. His structured mentorship program
                focuses on:
              </p>

              <ul className="space-y-5 mb-10">
                <li className="flex gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <span className="text-white/90">
                    <strong>Communication Skills</strong> – Master the art of
                    articulate expression
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <span className="text-white/90">
                    <strong>Interview Confidence</strong> – Overcome anxiety
                    and interview jitters
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                  <span className="text-white/90">
                    <strong>Placement Strategy</strong> – Navigate the
                    recruitment process effectively
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-green-400 font-bold text-xl">✓</span>
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
                className="inline-flex items-center gap-3 bg-brand-blue hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <FaLinkedin size={22} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}