import { useState, useCallback, useMemo } from "react";
import { FaCheckCircle, FaFilter } from "react-icons/fa";
import { URLS } from "../config/urls";
import { successStoriesData, filterOptions, getStoriesByCompany } from "../data/successStoriesData";
import StatisticsSection from "./StatisticsSection";
import SuccessStoriesCarousel from "./SuccessStoriesCarousel";

/**
 * SuccessStories Component
 * Premium placement showcase with:
 * - Animated statistics
 * - Interactive carousel (4/3/2/1 responsive)
 * - Company filtering
 * - Trust badges
 * - Performance optimized
 */
export default function SuccessStories() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Memoize filtered stories to prevent unnecessary re-renders
  const filteredStories = useMemo(() => {
    return getStoriesByCompany(activeFilter);
  }, [activeFilter]);

  const handleFilterChange = useCallback((filterId) => {
    setActiveFilter(filterId);
  }, []);

  return (
    <section
      id="successstories"
      className="py-16 md:py-24 lg:py-32 2xl:py-40 bg-brand-black relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red via-brand-black to-brand-blue opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 -right-40 w-80 h-80 bg-brand-red rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>

      <div className="container-custom relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 2xl:mb-24 animate-in">
          <h2 className="heading-section mb-4 lg:mb-6 2xl:mb-8">Success Stories 🚀</h2>
          <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl text-brand-white text-opacity-70 max-w-3xl lg:max-w-4xl 2xl:max-w-5xl mx-auto">
            Real students. Real transformations. Real job offers. Join our growing community of successful placements.
          </p>
        </div>

        {/* Statistics Section with Animated Counters */}
        <StatisticsSection />

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 lg:gap-4 mb-12 md:mb-16 lg:mb-20 2xl:mb-24">
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-brand-red bg-opacity-10 border border-brand-red border-opacity-30 mb-2 md:mb-0 basis-full sm:basis-auto justify-center sm:justify-start">
            <FaFilter className="text-brand-red text-sm" />
            <span className="text-xs md:text-sm font-semibold text-brand-red">Filter by Company</span>
          </div>

          <div className="w-full sm:w-auto flex flex-wrap justify-center gap-2 md:gap-3 basis-full sm:basis-auto">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleFilterChange(option.id)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                  activeFilter === option.id
                    ? "bg-gradient-to-r from-brand-red to-red-600 text-white shadow-lg shadow-red-500/50"
                    : "bg-brand-card border border-brand-red border-opacity-30 text-brand-white hover:border-brand-red hover:border-opacity-100 hover:shadow-lg hover:shadow-red-500/20"
                }`}
                aria-pressed={activeFilter === option.id}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Success Stories Carousel */}
        <div className="relative">
          <SuccessStoriesCarousel stories={filteredStories} />
        </div>

        {/* Trust Badge & Stats Summary */}
        <div className="mt-16 md:mt-20 lg:mt-24 2xl:mt-32 text-center border-t border-brand-white border-opacity-10 pt-12 md:pt-16 lg:pt-20 2xl:pt-24">
          <div className="max-w-3xl mx-auto mb-8 md:mb-10 lg:mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4 px-4 py-2 rounded-full bg-brand-yellow bg-opacity-10 border border-brand-yellow border-opacity-30">
              <FaCheckCircle className="text-brand-yellow" />
              <span className="text-sm md:text-base font-semibold text-brand-yellow">
                Verified Placements
              </span>
            </div>
            <p className="text-base md:text-lg lg:text-xl 2xl:text-2xl text-brand-white mt-4">
              Join <span className="text-brand-red font-bold">120+ students</span> who have transformed their careers and secured their dream placements.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8 md:mt-10 lg:mt-12">
            <button
              onClick={() => {
                if (URLS.isPlaceholder(URLS.REGISTRATION_FORM)) {
                  URLS.showConfigMessage();
                  return;
                }
                window.open(URLS.REGISTRATION_FORM, "_blank");
              }}
              className="btn-primary text-base md:text-lg lg:text-lg 2xl:text-xl py-3 md:py-4 lg:py-4 2xl:py-5 px-8 md:px-12 lg:px-14 2xl:px-16 font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
            >
              Be the Next Success Story
            </button>
            <p className="text-xs md:text-sm text-brand-white text-opacity-50 mt-4">
              ✓ Free initial consultation • ✓ Personalized mentorship • ✓ Real placement guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
