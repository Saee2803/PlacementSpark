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
    "About",
    "Program",
    "Curriculum",
    "Testimonials",
    "Contact",
  ];

  const handleSectionClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const handlePricingClick = () => {
    scrollToSection("pricing");
    setIsOpen(false);
  };;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-black bg-opacity-95 backdrop-blur-md shadow-lg shadow-brand-red/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 lg:h-24 2xl:h-28">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/Logo.png"
              alt="Placement Spark Logo"
              className="h-10 md:h-12 lg:h-14 2xl:h-16 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 2xl:space-x-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleSectionClick(item.toLowerCase())}
                className="nav-link text-xs lg:text-sm 2xl:text-base font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <button 
              onClick={handlePricingClick}
              className="btn-primary text-xs lg:text-sm 2xl:text-base py-2 px-6 lg:py-3 lg:px-8 2xl:py-3 2xl:px-10">
              Join The Program
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-white hover:text-brand-red transition-colors"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleSectionClick(item.toLowerCase())}
                  className="nav-link text-left py-2 px-4 hover:bg-brand-card rounded-lg"
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={handlePricingClick}
                className="btn-primary w-full text-sm">
                Join The Program
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
