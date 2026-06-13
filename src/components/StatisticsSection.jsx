import { FaShieldAlt, FaStar, FaTrophy, FaCheckCircle } from "react-icons/fa";
import AnimatedCounter from "./AnimatedCounter";
import { statisticsConfig } from "../data/successStoriesData";

/**
 * StatisticsSection Component
 * Displays key metrics with animated counters and trust elements
 */
export default function StatisticsSection() {
  return (
    <div className="w-full mb-16 md:mb-20 lg:mb-24 2xl:mb-32">
      {/* Trust Badge */}
      <div className="text-center mb-10 lg:mb-14 2xl:mb-16">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-brand-red bg-opacity-10 border border-brand-red border-opacity-30">
          <FaCheckCircle className="text-brand-red" />
          <span className="text-sm md:text-base font-semibold text-brand-white">
            Real Students. Real Placements.
          </span>
        </div>
        <h3 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-brand-white mt-4">
          Every success story represents a student who{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-yellow">
            trusted PlacementSpark
          </span>
        </h3>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 2xl:gap-10 max-w-5xl mx-auto">
        {/* Students Nurtured */}
        <div className="bg-gradient-to-br from-brand-card to-brand-black border border-brand-red border-opacity-20 rounded-xl p-4 md:p-6 lg:p-8 2xl:p-10 backdrop-blur-sm hover:border-brand-red hover:border-opacity-100 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
          <div className="flex justify-center mb-3 lg:mb-4">
            <div className="p-2 md:p-3 rounded-lg bg-brand-red bg-opacity-20">
              <FaStar className="text-brand-red text-xl md:text-2xl lg:text-3xl" />
            </div>
          </div>
          <AnimatedCounter
            value={statisticsConfig.studentsNurtured.value}
            suffix={statisticsConfig.studentsNurtured.suffix}
            duration={statisticsConfig.studentsNurtured.duration}
            label={statisticsConfig.studentsNurtured.label}
          />
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-br from-brand-card to-brand-black border border-brand-red border-opacity-20 rounded-xl p-4 md:p-6 lg:p-8 2xl:p-10 backdrop-blur-sm hover:border-brand-red hover:border-opacity-100 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
          <div className="flex justify-center mb-3 lg:mb-4">
            <div className="p-2 md:p-3 rounded-lg bg-brand-yellow bg-opacity-20">
              <FaTrophy className="text-brand-yellow text-xl md:text-2xl lg:text-3xl" />
            </div>
          </div>
          <AnimatedCounter
            value={statisticsConfig.successStories.value}
            suffix={statisticsConfig.successStories.suffix}
            duration={statisticsConfig.successStories.duration}
            label={statisticsConfig.successStories.label}
          />
        </div>

        {/* Interview Success Rate */}
        <div className="bg-gradient-to-br from-brand-card to-brand-black border border-brand-red border-opacity-20 rounded-xl p-4 md:p-6 lg:p-8 2xl:p-10 backdrop-blur-sm hover:border-brand-red hover:border-opacity-100 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
          <div className="flex justify-center mb-3 lg:mb-4">
            <div className="p-2 md:p-3 rounded-lg bg-brand-blue bg-opacity-20">
              <FaCheckCircle className="text-brand-blue text-xl md:text-2xl lg:text-3xl" />
            </div>
          </div>
          <AnimatedCounter
            value={statisticsConfig.interviewSuccessRate.value}
            suffix={statisticsConfig.interviewSuccessRate.suffix}
            duration={statisticsConfig.interviewSuccessRate.duration}
            label={statisticsConfig.interviewSuccessRate.label}
          />
        </div>

        {/* Highest Package */}
        <div className="bg-gradient-to-br from-brand-card to-brand-black border border-brand-red border-opacity-20 rounded-xl p-4 md:p-6 lg:p-8 2xl:p-10 backdrop-blur-sm hover:border-brand-red hover:border-opacity-100 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20">
          <div className="flex justify-center mb-3 lg:mb-4">
            <div className="p-2 md:p-3 rounded-lg bg-brand-green bg-opacity-20">
              <FaShieldAlt className="text-brand-green text-xl md:text-2xl lg:text-3xl" />
            </div>
          </div>
          <AnimatedCounter
            value={statisticsConfig.highestPackage.value}
            suffix={statisticsConfig.highestPackage.suffix}
            duration={statisticsConfig.highestPackage.duration}
            label={statisticsConfig.highestPackage.label}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 lg:mt-14 2xl:mt-16 h-px bg-gradient-to-r from-transparent via-brand-red via-opacity-30 to-transparent"></div>
    </div>
  );
}
