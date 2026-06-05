import { FaWhatsapp } from "react-icons/fa";
import { URLS } from "../config/urls";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    window.open(URLS.WHATSAPP_HELP, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="
        hidden md:flex
        fixed
        bottom-6 md:bottom-10 lg:bottom-12
        right-4 md:right-6
        z-50
        items-center gap-3
        bg-gradient-to-r
        from-green-500
        via-green-600
        to-brand-green-dark
        text-white
        px-5 py-3
        md:px-7 md:py-4
        lg:px-8 lg:py-4
        rounded-full
        shadow-xl
        hover:-translate-y-1
        hover:scale-105
        hover:shadow-green-500/30
        transition-all
        duration-300
        font-semibold
        text-sm md:text-base
        border border-white/10
        backdrop-blur-sm
      "
      title="Chat with us on WhatsApp"
      aria-label="Chat with mentor on WhatsApp"
    >
      <FaWhatsapp className="text-xl md:text-2xl flex-shrink-0" />

      <span className="whitespace-nowrap">
        Chat With Mentor
      </span>
    </button>
  );
}