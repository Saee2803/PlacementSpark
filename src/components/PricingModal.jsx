import { FaTimes, FaCheckCircle } from "react-icons/fa";
import { URLS } from "../config/urls";

export default function PricingModal({ isOpen, plan, onClose }) {
  if (!isOpen || !plan) return null;

  const handleApply = () => {
    const formUrl = URLS.getFormWithPlan(plan.name);
    
    // Check if URL is placeholder
    if (URLS.isPlaceholder(formUrl)) {
      URLS.showConfigMessage();
      return;
    }
    
    window.open(formUrl, "_blank");
    onClose();
  };

  // Use allFeatures if available, otherwise use features
  const features = plan.allFeatures || plan.features || [];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto py-8">
      <div className="bg-brand-card border-2 border-brand-red rounded-2xl max-w-3xl w-full max-h-fit">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-red border-opacity-30 sticky top-0 bg-brand-card">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-brand-white">{plan.name}</h2>
            {plan.tagline && (
              <p className="text-sm text-brand-blue mt-1">{plan.tagline}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-brand-white hover:text-brand-red transition-colors flex-shrink-0"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          {/* Price & Tagline */}
          <div className="mb-8">
            <div className="flex items-baseline gap-2 mb-3">
              <div className="text-5xl lg:text-6xl font-bold text-brand-yellow">
                {plan.price}
              </div>
              {plan.pricePerStudent && (
                <div className="text-lg text-brand-white/60">
                  {plan.pricePerStudent}
                </div>
              )}
            </div>
            {plan.savings && (
              <div className="inline-block bg-brand-green/20 border border-brand-green rounded-full px-3 py-1 text-sm font-semibold text-brand-green">
                💰 {plan.savings}
              </div>
            )}
          </div>

          {/* Description */}
          {plan.description && (
            <p className="text-brand-white/80 mb-6 text-base lg:text-lg">
              {plan.description}
            </p>
          )}

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl lg:text-2xl font-bold text-brand-white mb-4">✨ All Features Included:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-brand-green mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-brand-white/90 text-sm lg:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleApply}
            className="btn-primary w-full py-4 lg:py-5 text-lg lg:text-xl font-bold mb-4 hover:shadow-lg transition-all"
          >
            Enroll Now
          </button>

          {/* Money Back Guarantee */}
          <p className="text-center text-xs lg:text-sm text-brand-white/60 border-t border-brand-red/20 pt-4">
            ✅ <span className="text-brand-green font-semibold">Money-back guarantee:</span> Not satisfied in first 3 days? Full refund, no questions asked.
          </p>
        </div>
      </div>
    </div>
  );
}
