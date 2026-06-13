import React from "react";
import { FaCheckCircle, FaQuoteLeft } from "react-icons/fa";

/**
 * PlacementStoryCard Component
 * Individual story card with student photo, company logo, testimonial
 * Optimized for performance with React.memo
 */
const PlacementStoryCard = React.memo(({ story }) => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-brand-card to-brand-black border border-brand-red border-opacity-30 rounded-xl overflow-hidden group hover:border-brand-red hover:border-opacity-100 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30">
      {/* Student Photo Section */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-b from-brand-red/20 to-brand-black">
        <img
          src={story.image}
          alt={story.studentPhotoAlt}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Photo overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

        {/* Placement Badge - Floating */}
        <div className="absolute top-4 right-4 bg-brand-red bg-opacity-95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 text-white text-xs md:text-sm font-bold shadow-lg">
          <FaCheckCircle className="text-sm" />
          <span>Placed</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-5 md:p-6 lg:p-7 flex flex-col">
        {/* Company Logo & Name */}
        <div className="mb-5 lg:mb-6">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={story.companyLogo}
              alt={story.company}
              loading="lazy"
              className="h-10 md:h-12 w-auto max-w-20 md:max-w-24 object-contain group-hover:brightness-125 transition-all duration-300"
            />
          </div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-brand-white mb-1">
            {story.name}
          </h3>
          <p className="text-xs md:text-sm text-brand-white text-opacity-50 font-medium">
            {story.branch}
          </p>
        </div>

        {/* Position & Package */}
        <div className="mb-5 lg:mb-6 pb-5 lg:pb-6 border-b border-brand-white border-opacity-10">
          <p className="text-sm md:text-base text-brand-yellow font-semibold mb-2">
            {story.position}
          </p>
          <p className="text-xl md:text-2xl font-bold text-brand-white">
            {story.package}
          </p>
          <p className="text-xs text-brand-white text-opacity-50 mt-1">
            Joined: {story.joinedMonth}
          </p>
        </div>

        {/* Testimonial */}
        <div className="flex-1 mb-5 lg:mb-6">
          <div className="flex items-start gap-2 mb-2">
            <FaQuoteLeft className="text-brand-red text-opacity-50 text-sm mt-1 flex-shrink-0" />
          </div>
          <p className="text-sm md:text-base text-brand-white text-opacity-75 italic leading-relaxed line-clamp-3">
            "{story.testimonial}"
          </p>
        </div>

        {/* Challenge to Achievement */}
        <div className="space-y-3 border-t border-brand-white border-opacity-10 pt-4">
          <div>
            <span className="text-xs font-bold text-brand-red uppercase tracking-wider block mb-1">
              Challenge
            </span>
            <p className="text-xs md:text-sm text-brand-white text-opacity-70">
              {story.challenge}
            </p>
          </div>
          <div>
            <span className="text-xs font-bold text-brand-yellow uppercase tracking-wider block mb-1">
              Transformation
            </span>
            <p className="text-xs md:text-sm text-brand-white font-medium">
              {story.transformation}
            </p>
          </div>
        </div>

        {/* Placement Badge Text */}
        <div className="mt-4 pt-4 border-t border-brand-white border-opacity-10">
          <p className="text-sm text-brand-yellow font-semibold">
            ✓ {story.placementBadge}
          </p>
        </div>
      </div>
    </div>
  );
});

PlacementStoryCard.displayName = "PlacementStoryCard";

export default PlacementStoryCard;
