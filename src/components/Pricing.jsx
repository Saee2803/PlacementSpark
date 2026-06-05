
import { useState } from "react";
import PricingModal from "./PricingModal";
import { URLS } from "../config/urls";

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

  const plans = [
    {
      name: "Starter",
      price: "₹499",
      duration: "Limited Time",
      badge: null,
      features: [
        "4 Key Modules",
        "Essential Sessions",
        "1 Mock Interview",
        "Group Discussions",
        "Quick Feedback",
        "Resource Library",
        "Email Support",
        "Self-paced Learning",
      ],
      cta: "Enroll Now",
      ctaStyle: "btn-outline",
    },
    {
      name: "Placement Ready",
      price: "₹999",
      duration: "Flexible",
      badge: null,
      features: [
        "5 Core Modules",
        "Pre-recorded Sessions",
        "2 Mock Interviews",
        "Weekly Group Sessions",
        "Group Discussions",
        "Feedback & Guidance",
        "Resource Access",
        "Community Support",
      ],
      cta: "Enroll Now",
      ctaStyle: "btn-secondary",
    },
    {
      name: "Premium Mentorship",
      price: "₹1499",
      duration: "5 Weeks",
      badge: "Most Popular",
      features: [
        "6 Comprehensive Modules",
        "Weekly Live Sessions",
        "3 Mock Interviews",
        "Personalized Feedback",
        "Group Discussion Practice",
        "Technical Interview Prep",
        "Lifetime Resource Access",
        "Email Support",
      ],
      cta: "Enroll Now",
      ctaStyle: "btn-primary",
    },
    {
      name: "Free Trial",
      price: "₹0",
      duration: "7 Days",
      badge: "Try First",
      features: [
        "Orientation & Assessment",
        "Resume Workshop",
        "Communication Basics",
        "Technical Q&A Drill",
        "Mock HR Interview",
        "Group Discussion Practice",
        "Review & Roadmap",
      ],
      cta: "Start Free Trial",
      ctaStyle: "btn-red",
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 2xl:py-40 bg-brand-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 2xl:mb-24 animate-in">
          <h2 className="heading-section text-brand-black mb-3 lg:mb-5 2xl:mb-7">
            Pricing Plans
          </h2>
          <p className="text-base lg:text-lg 2xl:text-xl text-brand-black text-opacity-70 max-w-3xl lg:max-w-4xl 2xl:max-w-5xl mx-auto leading-relaxed">
            Select the plan that fits your placement preparation needs. All plans include premium mentorship and lifetime access.
          </p>
        </div>        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 2xl:gap-8 max-w-7xl lg:max-w-6xl 2xl:max-w-7xl mx-auto mt-12 lg:mt-16 2xl:mt-24">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative feature-card bg-brand-card rounded-2xl lg:rounded-3xl 2xl:rounded-4xl p-8 lg:p-10 2xl:p-12 border-2 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 animate-in cursor-pointer group ${
                index === 2
                  ? "border-brand-red md:scale-105 md:col-span-1 lg:-mt-4"
                  : "border-brand-white border-opacity-10 hover:border-opacity-30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-brand-red to-brand-yellow text-brand-black px-4 lg:px-6 2xl:px-8 py-2 lg:py-2.5 2xl:py-3 rounded-full text-xs lg:text-sm 2xl:text-base font-bold shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold text-brand-white mb-2 lg:mb-3 2xl:mb-4 group-hover:text-brand-yellow transition-colors">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-8 lg:mb-10 2xl:mb-12">
                <div className="text-4xl lg:text-5xl 2xl:text-6xl font-bold text-brand-yellow">
                  {plan.price}
                </div>
                <div className="text-sm lg:text-base 2xl:text-lg text-brand-white text-opacity-60">
                  {plan.duration}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 lg:space-y-4 2xl:space-y-5 mb-10 lg:mb-12 2xl:mb-14">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3 lg:gap-4 2xl:gap-5">
                    <span className="text-brand-red font-bold mt-1 lg:mt-1.5 2xl:mt-2 text-lg lg:text-xl 2xl:text-2xl flex-shrink-0">✓</span>
                    <span className="text-brand-white text-opacity-80 text-sm lg:text-base 2xl:text-lg leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => handleEnroll(plan)}
                className={plan.ctaStyle + " w-full text-center py-3 lg:py-4 2xl:py-5 font-semibold lg:text-lg 2xl:text-xl rounded-lg lg:rounded-xl 2xl:rounded-2xl transition-all duration-300 hover:shadow-lg"}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-20 lg:mt-24 2xl:mt-32 animate-in">
          <p className="text-lg lg:text-xl 2xl:text-2xl text-brand-black text-opacity-80 mb-4 lg:mb-6 2xl:mb-8 font-semibold">
            <span className="text-brand-red">✓ Money-back guarantee:</span> Not satisfied in first 3 days? Full refund, no questions asked.
          </p>
          <p className="text-base lg:text-lg 2xl:text-xl text-brand-black text-opacity-70">
            Choose the plan that works for you. Upgrade or switch anytime.
          </p>
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
