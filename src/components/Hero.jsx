import { FaBullseye, FaFire, FaRocket } from "react-icons/fa";
import { scrollToSection } from "../utils/navigation";

import CountdownTimer from "./CountdownTimer";
import QRCodeDisplay from "./QRCodeDisplay";
import { URLS } from "../config/urls";

export default function Hero() {
  
  const handleJourneyClick = () => {
    if (URLS.isPlaceholder(URLS.REGISTRATION_FORM)) {
      URLS.showConfigMessage();
      return;
    }
    window.open(URLS.REGISTRATION_FORM, "_blank");
  };

  const handleCounsellingClick = () => {
    window.open(URLS.WHATSAPP_COUNSELLING, "_blank");
  };

  const uspPoints = [
    "Mock Interviews",
    "Placement Mentorship",
    "Chemical Engineering Focus",
    "Personal Mentorship",
    "Placement Roadmap"
  ];
  return (
    
    <section className="pt-24 pb-32 md:pb-32 lg:pt-32 2xl:pt-40 2xl:pb-32">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 xl:gap-14 2xl:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Countdown Timer - Live Updates */}
            <div className="mb-6 lg:mb-10 2xl:mb-12">
              <CountdownTimer />
            </div>

            {/* Main Headline */}
            <h1 className="heading-hero mb-5 lg:mb-7 2xl:mb-9 leading-tight">
              From Chemical Engineering Classroom to Corporate Industry —
              <span className="text-brand-red"> We Make It Possible.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl text-brand-white text-opacity-80 mb-6 lg:mb-8 2xl:mb-10 leading-relaxed max-w-2xl">
              If you don't prepare now, someone else will take your dream job.
            </p>

            {/* Strong USP Statement */}
            <div className="mb-8 lg:mb-10 2xl:mb-12 p-4 lg:p-6 2xl:p-8 bg-brand-yellow bg-opacity-10 border-l-4 border-brand-yellow rounded">
              <p className="text-base lg:text-lg 2xl:text-xl font-bold text-brand-yellow leading-relaxed">
                We don't sell courses. We build placement-ready engineers.
              </p>
            </div>

            {/* USP Points */}
            <div className="mb-8 lg:mb-12 2xl:mb-14 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-4 2xl:gap-5">
              {uspPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm lg:text-sm 2xl:text-base">
                  <span className="text-brand-green font-bold text-base lg:text-lg 2xl:text-xl flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-brand-white font-medium leading-snug">{point}</span>
                </div>
              ))}
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-3 gap-3 lg:gap-4 2xl:gap-6 mb-8 lg:mb-12 2xl:mb-14">
              <div className="stats-card">
                <div className="flex items-center space-x-2 mb-2 lg:mb-3 2xl:mb-4">
                  <FaRocket className="text-brand-red text-base lg:text-xl 2xl:text-2xl" />
                  <span className="text-xl lg:text-2xl 2xl:text-3xl font-bold">27+</span>
                </div>
                <p className="text-xs lg:text-sm 2xl:text-base font-semibold text-brand-red mb-1">
                  Success Stories
                </p>
                <p className="text-xs lg:text-xs 2xl:text-sm text-brand-white text-opacity-60">
                  Placed
                </p>
              </div>
              <div className="stats-card">
                <div className="flex items-center space-x-2 mb-2 lg:mb-3 2xl:mb-4">
                  <FaFire className="text-brand-yellow text-base lg:text-xl 2xl:text-2xl" />
                  <span className="text-xl lg:text-2xl 2xl:text-3xl font-bold">95%</span>
                </div>
                <p className="text-xs lg:text-sm 2xl:text-base font-semibold text-brand-yellow mb-1">
                  Success Rate
                </p>
                <p className="text-xs lg:text-xs 2xl:text-sm text-brand-white text-opacity-60">
                  Pass Rate
                </p>
              </div>
              <div className="stats-card">
                <div className="flex items-center space-x-2 mb-2 lg:mb-3 2xl:mb-4">
                  <FaBullseye className="text-brand-blue text-base lg:text-xl 2xl:text-2xl" />
                  <span className="text-xl lg:text-2xl 2xl:text-3xl font-bold">5 Wks</span>
                </div>
                <p className="text-xs lg:text-sm 2xl:text-base font-semibold text-brand-blue mb-1">
                  Program
                </p>
                <p className="text-xs lg:text-xs 2xl:text-sm text-brand-white text-opacity-60">
                  Journey
                </p>
              </div>
            </div>

            {/* Who Is This For - Badges */}
            <div className="mb-8 lg:mb-12 2xl:mb-14">
              <p className="text-xs lg:text-sm 2xl:text-base font-bold text-brand-white text-opacity-60 mb-3 lg:mb-4 2xl:mb-5 uppercase tracking-wider">
                Perfect For
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 2xl:gap-4">
                <div className="px-3 py-2 lg:px-4 lg:py-3 2xl:px-6 2xl:py-4 bg-brand-red bg-opacity-10 border border-brand-red border-opacity-30 rounded-lg text-center hover:border-opacity-60 transition-all">
                  <p className="text-xs lg:text-sm 2xl:text-base font-bold text-brand-white">2nd Yr</p>
                  <p className="text-xs 2xl:text-xs text-brand-white text-opacity-70">Early prep</p>
                </div>
                <div className="px-3 py-2 lg:px-4 lg:py-3 2xl:px-6 2xl:py-4 bg-brand-yellow bg-opacity-10 border border-brand-yellow border-opacity-30 rounded-lg text-center hover:border-opacity-60 transition-all">
                  <p className="text-xs lg:text-sm 2xl:text-base font-bold text-brand-white">3rd Yr</p>
                  <p className="text-xs 2xl:text-xs text-brand-white text-opacity-70">Interview ready</p>
                </div>
                <div className="px-3 py-2 lg:px-4 lg:py-3 2xl:px-6 2xl:py-4 bg-brand-blue bg-opacity-10 border border-brand-blue border-opacity-30 rounded-lg text-center hover:border-opacity-60 transition-all">
                  <p className="text-xs lg:text-sm 2xl:text-base font-bold text-brand-white">Final Yr</p>
                  <p className="text-xs 2xl:text-xs text-brand-white text-opacity-70">Last shot</p>
                </div>
                <div className="px-3 py-2 lg:px-4 lg:py-3 2xl:px-6 2xl:py-4 bg-brand-green bg-opacity-10 border border-brand-green border-opacity-30 rounded-lg text-center hover:border-opacity-60 transition-all">
                  <p className="text-xs lg:text-sm 2xl:text-base font-bold text-brand-white">Freshers</p>
                  <p className="text-xs 2xl:text-xs text-brand-white text-opacity-70">Upskill</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10 lg:gap-5 2xl:gap-6 lg:mb-12 2xl:mb-14">
              <button 
                onClick={handleJourneyClick}
                className="btn-primary-cta text-sm lg:text-base 2xl:text-lg py-2.5 px-6 lg:py-3 lg:px-8 2xl:py-4 2xl:px-10">
                Join Risk-Free Today
              </button>
              <button 
                onClick={handleCounsellingClick}
                className="btn-outline text-sm lg:text-base 2xl:text-lg py-2.5 px-6 lg:py-3 lg:px-8 2xl:py-4 2xl:px-10">
                Free Counselling Call
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col gap-2 mb-10 lg:mb-12 2xl:mb-14">
              <div className="flex items-center gap-2 text-xs lg:text-sm 2xl:text-base text-brand-white text-opacity-80">
                <span className="text-brand-green">🛡️</span>
                <span>7-Day Risk-Free Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm 2xl:text-base text-brand-white text-opacity-80">
                <span className="text-brand-green">💰</span>
                <span>100% Refund Available</span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm 2xl:text-base text-brand-white text-opacity-80">
                <span className="text-brand-green">⚡</span>
                <span>Refund Processed Within 3-5 Business Days</span>
              </div>
            </div>

            {/* Quote Card */}
            <div className="glass-effect p-4 lg:p-6 2xl:p-8 border-l-4 border-brand-yellow">
              <p className="text-xs md:text-sm lg:text-base 2xl:text-lg font-medium italic text-brand-white text-opacity-90 leading-relaxed">
                "Most chemical engineers don't get rejected because of knowledge — they get rejected because of interviews."
              </p>
            </div>
          </div>

          {/* Right Content - QR Code */}
          <div className="relative hidden md:block">
            <QRCodeDisplay />
          </div>
        </div>

       
      </div>
    </section>
  );
}
