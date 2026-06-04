import { FaLinkedin } from "react-icons/fa";

export default function FounderSection() {
  return (
    <section className="py-20 md:py-32 lg:py-40 2xl:py-48 bg-brand-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 2xl:mb-28 animate-in">
          <h2 className="heading-section text-brand-black mb-4 lg:mb-6 2xl:mb-8">
            Meet The Founder
          </h2>
          <p className="text-base lg:text-lg 2xl:text-xl text-brand-black text-opacity-70 max-w-2xl mx-auto">
            Guided by industry expertise and real placement experience
          </p>
        </div>

        {/* Founder Card */}
        <div className="w-full">
          <div className="feature-card bg-gradient-to-br from-brand-card to-brand-black border-2 border-brand-blue border-opacity-30 rounded-3xl overflow-hidden hover:border-opacity-60 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 2xl:gap-16 p-8 lg:p-10 2xl:p-12 items-center">
              {/* Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="https://via.placeholder.com/300x300?text=Shashikant+Patil"
                    alt="Shashikant Patil"
                    className="w-96 h-96 lg:w-[450px] lg:h-[450px] 2xl:w-[550px] 2xl:h-[550px] rounded-2xl lg:rounded-3xl object-cover border-4 border-brand-blue border-opacity-30 shadow-2xl shadow-brand-blue/30"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-brand-blue text-white px-4 lg:px-6 2xl:px-8 py-2 lg:py-3 2xl:py-4 rounded-full font-semibold text-sm lg:text-base 2xl:text-lg">
                    Co-Founder
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl lg:text-4xl 2xl:text-5xl font-bold text-brand-white mb-2 lg:mb-3 2xl:mb-4">
                  Shashikant Patil
                </h3>
                <p className="text-lg lg:text-xl 2xl:text-2xl text-brand-blue font-semibold mb-6 lg:mb-8 2xl:mb-10">
                  Placement Mentor & Career Coach
                </p>

                <p className="text-base lg:text-lg 2xl:text-xl text-brand-white text-opacity-80 mb-6 lg:mb-8 2xl:mb-10 leading-relaxed">
                  With years of experience in campus recruitment and
                  professional development, Shashikant has helped 120+ students
                  transform their career prospects. His structured mentorship
                  program focuses on:
                </p>

                <ul className="space-y-3 lg:space-y-4 2xl:space-y-5 mb-8 lg:mb-10 2xl:mb-12">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-green text-lg 2xl:text-xl mt-1">
                      ✓
                    </span>
                    <span className="text-brand-white text-opacity-80 text-sm lg:text-base 2xl:text-lg">
                      <strong className="text-brand-white">
                        Communication Skills
                      </strong>{" "}
                      - Master the art of articulate expression
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-green text-lg 2xl:text-xl mt-1">
                      ✓
                    </span>
                    <span className="text-brand-white text-opacity-80 text-sm lg:text-base 2xl:text-lg">
                      <strong className="text-brand-white">
                        Interview Confidence
                      </strong>{" "}
                      - Overcome anxiety and interview jitters
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-green text-lg 2xl:text-xl mt-1">
                      ✓
                    </span>
                    <span className="text-brand-white text-opacity-80 text-sm lg:text-base 2xl:text-lg">
                      <strong className="text-brand-white">
                        Placement Strategy
                      </strong>{" "}
                      - Navigate the recruitment process effectively
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-green text-lg 2xl:text-xl mt-1">
                      ✓
                    </span>
                    <span className="text-brand-white text-opacity-80 text-sm lg:text-base 2xl:text-lg">
                      <strong className="text-brand-white">
                        Career Growth
                      </strong>{" "}
                      - Build a sustainable, successful career
                    </span>
                  </li>
                </ul>

                {/* LinkedIn Button */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 lg:py-4 lg:px-8 2xl:py-4 2xl:px-10 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
                >
                  <FaLinkedin size={20} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
