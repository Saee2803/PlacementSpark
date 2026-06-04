import { FaCheckCircle, FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect } from "react";
import { URLS } from "../config/urls";

export default function RegistrationSuccess() {
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="feature-card bg-brand-card border-2 border-brand-green p-8 md:p-12 text-center animate-in">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-green blur-lg opacity-50 animate-pulse"></div>
              <FaCheckCircle className="relative text-brand-green text-8xl" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="heading-section text-brand-white mb-4">
            🎉 Registration Successful!
          </h1>

          {/* Message */}
          <p className="text-xl text-brand-white text-opacity-80 mb-8">
            Welcome to the Placement Spark community! Your journey to landing your dream job starts now.
          </p>

          {/* Next Steps */}
          <div className="bg-brand-black bg-opacity-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-brand-yellow mb-6">Next Steps:</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-brand-white mb-1">
                    Join WhatsApp Community
                  </h3>
                  <p className="text-brand-white text-opacity-70">
                    Get daily tips, updates, and exam tips.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-brand-white mb-1">
                    Check Your Email
                  </h3>
                  <p className="text-brand-white text-opacity-70">
                    We've sent your program details and login credentials.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-red text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-brand-white mb-1">
                    Our team will contact you within 24 hours
                  </h3>
                  <p className="text-brand-white text-opacity-70">
                    We'll onboard you and answer all your questions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <button
              onClick={() => window.open(URLS.WHATSAPP_GROUP, "_blank")}
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              <FaWhatsapp size={20} />
              Join WhatsApp Group
            </button>
            <button
              onClick={() => window.open(URLS.LINKEDIN_PAGE, "_blank")}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              <FaLinkedin size={20} />
              Visit LinkedIn
            </button>
          </div>

          {/* Confirmation Message */}
          <p className="text-brand-white text-opacity-60 text-sm">
            Check your email for login details and batch schedule.
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-red mb-2">24hrs</div>
            <p className="text-brand-white text-opacity-70">
              Team will contact you
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-yellow mb-2">500+</div>
            <p className="text-brand-white text-opacity-70">
              Students transformed
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-blue mb-2">95%</div>
            <p className="text-brand-white text-opacity-70">
              Success rate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
