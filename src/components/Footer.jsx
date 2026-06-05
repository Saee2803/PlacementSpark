import {
    FaArrowUp,
    FaEnvelope,
    FaLinkedin,
    FaPhone,
    FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-black border-t border-brand-white border-opacity-10">
      {/* Main Footer Content */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 2xl:gap-10 mb-12">
          {/* Brand Column */}
          <div className="animate-in">
            <img
              src="/Logo.png"
              alt="Placement Spark"
              className="h-12 w-auto mb-4"
            />
            <p className="text-brand-white text-opacity-70 text-sm mb-4">
              <strong>Placement Spark</strong> — Discover Reality | Explore
              Infinity
            </p>
            <p className="text-brand-white text-opacity-60 text-xs leading-relaxed">
              A student-driven placement preparation initiative helping
              engineering students transition confidently from campus to
              corporate.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-in stagger-1">
            <h4 className="text-lg font-bold text-brand-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="nav-link text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#program" className="nav-link text-sm">
                  Program
                </a>
              </li>
              <li>
                <a href="#curriculum" className="nav-link text-sm">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#successstories" className="nav-link text-sm">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="animate-in stagger-3">
            <h4 className="text-lg font-bold text-brand-white mb-6">
              Programs
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#pricing" className="nav-link text-sm">
                  Starter Plan
                </a>
              </li>
              <li>
                <a href="#pricing" className="nav-link text-sm">
                  Placement Ready
                </a>
              </li>
              <li>
                <a href="#pricing" className="nav-link text-sm">
                  Premium Mentorship
                </a>
              </li>
              <li>
                <a href="#pricing" className="nav-link text-sm">
                  Free Trial
                </a>
              </li>
            </ul>
          </div>

          

          {/* Contact Info */}
          <div className="animate-in stagger-5">
            <h4 className="text-lg font-bold text-brand-white mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-brand-red mt-1 flex-shrink-0" />
                <a
                  href="mailto:Career.placementspark@gmail.com"
                  className="text-sm text-brand-white hover:text-brand-red transition-colors break-all"
                >
                  Career.placementspark@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <FaPhone className="text-brand-red mt-1 flex-shrink-0" />
                <div className="text-sm space-y-1">
                  <a
                    href="tel:+917057606291"
                    className="text-brand-white hover:text-brand-red transition-colors block"
                  >
                    +91 7057606291
                  </a>
                  <a
                    href="tel:+918793953155"
                    className="text-brand-white hover:text-brand-red transition-colors block"
                  >
                    +91 8793953155
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-white border-opacity-10 py-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://chat.whatsapp.com/KkCyg76GqpXIvoKIktmk3Q"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center text-brand-white transition-colors"
              title="WhatsApp Community"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://www.linkedin.com/posts/placement-spark_placementspark-chemicalengineering-freshersjobs-activity-7352289653548371971-rkc0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-brand-blue hover:bg-blue-600 flex items-center justify-center text-brand-white transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:Career.placementspark@gmail.com"
              className="w-10 h-10 rounded-full bg-brand-red hover:bg-red-500 flex items-center justify-center text-brand-white transition-colors"
              title="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <p className="text-sm text-brand-white text-opacity-60 text-center md:text-left">
              © 2026 Placement Spark. All Rights Reserved.
            </p>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-brand-red hover:bg-red-500 flex items-center justify-center text-brand-white transition-colors"
              title="Scroll to top"
            >
              <FaArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-brand-card border-t border-brand-white border-opacity-5 py-4">
        <div className="container-custom text-center text-xs text-brand-white text-opacity-40">
          Made with ❤️ by Placement Spark — Empowering Chemical Engineers for Industry Careers
        </div>
      </div>
    </footer>
  );
}
