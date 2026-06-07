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
      <div className="flex gap-0 h-14 sm:h-16 md:h-16 lg:h-18">
        {/* Call Now Button */}
        <button
          onClick={handleCallClick}
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 font-bold text-xs sm:text-sm md:text-base lg:text-lg hover:bg-brand-black hover:bg-opacity-10 transition-all active:bg-opacity-20"
        >
          <FaPhone size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <span>Call Now</span>
        </button>

        {/* Divider */}
        <div className="w-px bg-white bg-opacity-20"></div>

        {/* Apply Now Button */}
        <button
          onClick={handleApplyClick}
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 font-bold text-xs sm:text-sm md:text-base lg:text-lg hover:bg-brand-black hover:bg-opacity-10 transition-all active:bg-opacity-20"
        >
          <FaRocket size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          <span>Apply Now</span>
        </button>
      </div>
    </div>
  );
}