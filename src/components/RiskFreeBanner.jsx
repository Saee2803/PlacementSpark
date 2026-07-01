import { FaShieldAlt } from "react-icons/fa";

export default function RiskFreeBanner() {
  return (
    <section className="py-12 md:py-16 lg:py-20 2xl:py-24 bg-gradient-to-r from-green-50 via-blue-50 to-green-50 border-y border-green-200">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8 2xl:gap-10 bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-green-200">

          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 lg:w-20 lg:h-20 2xl:w-24 2xl:h-24 bg-gradient-to-br from-brand-green to-brand-blue rounded-full flex items-center justify-center shadow-lg shadow-brand-green/30">
              <FaShieldAlt className="text-white text-3xl lg:text-4xl 2xl:text-5xl" />
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-gray-900 mb-3">
              7-Day Risk-Free Guarantee
            </h3>

            <p className="text-base lg:text-lg 2xl:text-xl text-gray-700 mb-2">
              Enroll today and get full access to our entire PlacementSpark
              program with complete confidence.
            </p>

            <p className="text-sm lg:text-base 2xl:text-lg text-gray-600">
              If you're not satisfied within the first 7 days, simply request a
              refund. We'll return <strong>100% of your money</strong> — no
              questions asked.
            </p>
          </div>

          {/* Badge */}
          <div className="flex-shrink-0">
            <div className="bg-gradient-to-r from-brand-green to-brand-blue px-6 lg:px-8 2xl:px-10 py-3 lg:py-4 rounded-full font-bold text-center whitespace-nowrap shadow-lg">
              <div className="text-base lg:text-lg font-bold text-white">
                100% Guaranteed
              </div>
              <div className="text-sm text-green-100">
                Money Back Guarantee
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}