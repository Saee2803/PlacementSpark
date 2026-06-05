import { FaPhone, FaRocket } from "react-icons/fa";
import { URLS } from "../config/urls";

export default function StickyMobileCTA() {
  const handleCallClick = () => {
    window.open(URLS.PHONE_CALL);
  };

  const handleApplyClick = () => {
    if (URLS.isPlaceholder(URLS.REGISTRATION_FORM)) {
      URLS.showConfigMessage();
      return;
    }
    window.open(URLS.REGISTRATION_FORM, "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-red to-brand-red-dark text-white shadow-2xl">
      <div className="flex gap-0 h-16">
        {/* Call Now Button */}
        <button
          onClick={handleCallClick}
          className="flex-1 flex items-center justify-center gap-2 font-bold text-lg hover:bg-brand-black hover:bg-opacity-10 transition-all"
        >
          <FaPhone size={20} />
          <span>Call Now</span>
        </button>

        {/* Divider */}
        <div className="w-px bg-white bg-opacity-20"></div>

        {/* Apply Now Button */}
        <button
          onClick={handleApplyClick}
          className="flex-1 flex items-center justify-center gap-2 font-bold text-lg hover:bg-brand-black hover:bg-opacity-10 transition-all"
        >
          <FaRocket size={20} />
          <span>Apply Now</span>
        </button>
      </div>
    </div>
  );
}