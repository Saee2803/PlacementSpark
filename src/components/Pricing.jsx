import { useState } from "react";
import { FaCheck, FaStar, FaTrophy } from "react-icons/fa";
import PricingModal from "./PricingModal";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnroll = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  const paidPlans = [
    {
      id: "solo",
      name: "Solo Plan",
      price: "₹2250",
      pricePerStudent: null,
      savings: null,
      tagline: "For students joining individually",
      description: "Individual Mentorship & Placement Preparation",
      badge: null,
      displayFeatures: [
        "Resume Assistance",
        "ATS Screening Reports",
        "LinkedIn Optimization",
        "Mock Interviews",
        "Weekly Mentorship",
      ],
      allFeatures: [
        "Resume Assistance",
        "ATS Screening Reports",
        "LinkedIn Optimization",
        "Internship & Project Articulation",
        "Psychometric Assessment",
        "Group Discussion Practice",
        "Technical & HR Mock Interviews",
        "Weekly Check-ins",
        "Personalized Improvement Plan",
        "1 Month Free Extension",
      ],
      cta: "Enroll Solo",
      ctaStyle: "btn-primary",
      order: 1,
      theme: "blue",
    },
    {
      id: "buddy",
      name: "Buddy Plan",
      price: "₹2050",
      pricePerStudent: "/ Student",
      savings: "Save ₹200",
      tagline: "Join with 1–2 friends and save ₹200 each",
      description: "Learn Together With Accountability",
      badge: "Recommended",
      displayFeatures: [
        "Everything in Solo",
        "Buddy Accountability System",
        "Peer Resume Review",
        "Group Practice Activities",
        "Progress Tracking",
      ],
      allFeatures: [
        "Resume Assistance",
        "ATS Screening Reports",
        "LinkedIn Optimization",
        "Internship & Project Articulation",
        "Psychometric Assessment",
        "Everything in Solo Plan",
        "Buddy Accountability System",
        "Peer Resume Review Sessions",
        "Group Practice Activities",
        "Shared Learning Environment",
        "Progress Tracking",
        "Weekly Check-ins",
      ],
      cta: "Join With Buddy",
      ctaStyle: "btn-secondary",
      order: 2,
      theme: "blue",
    },
    {
      id: "squad",
      name: "Squad Plan",
      price: "₹1950",
      pricePerStudent: "/ Student",
      savings: "Save ₹300",
      tagline: "Join as a Squad of 4+ students and save ₹300 each",
      description: "Team-Based Success & Maximum Savings",
      badge: "Most Popular",
      displayFeatures: [
        "Everything in Buddy",
        "Squad-Based Learning",
        "Weekly Squad Discussions",
        "Group Mock Interviews",
        "Dedicated Squad Mentor",
      ],
      allFeatures: [
        "Resume Assistance",
        "ATS Screening Reports",
        "LinkedIn Optimization",
        "Internship & Project Articulation",
        "Psychometric Assessment",
        "Everything in Buddy Plan",
        "Squad-Based Learning",
        "Weekly Squad Discussions",
        "Group Mock Interviews",
        "Dedicated Squad Mentor",
        "Performance Reviews",
        "Placement Preparation Challenges",
        "Group Discussion Practice",
        "Technical & HR Mock Interviews",
      ],
      cta: "Build Your Squad",
      ctaStyle: "btn-red",
      order: 3,
      featured: true,
      theme: "red",
    },
  ];

  // Free Trial removed - replaced with 7-Day Risk-Free Guarantee

  const whyJoinPoints = [
    "Learn together and stay accountable",
    "Practice interviews and GDs more effectively",
    "Improve communication and confidence",
    "Build a strong placement network",
    "Save on program fees",
    "Stay motivated throughout the journey",
  ];

  return (
    <section
      id="pricing"
      className="py-12 sm:py-16 md:py-24 lg:py-32 2xl:py-40 bg-brand-white"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 2xl:mb-24 animate-in px-4 sm:px-0">
          <h2 className="heading-section text-brand-black mb-3 sm:mb-4 md:mb-5 2xl:mb-6">
            Choose Your Placement Success Plan
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-brand-black/70 max-w-3xl lg:max-w-4xl 2xl:max-w-5xl mx-auto leading-relaxed px-2">
            Whether you prefer individual mentorship or learning with friends, we have a plan designed for your success.
          </p>
        </div>

        {/* Risk-Free Guarantee Banner */}
<div className="mb-16 md:mb-20 lg:mb-24 2xl:mb-32 px-4 sm:px-0">
  <div className="max-w-5xl mx-auto bg-gradient-to-r from-green-50 via-white to-blue-50 border-2 border-brand-green rounded-2xl md:rounded-3xl p-8 md:p-10 lg:p-12 2xl:p-14 shadow-xl">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 lg:gap-10">
      
      {/* Icon */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-brand-green to-brand-blue rounded-full flex items-center justify-center shadow-lg shadow-brand-green/40">
          <span className="text-2xl md:text-3xl lg:text-4xl">🛡️</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-5">
          7-Day Risk-Free Guarantee
        </h3>

        <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:mb-5 lg:mb-6 leading-relaxed">
          Enroll today with confidence. Get full access to mentorship, mock
          interviews, roadmap sessions and placement preparation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 text-sm md:text-base lg:text-lg font-semibold text-gray-700">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="text-green-600 text-lg">💰</span>
            <span>100% Money Back</span>
          </div>

          <div className="flex items-center gap-2 justify-center md:justify-start">
            <span className="text-green-600 text-lg">⏱</span>
            <span>Refund within 3–5 business days</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        {/* Paid Plans Grid - Now 3 Plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6 2xl:gap-8 max-w-6xl mx-auto mb-16 md:mb-20 lg:mb-24 2xl:mb-32 px-4 sm:px-0">
          {paidPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative feature-card bg-gradient-to-br from-brand-card to-brand-black border-2 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-6 lg:p-8 2xl:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-in flex flex-col ${
                plan.featured
                  ? "border-brand-red md:scale-110 md:-my-8 shadow-2xl shadow-brand-red/40"
                  : "border-brand-blue/30 hover:border-brand-blue/60"
              }`}
              style={{ animationDelay: `${(plan.order - 1) * 0.1}s` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`${
                      plan.featured
                        ? "bg-gradient-to-r from-brand-red to-brand-yellow"
                        : "bg-brand-blue"
                    } text-${plan.featured ? "brand-black" : "white"} px-3 sm:px-4 md:px-5 lg:px-6 2xl:px-8 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base font-bold shadow-lg flex items-center gap-1.5`}
                  >
                    {plan.featured && <FaTrophy size={14} className="md:w-3 md:h-3" />}
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-xl sm:text-2xl md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-brand-white mb-2 md:mb-2 lg:mb-3 group-hover:text-brand-yellow transition-colors">
                {plan.name}
              </h3>

              {/* Tagline */}
              <p className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base text-brand-blue font-semibold mb-3 md:mb-3 lg:mb-4">
                {plan.tagline}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base text-brand-white/70 leading-relaxed mb-4 md:mb-4 lg:mb-5">
                {plan.description}
              </p>

              {/* Price & Savings */}
              <div className="mb-6 md:mb-5 lg:mb-6 2xl:mb-8">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-brand-yellow">
                    {plan.price}
                  </span>
                  {plan.pricePerStudent && (
                    <span className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base text-brand-white/60">
                      {plan.pricePerStudent}
                    </span>
                  )}
                </div>
                {plan.savings && (
                  <div className="inline-block bg-brand-green/20 border border-brand-green rounded-full px-3 py-1 text-xs font-semibold text-brand-green">
                    💰 {plan.savings}
                  </div>
                )}
              </div>

              {/* Features List */}
              <div className="space-y-2 md:space-y-1.5 lg:space-y-2 2xl:space-y-3 mb-4 md:mb-3 lg:mb-5 flex-grow">
                {plan.displayFeatures.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-2 md:gap-1.5 lg:gap-2">
                    <span className="text-brand-red font-bold mt-0.5 text-sm md:text-xs lg:text-sm 2xl:text-base flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-brand-white/80 text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* +N More Button */}
              {plan.allFeatures.length > plan.displayFeatures.length && (
                <button
                  onClick={() => handleEnroll(plan)}
                  className="text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base text-brand-yellow font-semibold hover:text-brand-yellow/80 transition-colors mb-4 md:mb-3 lg:mb-5"
                >
                  +{plan.allFeatures.length - plan.displayFeatures.length} More Benefits →
                </button>
              )}

              {/* CTA Button */}
              <button
                onClick={() => handleEnroll(plan)}
                className={`${plan.ctaStyle} w-full text-center py-3 sm:py-4 md:py-3 lg:py-4 2xl:py-5 font-semibold text-xs sm:text-sm md:text-xs lg:text-sm 2xl:text-base rounded-lg md:rounded-lg lg:rounded-xl 2xl:rounded-2xl transition-all duration-300 hover:shadow-lg`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Why Join With Friends Section */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-20 lg:mb-24 2xl:mb-32 px-4 sm:px-0">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 2xl:mb-16 animate-in">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-brand-black mb-3 sm:mb-4 md:mb-5 lg:mb-6 flex items-center justify-center gap-3">
              <FaStar className="text-brand-yellow text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
              Why Join With Friends?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 2xl:gap-10">
            {whyJoinPoints.map((point, idx) => (
              <div
                key={idx}
                className="feature-card bg-brand-card border-2 border-brand-blue/20 rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 2xl:p-10 hover:border-brand-blue/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="text-brand-blue text-xl sm:text-2xl md:text-3xl flex-shrink-0 mt-1">
                    <FaCheck />
                  </span>
                  <p className="text-brand-white text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-semibold">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Banner */}
        <div className="bg-gradient-to-r from-brand-red via-brand-red-dark to-brand-black rounded-2xl sm:rounded-3xl md:rounded-4xl p-6 sm:p-8 md:p-10 lg:p-12 2xl:p-16 text-center mb-8 md:mb-12 lg:mb-16 2xl:mb-20 border-2 border-brand-red/50 shadow-2xl shadow-brand-red/30 animate-in px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
              🚀 Ready to Transform Your{" "}
              <span className="text-brand-yellow">
                Placement Success?
              </span>
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Choose your plan today and start your journey with expert mentorship, personalized guidance, and proven placement strategies.
            </p>
            <a
              href="#pricing"
              className="inline-block btn-secondary px-6 sm:px-8 md:px-10 lg:px-12 2xl:px-14 py-3 sm:py-4 md:py-5 lg:py-6 2xl:py-7 text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-bold rounded-lg md:rounded-xl lg:rounded-2xl 2xl:rounded-3xl hover:shadow-2xl"
            >
              Get Started Now
            </a>
          </div>
        </div>

        
      </div>

      {/* Pricing Modal */}
      <PricingModal
        isOpen={isModalOpen}
        plan={selectedPlan}
        onClose={handleCloseModal}
      />
    </section>
  );
}
