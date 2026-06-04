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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-brand-card border-2 border-brand-red rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-red border-opacity-30">
          <h2 className="text-2xl font-bold text-brand-white">{plan.name}</h2>
          <button
            onClick={onClose}
            className="text-brand-white hover:text-brand-red transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Price */}
          <div className="mb-8">
            <div className="text-5xl font-bold text-brand-yellow mb-2">
              {plan.price}
            </div>
            <div className="text-lg text-brand-white text-opacity-80">
              {plan.duration}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brand-white mb-4">What's Included:</h3>
            <div className="space-y-3">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-brand-green mt-1 flex-shrink-0" />
                  <span className="text-brand-white text-opacity-90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleApply}
            className="btn-primary w-full py-3 text-lg font-bold"
          >
            Apply Now
          </button>

          {/* Money Back Guarantee */}
          <p className="text-center text-sm text-brand-white text-opacity-60 mt-4">
            💰 Money-back guarantee: Not satisfied in first 3 days? Full refund, no questions asked.
          </p>
        </div>
      </div>
    </div>
  );
}
