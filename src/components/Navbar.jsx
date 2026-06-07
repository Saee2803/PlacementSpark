import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { scrollToSection } from "../utils/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Program", id: "program" },
    { label: "Curriculum", id: "curriculum" },
    { label: "Success Stories", id: "successstories" },
    { label: "Contact", id: "contact" },
  ];

  const handleSectionClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const handlePricingClick = () => {
    scrollToSection("pricing");
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-black/95 backdrop-blur-md shadow-lg shadow-brand-red/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 lg:h-24 2xl:h-28">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/Logo.png"
              alt="Placement Spark Logo"
              className="h-8 sm:h-10 md:h-12 lg:h-14 2xl:h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 2xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className="nav-link text-xs lg:text-sm 2xl:text-base font-medium whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button
              onClick={handlePricingClick}
              className="btn-primary text-xs md:text-xs lg:text-sm 2xl:text-base py-2 px-4 md:px-5 lg:py-3 lg:px-7 2xl:py-4 2xl:px-10 whitespace-nowrap"
            >
              Join The Program
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={handlePricingClick}
              className="btn-red text-xs px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-lg font-semibold"
            >
              Join
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-white hover:text-brand-red transition-colors text-xl"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 sm:pb-5 animate-fade-in border-t border-brand-white/10">
            <div className="flex flex-col space-y-2 sm:space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className="nav-link text-left py-2.5 sm:py-3 px-4 sm:px-5 text-sm sm:text-base hover:bg-brand-card rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-2 sm:pt-3 border-t border-brand-white/10">
                <button
                  onClick={handlePricingClick}
                  className="btn-primary w-full text-xs sm:text-sm py-2.5 sm:py-3"
                >
                  Explore Plans
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}